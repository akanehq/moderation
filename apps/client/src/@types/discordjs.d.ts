import 'discord.js';

declare module 'discord.js' {
  /** Indicates that the interaction is cached. */
  type CachedType = Exclude<CacheType, undefined>;

  interface BaseInteraction {
    /** Custom instance of a logger for this interaction. */
    logger: Logger<unknown>;
  }
}
