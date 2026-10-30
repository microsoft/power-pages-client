import type { IControl } from "./control.js";

/** Picklist presentation styles. No runtime enum is provided by this package. */
export type PicklistControlType =
  | "VerticalRadioButton"
  | "HorizontalRadioButton"
  | "MultipleChoiceMatrix"
  | "Dropdown";

/** Single-select option set represented as a string. */
export interface IPicklistControl extends IControl {
  subType: PicklistControlType;
  getType(): string;
  getValue(): string | undefined;
  setValue(value: string): void;
}
