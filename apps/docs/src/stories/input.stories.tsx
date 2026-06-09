import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail, Search } from "lucide-react";
import { Input } from "@cyanium/ui";

const meta = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "you@company.com",
    hint: "This is a hint text to help user.",
  },
};

export const WithIcons: Story = {
  args: {
    label: "Search",
    placeholder: "Search transactions…",
    leadingIcon: <Search className="size-5" />,
    trailingIcon: <Mail className="size-5" />,
  },
};

export const Error: Story = {
  args: {
    label: "Password",
    type: "password",
    error: true,
    hint: "Must be at least 8 characters.",
  },
};
