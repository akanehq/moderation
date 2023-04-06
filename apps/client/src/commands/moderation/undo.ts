import { Discord } from 'discordx';

import { Command } from '~/helpers/localization';

@Discord()
export default class Moderation {
  @Command({
    name: 'MODERATION_UNDO_NAME',
    description: 'MODERATION_UNDO_DESCRIPTION',
  })
  async handleUndo() {
    throw new Error('Not implemented');
  }
}
