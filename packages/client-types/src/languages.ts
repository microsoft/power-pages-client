/** Website language selection. */
export interface ILanguages {
  /** Returns language codes enabled for the site. */
  getAll(): string[];
  /** Returns the active language code. Throws if it cannot be detected. */
  getActive(): string;
  /** Switches to an enabled language, navigating or reloading the page. */
  setActive(language: string): void;
}
