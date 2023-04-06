import { Discord } from 'discordx';

import { Command } from '~/helpers/localization';

@Discord()
export default class Moderation {
  @Command({
    name: 'MODERATION_MUTE_NAME',
    description: 'MODERATION_MUTE_DESCRIPTION',
  })
  async handleMute() {
    throw new Error('Not implemented');
  }
}
