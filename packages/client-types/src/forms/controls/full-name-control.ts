import type { IControl } from "./control.js";
import type { IFullNameControlValue } from "./control-values.js";

/** Composite first/middle/last-name field. */
export interface IFullNameControl extends IControl {
  isReadOnly: boolean;
  getType(): string;
  getValue(): IFullNameControlValue;
  setValue(value: IFullNameControlValue): void;
}
