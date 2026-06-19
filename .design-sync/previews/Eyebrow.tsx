import { Eyebrow, Heading, Text } from "@cyanium/ui";

export function Default() {
  return <Eyebrow>What&apos;s new</Eyebrow>;
}

export function AboveHeading() {
  return (
    <div className="flex w-[480px] flex-col gap-2">
      <Eyebrow>Platform</Eyebrow>
      <Heading level="h3">Built for operators</Heading>
      <Text size="sm" muted>
        Calm, direct, utilitarian tooling for teams that move fast.
      </Text>
    </div>
  );
}

export function Variants() {
  return (
    <div className="flex flex-col gap-3">
      <Eyebrow>Features</Eyebrow>
      <Eyebrow>Pricing</Eyebrow>
      <Eyebrow>Changelog</Eyebrow>
    </div>
  );
}
