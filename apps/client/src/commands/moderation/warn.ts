import { PrismaClient, PunishmentKind } from '@akane/database';
import {
  ActionRowBuilder,
  ButtonBuilder,
  ChatInputCommandInteraction,
  EmbedBuilder,
  GuildMember,
  type CachedType,
} from 'discord.js';
import { Discord, Guard } from 'discordx';

import { GuardFor, hasPermission, inGuild } from '../../guards/guilds';
import { Command, getLanguage } from '../../helpers/localization';
import { catchPromiseError } from '../../helpers/promises';

import {
  AppealButton,
  AttachmentsOption,
  DeleteDaysOption,
  ExpiresAtOption,
  GetAttachmentButton,
  MemberOption,
  ModRegExpEvents,
  ReasonOption,
  SilentOption,
  parseMediaUrlsInput,
} from './_shared';

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
    name: 'MODERATION_WARN_NAME',
    description: 'MODERATION_WARN_DESCRIPTION',
  })
  async handleWarn(
    @MemberOption() member: GuildMember,
    @ReasonOption() reason: Maybe<string>,
    @SilentOption() silent: Maybe<boolean>,
    @ExpiresAtOption() expiresAt: Maybe<string>,
    @DeleteDaysOption() deleteDays: Maybe<number>,
    @AttachmentsOption() rawAttachments: Maybe<string>,
    interaction: ChatInputCommandInteraction<CachedType>
  ) {
    const LL = getLanguage(interaction);
    const attachments = parseMediaUrlsInput(rawAttachments);

    if (attachments instanceof Error) {
      await interaction.reply({
        content: LL.ERRORS.MODERATION_GENERIC_INVALID_MEDIA_URLS(),
        ephemeral: true,
      });

      return;
    }

    if (member.id === interaction.user.id) {
      await interaction.reply({
        content: LL.ERRORS.MODERATION_GENERIC_CANNOT_PUNISH_SELF(),
        ephemeral: true,
      });

      return;
    }

    if (member.id === interaction.client.user.id) {
      await interaction.reply({
        content: LL.ERRORS.MODERATION_GENERIC_CANNOT_PUNISH_BOT(),
        ephemeral: true,
      });

      return;
    }

    const punishment = await this.prisma.punishment.create({
      data: {
        Guild: {
          connectOrCreate: {
            where: { id: interaction.guildId },
            create: { id: interaction.guildId },
          },
        },
        Author: {
          connectOrCreate: {
            where: { id: interaction.user.id },
            create: { id: interaction.user.id },
          },
        },
        User: {
          connectOrCreate: {
            where: { id: member.id },
            create: { id: member.id },
          },
        },
        kind: PunishmentKind.Warn,
        reason,
        expiresAt,
        attachments,
      },
      select: {
        id: true,
      },
    });

    if (silent) {
      await interaction.reply({
        content: LL.MODERATION_GENERIC_PUNISHMENT_SILENT_SUCCESS(),
        ephemeral: true,
      });

      return;
    }

    const buttonsRow = new ActionRowBuilder<ButtonBuilder>();

    if (attachments.length > 0) {
      const getAttachmentButtonID = ModRegExpEvents.createEventID(
        'GetAttachment',
        `${punishment.id}`
      );

      buttonsRow.addComponents(
        GetAttachmentButton.setLabel(
          LL.MODERATION_GENERIC_GET_ATTACHMENT_BUTTON_LABEL(attachments.length)
        ).setCustomId(getAttachmentButtonID)
      );
    }

    const appealButtonID = ModRegExpEvents.createEventID(
      'AppealPunishment',
      `${punishment.id}`
    );

    buttonsRow.addComponents(
      AppealButton.setLabel(
        LL.MODERATION_GENERIC_APPEAL_BUTTON_LABEL()
      ).setCustomId(appealButtonID)
    );

    const guild = interaction.guild
      ? interaction.guild
      : await interaction.client.guilds.fetch(interaction.guildId);

    const punishmentEmbed = new EmbedBuilder()
      .setTitle(
        LL.MODERATION_GENERIC_PUNISHMENT_EMBED_TITLE({
          guild: guild.name,
          kind: 'Warn',
        })
      )
      .setDescription(
        LL.MODERATION_GENERIC_PUNISHMENT_EMBED_DESCRIPTION({
          reason: reason ?? LL.MODERATION_GENERIC_DEFAULT_REASON(),
          author: interaction.user.tag,
          guild: guild.name,
        })
      )
      .addFields({
        name: LL.ATTACHMENTS(),
        value: attachments.join('\n'),
      })
      .setFooter({
        text: LL.MODERATION_GENERIC_APPEAL_FOOTER(),
      });

    const [, messageSentError] = await catchPromiseError(
      member.send({
        components: [buttonsRow],
        embeds: [punishmentEmbed],
      })
    );

    await interaction.editReply({
      content: !messageSentError
        ? LL.MODERATION_GENERIC_PUNISHMENT_SUCCESS()
        : LL.MODERATION_GENERIC_PUNISHMENT_SUCCESS_NO_DM(),
    });
  }
}
