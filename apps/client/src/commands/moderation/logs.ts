import {
  PrismaClient,
  PunishmentKind,
  PunishmentStatus,
} from '@akane/database';
import {
  ActionRowBuilder,
  CachedType,
  ChatInputCommandInteraction,
  EmbedBuilder,
  GuildMember,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  time,
} from 'discord.js';
import { Discord, Guard } from 'discordx';

import { inGuild, hasPermission, GuardFor } from '~/guards/guilds';
import { Command, getLanguage } from '~/helpers/localization';
import { Pagination } from '~/helpers/pagination';

import { MemberOption } from './_shared';

const MAX_REASON_LENGTH = 28;
const MAX_PUNISHMENTS_PER_PAGE = 10;

const PUNISHMENT_EMOJIS_MAP = {
  [PunishmentKind.Ban]: '⚒️',
  [PunishmentKind.Kick]: '🚪',
  [PunishmentKind.Mute]: '🙊',
  [PunishmentKind.Warn]: '📰',
};

@Discord()
export default class Moderation {
  constructor(private readonly prisma: PrismaClient) {}

  @Guard(
    inGuild(),
    hasPermission({
      for: GuardFor.Both,
      clientPermissions: ['ModerateMembers'],
      userPermissions: ['ModerateMembers'],
    })
  )
  @Command({
    name: 'MODERATION_LOGS_NAME',
    description: 'MODERATION_LOGS_DESCRIPTION',
  })
  async handleLogs(
    @MemberOption() member: GuildMember,
    interaction: ChatInputCommandInteraction<CachedType>
  ) {
    const LL = getLanguage(interaction);

    const totalPunishmentsCount = await this.prisma.punishment.count({
      where: {
        guildId: interaction.guildId,
        userId: member.id,
        status: {
          not: PunishmentStatus.Revoked,
        },
      },
    });

    if (totalPunishmentsCount === 0) {
      return interaction.reply({
        content: LL.MODERATION_LOGS_NO_PUNISHMENTS({
          member: member.toString(),
        }),
        ephemeral: true,
      });
    }

    const last24HoursPunishmentsCount = await this.prisma.punishment.count({
      where: {
        guildId: interaction.guildId,
        userId: member.id,
        status: {
          not: PunishmentStatus.Revoked,
        },
        createdAt: {
          gte: new Date(Date.now() - 86400000),
        },
      },
    });

    const last30DaysPunishmentsCount = await this.prisma.punishment.count({
      where: {
        guildId: interaction.guildId,
        userId: member.id,
        status: {
          not: PunishmentStatus.Revoked,
        },
        createdAt: {
          gte: new Date(Date.now() - 2592000000),
        },
      },
    });

    const maxPages = Math.ceil(
      totalPunishmentsCount / MAX_PUNISHMENTS_PER_PAGE
    );

    const padSize = Math.max(totalPunishmentsCount.toString().length, 3);

    const paginationResult = await Pagination.paginate(interaction, {
      amount: maxPages,
      ephemeral: true,
      showPageNumber: true,
      resolver: async (page) => {
        const maxPushedPunishments =
          Math.max(page, 0) * MAX_PUNISHMENTS_PER_PAGE;

        const paginatedPunishments = await this.prisma.punishment.findMany({
          skip: maxPushedPunishments,
          take: MAX_PUNISHMENTS_PER_PAGE,
          where: {
            guildId: interaction.guildId,
            userId: member.id,
            status: {
              not: PunishmentStatus.Revoked,
            },
          },
        });

        const detailedPunishmentSelectMenu = new StringSelectMenuBuilder()
          .setPlaceholder(LL.MODERATION_LOGS_SELECT_MENU_PLACEHOLDER())
          .setOptions(
            paginatedPunishments.map((punishment) =>
              new StringSelectMenuOptionBuilder()
                .setValue(punishment.id.toString())
                .setEmoji({
                  name: PUNISHMENT_EMOJIS_MAP[punishment.kind],
                })
                .setLabel(
                  `#${punishment.id} ${
                    punishment.reason ?? LL.MODERATION_GENERIC_DEFAULT_REASON()
                  }`
                )
            )
          );

        const detailedPunishmentRow =
          new ActionRowBuilder<StringSelectMenuBuilder>();

        detailedPunishmentRow.addComponents(detailedPunishmentSelectMenu);

        const punishmentsMessages = paginatedPunishments.map((punishment) => {
          const id =
            '[``' +
            punishment.id.toString().padStart(padSize, '0') +
            '``(https://example.com)]';

          const reason =
            punishment.reason && punishment.reason.length > MAX_REASON_LENGTH
              ? punishment.reason.substring(0, MAX_REASON_LENGTH).trim() + '...'
              : punishment.reason ?? LL.MODERATION_GENERIC_DEFAULT_REASON();

          const emoji = PUNISHMENT_EMOJIS_MAP[punishment.kind];
          const createdAt = time(punishment.createdAt, 'f');

          return `${id} ${emoji} ${createdAt} > ${reason}`;
        });

        const paginatedEmbed = new EmbedBuilder();

        paginatedEmbed.setDescription(
          punishmentsMessages.join('\n') + '\n\u200b'
        );

        paginatedEmbed.setFooter({
          text: LL.MODERATION_LOGS_INFRACTIONS_OF({ member: member.user.tag }),
          iconURL: member.user.avatarURL() ?? member.user.defaultAvatarURL,
        });

        paginatedEmbed.addFields([
          {
            name: LL.LAST_24_HOURS(),
            value: LL.X_INFRACTIONS(last24HoursPunishmentsCount),
            inline: true,
          },
          {
            name: LL.LAST_30_DAYS(),
            value: LL.X_INFRACTIONS(last30DaysPunishmentsCount),
            inline: true,
          },
          {
            name: LL.TOTAL(),
            value: LL.X_INFRACTIONS(totalPunishmentsCount),
            inline: true,
          },
        ]);

        return {
          components: [detailedPunishmentRow],
          embeds: [paginatedEmbed],
        };
      },
    });

    switch (paginationResult) {
      case Pagination.Result.TimedOut:
        await interaction.editReply({
          components: [],
          content: LL.ERRORS.PAGINATION_TIMEOUT(),
          embeds: [],
        });

        break;

      default:
        break;
    }
  }
}
