import '@total-typescript/ts-reset';

import type { DotenvType } from '../constants/dotenv';
import type { O } from 'ts-toolbelt';

declare global {
  namespace NodeJS {
    interface ProcessEnv
      extends NodeJS.ProcessEnv,
        O.Update<DotenvType, keyof DotenvType, string> {}
  }
}

export {};
