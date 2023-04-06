import { Discord } from 'discordx';

import { Command } from '~/helpers/localization';

@Discord()
export default class Moderation {
  @Command({
    name: 'MODERATION_BAN_NAME',
    description: 'MODERATION_BAN_DESCRIPTION',
  })
  async handleBan() {
    throw new Error('Not implemented');
  }
}
