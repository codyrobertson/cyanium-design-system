import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@cyanium/ui";

const meta = {
  title: "Foundations/Themes",
  parameters: { layout: "centered" },
} satisfies Meta;

export default meta;

function ThemeDemo({ theme, mode }: { theme: "light" | "dark"; mode?: string }) {
  return (
    <div data-theme={theme} data-mode={mode} className="rounded-2xl bg-bg-white p-8 shadow-[inset_0_0_0_1px_var(--stroke-soft-200)]">
      <p className="mb-4 text-sm text-text-sub">
        data-theme=&quot;{theme}&quot;{mode ? ` data-mode="${mode}"` : ""}
      </p>
      <Button>Primary action</Button>
    </div>
  );
}

export const Light: StoryObj = {
  render: () => <ThemeDemo theme="light" />,
};

export const Dark: StoryObj = {
  render: () => <ThemeDemo theme="dark" />,
  parameters: { backgrounds: { default: "dark" } },
};

export const SlateMode: StoryObj = {
  render: () => <ThemeDemo theme="light" mode="slate" />,
};

export const PurpleMode: StoryObj = {
  render: () => <ThemeDemo theme="light" mode="purple" />,
};

export const OrangeMode: StoryObj = {
  render: () => <ThemeDemo theme="light" mode="orange" />,
};

export const GreenMode: StoryObj = {
  render: () => <ThemeDemo theme="light" mode="green" />,
};
