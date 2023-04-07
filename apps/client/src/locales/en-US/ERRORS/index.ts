import { mergeTranslations } from '../../helpers';

export default mergeTranslations('ERRORS', {
  PAGINATION_TIMEOUT: 'Time is up.',

  // Guard / Guild

  GUARD_IN_GUILD_ONLY: 'This command can only be executed in a server.',

  GUARD_HAS_PERMISSIONS_USER:
    'You do not have permission to execute this command.',
  GUARD_HAS_PERMISSIONS_CLIENT:
    'I do not have permission to execute this command.',

  // Administration Quarantine

  ADMINISTRATION_QUARANTINE_ALREADY_QUARANTINED:
    'The server is already in quarantine. Maybe you meant to use the `unquarantine` command?',

  ADMINISTRATION_UNQUARANTINE_NOT_QUARANTINED:
    'The server is not in quarantine. Maybe you meant to use the `quarantine` command?',

  // Custom Voice

  CUSTOMVOICE_PARENT_ALREADY_CONFIGURED:
    'There is already a voice channel configured in this channel.',

  CUSTOMVOICE_PARENT_NOT_FOUND:
    'Could not find the parent voice channel. Please check if you typed it correctly and try again.',

  // Moderation (Generic)

  MODERATION_GENERIC_INVALID_MEDIA_URLS:
    'One or more media URLs are invalid. Please check if you typed them correctly and try again.',

  MODERATION_GENERIC_CANNOT_PUNISH_SELF:
    'Hey, you can not punish yourself! Everything okay?',

  MODERATION_GENERIC_CANNOT_PUNISH_BOT:
    'I can not be punished! I am a bot, not a human!',

  MODERATION_GENERIC_PUNISHMENT_NOT_FOUND:
    'Punishment not found. Check if the ID is correct.',

  // Moderation (Limitation/Create)

  MODERATION_LIMITATION_CREATE_ROLE_DOES_NOT_EXIST:
    'The role you are trying to create does not exist or I do not have permissions to view it.',

  MODERATION_LIMIT_CONFIG_CREATE_ALREADY_EXISTS:
    'Such a restriction already exists for this position. Maybe you want to edit the existing restriction? Select the "List Constraint" option from the previous menu and select the constraint you wish to edit.',

  // Moderation (Limitation/Delete)

  MODERATION_LIMIT_CONFIG_LIST_EMPTY: 'There are no limit settings defined.',
});
