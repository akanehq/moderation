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

  PAGINATION_FIRST: 'Primeira',
  PAGINATION_PREVIOUS: 'Anterior',

  PAGINATION_NEXT: 'Próxima',
  PAGINATION_LAST: 'Última',

  PAGINATION_CLOSE: 'Fechar',

  // Administration Quarantine

  ADMINISTRATION_QUARANTINE_CANCELLED:
    'Comando cancelado. O servidor não foi colocado em quarentena.',
  ADMINISTRATION_QUARANTINE_SUCCESS:
    'O servidor foi colocado em quarentena com sucesso.',
  ADMINISTRATION_UNQUARANTINE_SUCCESS:
    'O servidor foi removido da quarentena com sucesso.',

  // Moderation Generic

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

  // Moderation Undo

  MODERATION_UNDO_SUCCESS: 'A punição foi desfeita com sucesso.',

  // Moderation Logs

  MODERATION_LOGS_NO_PUNISHMENTS:
    'Não há punições registradas para {member:string} no servidor.',
  MODERATION_LOGS_SELECT_MENU_PLACEHOLDER:
    'Selecione uma punição para ver mais detalhes.',
  MODERATION_LOGS_INFRACTIONS_OF: 'Infrações de {member:string}',

  // Moderation Limitations

  MODERATION_LIMITATION_KIND:
    '{0|{Any: Qualquer Ação, Ban: Banimento, Kick: Expulsão, Mute: Silenciamento, Warn: Aviso}}',

  MODERATION_LIMIT_CONFIG_ATTENTION: 'Preste atenção nas permissões',
  MODERATION_LIMIT_CONFIG_ATTENTION_DESCRIPTION: dedent`
    **Para usar este recurso corretamente, o moderador não pode ter a permissão em questão** (por exemplo, se você configurar o limite de banimentos para 3/hora, o moderador não pode ter a permissão de banir membros), pois eu serei um intermediário que irá aplicar as punições.
  `,

  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_AMOUNT_LABEL: 'Quantidade',
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_EXPIRES_IN_LABEL:
    'Tempo (Segundos)',

  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_QUESTION:
    'Clique no botão abaixo para abrir o painel de criação de restrição de cargo.',
  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_ROLE_ID_LABEL: 'ID do Cargo',

  MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_TITLE:
    '🚏 Adicionar Restrição de Moderador',
  MODERATION_LIMIT_CONFIG_CREATE_ALREADY_EXISTS: dedent`
    Já existe uma restrição desse tipo para este cargo. Talvez você queira editar a restrição existente? Seleciona a opção "Listar Restrição" no menu anterior e selecione a restrição que você deseja editar.
  `,

  MODERATION_LIMIT_CONFIG_CREATE_DESCRIPTION:
    'Limita o número de {0|{Any: todas ações, Ban: banimentos, Kick: expulsões, Mute: silenciamentos, Warn: advertências}} que um moderador pode aplicar.',

  MODERATION_LIMIT_CONFIG_CREATE_SUCCESS: dedent`
    A restrição foi adicionada com sucesso, ela se aplicará aos membros com o cargo {role:string} a cada {amount:string} vezes que forem usar o comando, por {expiresIn:string} segundos.
  `,
  MODERATION_LIMIT_CONFIG_CREATE_WARNINGS_DESCRIPTION:
    'Limita o número de avisos que um moderador pode aplicar.',

  MODERATION_LIMIT_CONFIG_CREATE_WHICH_TYPE_OF_LIMITATION:
    'Qual tipo de restrição você deseja adicionar?',

  MODERATION_LIMIT_CONFIG_CREATE_WHICH_TYPE_OF_LIMITATION_PLACEHOLDER:
    'Selecione o tipo de restrição',

  MODERATION_LIMIT_CONFIG_DELETE_CHOICE_LABEL:
    '{role:string} • {kind:string} • {amount:number} • {expiresIn:number}s',

  MODERATION_LIMIT_CONFIG_DESCRIPTION: dedent`
    Com este recurso, você pode configurar o número de punições que um moderador consegue aplicar em um período de tempo determinado.

    Se o número de ações for excedido, o moderador será bloqueado de aplicar novas punições até que o tempo limite seja atingido. É bem útil para evitar novos moderadores de abusarem de sua posição.
    \u200b
  `,

  MODERATION_LIMIT_CONFIG_LIST_DESCRIPTION: dedent`
    O tipo de restrição determina qual ação o moderador não pode fazer. Por exemplo, se você configurar o limite de banimentos para 3/hora, o moderador não poderá banir membros.
    \u200b
  `,

  MODERATION_LIMIT_CONFIG_LIST_EMPTY:
    'Não há restrições de cargo configuradas neste servidor.',

  MODERATION_LIMIT_CONFIG_LIST_ITEM: dedent`
  {roleId:string} ** • ** {kind|{Any: Qualquer Ação, Ban: Banimento, Kick: Expulsão, Mute: Silenciamento, Warn: Aviso}} ** • ** {amount:number} ** • ** {expiresIn:number}
`,

  MODERATION_LIMIT_CONFIG_LIST_ITEM_FOOTER:
    'Cargo (ID) • Tipo • Quantidade • Tempo (Segundos)',
  MODERATION_LIMIT_CONFIG_LIST_TITLE: '🚏   Restrições de Cargo',

  MODERATION_LIMIT_CONFIG_PURGE_CANCELED:
    'A remoção das restrições foi cancelada.',

  MODERATION_LIMIT_CONFIG_PURGE_CONFIRMATION:
    'Você tem certeza que deseja remover todas as restrições de cargo?',
  MODERATION_LIMIT_CONFIG_PURGE_SUCCESS: 'Todas as restrições foram removidas.',

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

  MODERATION_LIMIT_CONFIG_TITLE: '🚏 Configurações de Restrição de Moderadores',

  MODERATION_LIMITATION_LIMIT_REACHED: dedent`
    Você não pode executar essa ação pois possui a restrição do tipo {kind|{Ban: banimento, Kick: expulsão, Mute: silenciamento, Warn: aviso}} ativa (usou {used} de {limit}), tente novamente {remainingTime:Date|dRelativeTime}.
  `,

  MODERATION_LIMIT_CONFIG_DELETE_PLACEHOLDER:
    'Selecione a restrição que você deseja deletar',

  MODERATION_LIMIT_CONFIG_DELETE_QUESTION:
    'Escolha a restrição que você deseja deletar pelo menu abaixo.',

  MODERATION_LIMIT_CONFIG_DELETE_CONFIRMATION:
    'Você tem certeza que deseja deletar a restrição de cargo {role:string}?',

  MODERATION_LIMIT_CONFIG_DELETE_CANCELLED:
    'A remoção da restrição foi cancelada.',
  MODERATION_LIMIT_CONFIG_DELETE_SUCCESS:
    'A restrição foi removida com sucesso.',

  MODERATION_LIMITATION_CREATE_ROLE_DOES_NOT_EXIST:
    'O cargo selecionado não existe ou não tenho permissão para vê-lo.',
} satisfies BaseTranslation;
