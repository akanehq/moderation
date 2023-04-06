import '@total-typescript/ts-reset';

import type { DotenvType } from '../constants/dotenv';
import type { O } from 'ts-toolbelt';

declare global {
  /** Represents a value that can be null or undefined. */
  type Maybe<T> = T | null | undefined;

  namespace NodeJS {
    interface ProcessEnv
      extends NodeJS.ProcessEnv,
        O.Update<DotenvType, keyof DotenvType, string> {}
  }
}

export {};
