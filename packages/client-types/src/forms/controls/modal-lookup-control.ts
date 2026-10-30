/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

import type { IControl } from "./control.js";
import type { ModalLookupControlValue } from "./control-values.js";

/** Modal record lookup. */
export interface IModalLookupControl extends IControl {
  isModal: boolean;
  isReadonly: boolean;
  getType(): string;
  getValue(): ModalLookupControlValue | undefined;
  setValue(value: ModalLookupControlValue): void;
  /** Clears the current lookup selection. */
  clearValue(): void;
}
