import type { IControl } from "./control.js";

/** Record status-reason field. */
export interface IStatusReasonControl extends IControl {
  getType(): string;
  getValue(): string;
  /** Always throws: setting the status reason through this control is unsupported. */
  setValue(value: string): void;
}
