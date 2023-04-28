import { PrismaClient, PunishmentStatus } from '@akane/database';
import { ChatInputCommandInteraction, type CachedType } from 'discord.js';
import { Discord, Guard } from 'discordx';

import { GuardFor, hasPermission, inGuild } from '../../guards/guilds';
import { Command, getLanguage } from '../../helpers/localization';

import { PunishmentIdOption } from './_shared';

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
    name: 'MODERATION_UNDO_NAME',
    description: 'MODERATION_UNDO_DESCRIPTION',
  })
  async handleUndo(
    @PunishmentIdOption() punishmentId: number,
    interaction: ChatInputCommandInteraction<CachedType>
  ) {
    const LL = getLanguage(interaction);

    const punishment = await this.prisma.punishment.findUnique({
      where: {
        id: punishmentId,
      },
    });

    if (!punishment) {
      await interaction.reply({
        content: LL.ERRORS.MODERATION_GENERIC_PUNISHMENT_NOT_FOUND(),
        ephemeral: true,
      });

      return;
    }

    const guild =
      interaction.guild ??
      (await interaction.client.guilds.fetch(punishment.guildId));

    const member = await guild.members.fetch({
      user: punishment.userId,
    });

    await this.prisma.punishment.update({
      where: { id: punishmentId },
      data: { status: PunishmentStatus.Revoked },
    });

    switch (punishment.kind) {
      case 'Ban':
        await guild.bans.remove(punishment.userId);
        break;

      case 'Mute':
        await member.timeout(null, 'Undoing mute');
        break;

      // For now we don't need to do anything, it's just to avoid the default.
      case 'Kick':
      case 'Warn':
        break;

      default:
        throw new Error(`Unknown punishment kind: ${punishment.kind}`);
    }

    await interaction.reply({
      content: LL.MODERATION_UNDO_SUCCESS(),
      ephemeral: true,
    });
  }
}
