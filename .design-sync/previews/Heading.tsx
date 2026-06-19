import { Heading } from "@cyanium/ui";

export function Levels() {
  return (
    <div className="flex flex-col gap-3">
      <Heading level="h1">Display heading one</Heading>
      <Heading level="h2">Section heading two</Heading>
      <Heading level="h3">Subsection heading three</Heading>
      <Heading level="h4">Card title heading four</Heading>
      <Heading level="h5">Label heading five</Heading>
    </div>
  );
}

export function InContext() {
  return (
    <div className="w-96 flex flex-col gap-2">
      <Heading level="h3">Spending this month</Heading>
      <p className="text-sm text-text-sub">
        Headings pair with body text on the Cyanium type scale, using the Inter family.
      </p>
    </div>
  );
}
