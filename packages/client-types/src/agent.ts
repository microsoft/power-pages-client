/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

/** A file or card exchanged with a Copilot Studio agent. */
export interface AgentAttachment {
  /** Media type, such as "image/png", or a card content type. */
  contentType: string;
  /** Inline content, such as a card payload. */
  content?: unknown;
  /** URL or data URL of the content. */
  contentUrl?: string;
  name?: string;
  thumbnailUrl?: string;
}

/** Message or client event to send. Provide at least one of text, name, or attachments. */
export interface AgentInputActivity {
  /** Message text. */
  text?: string;
  /** Client event name; sends an event instead of a message. */
  name?: string;
  /** Additional data, such as an event payload. */
  value?: unknown;
  attachments?: AgentAttachment[];
}

/** Activity received from an agent. */
export interface AgentResponseActivity {
  /** Activity type, such as "message". */
  type: string;
  id: string;
  text?: string;
  /** Text format, such as "markdown", "plain", or "xml". */
  textFormat?: string;
  from: { id: string; name?: string; role: string };
  conversation: { id: string };
  /** Whether the agent is accepting, expecting, or ignoring input. */
  inputHint?: string;
  /** ID of the activity this response answers, when provided. */
  replyToId?: string;
  speak?: string;
  attachments?: AgentAttachment[];
  value?: unknown;
}

/** Receives agent responses; can run more than once for one activity. */
export type AgentResponseSubscriber = (response: AgentResponseActivity) => void;

/** Receives a user-facing error, such as an invalid agent schema name. */
export type AgentErrorSubscriber = (error: Error) => void;

/** Messaging with the Copilot Studio agents available to the current user. */
export interface IAgent {
  /**
   * Sends a message or client event to an agent. Returns immediately;
   * responses and errors arrive through the callbacks.
   * @param agentSchemaName Schema name of the agent.
   */
  SendActivity(
    agentSchemaName: string,
    inputActivity: AgentInputActivity,
    responseSubscriber: AgentResponseSubscriber,
    errorSubscriber: AgentErrorSubscriber,
  ): void;
}
