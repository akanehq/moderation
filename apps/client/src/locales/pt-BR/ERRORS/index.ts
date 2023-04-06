import { BaseTranslation } from '../../i18n-types';

export default {
  GUARD_IN_GUILD_ONLY: 'Este comando só pode ser executado em um servidor.',

  GUARD_HAS_PERMISSIONS_USER:
    'Você não tem permissão para executar este comando.',
  GUARD_HAS_PERMISSIONS_CLIENT:
    'Eu não tenho permissão para executar este comando.',

  MODERATION_GENERIC_INVALID_MEDIA_URLS:
    'Um ou mais URLs de mídia são inválidos. Por favor, verifique se você digitou corretamente e tente novamente.',
  MODERATION_GENERIC_CANNOT_PUNISH_SELF:
    'Ei, você não pode punir a si mesmo! Tá tudo bem?',
  MODERATION_GENERIC_CANNOT_PUNISH_BOT:
    'Eu não posso ser punido! Eu sou um bot, não um humano!',
} satisfies BaseTranslation;
