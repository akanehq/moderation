import { BaseTranslation } from '../../i18n-types';

export default {
  PAGINATION_TIMEOUT: 'Tempo esgotado.',

  GUARD_IN_GUILD_ONLY: 'Este comando só pode ser executado em um servidor.',

  GUARD_HAS_PERMISSIONS_USER:
    'Você não tem permissão para executar este comando.',
  GUARD_HAS_PERMISSIONS_CLIENT:
    'Eu não tenho permissão para executar este comando.',

  // Administration Quarantine

  ADMINISTRATION_QUARANTINE_ALREADY_QUARANTINED:
    'O servidor já está em quarentena.',
  ADMINISTRATION_UNQUARANTINE_NOT_QUARANTINED:
    'O servidor não está em quarentena.',

  // Moderation Generic

  MODERATION_GENERIC_INVALID_MEDIA_URLS:
    'Um ou mais URLs de mídia são inválidos. Por favor, verifique se você digitou corretamente e tente novamente.',
  MODERATION_GENERIC_CANNOT_PUNISH_SELF:
    'Ei, você não pode punir a si mesmo! Tá tudo bem?',
  MODERATION_GENERIC_CANNOT_PUNISH_BOT:
    'Eu não posso ser punido! Eu sou um bot, não um humano!',
  MODERATION_GENERIC_PUNISHMENT_NOT_FOUND:
    'Punição não encontrada. Verifique se o ID está correto.',
} satisfies BaseTranslation;
