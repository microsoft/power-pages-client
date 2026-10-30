/** Shared visibility and DOM access for forms, controls, tabs, sections, and lists. */
export interface IPageElement {
  /** Whether the element is currently visible. */
  getVisible(): boolean;
  /** Shows or hides the element. */
  setVisible(visible: boolean): void;
  /** Returns the underlying HTML element. */
  getHtmlElement(): HTMLElement;
}
