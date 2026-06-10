"use client";

import * as React from "react";
import {
  ArrowUp,
  ChevronDown,
  PanelLeft,
  Plus,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import { Avatar, Badge, Dropdown, cn, insetBorder } from "@cyanium/ui";

export interface AiNavItem { icon: React.ReactNode; label: string; chevron?: boolean; onClick?: () => void }

export interface AiChatLink { label: string; active?: boolean; onClick?: () => void }

export interface AiChatCopy {
  newChatLabel: string;
  newChatTitle: string;
  pinnedSectionLabel: string;
  composerPlaceholder: string;
  composerDisclaimer: string;
  upgradeMessage: React.ReactNode;
}

export interface AiSidebarProps extends React.HTMLAttributes<HTMLElement> {
  searchPlaceholder: string;
  newChatLabel: string;
  pinnedSectionLabel: string;
  pinnedItems: AiNavItem[];
  folderItems: AiNavItem[];
  recentGroups: { label: string; chats: AiChatLink[] }[];
  user: { name: string; email: string; badge?: string; avatarColor?: React.ComponentProps<typeof Avatar>["color"] };
  onNewChat?: () => void;
}

export function AiSidebar({
  searchPlaceholder,
  newChatLabel,
  pinnedSectionLabel,
  pinnedItems,
  folderItems,
  recentGroups,
  user,
  onNewChat,
  className,
  ...props
}: AiSidebarProps) {
  return (
    <aside className={cn("flex h-screen w-[280px] shrink-0 flex-col border-r border-stroke-soft bg-bg-white", className)} {...props}>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="inline-flex size-9 items-center justify-center rounded-xl bg-[var(--ai-accent)] shadow-[0_8px_16px_-6px_var(--ai-accent-soft)]"><Sparkles className="size-5 text-white" /></div>
        <button type="button" className="inline-flex size-8 items-center justify-center rounded-lg text-icon-soft hover:bg-bg-weak" aria-label="Collapse sidebar"><PanelLeft className="size-4" /></button>
      </div>
      <div className="px-3">
        <div className={cn("flex items-center gap-2 rounded-lg bg-bg-weak px-3 py-2 text-sm text-text-soft", insetBorder)}>
          <Search className="size-4" />
          <input className="flex-1 bg-transparent outline-none placeholder:text-text-soft" placeholder={searchPlaceholder} />
        </div>
      </div>
      <button type="button" onClick={onNewChat} className="mx-3 mt-3 flex items-center gap-2 rounded-lg bg-bg-strong px-3 py-2 text-sm font-medium text-white"><Plus className="size-4" /> {newChatLabel}</button>
      {folderItems.length > 0 ? (
        <nav className="mt-3 flex flex-col gap-0.5 px-2">{folderItems.map((item) => <AiNavRow key={item.label} {...item} />)}</nav>
      ) : null}
      {pinnedItems.length > 0 ? (
        <>
          <div className="mx-4 my-3 h-px bg-stroke-soft" />
          <div className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-text-soft">{pinnedSectionLabel}</div>
          <nav className="flex flex-col gap-0.5 px-2">{pinnedItems.map((item) => <AiNavRow key={item.label} {...item} />)}</nav>
        </>
      ) : null}
      <div className="min-h-0 flex-1 overflow-y-auto px-2">
        {recentGroups.map((group) => (
          <React.Fragment key={group.label}>
            <div className="mx-2 my-3 h-px bg-stroke-soft first:hidden" />
            <div className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-text-soft">{group.label}</div>
            {group.chats.map((chat) => (
              <button key={chat.label} type="button" onClick={chat.onClick} className={cn("flex w-full items-center rounded-lg px-2 py-1.5 text-left text-sm text-text-sub hover:bg-bg-weak", chat.active && "bg-bg-weak font-medium text-text-strong")}>
                <span className="flex-1 truncate">{chat.label}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="mx-4 my-3 h-px bg-stroke-soft" />
      <div className="flex items-center gap-3 px-4 py-3">
        <Avatar name={user.name} size={40} color={user.avatarColor ?? "green"} status="online" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-sm font-medium text-text-strong">
            {user.name}{user.badge ? <Badge color="green" variant="lighter" size="small">{user.badge}</Badge> : null}
          </div>
          <div className="truncate text-xs text-text-sub">{user.email}</div>
        </div>
        <ChevronDown className="size-4 text-icon-soft" />
      </div>
    </aside>
  );
}

function AiNavRow({ icon, label, chevron, onClick }: AiNavItem) {
  return (
    <button type="button" onClick={onClick} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-text-sub hover:bg-bg-weak hover:text-text-strong">
      <span className="inline-flex size-5 items-center justify-center">{icon}</span>
      <span className="flex-1">{label}</span>
      {chevron ? <ChevronDown className="size-4 -rotate-90 text-icon-soft" /> : null}
    </button>
  );
}

export interface ChatMessage { id: string; role: "user" | "assistant"; content: string }

export function ChatArea({ messages, title, className, ...props }: { messages: ChatMessage[]; title: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex min-h-0 flex-1 flex-col", className)} {...props}>
      <div className="border-b border-stroke-soft px-6 py-4"><h1 className="font-display text-lg font-semibold text-text-strong">{title}</h1></div>
      <div className="flex-1 space-y-5 overflow-y-auto bg-bg-weak/40 px-6 py-6">
        {messages.map((m) => (
          <div key={m.id} className={cn("max-w-2xl", m.role === "user" && "ml-auto text-right")}>
            <div
              className={cn(
                "inline-block max-w-full rounded-2xl px-4 py-3 text-sm leading-relaxed",
                m.role === "user"
                  ? "bg-bg-strong text-white shadow-md"
                  : cn("bg-bg-white text-text-strong shadow-sm", insetBorder),
              )}
            >
              {m.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export interface ComposerProps {
  value: string;
  onChange: (value: string) => void;
  onSend?: () => void;
  model: string;
  models: string[];
  onModelChange?: (model: string) => void;
  placeholder: string;
  disclaimer: string;
  upgradeMessage: React.ReactNode;
}

export function Composer({ value, onChange, onSend, model, models, onModelChange, placeholder, disclaimer, upgradeMessage }: ComposerProps) {
  const submit = () => { if (value.trim()) onSend?.(); };
  return (
    <div className="shrink-0 px-6 pb-4">
      <div className="mx-auto max-w-3xl">
        <div className={cn("flex items-center gap-1.5 rounded-t-xl bg-bg-white px-4 py-2.5 text-sm text-text-sub shadow-sm", insetBorder)}>
          <Zap className="size-4 text-[var(--ai-accent)]" />
          {upgradeMessage}
        </div>
        <div className={cn("rounded-b-2xl bg-bg-white px-4 py-3 shadow-md", insetBorder)}>
          <textarea className="block w-full resize-none border-none bg-transparent text-base text-text-strong outline-none placeholder:text-text-soft" placeholder={placeholder} rows={2} value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submit(); } }} />
          <div className="mt-2 flex items-center gap-2">
            <button type="button" className="inline-flex size-9 items-center justify-center rounded-full bg-bg-weak text-icon-sub hover:bg-bg-soft" aria-label="Attach"><Plus className="size-5" /></button>
            <Dropdown align="start" trigger={<button type="button" className="inline-flex h-9 items-center gap-1.5 rounded-full bg-bg-weak px-3 text-sm font-medium text-text-sub hover:bg-bg-soft">{model} <ChevronDown className="size-4 text-icon-soft" /></button>} items={models.map((m) => ({ label: m, icon: <Sparkles className="size-4" />, onClick: () => onModelChange?.(m) }))} />
            <button type="button" onClick={submit} className={cn("ml-auto inline-flex size-9 items-center justify-center rounded-full transition-all duration-normal shadow-sm", value.trim() ? "bg-[var(--ai-accent)] text-white shadow-[0_8px_20px_-8px_var(--ai-accent-soft)]" : "bg-bg-soft text-icon-soft")} aria-label="Send"><ArrowUp className="size-5" /></button>
          </div>
        </div>
        <p className="mt-2 text-center text-xs text-text-soft">{disclaimer}</p>
      </div>
    </div>
  );
}

export interface AiChatAppProps {
  sidebar: AiSidebarProps;
  copy: AiChatCopy;
  initialTitle: string;
  initialMessages: ChatMessage[];
  models: string[];
  defaultModel: string;
}

export function AiChatApp({ sidebar, copy, initialTitle, initialMessages, models, defaultModel }: AiChatAppProps) {
  const [chat, setChat] = React.useState(initialTitle);
  const [input, setInput] = React.useState("");
  const [model, setModel] = React.useState(defaultModel);
  const [messages, setMessages] = React.useState<ChatMessage[]>(initialMessages);

  const sidebarProps: AiSidebarProps = {
    ...sidebar,
    onNewChat: () => {
      setChat(copy.newChatTitle);
      sidebar.onNewChat?.();
    },
    recentGroups: sidebar.recentGroups.map((group) => ({
      ...group,
      chats: group.chats.map((item) => ({
        ...item,
        active: item.active ?? chat === item.label,
        onClick: () => {
          setChat(item.label);
          item.onClick?.();
        },
      })),
    })),
  };

  return (
    <div className="flex min-h-screen bg-bg-white">
      <AiSidebar {...sidebarProps} />
      <div className="flex min-w-0 flex-1 flex-col">
        <ChatArea title={chat} messages={messages} />
        <Composer
          value={input}
          onChange={setInput}
          model={model}
          models={models}
          onModelChange={setModel}
          placeholder={copy.composerPlaceholder}
          disclaimer={copy.composerDisclaimer}
          upgradeMessage={copy.upgradeMessage}
          onSend={() => {
            setMessages((current) => [...current, { id: String(Date.now()), role: "user", content: input }]);
            setInput("");
          }}
        />
      </div>
    </div>
  );
}
