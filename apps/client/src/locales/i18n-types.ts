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
   * P​r​i​m​e​i​r​a
   */
  PAGINATION_FIRST: string;
  /**
   * A​n​t​e​r​i​o​r
   */
  PAGINATION_PREVIOUS: string;
  /**
   * P​r​ó​x​i​m​a
   */
  PAGINATION_NEXT: string;
  /**
   * Ú​l​t​i​m​a
   */
  PAGINATION_LAST: string;
  /**
   * F​e​c​h​a​r
   */
  PAGINATION_CLOSE: string;
  /**
   * N​e​n​h​u​m​a​ ​r​a​z​ã​o​ ​f​o​r​n​e​c​i​d​a​.
   */
  MODERATION_GENERIC_DEFAULT_REASON: string;
  /**
   * O​ ​m​e​m​b​r​o​ ​f​o​i​ ​p​u​n​i​d​o​ ​c​o​m​ ​s​u​c​e​s​s​o​ ​e​ ​n​ã​o​ ​f​o​i​ ​n​o​t​i​f​i​c​a​d​o​.
   */
  MODERATION_GENERIC_PUNISHMENT_SILENT_SUCCESS: string;
  /**
   * V​e​r​ ​{​0​}​ ​a​n​e​x​o​{​{​s​}​}
   * @param {number} 0
   */
  MODERATION_GENERIC_GET_ATTACHMENT_BUTTON_LABEL: RequiredParams<'0'>;
  /**
   * C​o​n​t​e​s​t​a​r
   */
  MODERATION_GENERIC_APPEAL_BUTTON_LABEL: string;
  /**
   * V​o​c​ê​ ​p​o​d​e​ ​c​o​n​t​e​s​t​a​r​ ​e​s​s​a​ ​p​u​n​i​ç​ã​o​ ​c​l​i​c​a​n​d​o​ ​n​o​ ​b​o​t​ã​o​ ​a​b​a​i​x​o​.
   */
  MODERATION_GENERIC_APPEAL_FOOTER: string;
  /**
   * O​ ​m​e​m​b​r​o​ ​f​o​i​ ​p​u​n​i​d​o​ ​c​o​m​ ​s​u​c​e​s​s​o​.
   */
  MODERATION_GENERIC_PUNISHMENT_SUCCESS: string;
  /**
   * O​ ​m​e​m​b​r​o​ ​f​o​i​ ​p​u​n​i​d​o​ ​c​o​m​ ​s​u​c​e​s​s​o​,​ ​m​a​s​ ​n​ã​o​ ​c​o​n​s​e​g​u​i​ ​e​n​v​i​a​r​ ​u​m​a​ ​m​e​n​s​a​g​e​m​ ​p​r​i​v​a​d​a​.
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
   * A​ ​p​u​n​i​ç​ã​o​ ​f​o​i​ ​d​e​s​f​e​i​t​a​ ​c​o​m​ ​s​u​c​e​s​s​o​.
   */
  MODERATION_UNDO_SUCCESS: string;
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
};

export type NamespaceSLASHTranslation = {
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
   * O​s​ ​a​n​e​x​o​s​ ​p​a​r​a​ ​a​p​l​i​c​a​r​ ​o​ ​c​o​m​a​n​d​o​.
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
   * A​ ​d​u​r​a​ç​ã​o​ ​p​a​r​a​ ​a​p​l​i​c​a​r​ ​o​ ​c​o​m​a​n​d​o​.
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
   * Primeira
   */
  PAGINATION_FIRST: () => LocalizedString;
  /**
   * Anterior
   */
  PAGINATION_PREVIOUS: () => LocalizedString;
  /**
   * Próxima
   */
  PAGINATION_NEXT: () => LocalizedString;
  /**
   * Última
   */
  PAGINATION_LAST: () => LocalizedString;
  /**
   * Fechar
   */
  PAGINATION_CLOSE: () => LocalizedString;
  /**
   * Nenhuma razão fornecida.
   */
  MODERATION_GENERIC_DEFAULT_REASON: () => LocalizedString;
  /**
   * O membro foi punido com sucesso e não foi notificado.
   */
  MODERATION_GENERIC_PUNISHMENT_SILENT_SUCCESS: () => LocalizedString;
  /**
   * Ver {0} anexo{{s}}
   */
  MODERATION_GENERIC_GET_ATTACHMENT_BUTTON_LABEL: (
    arg0: number
  ) => LocalizedString;
  /**
   * Contestar
   */
  MODERATION_GENERIC_APPEAL_BUTTON_LABEL: () => LocalizedString;
  /**
   * Você pode contestar essa punição clicando no botão abaixo.
   */
  MODERATION_GENERIC_APPEAL_FOOTER: () => LocalizedString;
  /**
   * O membro foi punido com sucesso.
   */
  MODERATION_GENERIC_PUNISHMENT_SUCCESS: () => LocalizedString;
  /**
   * O membro foi punido com sucesso, mas não consegui enviar uma mensagem privada.
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
   * A punição foi desfeita com sucesso.
   */
  MODERATION_UNDO_SUCCESS: () => LocalizedString;
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
  };
  SLASH: {
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
     * Os anexos para aplicar o comando.
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
     * A duração para aplicar o comando.
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
