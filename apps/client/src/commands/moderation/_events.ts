import { PrismaClient } from '@akane/database';
import { ButtonInteraction, EmbedBuilder } from 'discord.js';
import { ButtonComponent, Discord } from 'discordx';

import { Colors } from '~/constants/colors';
import { getLanguage } from '~/helpers/localization';
import { Pagination } from '~/helpers/pagination';

import {
  ModAppealPunishmentRegExp,
  ModGetAttachmentRegExp,
  ModRegExpEvents,
} from './_shared';

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
    throw new Error('Not implemented');
  }
}
