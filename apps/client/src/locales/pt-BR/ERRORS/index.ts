import { BaseTranslation } from '../../i18n-types';

export default {
  PAGINATION_TIMEOUT: 'Tempo esgotado.',

  // Guard / inGuild

  GUARD_IN_GUILD_ONLY: 'Este comando só pode ser executado em um servidor.',

  // Guard / hasPermission

  GUARD_HAS_PERMISSIONS_USER:
    'Você não tem permissão para executar este comando.',
  GUARD_HAS_PERMISSIONS_CLIENT:
    'Eu não tenho permissão para executar este comando.',

  // Administration (Quarantine)

  ADMINISTRATION_QUARANTINE_ALREADY_QUARANTINED:
    'O servidor já está em quarentena. Talvez você queira usar o comando `unquarantine`?',

  ADMINISTRATION_UNQUARANTINE_NOT_QUARANTINED:
    'O servidor não está em quarentena. Talvez você queira usar o comando `quarantine`?',

  // Custom Voice

  CUSTOMVOICE_PARENT_ALREADY_CONFIGURED:
    'Já existe um canal de voz configurado neste canal.',

  CUSTOMVOICE_PARENT_NOT_FOUND:
    'Não foi possível encontrar o canal de voz pai. Por favor, verifique se você digitou corretamente e tente novamente.',

  // Moderation (Generic)

  MODERATION_GENERIC_INVALID_MEDIA_URLS:
    'Um ou mais URLs de mídia são inválidos. Por favor, verifique se você digitou corretamente e tente novamente.',

  MODERATION_GENERIC_CANNOT_PUNISH_SELF:
    'Ei, você não pode punir a si mesmo! Tá tudo bem?',

  MODERATION_GENERIC_CANNOT_PUNISH_BOT:
    'Eu não posso ser punido! Eu sou um bot, não um humano!',

  MODERATION_GENERIC_PUNISHMENT_NOT_FOUND:
    'Punição não encontrada. Verifique se o ID está correto.',

  // Moderation (Limitation/Create)

  MODERATION_LIMITATION_CREATE_ROLE_DOES_NOT_EXIST:
    'O cargo que você está tentando criar não existe ou não tenho permissões para vê-lo.',

  MODERATION_LIMIT_CONFIG_CREATE_ALREADY_EXISTS:
    'Já existe uma restrição desse tipo para este cargo. Talvez você queira editar a restrição existente? Seleciona a opção "Listar Restrição" no menu anterior e selecione a restrição que você deseja editar.',

  // Moderation (Limitation/Delete)

  MODERATION_LIMIT_CONFIG_LIST_EMPTY:
    'Não há configurações de limite definidas.',

  // Moderation (Events/GetAttachment)

  MODERATION_GET_ATTACHMENT_PUNISHMENT_NOT_FOUND:
    'Não foi possível encontrar nenhuma punição com o ID registrado. Reporte este erro para o suporte do bot.',
} satisfies BaseTranslation;
