import { Kbd, Text } from "@cyanium/ui";

export function Default() {
  return (
    <div className="flex items-center gap-3">
      <Kbd>⌘K</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Enter</Kbd>
    </div>
  );
}

export function Shortcut() {
  return (
    <div className="flex items-center gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>P</Kbd>
    </div>
  );
}

export function InContext() {
  return (
    <div className="flex items-center gap-2">
      <Text size="sm">Open the command palette with</Text>
      <Kbd>⌘K</Kbd>
    </div>
  );
}
