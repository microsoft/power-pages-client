/** Modern-list column metadata and presentation overrides. */
export interface IColumn {
  getLogicalName(): string;
  /** Reads the configured display name, unaffected by setHeader. */
  getDisplayName(): string;
  /** Overrides the displayed column header. */
  setHeader(header: string): void;
  /** Shows or hides the column. */
  setVisible(visible: boolean): void;
  /** Overrides the column-header tooltip and accessible name. */
  setTooltip(tooltip: string): void;
}
