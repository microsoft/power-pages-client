import type { IControl } from "./control.js";

/** Multi-select option set represented by numeric option values. */
export interface IMultiSelectPicklistControl extends IControl {
  getType(): string;
  getValue(): number[];
  /** Throws for option values not present in the field's available options. */
  setValue(values: number[]): void;
}
