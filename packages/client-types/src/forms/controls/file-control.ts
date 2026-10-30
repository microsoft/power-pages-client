import type { IControl } from "./control.js";

/** File upload field. */
export interface IFileControl extends IControl {
  isReadOnly: boolean;
  maxFileSizeInByte: number | undefined;
  getType(): string;
  /** Returns a newly selected file, if any. */
  getValue(): File | undefined;
  /** Sets a nonempty file within the configured size limit. */
  setValue(value: File): void;
  /** Activates the field's file-delete action. */
  removeFile(): void;
}
