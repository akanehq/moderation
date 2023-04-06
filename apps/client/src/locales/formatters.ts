import { time } from 'discord.js';

import type { Formatters, Locales } from './i18n-types';

export function initFormatters(locale: Locales): Formatters {
  return {
    dRelativeTime(value) {
      return time(value, 'D');
    },
  };
}
