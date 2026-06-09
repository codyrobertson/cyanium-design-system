import * as React from "react";
import { BookOpen, Folder } from "lucide-react";
import type { AiChatCopy, AiSidebarProps, ChatMessage } from "../ai/ai-chat-app";

export const aiModels = ["GPT-4", "GPT-4o", "Claude 3.5"] as const;

export const aiUser = {
  name: "James Brown",
  email: "james@align.ui",
  badge: "PRO",
  avatarColor: "green" as const,
};

export const aiInitialTitle = "User research analysis";

export const aiInitialMessages: ChatMessage[] = [
  { id: "1", role: "user", content: "Summarize the key findings from our last user research session." },
  { id: "2", role: "assistant", content: "Based on 12 interviews, the top themes were onboarding friction (67%), unclear pricing (45%), and desire for better mobile support (38%)." },
];

export const aiDefaultModel = "GPT-4o";

export const aiCopy: AiChatCopy = {
  newChatLabel: "New chat",
  newChatTitle: "New chat",
  pinnedSectionLabel: "Pinned",
  composerPlaceholder: "How can I help you today?",
  composerDisclaimer: "AI can make mistakes — please double-check",
  upgradeMessage: (
    <>
      Access premium models & features · <b className="cursor-pointer text-[var(--ai-accent,#6366f1)]">Upgrade</b>
    </>
  ),
};

export const aiSidebarBase: AiSidebarProps = {
  searchPlaceholder: "Search chats…",
  newChatLabel: aiCopy.newChatLabel,
  pinnedSectionLabel: aiCopy.pinnedSectionLabel,
  folderItems: [
    { icon: <Folder className="size-4" />, label: "Projects" },
    { icon: <BookOpen className="size-4" />, label: "Library" },
  ],
  pinnedItems: [
    { icon: <Folder className="size-4" />, label: "Research & Analysis" },
    { icon: <Folder className="size-4 text-[var(--purple-500)]" />, label: "Web Search", chevron: true },
  ],
  recentGroups: [
    {
      label: "Recents",
      chats: [{ label: "User research analysis" }, { label: "Q3 roadmap draft" }],
    },
  ],
  user: aiUser,
};
