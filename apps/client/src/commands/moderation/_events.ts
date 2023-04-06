import { ButtonInteraction } from 'discord.js';
import { ButtonComponent, Discord } from 'discordx';

import { ModAppealPunishmentRegExp, ModGetAttachmentRegExp } from './_shared';

@Discord()
export default class Moderation {
  @ButtonComponent({ id: ModGetAttachmentRegExp })
  async onGetAttachment(interaction: ButtonInteraction) {
    throw new Error('Not implemented');
  }

  @ButtonComponent({ id: ModAppealPunishmentRegExp })
  async onAppealPunishment(interaction: ButtonInteraction) {
    throw new Error('Not implemented');
  }
}
