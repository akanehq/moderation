import { mergeTranslations } from '../../helpers';

export default mergeTranslations('SLASH', {
  CONFIG_NAME: 'config',
  CONFIG_DESCRIPTION: 'Config-related commands.',

  // Administration

  ADMINISTRATION_QUARANTINE_NAME: 'quarantine',
  ADMINISTRATION_QUARANTINE_DESCRIPTION: 'Puts the server in quarantine.',

  ADMINISTRATION_UNQUARANTINE_NAME: 'unquarantine',
  ADMINISTRATION_UNQUARANTINE_DESCRIPTION:
    'Removes the server from quarantine.',

  // Custom Voice

  CUSTOMVOICE_SETUP_OPTION_CHANNEL_NAME: 'channel',
  CUSTOMVOICE_SETUP_OPTION_CHANNEL_DESCRIPTION:
    'The voice channel you want to setup.',

  CUSTOMVOICE_SETUP_OPTION_CATEGORY_NAME: 'category',
  CUSTOMVOICE_SETUP_OPTION_CATEGORY_DESCRIPTION:
    'Category to create the voice channels.',

  CUSTOMVOICE_SETUP_OPTION_TEMPLATE_NAME: 'name',
  CUSTOMVOICE_SETUP_OPTION_TEMPLATE_DESCRIPTION:
    'The name of the voice channel you want to create.',

  // Moderation (Generic Options)

  MODERATION_GENERIC_OPTION_MEMBER_NAME: 'member',
  MODERATION_GENERIC_OPTION_MEMBER_DESCRIPTION:
    'The member you want to apply the punishment.',

  MODERATION_GENERIC_OPTION_REASON_NAME: 'reason',
  MODERATION_GENERIC_OPTION_REASON_DESCRIPTION:
    'The reason to apply the punishment.',

  MODERATION_GENERIC_OPTION_ATTACHMENTS_NAME: 'attachments',
  MODERATION_GENERIC_OPTION_ATTACHMENTS_DESCRIPTION:
    'The attachments (URLs) to apply the punishment.',

  MODERATION_GENERIC_OPTION_EXPIRES_AT_NAME: 'expires-at',
  MODERATION_GENERIC_OPTION_EXPIRES_AT_DESCRIPTION:
    'The date and time when the punishment should expire.',

  MODERATION_GENERIC_OPTION_DURATION_NAME: 'duration',
  MODERATION_GENERIC_OPTION_DURATION_DESCRIPTION:
    'How long the punishment should last.',

  MODERATION_GENERIC_OPTION_DELETE_DAYS_NAME: 'delete-messages',
  MODERATION_GENERIC_OPTION_DELETE_DAYS_DESCRIPTION:
    'The number of days to delete the messages (1-7).',

  MODERATION_GENERIC_OPTION_PUNISHMENT_ID_NAME: 'id',
  MODERATION_GENERIC_OPTION_PUNISHMENT_ID_DESCRIPTION:
    'The ID of the punishment you want to use.',

  MODERATION_GENERIC_OPTION_SILENT_NAME: 'silent',
  MODERATION_GENERIC_OPTION_SILENT_DESCRIPTION:
    'If the punishment should be executed silently (without message him the reason).',

  // Moderation

  MODERATION_NAME: 'mod',
  MODERATION_DESCRIPTION: 'Moderation-related commands.',

  MODERATION_BAN_NAME: 'ban',
  MODERATION_BAN_DESCRIPTION: 'Ban a member from the server.',

  MODERATION_KICK_NAME: 'kick',
  MODERATION_KICK_DESCRIPTION: 'Kick a member from the server.',

  MODERATION_LOGS_NAME: 'logs',
  MODERATION_LOGS_DESCRIPTION: 'View the moderation logs.',

  MODERATION_MUTE_NAME: 'mute',
  MODERATION_MUTE_DESCRIPTION: 'Mute a member from the server.',

  MODERATION_UNDO_NAME: 'undo',
  MODERATION_UNDO_DESCRIPTION: 'Undo a punishment.',

  MODERATION_WARN_NAME: 'warn',
  MODERATION_WARN_DESCRIPTION: 'Warn a member from the server.',
});
