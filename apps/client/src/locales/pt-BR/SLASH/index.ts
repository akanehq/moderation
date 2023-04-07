import { BaseTranslation } from '../../i18n-types';

export default {
  CONFIG_NAME: 'config',
  CONFIG_DESCRIPTION: 'Comandos de configuração.',

  // Administration

  ADMINISTRATION_QUARANTINE_NAME: 'quarentena',
  ADMINISTRATION_QUARANTINE_DESCRIPTION: 'Coloca o servidor em quarentena.',

  ADMINISTRATION_UNQUARANTINE_NAME: 'remover-quarentena',
  ADMINISTRATION_UNQUARANTINE_DESCRIPTION: 'Remove o servidor da quarentena.',

  // Custom Voice

  CUSTOMVOICE_SETUP_OPTION_CHANNEL_NAME: 'canal',
  CUSTOMVOICE_SETUP_OPTION_CHANNEL_DESCRIPTION:
    'O canal de voz que você deseja configurar.',

  CUSTOMVOICE_SETUP_OPTION_CATEGORY_NAME: 'categoria',
  CUSTOMVOICE_SETUP_OPTION_CATEGORY_DESCRIPTION:
    'Categoria para criar os canais de voz.',

  CUSTOMVOICE_SETUP_OPTION_TEMPLATE_NAME: 'nome',
  CUSTOMVOICE_SETUP_OPTION_TEMPLATE_DESCRIPTION:
    'O nome do canal de voz que você deseja criar.',

  // Moderation (Generic Options)

  MODERATION_GENERIC_OPTION_MEMBER_NAME: 'membro',
  MODERATION_GENERIC_OPTION_MEMBER_DESCRIPTION:
    'O membro que você deseja aplicar o comando.',

  MODERATION_GENERIC_OPTION_REASON_NAME: 'motivo',
  MODERATION_GENERIC_OPTION_REASON_DESCRIPTION:
    'O motivo para aplicar o comando.',

  MODERATION_GENERIC_OPTION_ATTACHMENTS_NAME: 'anexos',
  MODERATION_GENERIC_OPTION_ATTACHMENTS_DESCRIPTION:
    'Os anexos (URLs) para aplicar o comando.',

  MODERATION_GENERIC_OPTION_EXPIRES_AT_NAME: 'expiração',
  MODERATION_GENERIC_OPTION_EXPIRES_AT_DESCRIPTION:
    'A data e hora em que o comando deve expirar.',

  MODERATION_GENERIC_OPTION_DURATION_NAME: 'duração',
  MODERATION_GENERIC_OPTION_DURATION_DESCRIPTION:
    'Por quanto tempo a punição deve durar.',

  MODERATION_GENERIC_OPTION_DELETE_DAYS_NAME: 'deletar-mensagens',
  MODERATION_GENERIC_OPTION_DELETE_DAYS_DESCRIPTION:
    'O número de dias para deletar as mensagens (1-7).',

  MODERATION_GENERIC_OPTION_PUNISHMENT_ID_NAME: 'id',
  MODERATION_GENERIC_OPTION_PUNISHMENT_ID_DESCRIPTION:
    'O ID do castigo que você deseja aplicar o comando.',

  MODERATION_GENERIC_OPTION_SILENT_NAME: 'silencioso',
  MODERATION_GENERIC_OPTION_SILENT_DESCRIPTION:
    'Se o comando deve ser executado silenciosamente.',

  // Moderation

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
