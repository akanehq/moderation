// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type {
  BaseTranslation as BaseTranslationType,
  LocalizedString,
  RequiredParams,
} from 'typesafe-i18n';

export type BaseTranslation = BaseTranslationType & DisallowNamespaces;
export type BaseLocale = 'pt-BR';

export type Locales = 'en-US' | 'pt-BR';

export type Translation = RootTranslation & DisallowNamespaces;

export type Translations = RootTranslation & {
  ERRORS: NamespaceERRORSTranslation;
  SLASH: NamespaceSLASHTranslation;
};

type RootTranslation = {
  /**
   * Q​u​a​l​q​u​e​r
   */
  ANY: string;
  /**
   * B​a​n​i​m​e​n​t​o​s
   */
  BANS: string;
  /**
   * A​v​i​s​o​s
   */
  WARNS: string;
  /**
   * E​x​p​u​l​s​õ​e​s
   */
  KICKS: string;
  /**
   * S​i​l​e​n​c​i​a​m​e​n​t​o​s
   */
  MUTES: string;
  /**
   * C​o​n​t​i​n​u​a​r
   */
  CONTINUE: string;
  /**
   * A​n​e​x​o​s
   */
  ATTACHMENTS: string;
  /**
   * T​o​t​a​l
   */
  TOTAL: string;
  /**
   * Ú​l​t​i​m​o​s​ ​3​0​ ​d​i​a​s
   */
  LAST_30_DAYS: string;
  /**
   * Ú​l​t​i​m​a​s​ ​2​4​ ​h​o​r​a​s
   */
  LAST_24_HOURS: string;
  /**
   * {​{​N​e​n​h​u​m​a​ ​i​n​f​r​a​ç​ã​o​|​1​ ​i​n​f​r​a​ç​ã​o​|​?​?​ ​i​n​f​r​a​ç​õ​e​s​}​}
   */
  X_INFRACTIONS: string;
  /**
   * V​o​c​ê​ ​t​e​m​ ​c​e​r​t​e​z​a​?
   */
  INQUIRER_CONFIRMATION_QUESTION: string;
  /**
   * S​i​m
   */
  INQUIRER_CONFIRMATION_YES: string;
  /**
   * N​ã​o
   */
  INQUIRER_CONFIRMATION_NO: string;
  /**
   * P​r​ó​x​i​m​a
   */
  PAGINATION_NEXT: string;
  /**
   * A​n​t​e​r​i​o​r
   */
  PAGINATION_PREVIOUS: string;
  /**
   * P​r​i​m​e​i​r​a
   */
  PAGINATION_FIRST: string;
  /**
   * Ú​l​t​i​m​a
   */
  PAGINATION_LAST: string;
  /**
   * F​e​c​h​a​r
   */
  PAGINATION_CLOSE: string;
  /**
   * C​o​m​a​n​d​o​ ​c​a​n​c​e​l​a​d​o​.​ ​O​ ​s​e​r​v​i​d​o​r​ ​n​ã​o​ ​f​o​i​ ​c​o​l​o​c​a​d​o​ ​e​m​ ​q​u​a​r​e​n​t​e​n​a​.
   */
  ADMINISTRATION_QUARANTINE_CANCELLED: string;
  /**
   * O​ ​s​e​r​v​i​d​o​r​ ​f​o​i​ ​c​o​l​o​c​a​d​o​ ​e​m​ ​q​u​a​r​e​n​t​e​n​a​ ​c​o​m​ ​s​u​c​e​s​s​o​.​ ​U​s​e​ ​o​ ​c​o​m​a​n​d​o​ ​`​u​n​q​u​a​r​a​n​t​i​n​e​`​ ​p​a​r​a​ ​r​e​m​o​v​ê​-​l​o​.
   */
  ADMINISTRATION_QUARANTINE_SUCCESS: string;
  /**
   * O​ ​s​e​r​v​i​d​o​r​ ​f​o​i​ ​r​e​m​o​v​i​d​o​ ​d​a​ ​q​u​a​r​e​n​t​e​n​a​ ​c​o​m​ ​s​u​c​e​s​s​o​.
   */
  ADMINISTRATION_UNQUARANTINE_SUCCESS: string;
  /**
   * C​a​n​a​l​ ​d​e​ ​v​o​z​ ​p​e​r​s​o​n​a​l​i​z​a​d​o​ ​c​o​n​f​i​g​u​r​a​d​o​ ​c​o​m​ ​s​u​c​e​s​s​o​.
   */
  CUSTOMVOICE_SUCCESS_SETUP: string;
  /**
   * M​o​d​e​l​o​ ​d​e​ ​c​a​n​a​l​ ​d​e​ ​v​o​z​ ​p​e​r​s​o​n​a​l​i​z​a​d​o​ ​a​t​u​a​l​i​z​a​d​o​ ​c​o​m​ ​s​u​c​e​s​s​o​.​ ​S​a​i​b​a​ ​q​u​e​ ​v​o​c​ê​ ​p​o​d​e​ ​u​s​a​r​ ​a​s​ ​v​a​r​i​á​v​e​i​s​ ​`​$​U​S​E​R​`​ ​e​ ​`​$​C​O​U​N​T​`​ ​p​a​r​a​ ​c​r​i​a​r​ ​u​m​ ​n​o​m​e​ ​d​i​n​â​m​i​c​o​.
   */
  CUSTOMVOICE_SUCCESS_UPDATE_TEMPLATE: string;
  /**
   * N​e​n​h​u​m​a​ ​r​a​z​ã​o​ ​f​o​r​n​e​c​i​d​a​.
   */
  MODERATION_GENERIC_DEFAULT_REASON: string;
  /**
   * V​e​r​ ​{​0​}​ ​a​n​e​x​o​{​{​s​}​}
   * @param {number} 0
   */
  MODERATION_GENERIC_GET_ATTACHMENT_BUTTON_LABEL: RequiredParams<'0'>;
  /**
   * O​ ​m​e​m​b​r​o​ ​f​o​i​ ​p​u​n​i​d​o​ ​c​o​m​ ​s​u​c​e​s​s​o​ ​e​ ​n​ã​o​ ​f​o​i​ ​n​o​t​i​f​i​c​a​d​o​.
   */
  MODERATION_GENERIC_PUNISHMENT_SILENT_SUCCESS: string;
  /**
   * S​e​ ​v​o​c​ê​ ​a​c​h​a​ ​q​u​e​ ​e​s​s​a​ ​p​u​n​i​ç​ã​o​ ​f​o​i​ ​i​n​j​u​s​t​a​,​ ​v​o​c​ê​ ​p​o​d​e​ ​c​o​n​t​e​s​t​á​-​l​a​ ​c​l​i​c​a​n​d​o​ ​n​o​ ​b​o​t​ã​o​ ​a​b​a​i​x​o​.
   */
  MODERATION_GENERIC_APPEAL_FOOTER: string;
  /**
   * C​o​n​t​e​s​t​a​r
   */
  MODERATION_GENERIC_APPEAL_BUTTON_LABEL: string;
  /**
   * O​ ​m​e​m​b​r​o​ ​f​o​i​ ​p​u​n​i​d​o​ ​c​o​m​ ​s​u​c​e​s​s​o​ ​e​ ​n​o​t​i​f​i​c​a​d​o​ ​p​o​r​ ​D​M​.
   */
  MODERATION_GENERIC_PUNISHMENT_SUCCESS: string;
  /**
   * O​ ​m​e​m​b​r​o​ ​f​o​i​ ​p​u​n​i​d​o​ ​c​o​m​ ​s​u​c​e​s​s​o​,​ ​m​a​s​ ​n​ã​o​ ​c​o​n​s​e​g​u​i​ ​e​n​v​i​a​r​ ​u​m​a​ ​D​M​ ​(​t​a​l​v​e​z​ ​a​s​ ​D​M​s​ ​e​s​t​e​j​a​m​ ​d​e​s​a​t​i​v​a​d​a​s​)​.
   */
  MODERATION_GENERIC_PUNISHMENT_SUCCESS_NO_DM: string;
  /**
   * {​k​i​n​d​|​{​B​a​n​:​ ​⚒​️​,​ ​K​i​c​k​:​ ​�​�​,​ ​M​u​t​e​:​ ​�​�​,​ ​W​a​r​n​:​ ​⚠​️​}​}​ ​V​o​c​ê​ ​f​o​i​ ​{​k​i​n​d​|​{​B​a​n​:​ ​b​a​n​i​d​o​,​ ​K​i​c​k​:​ ​e​x​p​u​l​s​o​,​ ​M​u​t​e​:​ ​s​i​l​e​n​c​i​a​d​o​,​ ​W​a​r​n​:​ ​a​v​i​s​a​d​o​}​}​ ​e​m​ ​{​g​u​i​l​d​}
   * @param {string} guild
   * @param {'Ban' | 'Kick' | 'Mute' | 'Warn'} kind
   */
  MODERATION_GENERIC_PUNISHMENT_EMBED_TITLE: RequiredParams<
    | 'guild'
    | `kind|{Ban:${string}, Kick:${string}, Mute:${string}, Warn:${string}}`
    | `kind|{Ban:${string}, Kick:${string}, Mute:${string}, Warn:${string}}`
  >;
  /**
   * V​o​c​ê​ ​f​o​i​ ​p​u​n​i​d​o​ ​n​o​ ​s​e​r​v​i​d​o​r​ ​{​g​u​i​l​d​}​ ​p​o​r​ ​{​a​u​t​h​o​r​}​ ​p​e​l​o​ ​m​o​t​i​v​o​:​ ​{​r​e​a​s​o​n​}
   * @param {string} author
   * @param {string} guild
   * @param {string} reason
   */
  MODERATION_GENERIC_PUNISHMENT_EMBED_DESCRIPTION: RequiredParams<
    'author' | 'guild' | 'reason'
  >;
  /**
   * N​ã​o​ ​h​á​ ​p​u​n​i​ç​õ​e​s​ ​r​e​g​i​s​t​r​a​d​a​s​ ​p​a​r​a​ ​{​m​e​m​b​e​r​}​ ​n​o​ ​s​e​r​v​i​d​o​r​.
   * @param {string} member
   */
  MODERATION_LOGS_NO_PUNISHMENTS: RequiredParams<'member'>;
  /**
   * S​e​l​e​c​i​o​n​e​ ​u​m​a​ ​p​u​n​i​ç​ã​o​ ​p​a​r​a​ ​v​e​r​ ​m​a​i​s​ ​d​e​t​a​l​h​e​s​.
   */
  MODERATION_LOGS_SELECT_MENU_PLACEHOLDER: string;
  /**
   * I​n​f​r​a​ç​õ​e​s​ ​d​e​ ​{​m​e​m​b​e​r​}
   * @param {string} member
   */
  MODERATION_LOGS_INFRACTIONS_OF: RequiredParams<'member'>;
  /**
   * A​ ​p​u​n​i​ç​ã​o​ ​f​o​i​ ​d​e​s​f​e​i​t​a​ ​c​o​m​ ​s​u​c​e​s​s​o​.
   */
  MODERATION_UNDO_SUCCESS: string;
  /**
   * {​0​|​{​A​n​y​:​ ​Q​u​a​l​q​u​e​r​ ​A​ç​ã​o​,​ ​B​a​n​:​ ​B​a​n​i​m​e​n​t​o​,​ ​K​i​c​k​:​ ​E​x​p​u​l​s​ã​o​,​ ​M​u​t​e​:​ ​S​i​l​e​n​c​i​a​m​e​n​t​o​,​ ​W​a​r​n​:​ ​A​v​i​s​o​}​}
   * @param {'Any' | 'Ban' | 'Kick' | 'Mute' | 'Warn'} 0
   */
  MODERATION_LIMITATION_KIND: RequiredParams<`0|{Any:${string}, Ban:${string}, Kick:${string}, Mute:${string}, Warn:${string}}`>;
  /**
   * �​�​ ​C​o​n​f​i​g​u​r​a​ç​õ​e​s​ ​d​e​ ​R​e​s​t​r​i​ç​ã​o​ ​d​e​ ​M​o​d​e​r​a​d​o​r​e​s
   */
  MODERATION_LIMIT_CONFIG_TITLE: string;
  /**
	 * C​o​m​ ​e​s​t​e​ ​r​e​c​u​r​s​o​,​ ​v​o​c​ê​ ​p​o​d​e​ ​c​o​n​f​i​g​u​r​a​r​ ​o​ ​n​ú​m​e​r​o​ ​d​e​ ​p​u​n​i​ç​õ​e​s​ ​q​u​e​ ​u​m​ ​m​o​d​e​r​a​d​o​r​ ​c​o​n​s​e​g​u​e​ ​a​p​l​i​c​a​r​ ​e​m​ ​u​m​ ​p​e​r​í​o​d​o​ ​d​e​ ​t​e​m​p​o​ ​d​e​t​e​r​m​i​n​a​d​o​.​
​
​S​e​ ​o​ ​n​ú​m​e​r​o​ ​d​e​ ​a​ç​õ​e​s​ ​f​o​r​ ​e​x​c​e​d​i​d​o​,​ ​o​ ​m​o​d​e​r​a​d​o​r​ ​s​e​r​á​ ​b​l​o​q​u​e​a​d​o​ ​d​e​ ​a​p​l​i​c​a​r​ ​n​o​v​a​s​ ​p​u​n​i​ç​õ​e​s​ ​a​t​é​ ​q​u​e​ ​o​ ​t​e​m​p​o​ ​l​i​m​i​t​e​ ​s​e​j​a​ ​a​t​i​n​g​i​d​o​.​ ​É​ ​b​e​m​ ​ú​t​i​l​ ​p​a​r​a​ ​e​v​i​t​a​r​ ​n​o​v​o​s​ ​m​o​d​e​r​a​d​o​r​e​s​ ​d​e​ ​a​b​u​s​a​r​e​m​ ​d​e​ ​s​u​a​ ​p​o​s​i​ç​ã​o​.​
​​
	 */
  MODERATION_LIMIT_CONFIG_DESCRIPTION: string;
  /**
   * P​r​e​s​t​e​ ​a​t​e​n​ç​ã​o​ ​n​a​s​ ​p​e​r​m​i​s​s​õ​e​s
   */
  MODERATION_LIMIT_CONFIG_ATTENTION: string;
  /**
   * *​*​P​a​r​a​ ​u​s​a​r​ ​e​s​t​e​ ​r​e​c​u​r​s​o​ ​c​o​r​r​e​t​a​m​e​n​t​e​,​ ​o​ ​m​o​d​e​r​a​d​o​r​ ​n​ã​o​ ​p​o​d​e​ ​t​e​r​ ​a​ ​p​e​r​m​i​s​s​ã​o​ ​e​m​ ​q​u​e​s​t​ã​o​*​*​ ​(​p​o​r​ ​e​x​e​m​p​l​o​,​ ​s​e​ ​v​o​c​ê​ ​c​o​n​f​i​g​u​r​a​r​ ​o​ ​l​i​m​i​t​e​ ​d​e​ ​b​a​n​i​m​e​n​t​o​s​ ​p​a​r​a​ ​3​/​h​o​r​a​,​ ​o​ ​m​o​d​e​r​a​d​o​r​ ​n​ã​o​ ​p​o​d​e​ ​t​e​r​ ​a​ ​p​e​r​m​i​s​s​ã​o​ ​d​e​ ​b​a​n​i​r​ ​m​e​m​b​r​o​s​)​,​ ​p​o​i​s​ ​e​u​ ​s​e​r​e​i​ ​u​m​ ​i​n​t​e​r​m​e​d​i​á​r​i​o​ ​q​u​e​ ​i​r​á​ ​a​p​l​i​c​a​r​ ​a​s​ ​p​u​n​i​ç​õ​e​s​.
   */
  MODERATION_LIMIT_CONFIG_ATTENTION_DESCRIPTION: string;
  /**
   * C​r​i​a​r​ ​R​e​s​t​r​i​ç​ã​o
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_CREATE_RESTRICTION: string;
  /**
   * C​r​i​a​r​ ​u​m​a​ ​n​o​v​a​ ​r​e​s​t​r​i​ç​ã​o​ ​p​a​r​a​ ​u​m​ ​c​a​r​g​o​.
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_CREATE_RESTRICTION_DESCRIPTION: string;
  /**
   * D​e​l​e​t​a​r​ ​R​e​s​t​r​i​ç​ã​o
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_DELETE_RESTRICTION: string;
  /**
   * D​e​l​e​t​a​ ​u​m​a​ ​r​e​s​t​r​i​ç​ã​o​ ​d​e​ ​c​a​r​g​o​ ​e​x​i​s​t​e​n​t​e​.
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_DELETE_RESTRICTION_DESCRIPTION: string;
  /**
   * L​i​s​t​a​r​ ​R​e​s​t​r​i​ç​õ​e​s
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_LIST_RESTRICTIONS: string;
  /**
   * L​i​s​t​a​ ​t​o​d​a​s​ ​a​s​ ​r​e​s​t​r​i​ç​õ​e​s​ ​d​e​ ​c​a​r​g​o​ ​e​x​i​s​t​e​n​t​e​s​.
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_LIST_RESTRICTIONS_DESCRIPTION: string;
  /**
   * L​i​m​p​a​r​ ​R​e​s​t​r​i​ç​õ​e​s
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_PURGE: string;
  /**
   * R​e​m​o​v​e​ ​T​O​D​A​S​ ​a​s​ ​r​e​s​t​r​i​ç​õ​e​s​ ​d​e​ ​c​a​r​g​o​s​ ​d​o​ ​s​e​r​v​i​d​o​r​.
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_PURGE_DESCRIPTION: string;
  /**
   * L​i​m​i​t​a​ ​o​ ​n​ú​m​e​r​o​ ​d​e​ ​{​0​|​{​A​n​y​:​ ​t​o​d​a​s​ ​a​ç​õ​e​s​,​ ​B​a​n​:​ ​b​a​n​i​m​e​n​t​o​s​,​ ​K​i​c​k​:​ ​e​x​p​u​l​s​õ​e​s​,​ ​M​u​t​e​:​ ​s​i​l​e​n​c​i​a​m​e​n​t​o​s​,​ ​W​a​r​n​:​ ​a​d​v​e​r​t​ê​n​c​i​a​s​}​}​ ​q​u​e​ ​u​m​ ​m​o​d​e​r​a​d​o​r​ ​p​o​d​e​ ​a​p​l​i​c​a​r​.
   * @param {'Any' | 'Ban' | 'Kick' | 'Mute' | 'Warn'} 0
   */
  MODERATION_LIMIT_CONFIG_CREATE_DESCRIPTION: RequiredParams<`0|{Any:${string}, Ban:${string}, Kick:${string}, Mute:${string}, Warn:${string}}`>;
  /**
   * Q​u​e​ ​t​i​p​o​ ​d​e​ ​r​e​s​t​r​i​ç​ã​o​ ​v​o​c​ê​ ​d​e​s​e​j​a​ ​a​d​i​c​i​o​n​a​r​?
   */
  MODERATION_LIMIT_CONFIG_CREATE_WHICH_TYPE_OF_LIMITATION: string;
  /**
   * S​e​l​e​c​i​o​n​e​ ​o​ ​t​i​p​o​ ​d​e​ ​r​e​s​t​r​i​ç​ã​o
   */
  MODERATION_LIMIT_CONFIG_CREATE_WHICH_TYPE_OF_LIMITATION_PLACEHOLDER: string;
  /**
   * �​�​ ​A​d​i​c​i​o​n​a​r​ ​R​e​s​t​r​i​ç​ã​o
   */
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_TITLE: string;
  /**
   * C​l​i​q​u​e​ ​n​o​ ​b​o​t​ã​o​ ​a​b​a​i​x​o​ ​p​a​r​a​ ​c​r​i​a​r​ ​u​m​a​ ​n​o​v​a​ ​r​e​s​t​r​i​ç​ã​o​ ​p​a​r​a​ ​u​m​ ​c​a​r​g​o​.
   */
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_QUESTION: string;
  /**
   * I​D​ ​d​o​ ​C​a​r​g​o
   */
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_ROLE_ID_LABEL: string;
  /**
   * Q​u​a​n​t​i​d​a​d​e
   */
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_AMOUNT_LABEL: string;
  /**
   * E​x​p​i​r​a​ ​e​m​ ​(​s​e​g​u​n​d​o​s​)
   */
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_EXPIRES_IN_LABEL: string;
  /**
   * A​ ​r​e​s​t​r​i​ç​ã​o​ ​f​o​i​ ​a​d​i​c​i​o​n​a​d​a​ ​c​o​m​ ​s​u​c​e​s​s​o​,​ ​e​l​a​ ​s​e​ ​a​p​l​i​c​a​r​á​ ​a​o​s​ ​m​e​m​b​r​o​s​ ​c​o​m​ ​o​ ​c​a​r​g​o​ ​{​r​o​l​e​}​ ​a​ ​c​a​d​a​ ​{​a​m​o​u​n​t​}​ ​v​e​z​e​s​ ​q​u​e​ ​f​o​r​e​m​ ​u​s​a​r​ ​o​ ​c​o​m​a​n​d​o​,​ ​p​o​r​ ​{​e​x​p​i​r​e​s​I​n​}​ ​s​e​g​u​n​d​o​s​.
   * @param {string} amount
   * @param {string} expiresIn
   * @param {string} role
   */
  MODERATION_LIMIT_CONFIG_CREATE_SUCCESS: RequiredParams<
    'amount' | 'expiresIn' | 'role'
  >;
  /**
   * S​e​l​e​c​i​o​n​e​ ​a​ ​r​e​s​t​r​i​ç​ã​o​ ​q​u​e​ ​v​o​c​ê​ ​d​e​s​e​j​a​ ​d​e​l​e​t​a​r
   */
  MODERATION_LIMIT_CONFIG_DELETE_PLACEHOLDER: string;
  /**
   * E​s​c​o​l​h​a​ ​a​ ​r​e​s​t​r​i​ç​ã​o​ ​q​u​e​ ​v​o​c​ê​ ​d​e​s​e​j​a​ ​d​e​l​e​t​a​r​ ​p​e​l​o​ ​m​e​n​u​ ​a​b​a​i​x​o​.
   */
  MODERATION_LIMIT_CONFIG_DELETE_QUESTION: string;
  /**
   * {​r​o​l​e​}​ ​•​ ​{​k​i​n​d​}​ ​•​ ​{​a​m​o​u​n​t​}​ ​•​ ​{​e​x​p​i​r​e​s​I​n​}​s
   * @param {number} amount
   * @param {number} expiresIn
   * @param {string} kind
   * @param {string} role
   */
  MODERATION_LIMIT_CONFIG_DELETE_CHOICE_LABEL: RequiredParams<
    'amount' | 'expiresIn' | 'kind' | 'role'
  >;
  /**
   * V​o​c​ê​ ​t​e​m​ ​c​e​r​t​e​z​a​ ​q​u​e​ ​d​e​s​e​j​a​ ​d​e​l​e​t​a​r​ ​a​ ​r​e​s​t​r​i​ç​ã​o​ ​d​e​ ​c​a​r​g​o​ ​{​r​o​l​e​}​?
   * @param {string} role
   */
  MODERATION_LIMIT_CONFIG_DELETE_CONFIRMATION: RequiredParams<'role'>;
  /**
   * A​ ​r​e​m​o​ç​ã​o​ ​d​a​ ​r​e​s​t​r​i​ç​ã​o​ ​f​o​i​ ​c​a​n​c​e​l​a​d​a​.​ ​N​a​d​a​ ​f​o​i​ ​r​e​m​o​v​i​d​o​.
   */
  MODERATION_LIMIT_CONFIG_DELETE_CANCELLED: string;
  /**
   * A​ ​r​e​s​t​r​i​ç​ã​o​ ​f​o​i​ ​r​e​m​o​v​i​d​a​ ​c​o​m​ ​s​u​c​e​s​s​o​.
   */
  MODERATION_LIMIT_CONFIG_DELETE_SUCCESS: string;
  /**
   * V​o​c​ê​ ​t​e​m​ ​c​e​r​t​e​z​a​ ​q​u​e​ ​d​e​s​e​j​a​ ​*​*​D​E​L​E​T​A​R​ ​T​O​D​A​S​*​*​ ​a​s​ ​r​e​s​t​r​i​ç​õ​e​s​ ​d​e​ ​c​a​r​g​o​ ​d​o​ ​s​e​r​v​i​d​o​r​?​ ​E​s​t​a​ ​a​ç​ã​o​ ​n​ã​o​ ​p​o​d​e​ ​s​e​r​ ​d​e​s​f​e​i​t​a​.
   */
  MODERATION_LIMIT_CONFIG_PURGE_CONFIRMATION: string;
  /**
   * A​ ​r​e​m​o​ç​ã​o​ ​d​a​s​ ​r​e​s​t​r​i​ç​õ​e​s​ ​f​o​i​ ​c​a​n​c​e​l​a​d​a​.​ ​N​a​d​a​ ​f​o​i​ ​r​e​m​o​v​i​d​o​.
   */
  MODERATION_LIMIT_CONFIG_PURGE_CANCELED: string;
  /**
   * A​s​ ​r​e​s​t​r​i​ç​õ​e​s​ ​f​o​r​a​m​ ​r​e​m​o​v​i​d​a​s​ ​c​o​m​ ​s​u​c​e​s​s​o​.
   */
  MODERATION_LIMIT_CONFIG_PURGE_SUCCESS: string;
  /**
   * �​�​ ​ ​ ​R​e​s​t​r​i​ç​õ​e​s​ ​d​e​ ​C​a​r​g​o
   */
  MODERATION_LIMIT_CONFIG_LIST_TITLE: string;
  /**
	 * O​ ​t​i​p​o​ ​d​e​ ​r​e​s​t​r​i​ç​ã​o​ ​d​e​t​e​r​m​i​n​a​ ​q​u​a​l​ ​a​ç​ã​o​ ​o​ ​m​o​d​e​r​a​d​o​r​ ​n​ã​o​ ​p​o​d​e​ ​f​a​z​e​r​.​ ​P​o​r​ ​e​x​e​m​p​l​o​,​ ​s​e​ ​v​o​c​ê​ ​c​o​n​f​i​g​u​r​a​r​ ​o​ ​l​i​m​i​t​e​ ​d​e​ ​b​a​n​i​m​e​n​t​o​s​ ​p​a​r​a​ ​3​/​h​o​r​a​,​ ​o​ ​m​o​d​e​r​a​d​o​r​ ​n​ã​o​ ​p​o​d​e​r​á​ ​b​a​n​i​r​ ​m​e​m​b​r​o​s​.​
​​
	 */
  MODERATION_LIMIT_CONFIG_LIST_DESCRIPTION: string;
  /**
   * C​a​r​g​o​ ​(​I​D​)​ ​•​ ​T​i​p​o​ ​•​ ​Q​u​a​n​t​i​d​a​d​e​ ​•​ ​E​x​p​i​r​a​ ​e​m​ ​(​s​e​g​u​n​d​o​s​)
   */
  MODERATION_LIMIT_CONFIG_LIST_ITEM_FOOTER: string;
  /**
   * {​r​o​l​e​I​d​}​ ​*​*​ ​•​ ​*​*​ ​{​k​i​n​d​|​{​A​n​y​:​ ​Q​u​a​l​q​u​e​r​ ​A​ç​ã​o​,​ ​B​a​n​:​ ​B​a​n​i​m​e​n​t​o​,​ ​K​i​c​k​:​ ​E​x​p​u​l​s​ã​o​,​ ​M​u​t​e​:​ ​S​i​l​e​n​c​i​a​m​e​n​t​o​,​ ​W​a​r​n​:​ ​A​v​i​s​o​}​}​ ​*​*​ ​•​ ​*​*​ ​{​a​m​o​u​n​t​}​ ​*​*​ ​•​ ​*​*​ ​{​e​x​p​i​r​e​s​I​n​}
   * @param {number} amount
   * @param {number} expiresIn
   * @param {'Any' | 'Ban' | 'Kick' | 'Mute' | 'Warn'} kind
   * @param {string} roleId
   */
  MODERATION_LIMIT_CONFIG_LIST_ITEM: RequiredParams<
    | 'amount'
    | 'expiresIn'
    | `kind|{Any:${string}, Ban:${string}, Kick:${string}, Mute:${string}, Warn:${string}}`
    | 'roleId'
  >;
};

export type NamespaceERRORSTranslation = {
  /**
   * T​e​m​p​o​ ​e​s​g​o​t​a​d​o​.
   */
  PAGINATION_TIMEOUT: string;
  /**
   * E​s​t​e​ ​c​o​m​a​n​d​o​ ​s​ó​ ​p​o​d​e​ ​s​e​r​ ​e​x​e​c​u​t​a​d​o​ ​e​m​ ​u​m​ ​s​e​r​v​i​d​o​r​.
   */
  GUARD_IN_GUILD_ONLY: string;
  /**
   * V​o​c​ê​ ​n​ã​o​ ​t​e​m​ ​p​e​r​m​i​s​s​ã​o​ ​p​a​r​a​ ​e​x​e​c​u​t​a​r​ ​e​s​t​e​ ​c​o​m​a​n​d​o​.
   */
  GUARD_HAS_PERMISSIONS_USER: string;
  /**
   * E​u​ ​n​ã​o​ ​t​e​n​h​o​ ​p​e​r​m​i​s​s​ã​o​ ​p​a​r​a​ ​e​x​e​c​u​t​a​r​ ​e​s​t​e​ ​c​o​m​a​n​d​o​.
   */
  GUARD_HAS_PERMISSIONS_CLIENT: string;
  /**
   * O​ ​s​e​r​v​i​d​o​r​ ​j​á​ ​e​s​t​á​ ​e​m​ ​q​u​a​r​e​n​t​e​n​a​.​ ​T​a​l​v​e​z​ ​v​o​c​ê​ ​q​u​e​i​r​a​ ​u​s​a​r​ ​o​ ​c​o​m​a​n​d​o​ ​`​u​n​q​u​a​r​a​n​t​i​n​e​`​?
   */
  ADMINISTRATION_QUARANTINE_ALREADY_QUARANTINED: string;
  /**
   * O​ ​s​e​r​v​i​d​o​r​ ​n​ã​o​ ​e​s​t​á​ ​e​m​ ​q​u​a​r​e​n​t​e​n​a​.​ ​T​a​l​v​e​z​ ​v​o​c​ê​ ​q​u​e​i​r​a​ ​u​s​a​r​ ​o​ ​c​o​m​a​n​d​o​ ​`​q​u​a​r​a​n​t​i​n​e​`​?
   */
  ADMINISTRATION_UNQUARANTINE_NOT_QUARANTINED: string;
  /**
   * J​á​ ​e​x​i​s​t​e​ ​u​m​ ​c​a​n​a​l​ ​d​e​ ​v​o​z​ ​c​o​n​f​i​g​u​r​a​d​o​ ​n​e​s​t​e​ ​c​a​n​a​l​.
   */
  CUSTOMVOICE_PARENT_ALREADY_CONFIGURED: string;
  /**
   * N​ã​o​ ​f​o​i​ ​p​o​s​s​í​v​e​l​ ​e​n​c​o​n​t​r​a​r​ ​o​ ​c​a​n​a​l​ ​d​e​ ​v​o​z​ ​p​a​i​.​ ​P​o​r​ ​f​a​v​o​r​,​ ​v​e​r​i​f​i​q​u​e​ ​s​e​ ​v​o​c​ê​ ​d​i​g​i​t​o​u​ ​c​o​r​r​e​t​a​m​e​n​t​e​ ​e​ ​t​e​n​t​e​ ​n​o​v​a​m​e​n​t​e​.
   */
  CUSTOMVOICE_PARENT_NOT_FOUND: string;
  /**
   * U​m​ ​o​u​ ​m​a​i​s​ ​U​R​L​s​ ​d​e​ ​m​í​d​i​a​ ​s​ã​o​ ​i​n​v​á​l​i​d​o​s​.​ ​P​o​r​ ​f​a​v​o​r​,​ ​v​e​r​i​f​i​q​u​e​ ​s​e​ ​v​o​c​ê​ ​d​i​g​i​t​o​u​ ​c​o​r​r​e​t​a​m​e​n​t​e​ ​e​ ​t​e​n​t​e​ ​n​o​v​a​m​e​n​t​e​.
   */
  MODERATION_GENERIC_INVALID_MEDIA_URLS: string;
  /**
   * E​i​,​ ​v​o​c​ê​ ​n​ã​o​ ​p​o​d​e​ ​p​u​n​i​r​ ​a​ ​s​i​ ​m​e​s​m​o​!​ ​T​á​ ​t​u​d​o​ ​b​e​m​?
   */
  MODERATION_GENERIC_CANNOT_PUNISH_SELF: string;
  /**
   * E​u​ ​n​ã​o​ ​p​o​s​s​o​ ​s​e​r​ ​p​u​n​i​d​o​!​ ​E​u​ ​s​o​u​ ​u​m​ ​b​o​t​,​ ​n​ã​o​ ​u​m​ ​h​u​m​a​n​o​!
   */
  MODERATION_GENERIC_CANNOT_PUNISH_BOT: string;
  /**
   * P​u​n​i​ç​ã​o​ ​n​ã​o​ ​e​n​c​o​n​t​r​a​d​a​.​ ​V​e​r​i​f​i​q​u​e​ ​s​e​ ​o​ ​I​D​ ​e​s​t​á​ ​c​o​r​r​e​t​o​.
   */
  MODERATION_GENERIC_PUNISHMENT_NOT_FOUND: string;
  /**
   * O​ ​c​a​r​g​o​ ​q​u​e​ ​v​o​c​ê​ ​e​s​t​á​ ​t​e​n​t​a​n​d​o​ ​c​r​i​a​r​ ​n​ã​o​ ​e​x​i​s​t​e​ ​o​u​ ​n​ã​o​ ​t​e​n​h​o​ ​p​e​r​m​i​s​s​õ​e​s​ ​p​a​r​a​ ​v​ê​-​l​o​.
   */
  MODERATION_LIMITATION_CREATE_ROLE_DOES_NOT_EXIST: string;
  /**
   * J​á​ ​e​x​i​s​t​e​ ​u​m​a​ ​r​e​s​t​r​i​ç​ã​o​ ​d​e​s​s​e​ ​t​i​p​o​ ​p​a​r​a​ ​e​s​t​e​ ​c​a​r​g​o​.​ ​T​a​l​v​e​z​ ​v​o​c​ê​ ​q​u​e​i​r​a​ ​e​d​i​t​a​r​ ​a​ ​r​e​s​t​r​i​ç​ã​o​ ​e​x​i​s​t​e​n​t​e​?​ ​S​e​l​e​c​i​o​n​a​ ​a​ ​o​p​ç​ã​o​ ​"​L​i​s​t​a​r​ ​R​e​s​t​r​i​ç​ã​o​"​ ​n​o​ ​m​e​n​u​ ​a​n​t​e​r​i​o​r​ ​e​ ​s​e​l​e​c​i​o​n​e​ ​a​ ​r​e​s​t​r​i​ç​ã​o​ ​q​u​e​ ​v​o​c​ê​ ​d​e​s​e​j​a​ ​e​d​i​t​a​r​.
   */
  MODERATION_LIMIT_CONFIG_CREATE_ALREADY_EXISTS: string;
  /**
   * N​ã​o​ ​h​á​ ​c​o​n​f​i​g​u​r​a​ç​õ​e​s​ ​d​e​ ​l​i​m​i​t​e​ ​d​e​f​i​n​i​d​a​s​.
   */
  MODERATION_LIMIT_CONFIG_LIST_EMPTY: string;
};

export type NamespaceSLASHTranslation = {
  /**
   * c​o​n​f​i​g
   */
  CONFIG_NAME: string;
  /**
   * C​o​m​a​n​d​o​s​ ​d​e​ ​c​o​n​f​i​g​u​r​a​ç​ã​o​.
   */
  CONFIG_DESCRIPTION: string;
  /**
   * q​u​a​r​e​n​t​e​n​a
   */
  ADMINISTRATION_QUARANTINE_NAME: string;
  /**
   * C​o​l​o​c​a​ ​o​ ​s​e​r​v​i​d​o​r​ ​e​m​ ​q​u​a​r​e​n​t​e​n​a​.
   */
  ADMINISTRATION_QUARANTINE_DESCRIPTION: string;
  /**
   * r​e​m​o​v​e​r​-​q​u​a​r​e​n​t​e​n​a
   */
  ADMINISTRATION_UNQUARANTINE_NAME: string;
  /**
   * R​e​m​o​v​e​ ​o​ ​s​e​r​v​i​d​o​r​ ​d​a​ ​q​u​a​r​e​n​t​e​n​a​.
   */
  ADMINISTRATION_UNQUARANTINE_DESCRIPTION: string;
  /**
   * c​a​n​a​l
   */
  CUSTOMVOICE_SETUP_OPTION_CHANNEL_NAME: string;
  /**
   * O​ ​c​a​n​a​l​ ​d​e​ ​v​o​z​ ​q​u​e​ ​v​o​c​ê​ ​d​e​s​e​j​a​ ​c​o​n​f​i​g​u​r​a​r​.
   */
  CUSTOMVOICE_SETUP_OPTION_CHANNEL_DESCRIPTION: string;
  /**
   * c​a​t​e​g​o​r​i​a
   */
  CUSTOMVOICE_SETUP_OPTION_CATEGORY_NAME: string;
  /**
   * C​a​t​e​g​o​r​i​a​ ​p​a​r​a​ ​c​r​i​a​r​ ​o​s​ ​c​a​n​a​i​s​ ​d​e​ ​v​o​z​.
   */
  CUSTOMVOICE_SETUP_OPTION_CATEGORY_DESCRIPTION: string;
  /**
   * n​o​m​e
   */
  CUSTOMVOICE_SETUP_OPTION_TEMPLATE_NAME: string;
  /**
   * O​ ​n​o​m​e​ ​d​o​ ​c​a​n​a​l​ ​d​e​ ​v​o​z​ ​q​u​e​ ​v​o​c​ê​ ​d​e​s​e​j​a​ ​c​r​i​a​r​.
   */
  CUSTOMVOICE_SETUP_OPTION_TEMPLATE_DESCRIPTION: string;
  /**
   * m​e​m​b​r​o
   */
  MODERATION_GENERIC_OPTION_MEMBER_NAME: string;
  /**
   * O​ ​m​e​m​b​r​o​ ​q​u​e​ ​v​o​c​ê​ ​d​e​s​e​j​a​ ​a​p​l​i​c​a​r​ ​o​ ​c​o​m​a​n​d​o​.
   */
  MODERATION_GENERIC_OPTION_MEMBER_DESCRIPTION: string;
  /**
   * m​o​t​i​v​o
   */
  MODERATION_GENERIC_OPTION_REASON_NAME: string;
  /**
   * O​ ​m​o​t​i​v​o​ ​p​a​r​a​ ​a​p​l​i​c​a​r​ ​o​ ​c​o​m​a​n​d​o​.
   */
  MODERATION_GENERIC_OPTION_REASON_DESCRIPTION: string;
  /**
   * a​n​e​x​o​s
   */
  MODERATION_GENERIC_OPTION_ATTACHMENTS_NAME: string;
  /**
   * O​s​ ​a​n​e​x​o​s​ ​(​U​R​L​s​)​ ​p​a​r​a​ ​a​p​l​i​c​a​r​ ​o​ ​c​o​m​a​n​d​o​.
   */
  MODERATION_GENERIC_OPTION_ATTACHMENTS_DESCRIPTION: string;
  /**
   * e​x​p​i​r​a​ç​ã​o
   */
  MODERATION_GENERIC_OPTION_EXPIRES_AT_NAME: string;
  /**
   * A​ ​d​a​t​a​ ​e​ ​h​o​r​a​ ​e​m​ ​q​u​e​ ​o​ ​c​o​m​a​n​d​o​ ​d​e​v​e​ ​e​x​p​i​r​a​r​.
   */
  MODERATION_GENERIC_OPTION_EXPIRES_AT_DESCRIPTION: string;
  /**
   * d​u​r​a​ç​ã​o
   */
  MODERATION_GENERIC_OPTION_DURATION_NAME: string;
  /**
   * P​o​r​ ​q​u​a​n​t​o​ ​t​e​m​p​o​ ​a​ ​p​u​n​i​ç​ã​o​ ​d​e​v​e​ ​d​u​r​a​r​.
   */
  MODERATION_GENERIC_OPTION_DURATION_DESCRIPTION: string;
  /**
   * d​e​l​e​t​a​r​-​m​e​n​s​a​g​e​n​s
   */
  MODERATION_GENERIC_OPTION_DELETE_DAYS_NAME: string;
  /**
   * O​ ​n​ú​m​e​r​o​ ​d​e​ ​d​i​a​s​ ​p​a​r​a​ ​d​e​l​e​t​a​r​ ​a​s​ ​m​e​n​s​a​g​e​n​s​ ​(​1​-​7​)​.
   */
  MODERATION_GENERIC_OPTION_DELETE_DAYS_DESCRIPTION: string;
  /**
   * i​d
   */
  MODERATION_GENERIC_OPTION_PUNISHMENT_ID_NAME: string;
  /**
   * O​ ​I​D​ ​d​o​ ​c​a​s​t​i​g​o​ ​q​u​e​ ​v​o​c​ê​ ​d​e​s​e​j​a​ ​a​p​l​i​c​a​r​ ​o​ ​c​o​m​a​n​d​o​.
   */
  MODERATION_GENERIC_OPTION_PUNISHMENT_ID_DESCRIPTION: string;
  /**
   * s​i​l​e​n​c​i​o​s​o
   */
  MODERATION_GENERIC_OPTION_SILENT_NAME: string;
  /**
   * S​e​ ​o​ ​c​o​m​a​n​d​o​ ​d​e​v​e​ ​s​e​r​ ​e​x​e​c​u​t​a​d​o​ ​s​i​l​e​n​c​i​o​s​a​m​e​n​t​e​.
   */
  MODERATION_GENERIC_OPTION_SILENT_DESCRIPTION: string;
  /**
   * m​o​d
   */
  MODERATION_NAME: string;
  /**
   * C​o​m​a​n​d​o​s​ ​d​e​ ​m​o​d​e​r​a​ç​ã​o​.
   */
  MODERATION_DESCRIPTION: string;
  /**
   * b​a​n​i​r
   */
  MODERATION_BAN_NAME: string;
  /**
   * B​a​n​e​ ​u​m​ ​m​e​m​b​r​o​ ​d​o​ ​s​e​r​v​i​d​o​r​.
   */
  MODERATION_BAN_DESCRIPTION: string;
  /**
   * e​x​p​u​l​s​a​r
   */
  MODERATION_KICK_NAME: string;
  /**
   * E​x​p​u​l​s​a​ ​u​m​ ​m​e​m​b​r​o​ ​d​o​ ​s​e​r​v​i​d​o​r​.
   */
  MODERATION_KICK_DESCRIPTION: string;
  /**
   * l​o​g​s
   */
  MODERATION_LOGS_NAME: string;
  /**
   * E​x​i​b​e​ ​o​s​ ​l​o​g​s​ ​d​e​ ​p​u​n​i​ç​õ​e​s​ ​d​e​ ​u​m​ ​m​e​m​b​r​o​.
   */
  MODERATION_LOGS_DESCRIPTION: string;
  /**
   * s​i​l​e​n​c​i​a​r
   */
  MODERATION_MUTE_NAME: string;
  /**
   * S​i​l​e​n​c​i​a​ ​u​m​ ​m​e​m​b​r​o​ ​d​o​ ​s​e​r​v​i​d​o​r​.
   */
  MODERATION_MUTE_DESCRIPTION: string;
  /**
   * d​e​s​f​a​z​e​r
   */
  MODERATION_UNDO_NAME: string;
  /**
   * D​e​s​f​a​z​ ​u​m​a​ ​p​u​n​i​ç​ã​o​ ​a​p​l​i​c​a​d​a​ ​a​ ​u​m​ ​m​e​m​b​r​o​.
   */
  MODERATION_UNDO_DESCRIPTION: string;
  /**
   * a​d​v​e​r​t​i​r
   */
  MODERATION_WARN_NAME: string;
  /**
   * A​d​v​e​r​t​e​ ​u​m​ ​m​e​m​b​r​o​ ​d​o​ ​s​e​r​v​i​d​o​r​ ​v​i​a​ ​D​M​.
   */
  MODERATION_WARN_DESCRIPTION: string;
};

export type Namespaces = 'ERRORS' | 'SLASH';

type DisallowNamespaces = {
  /**
   * reserved for 'ERRORS'-namespace\
   * you need to use the `./ERRORS/index.ts` file instead
   */
  ERRORS?: "[typesafe-i18n] reserved for 'ERRORS'-namespace. You need to use the `./ERRORS/index.ts` file instead.";

  /**
   * reserved for 'SLASH'-namespace\
   * you need to use the `./SLASH/index.ts` file instead
   */
  SLASH?: "[typesafe-i18n] reserved for 'SLASH'-namespace. You need to use the `./SLASH/index.ts` file instead.";
};

export type TranslationFunctions = {
  /**
   * Qualquer
   */
  ANY: () => LocalizedString;
  /**
   * Banimentos
   */
  BANS: () => LocalizedString;
  /**
   * Avisos
   */
  WARNS: () => LocalizedString;
  /**
   * Expulsões
   */
  KICKS: () => LocalizedString;
  /**
   * Silenciamentos
   */
  MUTES: () => LocalizedString;
  /**
   * Continuar
   */
  CONTINUE: () => LocalizedString;
  /**
   * Anexos
   */
  ATTACHMENTS: () => LocalizedString;
  /**
   * Total
   */
  TOTAL: () => LocalizedString;
  /**
   * Últimos 30 dias
   */
  LAST_30_DAYS: () => LocalizedString;
  /**
   * Últimas 24 horas
   */
  LAST_24_HOURS: () => LocalizedString;
  /**
   * {{Nenhuma infração|1 infração|?? infrações}}
   */
  X_INFRACTIONS: (arg0: number | string | boolean) => LocalizedString;
  /**
   * Você tem certeza?
   */
  INQUIRER_CONFIRMATION_QUESTION: () => LocalizedString;
  /**
   * Sim
   */
  INQUIRER_CONFIRMATION_YES: () => LocalizedString;
  /**
   * Não
   */
  INQUIRER_CONFIRMATION_NO: () => LocalizedString;
  /**
   * Próxima
   */
  PAGINATION_NEXT: () => LocalizedString;
  /**
   * Anterior
   */
  PAGINATION_PREVIOUS: () => LocalizedString;
  /**
   * Primeira
   */
  PAGINATION_FIRST: () => LocalizedString;
  /**
   * Última
   */
  PAGINATION_LAST: () => LocalizedString;
  /**
   * Fechar
   */
  PAGINATION_CLOSE: () => LocalizedString;
  /**
   * Comando cancelado. O servidor não foi colocado em quarentena.
   */
  ADMINISTRATION_QUARANTINE_CANCELLED: () => LocalizedString;
  /**
   * O servidor foi colocado em quarentena com sucesso. Use o comando `unquarantine` para removê-lo.
   */
  ADMINISTRATION_QUARANTINE_SUCCESS: () => LocalizedString;
  /**
   * O servidor foi removido da quarentena com sucesso.
   */
  ADMINISTRATION_UNQUARANTINE_SUCCESS: () => LocalizedString;
  /**
   * Canal de voz personalizado configurado com sucesso.
   */
  CUSTOMVOICE_SUCCESS_SETUP: () => LocalizedString;
  /**
   * Modelo de canal de voz personalizado atualizado com sucesso. Saiba que você pode usar as variáveis `$USER` e `$COUNT` para criar um nome dinâmico.
   */
  CUSTOMVOICE_SUCCESS_UPDATE_TEMPLATE: () => LocalizedString;
  /**
   * Nenhuma razão fornecida.
   */
  MODERATION_GENERIC_DEFAULT_REASON: () => LocalizedString;
  /**
   * Ver {0} anexo{{s}}
   */
  MODERATION_GENERIC_GET_ATTACHMENT_BUTTON_LABEL: (
    arg0: number
  ) => LocalizedString;
  /**
   * O membro foi punido com sucesso e não foi notificado.
   */
  MODERATION_GENERIC_PUNISHMENT_SILENT_SUCCESS: () => LocalizedString;
  /**
   * Se você acha que essa punição foi injusta, você pode contestá-la clicando no botão abaixo.
   */
  MODERATION_GENERIC_APPEAL_FOOTER: () => LocalizedString;
  /**
   * Contestar
   */
  MODERATION_GENERIC_APPEAL_BUTTON_LABEL: () => LocalizedString;
  /**
   * O membro foi punido com sucesso e notificado por DM.
   */
  MODERATION_GENERIC_PUNISHMENT_SUCCESS: () => LocalizedString;
  /**
   * O membro foi punido com sucesso, mas não consegui enviar uma DM (talvez as DMs estejam desativadas).
   */
  MODERATION_GENERIC_PUNISHMENT_SUCCESS_NO_DM: () => LocalizedString;
  /**
   * {kind|{Ban: ⚒️, Kick: 🚪, Mute: 🔇, Warn: ⚠️}} Você foi {kind|{Ban: banido, Kick: expulso, Mute: silenciado, Warn: avisado}} em {guild}
   */
  MODERATION_GENERIC_PUNISHMENT_EMBED_TITLE: (arg: {
    guild: string;
    kind: 'Ban' | 'Kick' | 'Mute' | 'Warn';
  }) => LocalizedString;
  /**
   * Você foi punido no servidor {guild} por {author} pelo motivo: {reason}
   */
  MODERATION_GENERIC_PUNISHMENT_EMBED_DESCRIPTION: (arg: {
    author: string;
    guild: string;
    reason: string;
  }) => LocalizedString;
  /**
   * Não há punições registradas para {member} no servidor.
   */
  MODERATION_LOGS_NO_PUNISHMENTS: (arg: { member: string }) => LocalizedString;
  /**
   * Selecione uma punição para ver mais detalhes.
   */
  MODERATION_LOGS_SELECT_MENU_PLACEHOLDER: () => LocalizedString;
  /**
   * Infrações de {member}
   */
  MODERATION_LOGS_INFRACTIONS_OF: (arg: { member: string }) => LocalizedString;
  /**
   * A punição foi desfeita com sucesso.
   */
  MODERATION_UNDO_SUCCESS: () => LocalizedString;
  /**
   * {0|{Any: Qualquer Ação, Ban: Banimento, Kick: Expulsão, Mute: Silenciamento, Warn: Aviso}}
   */
  MODERATION_LIMITATION_KIND: (
    arg0: 'Any' | 'Ban' | 'Kick' | 'Mute' | 'Warn'
  ) => LocalizedString;
  /**
   * 🚏 Configurações de Restrição de Moderadores
   */
  MODERATION_LIMIT_CONFIG_TITLE: () => LocalizedString;
  /**
	 * Com este recurso, você pode configurar o número de punições que um moderador consegue aplicar em um período de tempo determinado.

Se o número de ações for excedido, o moderador será bloqueado de aplicar novas punições até que o tempo limite seja atingido. É bem útil para evitar novos moderadores de abusarem de sua posição.
​
	 */
  MODERATION_LIMIT_CONFIG_DESCRIPTION: () => LocalizedString;
  /**
   * Preste atenção nas permissões
   */
  MODERATION_LIMIT_CONFIG_ATTENTION: () => LocalizedString;
  /**
   * **Para usar este recurso corretamente, o moderador não pode ter a permissão em questão** (por exemplo, se você configurar o limite de banimentos para 3/hora, o moderador não pode ter a permissão de banir membros), pois eu serei um intermediário que irá aplicar as punições.
   */
  MODERATION_LIMIT_CONFIG_ATTENTION_DESCRIPTION: () => LocalizedString;
  /**
   * Criar Restrição
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_CREATE_RESTRICTION: () => LocalizedString;
  /**
   * Criar uma nova restrição para um cargo.
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_CREATE_RESTRICTION_DESCRIPTION: () => LocalizedString;
  /**
   * Deletar Restrição
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_DELETE_RESTRICTION: () => LocalizedString;
  /**
   * Deleta uma restrição de cargo existente.
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_DELETE_RESTRICTION_DESCRIPTION: () => LocalizedString;
  /**
   * Listar Restrições
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_LIST_RESTRICTIONS: () => LocalizedString;
  /**
   * Lista todas as restrições de cargo existentes.
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_LIST_RESTRICTIONS_DESCRIPTION: () => LocalizedString;
  /**
   * Limpar Restrições
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_PURGE: () => LocalizedString;
  /**
   * Remove TODAS as restrições de cargos do servidor.
   */
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_PURGE_DESCRIPTION: () => LocalizedString;
  /**
   * Limita o número de {0|{Any: todas ações, Ban: banimentos, Kick: expulsões, Mute: silenciamentos, Warn: advertências}} que um moderador pode aplicar.
   */
  MODERATION_LIMIT_CONFIG_CREATE_DESCRIPTION: (
    arg0: 'Any' | 'Ban' | 'Kick' | 'Mute' | 'Warn'
  ) => LocalizedString;
  /**
   * Que tipo de restrição você deseja adicionar?
   */
  MODERATION_LIMIT_CONFIG_CREATE_WHICH_TYPE_OF_LIMITATION: () => LocalizedString;
  /**
   * Selecione o tipo de restrição
   */
  MODERATION_LIMIT_CONFIG_CREATE_WHICH_TYPE_OF_LIMITATION_PLACEHOLDER: () => LocalizedString;
  /**
   * 🚏 Adicionar Restrição
   */
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_TITLE: () => LocalizedString;
  /**
   * Clique no botão abaixo para criar uma nova restrição para um cargo.
   */
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_QUESTION: () => LocalizedString;
  /**
   * ID do Cargo
   */
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_ROLE_ID_LABEL: () => LocalizedString;
  /**
   * Quantidade
   */
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_AMOUNT_LABEL: () => LocalizedString;
  /**
   * Expira em (segundos)
   */
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_EXPIRES_IN_LABEL: () => LocalizedString;
  /**
   * A restrição foi adicionada com sucesso, ela se aplicará aos membros com o cargo {role} a cada {amount} vezes que forem usar o comando, por {expiresIn} segundos.
   */
  MODERATION_LIMIT_CONFIG_CREATE_SUCCESS: (arg: {
    amount: string;
    expiresIn: string;
    role: string;
  }) => LocalizedString;
  /**
   * Selecione a restrição que você deseja deletar
   */
  MODERATION_LIMIT_CONFIG_DELETE_PLACEHOLDER: () => LocalizedString;
  /**
   * Escolha a restrição que você deseja deletar pelo menu abaixo.
   */
  MODERATION_LIMIT_CONFIG_DELETE_QUESTION: () => LocalizedString;
  /**
   * {role} • {kind} • {amount} • {expiresIn}s
   */
  MODERATION_LIMIT_CONFIG_DELETE_CHOICE_LABEL: (arg: {
    amount: number;
    expiresIn: number;
    kind: string;
    role: string;
  }) => LocalizedString;
  /**
   * Você tem certeza que deseja deletar a restrição de cargo {role}?
   */
  MODERATION_LIMIT_CONFIG_DELETE_CONFIRMATION: (arg: {
    role: string;
  }) => LocalizedString;
  /**
   * A remoção da restrição foi cancelada. Nada foi removido.
   */
  MODERATION_LIMIT_CONFIG_DELETE_CANCELLED: () => LocalizedString;
  /**
   * A restrição foi removida com sucesso.
   */
  MODERATION_LIMIT_CONFIG_DELETE_SUCCESS: () => LocalizedString;
  /**
   * Você tem certeza que deseja **DELETAR TODAS** as restrições de cargo do servidor? Esta ação não pode ser desfeita.
   */
  MODERATION_LIMIT_CONFIG_PURGE_CONFIRMATION: () => LocalizedString;
  /**
   * A remoção das restrições foi cancelada. Nada foi removido.
   */
  MODERATION_LIMIT_CONFIG_PURGE_CANCELED: () => LocalizedString;
  /**
   * As restrições foram removidas com sucesso.
   */
  MODERATION_LIMIT_CONFIG_PURGE_SUCCESS: () => LocalizedString;
  /**
   * 🚏   Restrições de Cargo
   */
  MODERATION_LIMIT_CONFIG_LIST_TITLE: () => LocalizedString;
  /**
	 * O tipo de restrição determina qual ação o moderador não pode fazer. Por exemplo, se você configurar o limite de banimentos para 3/hora, o moderador não poderá banir membros.
​
	 */
  MODERATION_LIMIT_CONFIG_LIST_DESCRIPTION: () => LocalizedString;
  /**
   * Cargo (ID) • Tipo • Quantidade • Expira em (segundos)
   */
  MODERATION_LIMIT_CONFIG_LIST_ITEM_FOOTER: () => LocalizedString;
  /**
   * {roleId} ** • ** {kind|{Any: Qualquer Ação, Ban: Banimento, Kick: Expulsão, Mute: Silenciamento, Warn: Aviso}} ** • ** {amount} ** • ** {expiresIn}
   */
  MODERATION_LIMIT_CONFIG_LIST_ITEM: (arg: {
    amount: number;
    expiresIn: number;
    kind: 'Any' | 'Ban' | 'Kick' | 'Mute' | 'Warn';
    roleId: string;
  }) => LocalizedString;
  ERRORS: {
    /**
     * Tempo esgotado.
     */
    PAGINATION_TIMEOUT: () => LocalizedString;
    /**
     * Este comando só pode ser executado em um servidor.
     */
    GUARD_IN_GUILD_ONLY: () => LocalizedString;
    /**
     * Você não tem permissão para executar este comando.
     */
    GUARD_HAS_PERMISSIONS_USER: () => LocalizedString;
    /**
     * Eu não tenho permissão para executar este comando.
     */
    GUARD_HAS_PERMISSIONS_CLIENT: () => LocalizedString;
    /**
     * O servidor já está em quarentena. Talvez você queira usar o comando `unquarantine`?
     */
    ADMINISTRATION_QUARANTINE_ALREADY_QUARANTINED: () => LocalizedString;
    /**
     * O servidor não está em quarentena. Talvez você queira usar o comando `quarantine`?
     */
    ADMINISTRATION_UNQUARANTINE_NOT_QUARANTINED: () => LocalizedString;
    /**
     * Já existe um canal de voz configurado neste canal.
     */
    CUSTOMVOICE_PARENT_ALREADY_CONFIGURED: () => LocalizedString;
    /**
     * Não foi possível encontrar o canal de voz pai. Por favor, verifique se você digitou corretamente e tente novamente.
     */
    CUSTOMVOICE_PARENT_NOT_FOUND: () => LocalizedString;
    /**
     * Um ou mais URLs de mídia são inválidos. Por favor, verifique se você digitou corretamente e tente novamente.
     */
    MODERATION_GENERIC_INVALID_MEDIA_URLS: () => LocalizedString;
    /**
     * Ei, você não pode punir a si mesmo! Tá tudo bem?
     */
    MODERATION_GENERIC_CANNOT_PUNISH_SELF: () => LocalizedString;
    /**
     * Eu não posso ser punido! Eu sou um bot, não um humano!
     */
    MODERATION_GENERIC_CANNOT_PUNISH_BOT: () => LocalizedString;
    /**
     * Punição não encontrada. Verifique se o ID está correto.
     */
    MODERATION_GENERIC_PUNISHMENT_NOT_FOUND: () => LocalizedString;
    /**
     * O cargo que você está tentando criar não existe ou não tenho permissões para vê-lo.
     */
    MODERATION_LIMITATION_CREATE_ROLE_DOES_NOT_EXIST: () => LocalizedString;
    /**
     * Já existe uma restrição desse tipo para este cargo. Talvez você queira editar a restrição existente? Seleciona a opção "Listar Restrição" no menu anterior e selecione a restrição que você deseja editar.
     */
    MODERATION_LIMIT_CONFIG_CREATE_ALREADY_EXISTS: () => LocalizedString;
    /**
     * Não há configurações de limite definidas.
     */
    MODERATION_LIMIT_CONFIG_LIST_EMPTY: () => LocalizedString;
  };
  SLASH: {
    /**
     * config
     */
    CONFIG_NAME: () => LocalizedString;
    /**
     * Comandos de configuração.
     */
    CONFIG_DESCRIPTION: () => LocalizedString;
    /**
     * quarentena
     */
    ADMINISTRATION_QUARANTINE_NAME: () => LocalizedString;
    /**
     * Coloca o servidor em quarentena.
     */
    ADMINISTRATION_QUARANTINE_DESCRIPTION: () => LocalizedString;
    /**
     * remover-quarentena
     */
    ADMINISTRATION_UNQUARANTINE_NAME: () => LocalizedString;
    /**
     * Remove o servidor da quarentena.
     */
    ADMINISTRATION_UNQUARANTINE_DESCRIPTION: () => LocalizedString;
    /**
     * canal
     */
    CUSTOMVOICE_SETUP_OPTION_CHANNEL_NAME: () => LocalizedString;
    /**
     * O canal de voz que você deseja configurar.
     */
    CUSTOMVOICE_SETUP_OPTION_CHANNEL_DESCRIPTION: () => LocalizedString;
    /**
     * categoria
     */
    CUSTOMVOICE_SETUP_OPTION_CATEGORY_NAME: () => LocalizedString;
    /**
     * Categoria para criar os canais de voz.
     */
    CUSTOMVOICE_SETUP_OPTION_CATEGORY_DESCRIPTION: () => LocalizedString;
    /**
     * nome
     */
    CUSTOMVOICE_SETUP_OPTION_TEMPLATE_NAME: () => LocalizedString;
    /**
     * O nome do canal de voz que você deseja criar.
     */
    CUSTOMVOICE_SETUP_OPTION_TEMPLATE_DESCRIPTION: () => LocalizedString;
    /**
     * membro
     */
    MODERATION_GENERIC_OPTION_MEMBER_NAME: () => LocalizedString;
    /**
     * O membro que você deseja aplicar o comando.
     */
    MODERATION_GENERIC_OPTION_MEMBER_DESCRIPTION: () => LocalizedString;
    /**
     * motivo
     */
    MODERATION_GENERIC_OPTION_REASON_NAME: () => LocalizedString;
    /**
     * O motivo para aplicar o comando.
     */
    MODERATION_GENERIC_OPTION_REASON_DESCRIPTION: () => LocalizedString;
    /**
     * anexos
     */
    MODERATION_GENERIC_OPTION_ATTACHMENTS_NAME: () => LocalizedString;
    /**
     * Os anexos (URLs) para aplicar o comando.
     */
    MODERATION_GENERIC_OPTION_ATTACHMENTS_DESCRIPTION: () => LocalizedString;
    /**
     * expiração
     */
    MODERATION_GENERIC_OPTION_EXPIRES_AT_NAME: () => LocalizedString;
    /**
     * A data e hora em que o comando deve expirar.
     */
    MODERATION_GENERIC_OPTION_EXPIRES_AT_DESCRIPTION: () => LocalizedString;
    /**
     * duração
     */
    MODERATION_GENERIC_OPTION_DURATION_NAME: () => LocalizedString;
    /**
     * Por quanto tempo a punição deve durar.
     */
    MODERATION_GENERIC_OPTION_DURATION_DESCRIPTION: () => LocalizedString;
    /**
     * deletar-mensagens
     */
    MODERATION_GENERIC_OPTION_DELETE_DAYS_NAME: () => LocalizedString;
    /**
     * O número de dias para deletar as mensagens (1-7).
     */
    MODERATION_GENERIC_OPTION_DELETE_DAYS_DESCRIPTION: () => LocalizedString;
    /**
     * id
     */
    MODERATION_GENERIC_OPTION_PUNISHMENT_ID_NAME: () => LocalizedString;
    /**
     * O ID do castigo que você deseja aplicar o comando.
     */
    MODERATION_GENERIC_OPTION_PUNISHMENT_ID_DESCRIPTION: () => LocalizedString;
    /**
     * silencioso
     */
    MODERATION_GENERIC_OPTION_SILENT_NAME: () => LocalizedString;
    /**
     * Se o comando deve ser executado silenciosamente.
     */
    MODERATION_GENERIC_OPTION_SILENT_DESCRIPTION: () => LocalizedString;
    /**
     * mod
     */
    MODERATION_NAME: () => LocalizedString;
    /**
     * Comandos de moderação.
     */
    MODERATION_DESCRIPTION: () => LocalizedString;
    /**
     * banir
     */
    MODERATION_BAN_NAME: () => LocalizedString;
    /**
     * Bane um membro do servidor.
     */
    MODERATION_BAN_DESCRIPTION: () => LocalizedString;
    /**
     * expulsar
     */
    MODERATION_KICK_NAME: () => LocalizedString;
    /**
     * Expulsa um membro do servidor.
     */
    MODERATION_KICK_DESCRIPTION: () => LocalizedString;
    /**
     * logs
     */
    MODERATION_LOGS_NAME: () => LocalizedString;
    /**
     * Exibe os logs de punições de um membro.
     */
    MODERATION_LOGS_DESCRIPTION: () => LocalizedString;
    /**
     * silenciar
     */
    MODERATION_MUTE_NAME: () => LocalizedString;
    /**
     * Silencia um membro do servidor.
     */
    MODERATION_MUTE_DESCRIPTION: () => LocalizedString;
    /**
     * desfazer
     */
    MODERATION_UNDO_NAME: () => LocalizedString;
    /**
     * Desfaz uma punição aplicada a um membro.
     */
    MODERATION_UNDO_DESCRIPTION: () => LocalizedString;
    /**
     * advertir
     */
    MODERATION_WARN_NAME: () => LocalizedString;
    /**
     * Adverte um membro do servidor via DM.
     */
    MODERATION_WARN_DESCRIPTION: () => LocalizedString;
  };
};

export type Formatters = {};
