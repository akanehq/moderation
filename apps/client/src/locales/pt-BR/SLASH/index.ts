import { BaseTranslation } from '../../i18n-types';

export default {
  CONFIG_NAME: 'config',
  CONFIG_DESCRIPTION: 'Comandos de configuração.',

  MODERATION_GENERIC_OPTION_MEMBER_NAME: 'membro',
  MODERATION_GENERIC_OPTION_MEMBER_DESCRIPTION:
    'O membro que você deseja aplicar o comando.',

  MODERATION_GENERIC_OPTION_REASON_NAME: 'motivo',
  MODERATION_GENERIC_OPTION_REASON_DESCRIPTION:
    'O motivo para aplicar o comando.',

  MODERATION_GENERIC_OPTION_ATTACHMENTS_NAME: 'anexos',
  MODERATION_GENERIC_OPTION_ATTACHMENTS_DESCRIPTION:
    'Os anexos para aplicar o comando.',

  MODERATION_GENERIC_OPTION_EXPIRES_AT_NAME: 'expiração',
  MODERATION_GENERIC_OPTION_EXPIRES_AT_DESCRIPTION:
    'A data e hora em que o comando deve expirar.',

  MODERATION_GENERIC_OPTION_DURATION_NAME: 'duração',
  MODERATION_GENERIC_OPTION_DURATION_DESCRIPTION:
    'A duração para aplicar o comando.',

  MODERATION_GENERIC_OPTION_DELETE_DAYS_NAME: 'deletar-mensagens',
  MODERATION_GENERIC_OPTION_DELETE_DAYS_DESCRIPTION:
    'O número de dias para deletar as mensagens (1-7).',

  MODERATION_GENERIC_OPTION_PUNISHMENT_ID_NAME: 'id',
  MODERATION_GENERIC_OPTION_PUNISHMENT_ID_DESCRIPTION:
    'O ID do castigo que você deseja aplicar o comando.',

  MODERATION_GENERIC_OPTION_SILENT_NAME: 'silencioso',
  MODERATION_GENERIC_OPTION_SILENT_DESCRIPTION:
    'Se o comando deve ser executado silenciosamente.',

  // Moderation Commands

  MODERATION_NAME: 'mod',
  MODERATION_DESCRIPTION: 'Comandos de moderação.',

  MODERATION_BAN_NAME: 'banir',
  MODERATION_BAN_DESCRIPTION: 'Bane um membro do servidor.',

  MODERATION_KICK_NAME: 'expulsar',
  MODERATION_KICK_DESCRIPTION: 'Expulsa um membro do servidor.',

  MODERATION_LOGS_NAME: 'logs',
  MODERATION_LOGS_DESCRIPTION: 'Exibe os logs de punições de um membro.',

  MODERATION_MUTE_NAME: 'silenciar',
  MODERATION_MUTE_DESCRIPTION: 'Silencia um membro do servidor.',

  MODERATION_UNDO_NAME: 'desfazer',
  MODERATION_UNDO_DESCRIPTION: 'Desfaz uma punição aplicada a um membro.',

  MODERATION_WARN_NAME: 'advertir',
  MODERATION_WARN_DESCRIPTION: 'Adverte um membro do servidor via DM.',
} satisfies BaseTranslation;
