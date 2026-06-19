import { Subheading, Text } from "@cyanium/ui";

export function Sizes() {
  return (
    <div className="flex w-80 flex-col gap-4">
      <Subheading size="sm">Account Settings</Subheading>
      <Subheading size="xs">Stat Label</Subheading>
      <Subheading size="2xs">Section Marker</Subheading>
    </div>
  );
}

export function StatLabel() {
  return (
    <div className="flex w-64 flex-col gap-1 rounded-lg border border-stroke-soft bg-bg-weak p-4">
      <Subheading size="xs">Monthly Revenue</Subheading>
      <Text size="lg" weight="medium">$96,000.00</Text>
    </div>
  );
}

export function GroupHeader() {
  return (
    <div className="flex w-80 flex-col gap-2">
      <Subheading size="2xs">Notifications</Subheading>
      <Text size="sm" muted>Choose how Cyanium reaches you about activity.</Text>
    </div>
  );
}
