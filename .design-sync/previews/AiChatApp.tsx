import { AiChatApp } from "@cyanium/kits/ai";
import { buildAiChatAppProps } from "@cyanium/kits/fixtures";

/**
 * AiChatApp — full conversational AI workspace shell: conversation sidebar,
 * threaded message stream, and composer. Rendered with production fixture
 * data via buildAiChatAppProps().
 */
export const Workspace = () => <AiChatApp {...buildAiChatAppProps()} />;
