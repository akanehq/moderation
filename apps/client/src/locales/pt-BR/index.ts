import type { BaseTranslation } from '../i18n-types';

export default {
  ATTACHMENTS: 'Anexos',

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

  MODERATION_BAN_EMBED_TITLE: '⚒️ Você foi banido de {0:string}',
  MODERATION_BAN_EMBED_DESCRIPTION:
    'Você foi punido no servidor {guild:string} por {author:string} pelo motivo: {reason:string}',
} satisfies BaseTranslation;
