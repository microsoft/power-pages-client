import type { IControl } from "./control.js";
import type { DropdownLookupControlValue } from "./control-values.js";

/** Dropdown lookup. Reads an option object but accepts an ID when setting. */
export interface IDropdownLookupControl extends IControl {
  isDropdown: boolean;
  isReadonly: boolean;
  /** Returns the existing lowercase runtime name, "lookup". */
  getType(): string;
  getValue(): DropdownLookupControlValue | undefined;
  setValue(id: string): void;
}
