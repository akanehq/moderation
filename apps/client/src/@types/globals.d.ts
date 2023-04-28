import '@total-typescript/ts-reset';

import type { O } from 'ts-toolbelt';

import type { DotenvType } from '../constants/dotenv';

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
