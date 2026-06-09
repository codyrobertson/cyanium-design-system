"use client";

import * as React from "react";
import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { Avatar, Badge, BrandMark, SearchField, Separator, cn } from "@cyanium/ui";
import { NavItem } from "./dashboard-compositions";

export interface SidebarNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  isNew?: boolean;
}

export interface AppSidebarProps extends React.HTMLAttributes<HTMLElement> {
  brand?: React.ReactNode;
  brandName: string;
  brandSubtitle?: string;
  activeId?: string;
  mainItems: SidebarNavItem[];
  otherItems?: SidebarNavItem[];
  otherGroupLabel?: string;
  user?: { name: string; email: string; avatarColor?: React.ComponentProps<typeof Avatar>["color"] };
  searchPlaceholder?: string;
  searchShortcut?: string;
  onNavigate?: (id: string) => void;
}

export function AppSidebar({
  brand,
  brandName,
  brandSubtitle,
  activeId,
  mainItems,
  otherItems = [],
  otherGroupLabel = "Others",
  user,
  searchPlaceholder = "Search…",
  searchShortcut,
  onNavigate,
  className,
  ...props
}: AppSidebarProps) {
  return (
    <aside className={cn("sticky top-0 flex h-screen w-[280px] shrink-0 flex-col gap-2 border-r border-stroke-soft bg-bg-white p-4", className)} {...props}>
      <div className="flex items-center gap-3 px-2 pb-3">
        {brand ?? <BrandMark />}
        <div className="min-w-0 flex-1">
          <div className="font-display text-sm font-semibold text-text-strong">{brandName}</div>
          {brandSubtitle ? <div className="text-xs text-text-sub">{brandSubtitle}</div> : null}
        </div>
        <ChevronDown className="size-4 text-icon-soft" />
      </div>

      <SearchField shortcut={searchShortcut} placeholder={searchPlaceholder} />

      <nav className="flex flex-col gap-0.5 pt-2">
        {mainItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activeId === item.id}
            badge={item.isNew ? <Badge color="gray" variant="lighter" size="small">NEW</Badge> : undefined}
            onClick={() => onNavigate?.(item.id)}
          />
        ))}
      </nav>

      {otherItems.length > 0 ? (
        <>
          <div className="px-2 pb-1 pt-4 text-[11px] font-semibold uppercase tracking-wide text-text-soft">{otherGroupLabel}</div>
          <nav className="flex flex-col gap-0.5">
            {otherItems.map((item) => (
              <NavItem key={item.id} icon={item.icon} label={item.label} active={activeId === item.id} onClick={() => onNavigate?.(item.id)} />
            ))}
          </nav>
        </>
      ) : null}

      <div className="flex-1" />

      {user ? (
        <>
          <Separator />
          <div className="flex items-center gap-3 px-2 py-2">
            <Avatar name={user.name} size={40} color={user.avatarColor ?? "gray"} status="online" />
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium text-text-strong">{user.name}</div>
              <div className="truncate text-xs text-text-sub">{user.email}</div>
            </div>
            <ArrowRight className="size-4 text-icon-soft" />
          </div>
        </>
      ) : null}
    </aside>
  );
}

export interface AppTopbarProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  avatarName?: string;
  showAvatar?: boolean;
  action?: React.ReactNode;
  onSearchClick?: () => void;
}

export function AppTopbar({ title, subtitle, avatarName, showAvatar, action, onSearchClick, className, ...props }: AppTopbarProps) {
  return (
    <header className={cn("sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-stroke-soft bg-bg-white px-8 py-4", className)} {...props}>
      <div className="flex items-center gap-3.5">
        {showAvatar && avatarName ? <Avatar name={avatarName} size={48} color="blue" status="online" /> : null}
        <div>
          <div className="font-display text-xl font-semibold tracking-tight text-text-strong">{title}</div>
          {subtitle ? <div className="text-sm text-text-sub">{subtitle}</div> : null}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={onSearchClick} className="inline-flex size-10 items-center justify-center rounded-lg bg-bg-white text-icon-sub shadow-button hover:bg-bg-weak" aria-label="Search">
          <Search className="size-5" />
        </button>
        {action}
      </div>
    </header>
  );
}

export interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {
  sidebar: React.ReactNode;
  topbar: React.ReactNode;
}

export function DashboardShell({ sidebar, topbar, children, className, ...props }: DashboardShellProps) {
  return (
    <div className={cn("flex min-h-screen bg-bg-weak", className)} {...props}>
      {sidebar}
      <div className="flex min-w-0 flex-1 flex-col">
        {topbar}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
