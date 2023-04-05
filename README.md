# Akane

![Github CI](https://github.com/akanehq/akane/actions/workflows/ci.yml/badge.svg)

## Applications

For more information about some of the apps, see their `README` files.

### [@akane/client](./apps/client/README.md)

The client is a powerful Discord bot built using [Discord.js](https://discord.js.org/). It also has a localization system built-in using [typesafe-i18n](https://github.com/ivanhofer/typesafe-i18n) and a command handler using [discordx](https://github.com/discordx-ts/discordx).

### [@akane/web](./apps/web/README.md)

The web application is a [Next.js](https://nextjs.org/) application that is used to interact with the Discord API. It is written in TypeScript and uses [SWR](https://swr.vercel.app/) for data fetching and [Tailwind CSS](https://tailwindcss.com/) for styling.

## Packages

### [@akane/database](./packages/database)

This package contains a [Prisma](https://www.prisma.io/) schema and client for the database that can be shared between all applications.

### [@akane/tsconfig](./packages/tsconfig)

This package contains some common TypeScript configurations files (`tsconfig.json`).

## How to use

```bash
# Clone the repository
git clone git@github.com:akanehq/akane.git

# Install dependencies
pnpm install

# Build the packages
pnpm build
```

## Docker Support

This bot is also configured to run in a Docker container using [Docker Compose](https://docs.docker.com/compose/). To run the bot in a container, fill all the `.env` files with the correct values and run the following command:

```bash
docker-compose up -d
```

<details>
  <summary>Environment Variables</summary>

<!-- POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
 -->

| Environment Variable | Required                    |
| -------------------- | --------------------------- |
| `APP_SCOPE`          | When using `docker-compose` |
| `POSTGRES_DB`        | Yes                         |
| `POSTGRES_USER`      | Yes                         |
| `POSTGRES_PASSWORD`  | Yes                         |

</details>
