/** File/image download options. */
export interface DownloadFileFromColumnOptions {
  /** Full content by default; thumbnail applies to image columns. */
  size?: "full" | "thumbnail";
}

/** Record operations through the site's Dataverse Web API. */
export interface IWebAPI {
  /** Creates a record. The current contract leaves the returned ID untyped. */
  createRecord(entitySetName: string, data: unknown): Promise<unknown>;
  /** Retrieves a record. Its table-specific shape must be supplied by the consumer. */
  retrieveRecord(entitySetName: string, id: string, options?: string): Promise<unknown>;
  /** Returns the raw response body, not a guaranteed plain array. */
  retrieveMultipleRecords(entitySetName: string, options?: string): Promise<unknown>;
  /** Updates the supplied fields on a record. */
  updateRecord(entitySetName: string, id: string, data: unknown): Promise<void>;
  /** Deletes a record. */
  deleteRecord(entitySetName: string, id: string): Promise<void>;
  /** Updates one property with a non-null value. */
  updateSingleProperty(entitySetName: string, id: string, property: string, value: unknown): Promise<void>;
  /** Clears one property. */
  deleteSingleProperty(entitySetName: string, id: string, property: string): Promise<void>;
  /** Associates a related record; the parent entity set and ID come first. */
  associateRecord(
    entitySetName: string,
    id: string,
    navigationProperty: string,
    relatedEntitySetName: string,
    relatedId: string,
  ): Promise<void>;
  /** Removes a relationship; the parent entity set and ID come first. */
  disassociateRecord(
    entitySetName: string,
    id: string,
    navigationProperty: string,
    relatedEntitySetName: string,
    relatedId: string,
  ): Promise<void>;
  /** Retrieves the record count, capped by the server at 5,000. */
  getRecordCount(entitySetName: string): Promise<number>;
  /** Uploads a browser File to a file or image column. */
  uploadFileToColumn(entitySetName: string, id: string, columnName: string, file: File): Promise<void>;
  /** Downloads content as a Blob, assembling large files from chunks automatically. */
  downloadFileFromColumn(
    entitySetName: string,
    id: string,
    columnName: string,
    options?: DownloadFileFromColumnOptions,
  ): Promise<Blob>;
}
