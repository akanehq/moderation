import { PrismaClient } from '@akane/database';
import {
  ButtonStyle,
  ChatInputCommandInteraction,
  PermissionsBitField,
  type CachedType,
} from 'discord.js';
import { Discord } from 'discordx';
import { z } from 'zod';

import { MODERATION_PERMISSIONS } from '../../constants/permissions';
import { Inquirer } from '../../helpers/inquirer';
import { Command, getLanguage } from '../../helpers/localization';

const QuarantineDataSchema = z.array(
  z.object({
    id: z.string(),
    bitfield: z.number(),
  })
);

type QuarantineData = z.infer<typeof QuarantineDataSchema>;

@Discord()
export default class Administration {
  constructor(private readonly prisma: PrismaClient) {}

  @Command()
  async quarantine(interaction: ChatInputCommandInteraction<CachedType>) {
    const LL = getLanguage(interaction);

    const isQuarantined = await this.prisma.quarantine.findFirst({
      where: {
        guildId: interaction.guildId,
      },
      select: {
        id: true,
      },
    });

    if (isQuarantined) {
      await interaction.reply({
        content: LL.ERRORS.ADMINISTRATION_QUARANTINE_ALREADY_QUARANTINED(),
        ephemeral: true,
      });

      return;
    }

    // Handle the case where the guild is not quarantined and the user wants to quarantine it.
    const { result: confirmation } = await Inquirer.awaitButtons(interaction, {
      setButtonsDisabledWhenCollected: true,
      question: {
        content: LL.INQUIRER_CONFIRMATION_QUESTION(),
      },
      choices: [
        {
          id: 'Yes' as const,
          emoji: '✅',
          label: LL.INQUIRER_CONFIRMATION_YES(),
          style: ButtonStyle.Success,
        },
        {
          id: 'No' as const,
          emoji: '❌',
          label: LL.INQUIRER_CONFIRMATION_NO(),
          style: ButtonStyle.Danger,
        },
      ],
    });

    if (confirmation === 'No') {
      await interaction.reply({
        content: LL.ADMINISTRATION_QUARANTINE_CANCELLED(),
        ephemeral: true,
      });

      return;
    }

    const guild = interaction.guild
      ? interaction.guild
      : await interaction.client.guilds.fetch(interaction.guildId);

    const roles = await guild.roles.fetch();
    const channels = await guild.channels.fetch();

    if (!channels) {
      throw new Error('Unable to fetch channels');
    }

    const preQuarantineData: QuarantineData = [];

    for (const role of roles.values()) {
      // We don't want to quarantine the moderator roles because they need to be
      // able to resolve the problem that caused the quarantine.
      if (role.permissions.has(MODERATION_PERMISSIONS)) {
        continue;
      }

      preQuarantineData.push({
        id: role.id,
        bitfield: Number(role.permissions.bitfield),
      });

      await role.setPermissions(
        role.permissions.remove([
          PermissionsBitField.Flags.SendMessages,
          PermissionsBitField.Flags.SendTTSMessages,
          PermissionsBitField.Flags.SendMessagesInThreads,
          PermissionsBitField.Flags.Connect,
          PermissionsBitField.Flags.Speak,
        ])
      );
    }

    await this.prisma.guild.upsert({
      where: { id: guild.id },
      create: {
        id: guild.id,
        Quarantine: {
          create: {
            data: preQuarantineData,
          },
        },
      },
      update: {
        Quarantine: {
          create: {
            data: preQuarantineData,
          },
        },
      },
    });

    await interaction.editReply({
      content: LL.ADMINISTRATION_QUARANTINE_SUCCESS(),
      components: [],
    });
  }

  @Command()
  async unquarantine(interaction: ChatInputCommandInteraction<CachedType>) {
    const LL = getLanguage(interaction);

    const guildQuarantine = await this.prisma.guild.findUnique({
      where: {
        id: interaction.guildId,
      },
      select: {
        Quarantine: true,
      },
    });

    if (!guildQuarantine?.Quarantine) {
      await interaction.reply({
        content: LL.ERRORS.ADMINISTRATION_UNQUARANTINE_NOT_QUARANTINED(),
        ephemeral: true,
      });

      return;
    }

    const preQuarantineData = QuarantineDataSchema.parse(
      guildQuarantine.Quarantine.data
    );

    const guild = interaction.guild
      ? interaction.guild
      : await interaction.client.guilds.fetch(interaction.guildId);

    const roles = await guild.roles.fetch();

    const me = guild.members.me ?? (await guild.members.fetchMe());

    for (const role of roles.values()) {
      const preQuarantineItemData = preQuarantineData.find(
        (data) => data.id === role.id
      );

      if (
        !preQuarantineItemData ||
        role.comparePositionTo(me.roles.highest) >= 0
      ) {
        continue;
      }

      await role.setPermissions(BigInt(preQuarantineItemData.bitfield));
    }

    await this.prisma.guild.update({
      where: {
        id: guild.id,
      },
      data: {
        Quarantine: {
          delete: true,
        },
      },
    });

    await interaction.reply({
      content: LL.ADMINISTRATION_UNQUARANTINE_SUCCESS(),
      ephemeral: true,
    });
  }
}
