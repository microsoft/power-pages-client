import type { IControl } from "./control.js";
import type { IAddressCompositeControlValue } from "./control-values.js";

/** Composite address field. */
export interface IAddressCompositeControl extends IControl {
  isReadOnly: boolean;
  getType(): string;
  getValue(): IAddressCompositeControlValue;
  setValue(value: IAddressCompositeControlValue): void;
}
