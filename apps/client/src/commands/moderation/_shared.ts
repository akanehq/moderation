import {
  ApplicationCommandOptionType,
  ButtonBuilder,
  ButtonStyle,
} from 'discord.js';
import { ParameterDecoratorEx } from 'discordx';

import { Option } from '~/helpers/localization';
import RegExpEvent from '~/helpers/regexp-event';

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
