import { ArgsOf, Client, Discord, On } from 'discordx';
import { Logger } from 'tslog';

@Discord()
export default class Controller {
  constructor(private readonly logger: Logger<unknown>) {}

  @On({ event: 'ready' })
  async onReady(_: ArgsOf<'ready'>, client: Client) {
    await client.initApplicationCommands();

    this.logger.info(
      'Akane is now running. Press "CTRL + C" to stop the process.'
    );
  }

  @On({ event: 'interactionCreate' })
  async onInteractionCreate(
    [interaction]: ArgsOf<'interactionCreate'>,
    client: Client
  ) {
    interaction.logger = this.logger.getSubLogger({
      prefix: [
        interaction.id,
        interaction.user.id,
        interaction.guild?.id ?? 'DM',
      ],
    });

    await client.executeInteraction(interaction);
  }

  @On({ event: 'error' })
  onError([error]: ArgsOf<'error'>) {
    this.logger.error(error);
  }
}
