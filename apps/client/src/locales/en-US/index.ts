import dedent from 'ts-dedent';
import { RequiredParams } from 'typesafe-i18n';

import { mergeTranslations } from '../helpers';

export default mergeTranslations('*', {
  OPEN: 'Open',

  ACCEPT: 'Accept',
  DECLINE: 'Decline',

  ANY: 'Any',
  BANS: 'Bans',
  WARNS: 'Warns',
  KICKS: 'Kicks',
  MUTES: 'Mutes',

  CONTINUE: 'Continue',
  ATTACHMENTS: 'Attachments',

  TOTAL: 'Total',
  LAST_30_DAYS: 'Last 30 days',
  LAST_24_HOURS: 'Last 24 hours',
  X_INFRACTIONS: '{{ No infractions | 1 infraction | ?? infractions }}',

  // Inquirer Helper

  INQUIRER_CONFIRMATION_QUESTION: 'Are you sure?',
  INQUIRER_CONFIRMATION_YES: 'Yes',
  INQUIRER_CONFIRMATION_NO: 'No',

  // Pagination Helper

  PAGINATION_PREVIOUS: 'Previous',
  PAGINATION_NEXT: 'Next',

  PAGINATION_FIRST: 'First',
  PAGINATION_LAST: 'Last',

  PAGINATION_CLOSE: 'Close',

  // Administration (Quarantine)

  ADMINISTRATION_QUARANTINE_CANCELLED:
    'Command cancelled. The server was not put in quarantine.',

  ADMINISTRATION_QUARANTINE_SUCCESS:
    'The server was put in quarantine successfully. Use the `unquarantine` command to remove it.',

  ADMINISTRATION_UNQUARANTINE_SUCCESS:
    'The server was removed from quarantine successfully.',

  // Custom Voice

  CUSTOMVOICE_SUCCESS_SETUP: 'Custom voice channel set up successfully.',

  CUSTOMVOICE_SUCCESS_UPDATE_TEMPLATE:
    'Custom voice channel template updated successfully. You can use the `$USER` and `$COUNT` variables to create a dynamic name.',

  // Moderation (Generic)

  MODERATION_GENERIC_DEFAULT_REASON: 'No reason provided.',

  MODERATION_GENERIC_GET_ATTACHMENT_BUTTON_LABEL: 'View {0} attachment{{s}}',

  MODERATION_GENERIC_PUNISHMENT_SILENT_SUCCESS:
    'The member was punished successfully and was not notified.',

  MODERATION_GENERIC_APPEAL_FOOTER:
    'If you think this punishment was unjustified, you can appeal it by clicking the button below.',
  MODERATION_GENERIC_APPEAL_BUTTON_LABEL: 'Appeal',

  MODERATION_GENERIC_PUNISHMENT_SUCCESS:
    'The member was punished successfully and was notified via DM.',
  MODERATION_GENERIC_PUNISHMENT_SUCCESS_NO_DM:
    'The member was punished successfully, but could not be notified (maybe they have DMs disabled).',

  MODERATION_GENERIC_PUNISHMENT_EMBED_TITLE:
    '{kind|{Ban: ⚒️, Kick: 🚪, Mute: 🔇, Warn: ⚠️}} Você foi ${kind|{Ban: banned, Kick: kicked, Mute: muted, Warn: warned}} on {guild}',
  MODERATION_GENERIC_PUNISHMENT_EMBED_DESCRIPTION:
    'You were punished in {guild} by {author} for the following reason: {reason}',

  // Moderation (Logs)

  MODERATION_LOGS_NO_PUNISHMENTS:
    'There are no punishments to show for {member}.',

  MODERATION_LOGS_SELECT_MENU_PLACEHOLDER:
    'Select a punishment to view its details.',

  MODERATION_LOGS_INFRACTIONS_OF: 'Infractions of {member}',

  // Moderation (Undo)

  MODERATION_UNDO_SUCCESS: 'This punishment has been successfully undone.',

  // Moderation (Limitations)

  MODERATION_LIMITATION_KIND:
    '{0|{Any: Any, Ban: Ban, Kick: Kick, Mute: Mute, Warn: Warn}}',

  // Moderation (Limitations/Dashboard)

  MODERATION_LIMIT_CONFIG_TITLE: '🚏 Settings of Moderation Limitations',
  MODERATION_LIMIT_CONFIG_DESCRIPTION: dedent`
    With this feature, you can configure the number of punishments a moderator can apply in a given period of time.

    If the number of actions is exceeded, the moderator will be blocked from applying new punishments until the time limit is reached. It is very useful to prevent new moderators from abusing their position.
    \u200b
  `,

  MODERATION_LIMIT_CONFIG_ATTENTION: 'Be careful w/ permissions!',
  MODERATION_LIMIT_CONFIG_ATTENTION_DESCRIPTION:
    '**To use this feature correctly, the moderator must not have the permission in question** (for example, if you set the ban limit to 3/hour, the moderator must not have the permission to ban members), as I will be an intermediary who will apply the punishments.',

  MODERATION_LIMIT_CONFIG_SELECT_OPTION_CREATE_RESTRICTION: 'Create Limitation',
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_CREATE_RESTRICTION_DESCRIPTION:
    'Create a new limitation for a moderator.',

  MODERATION_LIMIT_CONFIG_SELECT_OPTION_DELETE_RESTRICTION: 'Delete Limitation',
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_DELETE_RESTRICTION_DESCRIPTION:
    'Delete a single limitation for a moderator.',

  MODERATION_LIMIT_CONFIG_SELECT_OPTION_LIST_RESTRICTIONS: 'List Limitations',
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_LIST_RESTRICTIONS_DESCRIPTION:
    'List all limitations registered in the server.',

  MODERATION_LIMIT_CONFIG_SELECT_OPTION_PURGE: 'Purge Limitations',
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_PURGE_DESCRIPTION:
    'Delete all limitations registered in the server.',

  // Moderation (Limitations/Create)

  MODERATION_LIMIT_CONFIG_CREATE_DESCRIPTION:
    'Limits the number of {0|{Any: all actions, Ban: bans, Kick: kicks, Mute: silences, Warn: warnings}} that a moderator can apply.',

  MODERATION_LIMIT_CONFIG_CREATE_WHICH_TYPE_OF_LIMITATION:
    'Which type of limitation do you want to create?',
  MODERATION_LIMIT_CONFIG_CREATE_WHICH_TYPE_OF_LIMITATION_PLACEHOLDER:
    'Select a type of limitation',

  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_TITLE: '🚏 Add Limitation',
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_QUESTION:
    'Click on the button below to add a new limitation for a role.',

  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_ROLE_ID_LABEL: 'Role ID',
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_AMOUNT_LABEL: 'Amount',
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_EXPIRES_IN_LABEL:
    'Expires in (seconds)',

  MODERATION_LIMIT_CONFIG_CREATE_SUCCESS:
    'The restriction was successfully added, it will apply to members with the role {role} every {amount} times they use the command, for {expiresIn} seconds.',

  // Moderation (Limitations/Delete)

  MODERATION_LIMIT_CONFIG_DELETE_PLACEHOLDER:
    'Select a limitation to delete it',
  MODERATION_LIMIT_CONFIG_DELETE_QUESTION:
    'Choose the limitation you want to delete below.',

  MODERATION_LIMIT_CONFIG_DELETE_CHOICE_LABEL:
    '{role} • {kind} • {amount} • {expiresIn}s',

  MODERATION_LIMIT_CONFIG_DELETE_CONFIRMATION:
    'Are you sure you want to delete this limitation for the role {role}?',

  MODERATION_LIMIT_CONFIG_DELETE_CANCELLED:
    'The deletion of the limitation was canceled. Nothing was deleted.',
  MODERATION_LIMIT_CONFIG_DELETE_SUCCESS:
    'This limitation was successfully deleted.',

  // Moderation (Limitations/Purge)

  MODERATION_LIMIT_CONFIG_PURGE_CONFIRMATION:
    'Are you sure you want to **DELETE ALL LIMITATIONS**? This action cannot be undone.',

  MODERATION_LIMIT_CONFIG_PURGE_CANCELED:
    'The deletion of all limitations was canceled. Nothing was deleted.',
  MODERATION_LIMIT_CONFIG_PURGE_SUCCESS:
    'All limitations were successfully deleted.',

  // Moderation (Limitations/List)

  MODERATION_LIMIT_CONFIG_LIST_TITLE: '🚏   Limitations',
  MODERATION_LIMIT_CONFIG_LIST_DESCRIPTION: dedent`
  The restriction type determines what action the moderator cannot take. For example, if you set the ban limit to 3/hour, the moderator will not be able to ban members.
    \u200b
  `,
  MODERATION_LIMIT_CONFIG_LIST_ITEM_FOOTER:
    'Position (ID) • Type • Quantity • Expires in (seconds)',

  MODERATION_LIMIT_CONFIG_LIST_ITEM:
    '{roleId} ** • ** {kind|{Any: Any Action, Ban: Ban, Kick: Kick, Mute: Mute, Warn: Warn}} ** • ** {amount} ** • ** {expiresIn}',

  // Moderation (Events/AppealPunishment)

  MODERATION_APPEAL_PUNISHMENT_MODAL_TITLE: '🚏 Appeal Punishment',

  MODERATION_APPEAL_PUNISHMENT_MODAL_QUESTION:
    'Are you sure you want to appeal the `{0}` punishment? If yes, click the button below and describe the reason for the appeal.',

  MODERATION_APPEAL_PUNISHMENT_MODAL_PLACEHOLDER:
    'Describe the reason for the appeal',

  MODERATION_APPEAL_PUNISHMENT_GUILD_MESSAGE:
    'Member {member} appealed the `{punishmentId}` punishment.',

  MODERATION_APPEAL_PUNISHMENT_INFORMATION_TITLE:
    '🚏 Appeal Punishment Information',

  MODERATION_APPEAL_PUNISHMENT_INFORMATION_DESCRIPTION: dedent`
    Member {member} has appealed \`{punishmentId}\` with the following reason:

    \`\`\`
    {reason}
    \`\`\`
  ` as RequiredParams<'reason' | 'member' | 'punishmentId'>,

  MODERATION_APPEAL_PUNISHMENT_INFORMATION_FOOTER:
    'To accept or decline, click on one of the buttons below.',

  MODERATION_APPEAL_PUNISHMENT_INFORMATION_SUCCESS:
    'The appeal was successfully created! Now just wait for a response from a server moderator.',
});
