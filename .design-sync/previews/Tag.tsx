import { Tag } from "@cyanium/ui";
import { Hash } from "lucide-react";

export function Default() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Tag>Design System</Tag>
      <Tag gray>Frontend</Tag>
      <Tag>Accessibility</Tag>
    </div>
  );
}

export function Removable() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Tag onRemove={() => undefined}>React</Tag>
      <Tag onRemove={() => undefined}>TypeScript</Tag>
      <Tag gray onRemove={() => undefined}>Tailwind</Tag>
    </div>
  );
}

export function WithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Tag icon={<Hash className="size-3" />}>roadmap</Tag>
      <Tag icon={<Hash className="size-3" />} onRemove={() => undefined}>design</Tag>
      <Tag gray icon={<Hash className="size-3" />}>archived</Tag>
    </div>
  );
}
