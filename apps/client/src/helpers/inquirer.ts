import { randomUUID } from 'crypto';

import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChannelType,
  ComponentType,
  EmbedBuilder,
  ModalBuilder,
  SelectMenuBuilder,
  SelectMenuOptionBuilder,
  TextInputBuilder,
  type ButtonInteraction,
  type Collection,
  type Interaction,
  type Message,
  type MessageReplyOptions,
  type ModalSubmitInteraction,
} from 'discord.js';

import { Colors } from '../constants/colors';
import { getLanguage } from '../helpers/localization';

function getChoiceById<T extends Inquirer.BaseValue>(
  choices: T[],
  choice: any
): T | undefined {
  return choices.find((c) => {
    if (typeof c.id === 'string') {
      return c.id === choice;
    } else if (typeof c.id === 'number') {
      return c.id === parseInt(choice, 10);
    } else if (typeof c.id === 'boolean') {
      return c.id === Boolean(c);
    }
  });
}

export namespace Inquirer {
  export interface BaseOptions<T> {
    /** Question to ask the user. */
    question: string | MessageReplyOptions;

    /** Available choices for the user to select. */
    choices: T[];

    /** Whether the question should be asked in the user's DM. */
    inDM?: boolean;

    /** Timeout for the question. Defaults to `1000 * 30`. */
    timeout?: number;
  }

  export interface BaseValue {
    /** Unique identifier for this value. */
    id: string | number | boolean;
  }

  export interface BaseReturn<T, I extends Interaction> {
    result: T;
    interaction: I;
  }

  const ID_SEPARATOR = '&';

  export interface MessagesInquirerOptions
    extends Omit<BaseOptions<unknown>, 'choices'> {
    /** Maximum number of messages to retrieve. */
    maxMessages?: number;

    /** Timeout for the message. */
    timeout?: number;

    /** Delete the message used to ask the user a question. */
    deleteQuestion?: boolean;

    /** Delete the retrieved messages after receiving the answer. */
    deleteRetrievedMessages?: boolean;
  }

  export async function awaitMessages<T extends MessagesInquirerOptions>(
    interaction: Interaction,
    options: T
  ): Promise<Collection<string, Message>> {
    if (!interaction.isRepliable()) {
      throw new Error('The interaction must be repliable.');
    }

    const channel = options.inDM
      ? interaction.user.dmChannel ?? (await interaction.user.createDM())
      : interaction.channel;

    if (!channel) {
      throw new Error('Could not found a channel to prompt the user with.');
    }

    if (![ChannelType.DM, ChannelType.GuildText].includes(channel?.type)) {
      throw new Error('Cannot send message to non-text channel.');
    }

    if (interaction.inGuild() && !interaction.deferred) {
      await interaction.deferReply({ ephemeral: true });
    }

    const messageOptions = {
      components: [],
      embeds: [],
      ...(typeof options.question === 'string'
        ? { content: options.question }
        : options.question),
    };

    const message = options.inDM
      ? await channel.send(messageOptions)
      : await interaction.editReply(messageOptions);

    const messages = await channel.awaitMessages({
      max: options.maxMessages,
      time: options.timeout,
      errors: ['time'],
      filter: (message) => message.author.id === interaction.user.id,
    });

    const messagesClone = messages.clone();

    if (options.deleteRetrievedMessages) {
      for await (const [, message] of messages) {
        if (message.deletable) await message.delete();
      }
    }

    if (options.deleteQuestion) {
      if (message.deletable) {
        await message.delete();
      }
    }

    return messagesClone;
  }

  export interface ButtonValue extends BaseValue {
    /** Label to display on the button. */
    label: string;

    /** What style to use for the button. */
    style: ButtonStyle;

    /** Emoji to display on the button. */
    emoji?: string;
  }

  export interface ButtonsInquirerOptions extends BaseOptions<ButtonValue> {
    /** Should the button be disabled? */
    setButtonsDisabledWhenCollected?: boolean;

    /**
     * Message to edit the original message with when the user selects this button. When undefined,
     * the message will be deleted
     */
    postAnswerMessage?: string;
  }

  /**
   * Ask the user a question using buttons and return the user's response.
   * @param interaction The interaction to use for the inquirer.
   * @param options Configuration options for the inquirer.
   * @returns The id of the selected choice.
   */
  export async function awaitButtons<T extends ButtonsInquirerOptions>(
    interaction: Interaction,
    options: T
  ): Promise<BaseReturn<T['choices'][number]['id'], ButtonInteraction>> {
    if (!interaction.isRepliable()) {
      throw new Error('The interaction must be repliable.');
    }

    const uuid = randomUUID();

    const channel = !options.inDM
      ? interaction.channel
      : interaction.user.dmChannel ?? (await interaction.user.createDM());

    if (!channel) {
      throw new Error('Could not found a channel to prompt the user with.');
    }

    if (![ChannelType.DM, ChannelType.GuildText].includes(channel.type)) {
      throw new Error('Cannot send message to non-text channel.');
    }

    if (interaction.inGuild() && !interaction.deferred) {
      await interaction.deferReply({ ephemeral: true });
    }

    const buttonActionRow = new ActionRowBuilder<ButtonBuilder>();

    const buttons = options.choices.map((choice) => {
      const button = new ButtonBuilder()
        .setLabel(choice.label)
        .setStyle(choice.style)
        .setCustomId(`${uuid}${ID_SEPARATOR}${choice.id}`);
      choice.emoji && button.setEmoji(choice.emoji);

      return button;
    });

    buttonActionRow.addComponents(buttons);

    const message = !options.inDM
      ? await interaction.editReply({
          ...(typeof options.question === 'string'
            ? { content: options.question }
            : options.question),
          components: [buttonActionRow],
        })
      : await channel.send({
          ...(typeof options.question === 'string'
            ? { content: options.question }
            : options.question),
          components: [buttonActionRow],
        });

    const answer = await channel.awaitMessageComponent({
      componentType: ComponentType.Button,
      filter: (component) =>
        component.customId.startsWith(`${uuid}${ID_SEPARATOR}`) &&
        component.user.id === interaction.user.id,
      time: options.timeout ?? 1000 * 30,
    });

    await answer.deferUpdate();

    if (options.postAnswerMessage) {
      let updatedButtons: ButtonBuilder[] = [];

      if (options.setButtonsDisabledWhenCollected) {
        updatedButtons = updatedButtons.map((button) => {
          return ButtonBuilder.from(button).setDisabled(true);
        });
      }

      const updatedButtonsActionRow = new ActionRowBuilder<ButtonBuilder>();
      updatedButtonsActionRow.addComponents(updatedButtons);

      if (options.inDM) {
        await message.edit({
          components: [updatedButtonsActionRow],
          content: options.postAnswerMessage,
        });
      } else {
        await interaction.editReply({
          components: [updatedButtonsActionRow],
          content: options.postAnswerMessage,
        });
      }
    } else {
      if (options.inDM && message.deletable) {
        await message.delete();
      }
    }

    const [, choiceUniqueId] = answer.customId.split(ID_SEPARATOR);
    return {
      result: getChoiceById(options.choices, choiceUniqueId)
        ?.id as T['choices'][number]['id'],
      interaction: answer,
    };
  }

  export interface ModalInquirerOptions
    extends Omit<BaseOptions<unknown>, 'choices'> {
    /** Title of the modal. */
    title: string;

    /** Inputs to display in the modal. The inputs will be displayed in the order they are in the array. */
    inputs: TextInputBuilder[];

    /** Label to display on the submit button. */
    startButtonLabel: string;
  }

  /** Ask the user a question using a modal that starts with a button. */
  export async function awaitModal<
    K extends string = string,
    T extends ModalInquirerOptions = ModalInquirerOptions
  >(
    interaction: Interaction,
    options: T
  ): Promise<BaseReturn<Record<K, string>, ModalSubmitInteraction>> {
    if (!interaction.isRepliable()) {
      throw new Error('The interaction must be repliable.');
    }

    const uuid = randomUUID();

    const channel = options.inDM
      ? interaction.user.dmChannel ?? (await interaction.user.createDM())
      : interaction.channel;

    if (!channel) {
      throw new Error('Could not found a channel to prompt the user with.');
    }

    if (![ChannelType.DM, ChannelType.GuildText].includes(channel.type)) {
      throw new Error('Cannot send message to non-text channel.');
    }

    if (interaction.inGuild() && !interaction.deferred) {
      await interaction.deferReply({ ephemeral: true });
    }

    const button = new ButtonBuilder()
      .setLabel(options.startButtonLabel)
      .setCustomId(`${uuid}${ID_SEPARATOR}start`)
      .setStyle(ButtonStyle.Success);

    const buttonRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      button
    );

    const messageOptions: MessageReplyOptions = {
      components: [buttonRow],
      ...(typeof options.question === 'string'
        ? { content: options.question }
        : options.question),
    };

    if (options.inDM) {
      await channel.send(messageOptions);
    } else await interaction.editReply(messageOptions);

    const collectedButton = await channel.awaitMessageComponent({
      componentType: ComponentType.Button,
      filter: (component) =>
        component.customId.startsWith(`${uuid}${ID_SEPARATOR}`) &&
        component.user.id === interaction.user.id,
      time: options.timeout ?? 1000 * 30,
    });

    const modal = new ModalBuilder().setCustomId(uuid).setTitle(options.title);

    modal.addComponents(
      options.inputs.map((input) =>
        new ActionRowBuilder<TextInputBuilder>().addComponents(input)
      )
    );

    await collectedButton.showModal(modal);

    const modalSubmit = await collectedButton.awaitModalSubmit({
      time: options.timeout ?? 1000 * 60,
      filter: (component) => component.user.id === interaction.user.id,
    });

    await modalSubmit.deferReply({ ephemeral: true });

    return {
      interaction: modalSubmit,
      result: modalSubmit.fields.fields.reduce((acc, field) => {
        acc[field.customId as K] = field.value;
        return acc;
      }, {} as Record<K, string>),
    };
  }

  export interface SelectMenuValue extends BaseValue {
    /** Label to display on the button. */
    label: string;

    /** Description to display on the choice. */
    description?: string;

    /** Emoji to display on the choice. */
    emoji?: string;
  }

  export interface SelectMenuInquirerOptions
    extends BaseOptions<SelectMenuValue> {
    /** Select menu's placeholder text. */
    placeholder: string;

    /** Should the menu be disabled? */
    setDisabledWhenDone?: boolean;

    /** Message to edit the original message with when the user selects this button. */
    postAnswerMessage?: string;
  }

  /**
   * Ask the user a question using a select menu and return the user's response.
   * @param interaction The interaction to use for the inquirer.
   * @param options Configuration options for the inquirer.
   * @returns The id of the selected choice.
   */
  export async function awaitSelectMenu<T extends SelectMenuInquirerOptions>(
    interaction: Interaction,
    options: T
  ): Promise<T['choices'][number]['id']> {
    if (!interaction.isRepliable()) {
      throw new Error('The interaction must be repliable.');
    }

    const uuid = randomUUID();

    const channel = !options.inDM
      ? interaction.channel
      : interaction.user.dmChannel ?? (await interaction.user.createDM());

    if (!channel) {
      throw new Error('Could not found a channel to prompt the user with.');
    }

    if (![ChannelType.DM, ChannelType.GuildText].includes(channel?.type)) {
      throw new Error('Cannot send message to non-text channel.');
    }

    if (interaction.inGuild() && !interaction.deferred) {
      await interaction.deferReply({ ephemeral: true });
    }

    const opts = options.choices.map((choice) => {
      const optionBuilder = new SelectMenuOptionBuilder()
        .setLabel(choice.label)
        .setValue(choice.id.toString());

      choice.emoji && optionBuilder.setEmoji(choice.emoji);
      choice.description && optionBuilder.setDescription(choice.description);

      return optionBuilder;
    });

    const selectMenu = new SelectMenuBuilder()
      .setPlaceholder(options.placeholder)
      .setCustomId(uuid)
      .setOptions(opts);

    const selectMenuActionRow =
      new ActionRowBuilder<SelectMenuBuilder>().addComponents(selectMenu);

    const message = (
      !options.inDM
        ? await interaction.editReply({
            ...(typeof options.question === 'string'
              ? { content: options.question }
              : options.question),
            components: [selectMenuActionRow],
          })
        : await channel.send({
            ...(typeof options.question === 'string'
              ? { content: options.question }
              : options.question),
            components: [selectMenuActionRow],
          })
    ) as Message<boolean>;

    const answer = await channel.awaitMessageComponent({
      componentType: ComponentType.SelectMenu,
      filter: (component) =>
        component.customId === uuid &&
        component.user.id === interaction.user.id,
    });

    await answer.deferUpdate();

    let updatedSelectMenu: SelectMenuBuilder = selectMenu;

    if (options.setDisabledWhenDone) {
      updatedSelectMenu = SelectMenuBuilder.from(selectMenu).setDisabled(true);
    }

    const updatedActionRow = new ActionRowBuilder<SelectMenuBuilder>();
    updatedActionRow.addComponents(updatedSelectMenu);

    if (options.postAnswerMessage) {
      if (options.inDM) {
        await message.edit({
          components: [updatedActionRow],
          content: options.postAnswerMessage,
        });
      } else {
        await interaction.editReply({
          components: [updatedActionRow],
          content: options.postAnswerMessage,
        });
      }
    } else {
      if (!options.inDM) {
        if (options.setDisabledWhenDone) {
          selectMenu.setDisabled(true);

          await interaction.editReply({
            components: [updatedActionRow],
          });
        }
      } else {
        if (message.deletable) await message.delete();
      }
    }

    const choice = getChoiceById(options.choices, answer.values[0]);

    if (!choice) {
      throw new Error('No choice found for selected value.');
    }

    return choice.id as T['choices'][number]['id'];
  }

  /**
   * Alias for `awaitSelectMenu` to ask the user a yes/no question.
   * @param interaction The interaction to use for the inquirer.
   * @returns A boolean representing the user's choice.
   */
  export async function awaitConfirmation(interaction: Interaction) {
    const LL = getLanguage(interaction);

    return await awaitButtons(interaction, {
      question: {
        embeds: [
          new EmbedBuilder()
            .setDescription(LL.INQUIRER_CONFIRMATION_QUESTION())
            .setColor(Colors.Default),
        ],
      },
      choices: [
        {
          id: true,
          emoji: '✅',
          style: ButtonStyle.Success,
          label: LL.INQUIRER_CONFIRMATION_YES(),
        },
        {
          id: false,
          emoji: '❌',
          style: ButtonStyle.Danger,
          label: LL.INQUIRER_CONFIRMATION_NO(),
        },
      ],
    });
  }
}
