/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

import type { IControl } from "./control.js";

/** Currency field represented as a string. */
export interface IMoneyControl extends IControl {
  /** Existing runtime spelling; not isReadOnly. */
  readOnly: boolean;
  getType(): string;
  getValue(): string | undefined;
  setValue(value: string): void;
}
