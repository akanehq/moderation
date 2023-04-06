import { Discord } from 'discordx';

import { Command } from '~/helpers/localization';

@Discord()
export default class Moderation {
  @Command({
    name: 'MODERATION_KICK_NAME',
    description: 'MODERATION_KICK_DESCRIPTION',
  })
  async handleKick() {
    throw new Error('Not implemented');
  }
}
