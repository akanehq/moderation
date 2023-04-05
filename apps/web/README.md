# @akane/web

## Configuration

Clone the `.env.example` file and rename it to `.env`. Then, fill in the required fields:

```bash
cp .env.example .env
```

<details>
  <summary>Environment Variables</summary>

| Environment Variable                                                                | Required |
| ----------------------------------------------------------------------------------- | -------- |
| [`NEXTAUTH_URL`](https://next-auth.js.org/configuration/options#nextauth_url)       | Yes      |
| [`NEXTAUTH_SECRET`](https://next-auth.js.org/configuration/options#nextauth_secret) | Yes      |
| `DISCORD_CLIENT_ID`                                                                 | Yes      |
| `DISCORD_CLIENT_SECRET`                                                             | Yes      |
| `NEXT_PUBLIC_DISCORD_API_BASE_URL`                                                  | Yes      |

</details>

> **Note**
> You can get your Discord application's client ID and secret from the [Discord Developer Portal](https://discord.com/developers/applications).

## Development

```bash
pnpm dev
```

## Production

```bash
pnpm build
pnpm start
```

## Hooks

### [`useSWRDiscordApi`](./src/hooks/useSWRDiscordApi.ts)

This hook is used to fetch data from the Discord API. It is a wrapper around [`useSWR`](https://swr.vercel.app/docs/use-swr) that automatically adds the `Authorization` header to the request and type-safety for the options and response.

```ts
import { useSWRDiscordApi } from "src/hooks/useSWRDiscordApi";
import type { GetGuildsResponse } from "discord-api-types/v9";

const [data, error, isLoading] =
  useSWRDiscordApi<GetGuildsResponse>("/users/@me/guilds");

// data: GetGuildsResponse | undefined
// error: Error | undefined
// isLoading: boolean
```
