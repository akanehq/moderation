import 'reflect-metadata';

import {
  Slash,
  SlashGroup,
  SlashOption,
  type ClassDecoratorEx,
  type MethodDecoratorEx,
  type ParameterDecoratorEx,
  type SlashOptionOptions,
  type VerifyName,
} from 'discordx';
import type { Interaction, LocaleString, LocalizationMap } from 'discord.js';
import type { O, S } from 'ts-toolbelt';
import type { LocalizedString } from 'typesafe-i18n';

import L from '../locales/i18n-node';
import { baseLocale, loadedLocales } from '../locales/i18n-util';
import type { Locales, TranslationFunctions } from '../locales/i18n-types';

const SLASH_NS = 'SLASH';
const KEY_PATH_SEPARATOR = '.';

/** @internal Return a union of all possible paths from the given object into as a array of keys. */
type ObjectPath<T> = T extends object
  ? {
      [K in keyof T]: [K, ...ObjectPath<T[K]>];
    }[keyof T]
  : [];

/** @internal A union type of all possible values for the `SLASH` namespace. */
type ResolvableLocalizationPath = S.Join<
  ObjectPath<O.Replace<TranslationFunctions[typeof SLASH_NS], any, string>>,
  typeof KEY_PATH_SEPARATOR
>;

/** @internal Helper function to check if a value is nullish. */
function isNullish<T>(value?: T | null): boolean {
  return value === undefined ?? value === null ?? value === '' ?? !value;
}

/**
 * Executes a localization function and returns the localized string.
 * @throws If the path is pointing to an invalid localization key.
 * @throws If the locale is not a function or have more than 0 arguments.
 */
function resolveLocalizationPath(
  path: ResolvableLocalizationPath,
  locale = baseLocale
): LocalizedString {
  const localizedStringParts: unknown = path
    .split(KEY_PATH_SEPARATOR)
    // @ts-expect-error This is a valid use of `reduce`.
    .reduce((prev, curr) => prev[curr], L[locale][SLASH_NS]);

  if (typeof localizedStringParts === 'undefined') {
    throw new Error(
      `Invalid localization path "${path}" for locale "${locale}".`
    );
  }

  if (typeof localizedStringParts !== 'function') {
    throw new Error(
      `Localization key "${path}" for locale "${locale}" is not a function.`
    );
  }

  return localizedStringParts();
}

/**
 * Gets the localization map for a given localization key.
 * @returns A discord.js localization map for the given path.
 * @throws If there are no localizations for the given path (probably because all are nullish).
 */
export function getLocalizationMapFrom(path: ResolvableLocalizationPath) {
  const localizationMap: LocalizationMap = {};

  for (const locale of Object.keys(loadedLocales)) {
    localizationMap[locale as LocaleString] = resolveLocalizationPath(
      path,
      locale as Locales
    );
  }

  for (const localization of Object.keys(localizationMap)) {
    if (isNullish(localization)) {
      delete localizationMap[localization as LocaleString];
    }
  }

  if (Object.keys(localizationMap).length === 0) {
    throw new Error(`No localizations found for path: ${path}`);
  }

  return localizationMap;
}

/** Gets the preferred locale for a given interaction. */
export function getPreferredLocale(interaction: Interaction) {
  if (Object.keys(loadedLocales).includes(interaction.locale)) {
    return interaction.locale as unknown as Locales;
  }

  if (
    interaction.inGuild() &&
    Object.keys(loadedLocales).includes(interaction.guildLocale)
  ) {
    return interaction.guildLocale as unknown as Locales;
  }

  return baseLocale as Locales;
}

/** Gets the translations object for a given interaction. */
export function getLanguage(interaction: Interaction) {
  return L[getPreferredLocale(interaction)];
}

/** @internal Typing for `resolveSharedNameAndDescription`'s returns. */
type SharedNameAndDescription = {
  description: string;
  nameLocalizations: LocalizationMap;
  descriptionLocalizations: LocalizationMap;
};

/** @internal Alias for translating `description`, `nameLocalizations` and `descriptionLocalizations`. */
function resolveSharedNameAndDescription(
  name: ResolvableLocalizationPath,
  description: ResolvableLocalizationPath
): SharedNameAndDescription {
  return {
    description: resolveLocalizationPath(description),
    nameLocalizations: getLocalizationMapFrom(name),
    descriptionLocalizations: getLocalizationMapFrom(description),
  };
}

function getDefaultNameAndDescription(
  target: Record<string, unknown>,
  key?: string,
  argumentIndex?: number
): BaseOptions {
  const path = (
    (target.name || target.constructor.name) +
    (key ? '_' + key : '') +
    (argumentIndex ? '_OPTION_' + argumentIndex : '')
  ).toUpperCase();

  return {
    name: `${path}_NAME` as ResolvableLocalizationPath,
    description: `${path}_DESCRIPTION` as ResolvableLocalizationPath,
  };
}

export interface BaseOptions {
  name: ResolvableLocalizationPath;
  description: ResolvableLocalizationPath;
}

/** Create a slash command with localization support. */
export function Command(options?: BaseOptions): MethodDecoratorEx {
  return (target, key, descriptor) => {
    if (!options) {
      options = getDefaultNameAndDescription(target, key);
    }

    const name = resolveLocalizationPath(options.name);
    const { nameLocalizations, descriptionLocalizations, description } =
      resolveSharedNameAndDescription(options.name, options.description);

    if (!name ?? !description) {
      throw new TypeError(
        `Slash command name and description must be a non-empty string. ` +
          `(Received path "${options.name}: ${name}" and "${options.description}: ${description}" respectively)`
      );
    }

    Slash({
      name,
      description,
      nameLocalizations,
      descriptionLocalizations,
    })(target, key, descriptor);
  };
}

/** @internal Omit naming fields from `SlashOptionOptions` like name, description, etc. */
type SlashOptionOptionsWithoutNamingFields = Omit<
  SlashOptionOptions<string, string>,
  'description' | 'descriptionLocalizations' | 'name' | 'nameLocalizations'
>;

/** Creates an option for a slash command with localization. */
export function Option(
  options: Partial<BaseOptions> & SlashOptionOptionsWithoutNamingFields
): ParameterDecoratorEx {
  return (target, key, descriptor) => {
    if (!options.name ?? !options.description) {
      const { name, description } = getDefaultNameAndDescription(
        target,
        key,
        descriptor
      );

      options = Object.assign(options, {
        name: options.name ?? name,
        description: options.description ?? description,
      });
    }

    const name = resolveLocalizationPath(
      options.name as ResolvableLocalizationPath
    );

    const { nameLocalizations, descriptionLocalizations, description } =
      resolveSharedNameAndDescription(
        options.name as ResolvableLocalizationPath,
        options.description as ResolvableLocalizationPath
      );

    if (!name ?? !description) {
      throw new TypeError(
        `Slash command name and description must be a non-empty string. ` +
          `(Received path "${options.name}: ${name}" and "${options.description}: ${description}" respectively)`
      );
    }

    SlashOption({
      ...(options as SlashOptionOptions<string, string>),
      name,
      description,
      nameLocalizations,
      descriptionLocalizations,
    })(target, key, descriptor);
  };
}

/** Extra options for a group of slash commands. */
export type SlashCommandGroupOptions = {
  /** Root name of the group. */
  root?: VerifyName<string>;

  /** Assigns all the commands from the class to this group. */
  assignMethods?: boolean;
};

/** Creates a group of slash commands with localization. */
export function Group(
  options?: Partial<BaseOptions> & SlashCommandGroupOptions
): ClassDecoratorEx {
  return (target, key, descriptor) => {
    if (!options?.name ?? !options.description) {
      const TargetClass = target as new (...args: any[]) => any;

      const { name, description } = getDefaultNameAndDescription(
        new TargetClass()
      );

      options = Object.assign(options ?? {}, {
        name: options?.name ?? name,
        description: options?.description ?? description,
      });
    }

    const name = resolveLocalizationPath(
      options.name as ResolvableLocalizationPath
    );

    const { nameLocalizations, descriptionLocalizations, description } =
      resolveSharedNameAndDescription(
        options.name as ResolvableLocalizationPath,
        options.description as ResolvableLocalizationPath
      );

    if (!name ?? !description) {
      throw new TypeError(
        `Slash command name and description must be a non-empty string. ` +
          `(Received path "${options.name}: ${name}" and "${options.description}: ${description}" respectively)`
      );
    }

    if (options?.root) {
      SlashGroup(name, options.root);
    } else {
      SlashGroup({
        name,
        description,
        nameLocalizations,
        descriptionLocalizations,
      })(target, key, descriptor);
    }

    options.assignMethods ??= true;

    if (options.assignMethods) {
      SlashGroup(name)(target, key, descriptor);
    }
  };
}
