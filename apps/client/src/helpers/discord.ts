import { RepliableInteraction } from 'discord.js';

export type ReplyOrFollowUpOptions =
  | Parameters<RepliableInteraction['followUp']>[0]
  | Parameters<RepliableInteraction['reply']>[0];

/** Replies to the interaction if it hasn't been replied to yet, otherwise follows up with the interaction. */
export async function replyOrFollowUp(
  interaction: RepliableInteraction,
  options: ReplyOrFollowUpOptions
) {
  if (interaction.deferred || interaction.replied) {
    return await interaction.followUp(options);
  }

  return await interaction.reply(options);
}
