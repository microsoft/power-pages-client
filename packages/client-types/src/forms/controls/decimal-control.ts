import type { IControl } from "./control.js";

/** Decimal field represented as a string. */
export interface IDecimalControl extends IControl {
  isReadOnly: boolean;
  getType(): string;
  getValue(): string | undefined;
  setValue(value: string): void;
}
