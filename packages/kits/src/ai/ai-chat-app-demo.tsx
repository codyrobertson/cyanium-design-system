"use client";

import { AiChatApp } from "./ai-chat-app";
import { buildAiChatAppProps } from "../fixtures/builders";

export function AiChatAppDemo() {
  return <AiChatApp {...buildAiChatAppProps()} />;
}
