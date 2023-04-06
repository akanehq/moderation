import {
  ApplicationCommandOptionType,
  ButtonBuilder,
  ButtonStyle,
} from 'discord.js';
import { ParameterDecoratorEx } from 'discordx';

import { Option } from '~/helpers/localization';
import RegExpEvent from '~/helpers/regexp-event';
import { TranslationFunctions } from '~/locales/i18n-types';

// Custom Buttons

export const AppealButton = new ButtonBuilder()
  .setStyle(ButtonStyle.Secondary)
  .setDisabled(true);

export const GetAttachmentButton = new ButtonBuilder()
  .setStyle(ButtonStyle.Primary)
  .setEmoji('👀');

// Custom Options

export const MemberOption = ExtendsOption({
  name: 'MODERATION_GENERIC_OPTION_MEMBER_NAME',
  description: 'MODERATION_GENERIC_OPTION_MEMBER_DESCRIPTION',
  type: ApplicationCommandOptionType.User,
  required: true,
});

export const ReasonOption = ExtendsOption({
  name: 'MODERATION_GENERIC_OPTION_REASON_NAME',
  description: 'MODERATION_GENERIC_OPTION_REASON_DESCRIPTION',
  type: ApplicationCommandOptionType.String,
  required: false,
  maxLength: 128,
});

export const AttachmentsOption = ExtendsOption({
  name: 'MODERATION_GENERIC_OPTION_ATTACHMENTS_NAME',
  description: 'MODERATION_GENERIC_OPTION_ATTACHMENTS_DESCRIPTION',
  type: ApplicationCommandOptionType.String,
  required: false,
});

export const ExpiresAtOption = ExtendsOption({
  name: 'MODERATION_GENERIC_OPTION_EXPIRES_AT_NAME',
  description: 'MODERATION_GENERIC_OPTION_EXPIRES_AT_DESCRIPTION',
  type: ApplicationCommandOptionType.String,
  required: false,
});

export const DurationOption = ExtendsOption({
  name: 'MODERATION_GENERIC_OPTION_DURATION_NAME',
  description: 'MODERATION_GENERIC_OPTION_DURATION_DESCRIPTION',
  type: ApplicationCommandOptionType.Number,
});

export const DeleteDaysOption = ExtendsOption({
  name: 'MODERATION_GENERIC_OPTION_DELETE_DAYS_NAME',
  description: 'MODERATION_GENERIC_OPTION_DELETE_DAYS_DESCRIPTION',
  type: ApplicationCommandOptionType.Number,
  minValue: 1,
  maxValue: 7,
});

export const PunishmentIdOption = ExtendsOption({
  name: 'MODERATION_GENERIC_OPTION_PUNISHMENT_ID_NAME',
  description: 'MODERATION_GENERIC_OPTION_PUNISHMENT_ID_DESCRIPTION',
  type: ApplicationCommandOptionType.Number,
  required: true,
});

export const SilentOption = ExtendsOption({
  name: 'MODERATION_GENERIC_OPTION_SILENT_NAME',
  description: 'MODERATION_GENERIC_OPTION_SILENT_DESCRIPTION',
  type: ApplicationCommandOptionType.Boolean,
  required: false,
});

/** @internal Extends the `Option` decorator with the given options. */
function ExtendsOption(
  options: Parameters<typeof Option>[0]
): () => ParameterDecoratorEx {
  return () => (target, propertyKey, parameterIndex) => {
    Option(options)(target, propertyKey, parameterIndex);
  };
}

// Custom RegExp Events

export type RegExpEvents = {
  /** When a member receives a punishment and needs to appeal it, this event is fired. */
  AppealPunishment: [punishmentId: string];

  /** Event for when a member needs to get the attachment(s) of a punishment. */
  GetAttachment: [punishmentId: string];
};

export const ModRegExpEvents = new RegExpEvent<RegExpEvents>('MOD');

export const ModAppealPunishmentRegExp =
  ModRegExpEvents.createRegExp('AppealPunishment');

export const ModGetAttachmentRegExp =
  ModRegExpEvents.createRegExp('GetAttachment');

/**
 * In order to prevent users from using malicious URLs, we only allow a few
 * sources to be used as media sources (images, videos, etc).
 */
export const ALLOWED_MEDIA_SOURCES = [
  'https://media.discordapp.net',
  'https://cdn.discordapp.com',
  'https://i.imgur.com',
  'https://i.redd.it',
  'https://i.ibb.co',
];

/** Check if the given URLs is allowed to be used as a media source. */
export function isAllowedMediaSources(urls: string[]) {
  return urls.some((url) =>
    ALLOWED_MEDIA_SOURCES.some((allowed) => url.startsWith(allowed))
  );
}

/** Parse the given input into an array of media URLs. */
export function parseMediaUrlsInput(input: Maybe<string>) {
  if (!input) return [];
  const urls = input.split(/ |,/).filter((url) => url.length > 0);

  if (!isAllowedMediaSources(urls)) {
    return new Error(
      'Some of the URLs you provided are not allowed to be used as media sources.'
    );
  }

  return urls;
}
