import type { IControl } from "./control.js";

/** Checkbox field whose value is a JavaScript boolean. */
export interface IMultipleChoiceControl extends IControl {
  getType(): string;
  getValue(): boolean;
  setValue(value: boolean): void;
}
