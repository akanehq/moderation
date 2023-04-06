import { PermissionsBitField } from 'discord.js';

/** A list of permissions that are considered moderation permissions. */
export const MODERATION_PERMISSIONS = [
  PermissionsBitField.Flags.Administrator,
  PermissionsBitField.Flags.BanMembers,
  PermissionsBitField.Flags.KickMembers,
  PermissionsBitField.Flags.ManageChannels,
  PermissionsBitField.Flags.ManageGuild,
  PermissionsBitField.Flags.ManageMessages,
  PermissionsBitField.Flags.ManageRoles,
  PermissionsBitField.Flags.ManageThreads,
  PermissionsBitField.Flags.ManageWebhooks,
  PermissionsBitField.Flags.MentionEveryone,
  PermissionsBitField.Flags.MoveMembers,
  PermissionsBitField.Flags.MuteMembers,
  PermissionsBitField.Flags.PrioritySpeaker,
  PermissionsBitField.Flags.ViewAuditLog,
];
