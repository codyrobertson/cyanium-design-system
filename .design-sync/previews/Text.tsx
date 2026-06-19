import { Text } from "@cyanium/ui";

export function Sizes() {
  return (
    <div className="flex w-96 flex-col gap-2">
      <Text size="lg">Large lead copy introduces the section.</Text>
      <Text size="md">Medium body text carries the main reading flow.</Text>
      <Text size="sm">Small text suits secondary descriptions.</Text>
      <Text size="xs">Extra-small text fits captions and footnotes.</Text>
    </div>
  );
}

export function Weights() {
  return (
    <div className="flex w-96 flex-col gap-2">
      <Text size="md" weight="regular">Regular weight body paragraph.</Text>
      <Text size="md" weight="medium">Medium weight for emphasis within copy.</Text>
    </div>
  );
}

export function Muted() {
  return (
    <div className="flex w-96 flex-col gap-2">
      <Text size="md">Your monthly statement is ready to review.</Text>
      <Text size="sm" muted>Generated June 18, 2026 at 9:41 AM</Text>
    </div>
  );
}

export function Paragraph() {
  return (
    <div className="w-[480px]">
      <Text size="md">
        Cyanium keeps body copy calm and direct. Text components inherit the Inter
        family and a restrained scale so paragraphs stay legible across dense
        operator dashboards and marketing surfaces alike.
      </Text>
    </div>
  );
}
