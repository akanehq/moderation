import type { BaseTranslation } from '../i18n-types';

export default {
  ATTACHMENTS: 'Anexos',

  TOTAL: 'Total',
  LAST_30_DAYS: 'Últimos 30 dias',
  LAST_24_HOURS: 'Últimas 24 horas',
  X_INFRACTIONS: '{{ Nenhuma infração | 1 infração | ?? infrações }}',

  INQUIRER_CONFIRMATION_QUESTION: 'Você tem certeza?',
  INQUIRER_CONFIRMATION_YES: 'Sim',
  INQUIRER_CONFIRMATION_NO: 'Não',

  PAGINATION_FIRST: 'Primeira',
  PAGINATION_PREVIOUS: 'Anterior',

  PAGINATION_NEXT: 'Próxima',
  PAGINATION_LAST: 'Última',

  PAGINATION_CLOSE: 'Fechar',

  MODERATION_GENERIC_DEFAULT_REASON: 'Nenhuma razão fornecida.',
  MODERATION_GENERIC_PUNISHMENT_SILENT_SUCCESS:
    'O membro foi punido com sucesso e não foi notificado.',

  MODERATION_GENERIC_GET_ATTACHMENT_BUTTON_LABEL: 'Ver {0:number} anexo{{s}}',
  MODERATION_GENERIC_APPEAL_BUTTON_LABEL: 'Contestar',

  MODERATION_GENERIC_APPEAL_FOOTER:
    'Você pode contestar essa punição clicando no botão abaixo.',

  MODERATION_GENERIC_PUNISHMENT_SUCCESS: 'O membro foi punido com sucesso.',
  MODERATION_GENERIC_PUNISHMENT_SUCCESS_NO_DM:
    'O membro foi punido com sucesso, mas não consegui enviar uma mensagem privada.',

  MODERATION_GENERIC_PUNISHMENT_EMBED_TITLE:
    '{kind|{Ban: ⚒️, Kick: 🚪, Mute: 🔇, Warn: ⚠️}} Você foi {kind|{Ban: banido, Kick: expulso, Mute: silenciado, Warn: avisado}} em {guild:string}',
  MODERATION_GENERIC_PUNISHMENT_EMBED_DESCRIPTION:
    'Você foi punido no servidor {guild:string} por {author:string} pelo motivo: {reason:string}',

  MODERATION_UNDO_SUCCESS: 'A punição foi desfeita com sucesso.',

  MODERATION_LOGS_NO_PUNISHMENTS:
    'Não há punições registradas para {member:string} no servidor.',
  MODERATION_LOGS_SELECT_MENU_PLACEHOLDER:
    'Selecione uma punição para ver mais detalhes.',
  MODERATION_LOGS_INFRACTIONS_OF: 'Infrações de {member:string}',
} satisfies BaseTranslation;
