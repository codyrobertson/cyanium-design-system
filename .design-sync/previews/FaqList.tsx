import { FaqList } from "@cyanium/ui";

export function Default() {
  return (
    <div className="w-[520px]">
      <FaqList
        items={[
          { value: "what", question: "What is Cyanium?", answer: "A production-grade React design system with tokens, primitives, and prebuilt patterns." },
          { value: "theme", question: "Can I customize the theme?", answer: "Yes. Every color, radius, and spacing value is driven by CSS variables you can override." },
          { value: "a11y", question: "Are the components accessible?", answer: "Components are built on Radix primitives, so keyboard navigation and ARIA semantics work out of the box." },
          { value: "ts", question: "Is TypeScript supported?", answer: "Fully. Every component ships with typed props and exported interfaces." },
        ]}
      />
    </div>
  );
}
