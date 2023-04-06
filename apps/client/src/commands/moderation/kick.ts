import { PrismaClient } from '@akane/database';
import { Discord, Guard } from 'discordx';

import { GuardFor, hasPermission, inGuild } from '~/guards/guilds';
import { Command } from '~/helpers/localization';

@Discord()
export default class Moderation {
  constructor(private readonly prisma: PrismaClient) {}

  @Guard(
    inGuild(),
    hasPermission({
      for: GuardFor.Both,
      clientPermissions: ['KickMembers'],
      userPermissions: ['KickMembers'],
    })
  )
  @Command({
    name: 'MODERATION_KICK_NAME',
    description: 'MODERATION_KICK_DESCRIPTION',
  })
  async handleKick() {
    throw new Error('Not implemented');
  }
}
