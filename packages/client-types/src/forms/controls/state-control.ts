import type { IControl } from "./control.js";

/** Record state field. Runtime control name: "Status". */
export interface IStateControl extends IControl {
  getType(): string;
  getValue(): string;
  /** Always throws: setting the record state through this control is unsupported. */
  setValue(value: string): void;
}
