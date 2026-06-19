import { SectionHead } from "@cyanium/ui";

export function LeftAligned() {
  return (
    <div className="w-[560px]">
      <SectionHead
        eyebrow="Features"
        title="Built for operators"
        subtitle="Calm, direct, utilitarian copy that gets out of the way."
        align="left"
      />
    </div>
  );
}

export function Centered() {
  return (
    <div className="w-[560px]">
      <SectionHead
        eyebrow="Pricing"
        title="Plans that scale with your team"
        subtitle="Start free, upgrade when you outgrow the limits."
        align="center"
      />
    </div>
  );
}

export function TitleOnly() {
  return (
    <div className="w-[560px]">
      <SectionHead title="Recent activity" align="left" />
    </div>
  );
}
