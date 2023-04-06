import { PrismaClient } from '@akane/database';
import { Discord, Guard } from 'discordx';

import { inGuild, hasPermission, GuardFor } from '~/guards/guilds';
import { Command } from '~/helpers/localization';

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
  async handleUndo() {
    throw new Error('Not implemented');
  }
}