import {
  GuildMember,
  type Interaction,
  type PermissionsString,
} from 'discord.js';
import type { GuardFunction } from 'discordx';

import { replyOrFollowUp } from '../helpers/discord';
import { getLanguage } from '../helpers/localization';

export enum GuardFor {
  Client,
  User,
  Both,
}

/** Guard that checks if the command was executed in a guild and replies with an error if it wasn't. */
export function inGuild(): GuardFunction<Interaction> {
  return async (interaction, _client, next) => {
    if (!interaction.inGuild()) {
      if (interaction.isRepliable()) {
        const LL = getLanguage(interaction);

        await replyOrFollowUp(interaction, {
          content: LL.ERRORS.GUARD_IN_GUILD_ONLY(),
          ephemeral: true,
        });
      }

      return;
    }

    await next();
  };
}

export type HasPermissionOptions =
  | {
      for: GuardFor.Client | GuardFor.Both;
      clientPermissions: PermissionsString[];
    }
  | {
      for: GuardFor.User | GuardFor.Both;
      userPermissions: PermissionsString[];
    };

/** Guard that checks if the client or user has the required permissions and replies with an error if they don't. */
export function hasPermission(
  options: HasPermissionOptions
): GuardFunction<Interaction> {
  return async (interaction, _client, next) => {
    if (!interaction.inGuild()) {
      throw new Error(
        '`hasPermission()` can only be used in guilds. Ensure `inGuild()` is used before this guard.'
      );
    }

    const guild = interaction.guild
      ? interaction.guild
      : await interaction.client.guilds.fetch(interaction.guildId);

    const member =
      interaction.member instanceof GuildMember
        ? interaction.member
        : await guild.members.fetch(interaction.member.user.id);

    const userHasPermissions =
      'userPermissions' in options &&
      member.permissions.has(options.userPermissions, true);

    const clientHasPermissions =
      'clientPermissions' in options &&
      guild.members.me?.permissions.has(options.clientPermissions, true);

    if (!userHasPermissions || !clientHasPermissions) {
      if (interaction.isRepliable()) {
        const LL = getLanguage(interaction);

        await replyOrFollowUp(interaction, {
          content:
            options.for === GuardFor.Client || options.for === GuardFor.Both
              ? LL.ERRORS.GUARD_HAS_PERMISSIONS_CLIENT()
              : LL.ERRORS.GUARD_HAS_PERMISSIONS_USER(),
          ephemeral: true,
        });
      }

      return;
    }

    await next();
  };
}
