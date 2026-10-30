import type { IFileControl } from "./file-control.js";

/** Image upload field. setValue requires a File with an image MIME type. */
export interface IImageControl extends IFileControl {}
