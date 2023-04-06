import { Discord } from 'discordx';

import { Command } from '~/helpers/localization';

@Discord()
export default class Moderation {
  @Command({
    name: 'MODERATION_WARN_NAME',
    description: 'MODERATION_WARN_DESCRIPTION',
  })
  async handleWarn() {
    throw new Error('Not implemented');
  }
}
