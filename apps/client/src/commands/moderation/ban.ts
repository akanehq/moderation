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
      clientPermissions: ['BanMembers'],
      userPermissions: ['BanMembers'],
    })
  )
  @Command({
    name: 'MODERATION_BAN_NAME',
    description: 'MODERATION_BAN_DESCRIPTION',
  })
  async handleBan() {
    throw new Error('Not implemented');
  }
}
