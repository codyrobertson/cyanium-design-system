import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Badge, Heading, Text } from "@cyanium/ui";

const meta = {
  title: "Foundations/Tokens",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

const swatches = [
  { name: "Primary", class: "bg-primary" },
  { name: "Success", class: "bg-success" },
  { name: "Error", class: "bg-destructive" },
  { name: "Warning", class: "bg-warning" },
  { name: "Bg weak", class: "bg-bg-weak shadow-[inset_0_0_0_1px_var(--stroke-soft-200)]" },
  { name: "Bg white", class: "bg-bg-white shadow-[inset_0_0_0_1px_var(--stroke-soft-200)]" },
];

export const Colors: StoryObj = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {swatches.map((s) => (
        <div key={s.name} className="flex items-center gap-3">
          <span className={`size-10 rounded-lg ${s.class}`} />
          <Text size="sm">{s.name}</Text>
        </div>
      ))}
    </div>
  ),
};

export const Typography: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <Heading level="h1">Display heading</Heading>
      <Heading level="h2">Section heading</Heading>
      <Text size="lg">Paragraph large — body copy for marketing sections.</Text>
      <Text size="md">Paragraph medium — default UI copy.</Text>
      <Text size="sm" className="text-text-sub">Paragraph small — captions and hints.</Text>
    </div>
  ),
};

export const Components: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button>Primary</Button>
      <Button variant="stroke" intent="neutral">Stroke</Button>
      <Badge color="green">Success</Badge>
      <Badge color="orange" dot>Pending</Badge>
    </div>
  ),
};

export const SpacingAndRadius: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      {[6, 8, 10, 12, 16].map((r) => (
        <div key={r} className="text-center">
          <div className={`size-16 bg-primary-lighter`} style={{ borderRadius: `var(--radius-${r})` }} />
          <Text size="xs" className="mt-2 text-text-sub">radius-{r}</Text>
        </div>
      ))}
    </div>
  ),
};
