import type { Preview } from "@storybook/react-vite";
import "../src/storybook.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "var(--bg-weak-50)" },
        { name: "white", value: "var(--bg-white-0)" },
        { name: "dark", value: "var(--bg-strong-950)" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="font-sans text-text-strong">
        <Story />
      </div>
    ),
  ],
};

export default preview;
