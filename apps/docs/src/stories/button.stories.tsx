import type { Meta, StoryObj } from "@storybook/react-vite";
import { Plus, Search } from "lucide-react";
import { Button } from "@cyanium/ui";

const meta = {
  title: "Forms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    intent: { control: "select", options: ["primary", "neutral", "error"] },
    variant: { control: "select", options: ["filled", "stroke", "lighter", "ghost"] },
    size: { control: "select", options: ["xsmall", "small", "medium", "large"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryFilled: Story = {
  args: { children: "Create Request", intent: "primary", variant: "filled" },
};

export const WithIcons: Story = {
  args: {
    children: "Add Card",
    leadingIcon: <Plus className="size-5" />,
    intent: "primary",
    variant: "filled",
  },
};

export const NeutralStroke: Story = {
  args: { children: "Cancel", intent: "neutral", variant: "stroke" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["primary", "neutral", "error"] as const).map((intent) => (
        <div key={intent} className="flex flex-wrap gap-2">
          {(["filled", "stroke", "lighter", "ghost"] as const).map((variant) => (
            <Button key={variant} intent={intent} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    children: <Search className="size-5" />,
    intent: "neutral",
    variant: "stroke",
    "aria-label": "Search",
  },
};
