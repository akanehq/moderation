import dedent from 'ts-dedent';

import type { BaseTranslation } from '../i18n-types';

export default {
  ANY: 'Qualquer',
  BANS: 'Banimentos',
  WARNS: 'Avisos',
  KICKS: 'Expulsões',
  MUTES: 'Silenciamentos',

  CONTINUE: 'Continuar',
  ATTACHMENTS: 'Anexos',

  TOTAL: 'Total',
  LAST_30_DAYS: 'Últimos 30 dias',
  LAST_24_HOURS: 'Últimas 24 horas',
  X_INFRACTIONS: '{{ Nenhuma infração | 1 infração | ?? infrações }}',

  // Inquirer Helper

  INQUIRER_CONFIRMATION_QUESTION: 'Você tem certeza?',
  INQUIRER_CONFIRMATION_YES: 'Sim',
  INQUIRER_CONFIRMATION_NO: 'Não',

  // Pagination Helper

  PAGINATION_NEXT: 'Próxima',
  PAGINATION_PREVIOUS: 'Anterior',

  PAGINATION_FIRST: 'Primeira',
  PAGINATION_LAST: 'Última',

  PAGINATION_CLOSE: 'Fechar',

  PAGINATION_CLOSED:
    'A paginação foi fechada. Você pode reabri-la clicando no mesmo botão.',

  // Administration (Quarantine)

  ADMINISTRATION_QUARANTINE_CANCELLED:
    'Comando cancelado. O servidor não foi colocado em quarentena.',

  ADMINISTRATION_QUARANTINE_SUCCESS:
    'O servidor foi colocado em quarentena com sucesso. Use o comando `unquarantine` para removê-lo.',

  ADMINISTRATION_UNQUARANTINE_SUCCESS:
    'O servidor foi removido da quarentena com sucesso.',

  // Custom Voice

  CUSTOMVOICE_SUCCESS_SETUP:
    'Canal de voz personalizado configurado com sucesso.',

  CUSTOMVOICE_SUCCESS_UPDATE_TEMPLATE:
    'Modelo de canal de voz personalizado atualizado com sucesso. Saiba que você pode usar as variáveis `$USER` e `$COUNT` para criar um nome dinâmico.',

  // Moderation (Generic)

  MODERATION_GENERIC_DEFAULT_REASON: 'Nenhuma razão fornecida.',

  MODERATION_GENERIC_GET_ATTACHMENT_BUTTON_LABEL: 'Ver {0:number} anexo{{s}}',

  MODERATION_GENERIC_PUNISHMENT_SILENT_SUCCESS:
    'O membro foi punido com sucesso e não foi notificado.',

  MODERATION_GENERIC_APPEAL_FOOTER:
    'Se você acha que essa punição foi injusta, você pode contestá-la clicando no botão abaixo.',
  MODERATION_GENERIC_APPEAL_BUTTON_LABEL: 'Contestar',

  MODERATION_GENERIC_PUNISHMENT_SUCCESS:
    'O membro foi punido com sucesso e notificado por DM.',
  MODERATION_GENERIC_PUNISHMENT_SUCCESS_NO_DM:
    'O membro foi punido com sucesso, mas não consegui enviar uma DM (talvez as DMs estejam desativadas).',

  MODERATION_GENERIC_PUNISHMENT_EMBED_TITLE:
    '{kind|{Ban: ⚒️, Kick: 🚪, Mute: 🔇, Warn: ⚠️}} Você foi {kind|{Ban: banido, Kick: expulso, Mute: silenciado, Warn: avisado}} em {guild:string}',
  MODERATION_GENERIC_PUNISHMENT_EMBED_DESCRIPTION:
    'Você foi punido no servidor {guild:string} por {author:string} pelo motivo: {reason:string}',

  // Moderation (Logs)

  MODERATION_LOGS_NO_PUNISHMENTS:
    'Não há punições registradas para {member:string} no servidor.',

  MODERATION_LOGS_SELECT_MENU_PLACEHOLDER:
    'Selecione uma punição para ver mais detalhes.',

  MODERATION_LOGS_INFRACTIONS_OF: 'Infrações de {member:string}',

  // Moderation (Undo)

  MODERATION_UNDO_SUCCESS: 'A punição foi desfeita com sucesso.',

  // Moderation (Limitations)

  MODERATION_LIMITATION_KIND:
    '{0|{Any: Qualquer Ação, Ban: Banimento, Kick: Expulsão, Mute: Silenciamento, Warn: Aviso}}',

  // Moderation (Limitations/Dashboard)

  MODERATION_LIMIT_CONFIG_TITLE: '🚏 Configurações de Restrição de Moderadores',
  MODERATION_LIMIT_CONFIG_DESCRIPTION: dedent`
    Com este recurso, você pode configurar o número de punições que um moderador consegue aplicar em um período de tempo determinado.

    Se o número de ações for excedido, o moderador será bloqueado de aplicar novas punições até que o tempo limite seja atingido. É bem útil para evitar novos moderadores de abusarem de sua posição.
    \u200b
  `,

  MODERATION_LIMIT_CONFIG_ATTENTION: 'Preste atenção nas permissões',
  MODERATION_LIMIT_CONFIG_ATTENTION_DESCRIPTION:
    '**Para usar este recurso corretamente, o moderador não pode ter a permissão em questão** (por exemplo, se você configurar o limite de banimentos para 3/hora, o moderador não pode ter a permissão de banir membros), pois eu serei um intermediário que irá aplicar as punições.',

  MODERATION_LIMIT_CONFIG_SELECT_OPTION_CREATE_RESTRICTION: 'Criar Restrição',
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_CREATE_RESTRICTION_DESCRIPTION:
    'Criar uma nova restrição para um cargo.',

  MODERATION_LIMIT_CONFIG_SELECT_OPTION_DELETE_RESTRICTION: 'Deletar Restrição',
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_DELETE_RESTRICTION_DESCRIPTION:
    'Deleta uma restrição de cargo existente.',

  MODERATION_LIMIT_CONFIG_SELECT_OPTION_LIST_RESTRICTIONS: 'Listar Restrições',
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_LIST_RESTRICTIONS_DESCRIPTION:
    'Lista todas as restrições de cargo existentes.',

  MODERATION_LIMIT_CONFIG_SELECT_OPTION_PURGE: 'Limpar Restrições',
  MODERATION_LIMIT_CONFIG_SELECT_OPTION_PURGE_DESCRIPTION:
    'Remove TODAS as restrições de cargos do servidor.',

  // Moderation (Limitations/Create)

  MODERATION_LIMIT_CONFIG_CREATE_DESCRIPTION:
    'Limita o número de {0|{Any: todas ações, Ban: banimentos, Kick: expulsões, Mute: silenciamentos, Warn: advertências}} que um moderador pode aplicar.',

  MODERATION_LIMIT_CONFIG_CREATE_WHICH_TYPE_OF_LIMITATION:
    'Que tipo de restrição você deseja adicionar?',
  MODERATION_LIMIT_CONFIG_CREATE_WHICH_TYPE_OF_LIMITATION_PLACEHOLDER:
    'Selecione o tipo de restrição',

  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_TITLE: '🚏 Adicionar Restrição',
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_QUESTION:
    'Clique no botão abaixo para criar uma nova restrição para um cargo.',

  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_ROLE_ID_LABEL: 'ID do Cargo',
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_AMOUNT_LABEL: 'Quantidade',
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_EXPIRES_IN_LABEL:
    'Expira em (segundos)',

  MODERATION_LIMIT_CONFIG_CREATE_SUCCESS:
    'A restrição foi adicionada com sucesso, ela se aplicará aos membros com o cargo {role:string} a cada {amount:string} vezes que forem usar o comando, por {expiresIn:string} segundos.',

  // Moderation (Limitations/Delete)

  MODERATION_LIMIT_CONFIG_DELETE_PLACEHOLDER:
    'Selecione a restrição que você deseja deletar',
  MODERATION_LIMIT_CONFIG_DELETE_QUESTION:
    'Escolha a restrição que você deseja deletar pelo menu abaixo.',

  MODERATION_LIMIT_CONFIG_DELETE_CHOICE_LABEL:
    '{role:string} • {kind:string} • {amount:number} • {expiresIn:number}s',

  MODERATION_LIMIT_CONFIG_DELETE_CONFIRMATION:
    'Você tem certeza que deseja deletar a restrição de cargo {role:string}?',

  MODERATION_LIMIT_CONFIG_DELETE_CANCELLED:
    'A remoção da restrição foi cancelada. Nada foi removido.',
  MODERATION_LIMIT_CONFIG_DELETE_SUCCESS:
    'A restrição foi removida com sucesso.',

  // Moderation (Limitations/Purge)

  MODERATION_LIMIT_CONFIG_PURGE_CONFIRMATION:
    'Você tem certeza que deseja **DELETAR TODAS** as restrições de cargo do servidor? Esta ação não pode ser desfeita.',

  MODERATION_LIMIT_CONFIG_PURGE_CANCELED:
    'A remoção das restrições foi cancelada. Nada foi removido.',
  MODERATION_LIMIT_CONFIG_PURGE_SUCCESS:
    'As restrições foram removidas com sucesso.',

  // Moderation (Limitations/List)

  MODERATION_LIMIT_CONFIG_LIST_TITLE: '🚏   Restrições de Cargo',
  MODERATION_LIMIT_CONFIG_LIST_DESCRIPTION: dedent`
    O tipo de restrição determina qual ação o moderador não pode fazer. Por exemplo, se você configurar o limite de banimentos para 3/hora, o moderador não poderá banir membros.
    \u200b
  `,

  MODERATION_LIMIT_CONFIG_LIST_ITEM_FOOTER:
    'Cargo (ID) • Tipo • Quantidade • Expira em (segundos)',

  MODERATION_LIMIT_CONFIG_LIST_ITEM:
    '{roleId:string} ** • ** {kind|{Any: Qualquer Ação, Ban: Banimento, Kick: Expulsão, Mute: Silenciamento, Warn: Aviso}} ** • ** {amount:number} ** • ** {expiresIn:number}',
} satisfies BaseTranslation;
