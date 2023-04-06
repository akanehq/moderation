import { Discord } from 'discordx';

import { Command } from '~/helpers/localization';

@Discord()
export default class Moderation {
  @Command({
    name: 'MODERATION_LOGS_NAME',
    description: 'MODERATION_LOGS_DESCRIPTION',
  })
  async handleLogs() {
    throw new Error('Not implemented');
  }
}
