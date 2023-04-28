import { z } from 'zod';

const DotenvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  LOG_LEVEL: z.enum(['0', '1', '2', '3', '4', '5', '6']).transform(Number),
  LOG_TYPE: z.enum(['json', 'pretty', 'hidden']).default('pretty'),
  DISCORD_TOKEN: z.string().regex(/^[\w-]+\.[\w-]+\.[\w-]+$/),
  DATABASE_URL: z.string().url(),
});

export type DotenvType = z.infer<typeof DotenvSchema>;

export const { DATABASE_URL, DISCORD_TOKEN, LOG_LEVEL, LOG_TYPE, NODE_ENV } =
  DotenvSchema.parse(process.env);
