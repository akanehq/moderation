import { ModerationLimitationKind, PrismaClient } from '@akane/database';
import {
  ActionRowBuilder,
  ButtonStyle,
  CachedType,
  ChatInputCommandInteraction,
  Colors,
  EmbedBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuInteraction,
  StringSelectMenuOptionBuilder,
  TextInputBuilder,
  TextInputStyle,
} from 'discord.js';
import { Discord, Guard, SelectMenuComponent } from 'discordx';

import { GuardFor, hasPermission, inGuild } from '~/guards/guilds';
import { replyOrFollowUp } from '~/helpers/discord';
import { Inquirer } from '~/helpers/inquirer';
import { Command, Group, getLanguage } from '~/helpers/localization';
import { Pagination } from '~/helpers/pagination';

enum ModerationLimitationAction {
  Create = 'Create',
  Delete = 'Delete',
  Purge = 'Purge',
  List = 'List',
}
const ACTIONS_EMOJIS_MAP = {
  [ModerationLimitationAction.Create]: '🚫',
  [ModerationLimitationAction.Delete]: '⚪',
  [ModerationLimitationAction.Purge]: '🚮',
  [ModerationLimitationAction.List]: '📜',
};

const LIMITATION_EMOJIS_MAP = {
  [ModerationLimitationKind.Any]: '🔮',
  [ModerationLimitationKind.Ban]: '⚒️',
  [ModerationLimitationKind.Kick]: '🚪',
  [ModerationLimitationKind.Mute]: '🙊',
  [ModerationLimitationKind.Warn]: '📰',
};

const DASHBOARD_SELECT_MENU_ID = 'MODERATION_LIMITATION_DASHBOARD';
const MAX_ITEMS_PER_PAGE = 10;

@Group({})
@Discord()
export default class Config {
  constructor(private readonly prisma: PrismaClient) {}

  @Guard(
    inGuild(),
    hasPermission({
      for: GuardFor.User,
      userPermissions: ['Administrator'],
    })
  )
  @Command()
  async configureModerationLimitation(
    interaction: ChatInputCommandInteraction<CachedType>
  ) {
    const LL = getLanguage(interaction);

    const dashboardEmbed = new EmbedBuilder()
      .setColor(Colors.Default)
      .setTitle(LL.MODERATION_LIMIT_CONFIG_TITLE())
      .setDescription(LL.MODERATION_LIMIT_CONFIG_DESCRIPTION())
      .addFields([
        {
          name: LL.MODERATION_LIMIT_CONFIG_ATTENTION(),
          value: LL.MODERATION_LIMIT_CONFIG_ATTENTION_DESCRIPTION(),
        },
      ]);

    const dashboardSelectMenu = new StringSelectMenuBuilder()
      .setCustomId(DASHBOARD_SELECT_MENU_ID)
      .addOptions([
        new StringSelectMenuOptionBuilder()
          .setValue(ModerationLimitationAction.Create)
          .setEmoji({
            name: ACTIONS_EMOJIS_MAP[ModerationLimitationAction.Create],
          })
          .setLabel(
            LL.MODERATION_LIMIT_CONFIG_SELECT_OPTION_CREATE_RESTRICTION()
          )
          .setDescription(
            LL.MODERATION_LIMIT_CONFIG_SELECT_OPTION_CREATE_RESTRICTION_DESCRIPTION()
          ),

        new StringSelectMenuOptionBuilder()
          .setValue(ModerationLimitationAction.Delete)
          .setEmoji({
            name: ACTIONS_EMOJIS_MAP[ModerationLimitationAction.Delete],
          })
          .setLabel(
            LL.MODERATION_LIMIT_CONFIG_SELECT_OPTION_DELETE_RESTRICTION()
          )
          .setDescription(
            LL.MODERATION_LIMIT_CONFIG_SELECT_OPTION_DELETE_RESTRICTION_DESCRIPTION()
          ),

        new StringSelectMenuOptionBuilder()
          .setValue(ModerationLimitationAction.List)
          .setEmoji({
            name: ACTIONS_EMOJIS_MAP[ModerationLimitationAction.List],
          })
          .setLabel(
            LL.MODERATION_LIMIT_CONFIG_SELECT_OPTION_LIST_RESTRICTIONS()
          )
          .setDescription(
            LL.MODERATION_LIMIT_CONFIG_SELECT_OPTION_LIST_RESTRICTIONS_DESCRIPTION()
          ),

        new StringSelectMenuOptionBuilder()
          .setValue(ModerationLimitationAction.Purge)
          .setEmoji({
            name: ACTIONS_EMOJIS_MAP[ModerationLimitationAction.Purge],
          })
          .setLabel(LL.MODERATION_LIMIT_CONFIG_SELECT_OPTION_PURGE())
          .setDescription(
            LL.MODERATION_LIMIT_CONFIG_SELECT_OPTION_PURGE_DESCRIPTION()
          ),
      ]);

    const dashboardRow = new ActionRowBuilder<StringSelectMenuBuilder>();
    dashboardRow.addComponents(dashboardSelectMenu);

    await interaction.reply({
      components: [dashboardRow],
      embeds: [dashboardEmbed],
      ephemeral: true,
    });
  }

  @Guard(inGuild())
  @SelectMenuComponent({ id: DASHBOARD_SELECT_MENU_ID })
  async moderationLimitationsDashboard(
    interaction: StringSelectMenuInteraction<CachedType>
  ) {
    switch (interaction.values[0]) {
      case ModerationLimitationAction.Create:
        await this.create(interaction);
        break;

      case ModerationLimitationAction.Delete:
        await this.delete(interaction);
        break;

      case ModerationLimitationAction.Purge:
        await this.purge(interaction);
        break;

      case ModerationLimitationAction.List:
        await this.list(interaction);
        break;

      default:
        throw new Error(
          `Unknown moderation limitation action: ${interaction.values[0]}`
        );
    }
  }

  private async create(interaction: StringSelectMenuInteraction<CachedType>) {
    if (!interaction.inGuild()) {
      throw new Error('Invalid interaction');
    }

    const LL = getLanguage(interaction);

    const limitationKind = await Inquirer.awaitSelectMenu(interaction, {
      placeholder:
        LL.MODERATION_LIMIT_CONFIG_CREATE_WHICH_TYPE_OF_LIMITATION_PLACEHOLDER(),
      question: {
        content: LL.MODERATION_LIMIT_CONFIG_CREATE_WHICH_TYPE_OF_LIMITATION(),
      },
      choices: [
        {
          id: ModerationLimitationKind.Any,
          label: LL.ANY(),
          emoji: LIMITATION_EMOJIS_MAP[ModerationLimitationKind.Any],
          description: LL.MODERATION_LIMIT_CONFIG_CREATE_DESCRIPTION('Any'),
        },
        {
          id: ModerationLimitationKind.Ban,
          label: LL.BANS(),
          emoji: LIMITATION_EMOJIS_MAP[ModerationLimitationKind.Ban],
          description: LL.MODERATION_LIMIT_CONFIG_CREATE_DESCRIPTION('Ban'),
        },
        {
          id: ModerationLimitationKind.Kick,
          label: LL.KICKS(),
          emoji: LIMITATION_EMOJIS_MAP[ModerationLimitationKind.Kick],
          description: LL.MODERATION_LIMIT_CONFIG_CREATE_DESCRIPTION('Kick'),
        },
        {
          id: ModerationLimitationKind.Mute,
          label: LL.MUTES(),
          emoji: LIMITATION_EMOJIS_MAP[ModerationLimitationKind.Mute],
          description: LL.MODERATION_LIMIT_CONFIG_CREATE_DESCRIPTION('Mute'),
        },
        {
          id: ModerationLimitationKind.Warn,
          label: LL.WARNS(),
          emoji: LIMITATION_EMOJIS_MAP[ModerationLimitationKind.Warn],
          description: LL.MODERATION_LIMIT_CONFIG_CREATE_DESCRIPTION('Warn'),
        },
      ],
    });

    const limitationInfo = await Inquirer.awaitModal(interaction, {
      startButtonLabel: LL.CONTINUE(),
      title: LL.MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_TITLE(),
      question: {
        content: LL.MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_QUESTION(),
      },
      inputs: [
        new TextInputBuilder()
          .setMinLength(17)
          .setMaxLength(19)
          .setStyle(TextInputStyle.Short)
          .setPlaceholder('1234567890123456789')
          .setRequired()
          .setCustomId('ROLE_ID')
          .setLabel(
            LL.MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_ROLE_ID_LABEL()
          ),
        new TextInputBuilder()
          .setRequired(true)
          .setCustomId('AMOUNT')
          .setPlaceholder('15')
          .setStyle(TextInputStyle.Short)
          .setLabel(
            LL.MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_AMOUNT_LABEL()
          ),
        new TextInputBuilder()
          .setRequired(true)
          .setCustomId('EXPIRES_IN_SECONDS')
          .setPlaceholder('3600')
          .setValue('3600')
          .setStyle(TextInputStyle.Short)
          .setLabel(
            LL.MODERATION_LIMIT_CONFIG_CREATE_ADD_LIMITATION_EXPIRES_IN_LABEL()
          ),
      ],
    });

    const guild = interaction.guild
      ? interaction.guild
      : await interaction.client.guilds.fetch(interaction.guildId);

    const role = await guild.roles.fetch(limitationInfo.result.ROLE_ID, {
      cache: true,
    });

    if (!role) {
      await limitationInfo.interaction.followUp({
        components: [],
        content: LL.MODERATION_LIMITATION_CREATE_ROLE_DOES_NOT_EXIST(),
        ephemeral: true,
      });

      return;
    }

    const alreadyExists = await this.prisma.moderationLimitation.count({
      where: {
        guildId: interaction.guildId,
        roleId: role.id,
        kind: limitationKind,
      },
    });

    if (alreadyExists) {
      await limitationInfo.interaction.editReply({
        components: [],
        content: LL.MODERATION_LIMIT_CONFIG_CREATE_ALREADY_EXISTS(),
      });

      return;
    }

    await this.prisma.guild.upsert({
      where: {
        id: guild.id,
      },
      create: {
        id: guild.id,
        ModerationLimitation: {
          create: {
            kind: limitationKind,
            roleId: limitationInfo.result.ROLE_ID,
            amount: parseInt(limitationInfo.result.AMOUNT, 10),
            expiresIn: parseInt(limitationInfo.result.EXPIRES_IN_SECONDS, 10),
          },
        },
      },
      update: {
        ModerationLimitation: {
          create: {
            kind: limitationKind,
            roleId: limitationInfo.result.ROLE_ID,
            amount: parseInt(limitationInfo.result.AMOUNT, 10),
            expiresIn: parseInt(limitationInfo.result.EXPIRES_IN_SECONDS, 10),
          },
        },
      },
    });

    await limitationInfo.interaction.editReply({
      components: [],
      content: LL.MODERATION_LIMIT_CONFIG_CREATE_SUCCESS({
        role: role.toString(),
        amount: limitationInfo.result.AMOUNT,
        expiresIn: limitationInfo.result.EXPIRES_IN_SECONDS,
      }),
    });
  }

  private async delete(interaction: StringSelectMenuInteraction<CachedType>) {
    const LL = getLanguage(interaction);

    const limitationsCount = await this.prisma.moderationLimitation.count({
      where: {
        guildId: interaction.guildId,
      },
    });

    if (limitationsCount === 0) {
      await replyOrFollowUp(interaction, {
        content: LL.MODERATION_LIMIT_CONFIG_LIST_EMPTY(),
        components: [],
        ephemeral: true,
      });

      return;
    }

    const guildLimitations = await this.prisma.moderationLimitation.findMany({
      where: {
        guildId: interaction.guildId,
      },
      select: {
        id: true,
        kind: true,
        roleId: true,
        amount: true,
        expiresIn: true,
      },
    });

    const guild = interaction.guild
      ? interaction.guild
      : await interaction.client.guilds.fetch(interaction.guildId);

    const selectedLimitation = await Inquirer.awaitSelectMenu(interaction, {
      placeholder: LL.MODERATION_LIMIT_CONFIG_DELETE_PLACEHOLDER(),
      question: {
        content: LL.MODERATION_LIMIT_CONFIG_DELETE_QUESTION(),
      },
      choices: guildLimitations.map((limitation) => {
        const role = guild.roles.cache.get(limitation.roleId);

        return {
          id: limitation.id,
          emoji: LIMITATION_EMOJIS_MAP[limitation.kind],
          label: LL.MODERATION_LIMIT_CONFIG_DELETE_CHOICE_LABEL({
            role: role?.name ?? limitation.roleId,
            kind: LL.MODERATION_LIMITATION_KIND(limitation.kind),
            amount: limitation.amount,
            expiresIn: limitation.expiresIn,
          }),
        };
      }),
    });

    const limitation = guildLimitations.find(
      (limitation) => limitation.id === selectedLimitation
    );

    if (!limitation) {
      throw new Error('Invalid limitation');
    }

    const role = await guild.roles.fetch(limitation.roleId, {
      cache: true,
    });

    if (!role) {
      throw new Error('Invalid role');
    }

    const { result: confirmation, interaction: confirmationInteraction } =
      await Inquirer.awaitButtons(interaction, {
        setButtonsDisabledWhenCollected: true,
        question: {
          content: LL.MODERATION_LIMIT_CONFIG_DELETE_CONFIRMATION({
            role: role.toString(),
          }),
        },
        choices: [
          {
            id: 'Yes',
            emoji: '✅',
            label: LL.INQUIRER_CONFIRMATION_YES(),
            style: ButtonStyle.Success,
          },
          {
            id: 'No',
            emoji: '❌',
            label: LL.INQUIRER_CONFIRMATION_NO(),
            style: ButtonStyle.Danger,
          },
        ],
      });

    if (confirmation !== 'Yes') {
      await confirmationInteraction.editReply({
        components: [],
        content: LL.MODERATION_LIMIT_CONFIG_DELETE_CANCELLED(),
      });

      return;
    }

    await this.prisma.moderationLimitation.delete({
      where: {
        id: limitation.id,
      },
    });

    await confirmationInteraction.editReply({
      components: [],
      content: LL.MODERATION_LIMIT_CONFIG_DELETE_SUCCESS(),
    });
  }

  private async purge(interaction: StringSelectMenuInteraction<CachedType>) {
    const LL = getLanguage(interaction);

    const limitationsCount = await this.prisma.moderationLimitation.count({
      where: {
        guildId: interaction.guildId,
      },
    });

    if (limitationsCount === 0) {
      await replyOrFollowUp(interaction, {
        content: LL.MODERATION_LIMIT_CONFIG_LIST_EMPTY(),
        components: [],
        ephemeral: true,
      });

      return;
    }

    const { result: confirmation } = await Inquirer.awaitButtons(interaction, {
      setButtonsDisabledWhenCollected: true,
      question: {
        content: LL.MODERATION_LIMIT_CONFIG_PURGE_CONFIRMATION(),
      },
      choices: [
        {
          id: 'Yes',
          emoji: '✅',
          label: LL.INQUIRER_CONFIRMATION_YES(),
          style: ButtonStyle.Success,
        },
        {
          id: 'No',
          emoji: '❌',
          label: LL.INQUIRER_CONFIRMATION_NO(),
          style: ButtonStyle.Danger,
        },
      ],
    });

    if (confirmation === 'No') {
      await replyOrFollowUp(interaction, {
        content: LL.MODERATION_LIMIT_CONFIG_PURGE_CANCELED(),
        components: [],
      });

      return;
    }

    await this.prisma.moderationLimitation.deleteMany({
      where: {
        guildId: interaction.guildId,
      },
    });

    await replyOrFollowUp(interaction, {
      content: LL.MODERATION_LIMIT_CONFIG_PURGE_SUCCESS(),
      components: [],
    });
  }

  private async list(interaction: StringSelectMenuInteraction<CachedType>) {
    const LL = getLanguage(interaction);

    const limitationsCount = await this.prisma.moderationLimitation.count({
      where: {
        guildId: interaction.guildId,
      },
    });

    if (limitationsCount === 0) {
      await replyOrFollowUp(interaction, {
        content: LL.MODERATION_LIMIT_CONFIG_LIST_EMPTY(),
        components: [],
        ephemeral: true,
      });

      return;
    }

    const maxPages = Math.ceil(limitationsCount / MAX_ITEMS_PER_PAGE);

    await Pagination.paginate(interaction, {
      amount: maxPages,
      ephemeral: true,
      resolver: async (page) => {
        const maxLimitations = Math.max(page, 0) * MAX_ITEMS_PER_PAGE;

        const limitations = await this.prisma.moderationLimitation.findMany({
          take: MAX_ITEMS_PER_PAGE,
          skip: maxLimitations,
          where: {
            guildId: interaction.guildId,
          },
        });

        const embed = new EmbedBuilder()
          .setColor(Colors.Default)
          .setTitle(LL.MODERATION_LIMIT_CONFIG_LIST_TITLE())
          .setDescription(LL.MODERATION_LIMIT_CONFIG_LIST_DESCRIPTION())
          .setFooter({
            text: LL.MODERATION_LIMIT_CONFIG_LIST_ITEM_FOOTER(),
          });

        limitations.forEach((limitation, index, array) => {
          embed.addFields({
            name: `${
              LIMITATION_EMOJIS_MAP[limitation.kind]
            } ${LL.MODERATION_LIMITATION_KIND(limitation.kind)}`,
            value:
              LL.MODERATION_LIMIT_CONFIG_LIST_ITEM(limitation) +
              (index === array.length - 1 ? '' : '\n\u200b'),
          });
        });

        return {
          embeds: [embed],
        };
      },
    });
  }
}
