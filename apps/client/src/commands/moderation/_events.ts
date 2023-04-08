import { GuildFeature, PrismaClient } from '@akane/database';
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  CachedType,
  EmbedBuilder,
  TextInputBuilder,
  TextInputStyle,
} from 'discord.js';
import { ButtonComponent, Discord, Guard } from 'discordx';

import { Colors } from '~/constants/colors';
import { inGuild } from '~/guards/guilds';
import { Inquirer } from '~/helpers/inquirer';
import { getLanguage } from '~/helpers/localization';
import { Pagination } from '~/helpers/pagination';

import {
  ModAppealPunishmentRegExp,
  ModAppealPunishmentResponseRegExp,
  ModGetAttachmentRegExp,
  ModRegExpEvents,
} from './_shared';

const MIN_APPEAL_LENGTH = 32;
const MAX_APPEAL_LENGTH = 128;

@Discord()
export default class Moderation {
  constructor(private readonly prisma: PrismaClient) {}

  @ButtonComponent({ id: ModGetAttachmentRegExp })
  async onGetAttachment(interaction: ButtonInteraction) {
    if (interaction.inGuild()) {
      throw new Error('This button is not supposed to be used in a guild');
    }

    const [rawPunishmentID] = ModRegExpEvents.parseEventID<'GetAttachment'>(
      interaction.customId
    );

    const punishmentID = Number(rawPunishmentID);

    const punishment = await this.prisma.punishment.findUnique({
      where: { id: punishmentID },
    });

    const LL = getLanguage(interaction);

    if (!punishment) {
      await interaction.reply({
        content: LL.ERRORS.MODERATION_GET_ATTACHMENT_PUNISHMENT_NOT_FOUND(),
        ephemeral: true,
      });

      return;
    }

    const paginationResult = await Pagination.paginate(interaction, {
      eagerLoad: true,
      ephemeral: true,
      showPageNumber: true,
      showCloseButton: true,
      amount: punishment.attachments.length,
      resolver: (page) => {
        const embed = new EmbedBuilder()
          .setColor(Colors.Default)
          .setImage(punishment.attachments[page - 1])
          .setFooter({
            text: punishment.attachments[page - 1],
          });

        return {
          embeds: [embed],
        };
      },
    });

    switch (paginationResult) {
      case Pagination.Result.Closed:
        await interaction.editReply({
          content: LL.PAGINATION_CLOSED(),
        });

        break;

      case Pagination.Result.TimedOut:
        await interaction.editReply({
          content: LL.ERRORS.PAGINATION_TIMEOUT(),
        });

        break;

      default:
        throw new Error('Unexpected pagination result');
    }
  }

  @ButtonComponent({ id: ModAppealPunishmentRegExp })
  async onAppealPunishment(interaction: ButtonInteraction) {
    if (interaction.inGuild()) {
      throw new Error('This button is not supposed to be used in a guild');
    }

    const [rawPunishmentID] = ModRegExpEvents.parseEventID<'AppealPunishment'>(
      interaction.customId
    );

    const punishmentID = Number(rawPunishmentID);

    const punishment = await this.prisma.punishment.findUnique({
      where: { id: punishmentID },
      include: { Guild: { select: { features: true } } },
    });

    const LL = getLanguage(interaction);

    if (!punishment) {
      await interaction.reply({
        content: LL.ERRORS.MODERATION_GET_ATTACHMENT_PUNISHMENT_NOT_FOUND(),
        ephemeral: true,
      });

      return;
    }

    if (!punishment.Guild.features.includes(GuildFeature.Appealable)) {
      await interaction.reply({
        content: LL.ERRORS.MODERATION_APPEAL_PUNISHMENT_NOT_APPEALABLE(),
        ephemeral: true,
      });

      return;
    }

    const guildWithAppealChannel = await this.prisma.guild.findUnique({
      where: { id: punishment.guildId },
      select: { appealChannelId: true },
    });

    if (!guildWithAppealChannel?.appealChannelId) {
      await interaction.reply({
        content: LL.ERRORS.MODERATION_APPEAL_PUNISHMENT_NO_CHANNEL_IN_DB(),
        ephemeral: true,
      });

      return;
    }

    const appealChannel = await interaction.client.channels.fetch(
      guildWithAppealChannel.appealChannelId
    );

    if (!appealChannel) {
      await interaction.reply({
        content: LL.ERRORS.MODERATION_APPEAL_PUNISHMENT_NO_CHANNEL(),
        ephemeral: true,
      });

      return;
    }

    // Since it's an error an "possible error" that will never happen, we can
    // safely ignore it because we handle it in the creation of the appeal channel.
    if (!appealChannel.isTextBased()) {
      throw new Error('Appeal channel is not text based');
    }

    const modalResponse = await Inquirer.awaitModal(interaction, {
      title: LL.MODERATION_APPEAL_PUNISHMENT_MODAL_TITLE(),
      question: LL.MODERATION_APPEAL_PUNISHMENT_MODAL_QUESTION(punishment.id),
      startButtonLabel: LL.OPEN(),
      inputs: [
        new TextInputBuilder()
          .setCustomId('reason')
          .setMinLength(MIN_APPEAL_LENGTH)
          .setMaxLength(MAX_APPEAL_LENGTH)
          .setStyle(TextInputStyle.Paragraph)
          .setPlaceholder(LL.MODERATION_APPEAL_PUNISHMENT_MODAL_PLACEHOLDER()),
      ],
    });

    const appeal = await this.prisma.appeal.create({
      data: {
        Guild: { connect: { id: punishment.guildId } },
        User: { connect: { id: punishment.userId } },
        reason: modalResponse.result.reason,
      },
    });

    const informationEmbed = new EmbedBuilder()
      .setColor(Colors.Default)
      .setTitle(LL.MODERATION_APPEAL_PUNISHMENT_INFORMATION_TITLE())
      .setDescription(
        LL.MODERATION_APPEAL_PUNISHMENT_INFORMATION_DESCRIPTION({
          reason: appeal.reason,
          member: `<@${punishment.userId}>`,
          punishmentId: punishment.id,
        })
      )
      .setFooter({
        text: LL.MODERATION_APPEAL_PUNISHMENT_INFORMATION_FOOTER(),
      });

    const acceptAppealPunishmentId = ModRegExpEvents.createEventID(
      'AppealPunishmentResponse',
      `${appeal.id}`,
      'ACCEPT'
    );

    const denyAppealPunishmentId = ModRegExpEvents.createEventID(
      'AppealPunishmentResponse',
      `${appeal.id}`,
      'DENY'
    );

    const acceptAppealButton = new ButtonBuilder()
      .setLabel(LL.ACCEPT())
      .setCustomId(acceptAppealPunishmentId)
      .setStyle(ButtonStyle.Success);

    const denyAppealButton = new ButtonBuilder()
      .setLabel(LL.DECLINE())
      .setCustomId(denyAppealPunishmentId)
      .setStyle(ButtonStyle.Danger);

    const appealRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      acceptAppealButton,
      denyAppealButton
    );

    await appealChannel.send({
      content: LL.MODERATION_APPEAL_PUNISHMENT_GUILD_MESSAGE({
        member: `<@${punishment.userId}>`,
        punishmentId: punishment.id,
      }),
      components: [appealRow],
      embeds: [informationEmbed],
    });

    await interaction.reply({
      content: LL.MODERATION_APPEAL_PUNISHMENT_INFORMATION_SUCCESS(),
      ephemeral: true,
    });
  }

  @Guard(inGuild())
  @ButtonComponent({ id: ModAppealPunishmentResponseRegExp })
  async onAppealPunishmentResponse(interaction: ButtonInteraction<CachedType>) {
    throw new Error('Not implemented yet');
  }
}
