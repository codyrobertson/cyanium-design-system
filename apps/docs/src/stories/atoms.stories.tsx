import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Avatar,
  Badge,
  Button,
  CheckboxControl,
  Icon,
  Kbd,
  Label,
  RadioControl,
  RadioGroup,
  Separator,
  Skeleton,
  Subheading,
  Switch,
  Tag,
  Text,
  Heading,
} from "@cyanium/ui";
import { Bell, Search } from "lucide-react";

const meta = {
  title: "Atoms",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const ButtonVariants: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button intent="primary">Primary</Button>
      <Button intent="neutral" variant="stroke">Neutral</Button>
      <Button intent="error" variant="lighter">Error</Button>
      <Button iconOnly intent="neutral" variant="stroke" aria-label="Search"><Search className="size-5" /></Button>
    </div>
  ),
};

export const BadgesAndTags: StoryObj = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge color="green" dot>Active</Badge>
      <Badge color="blue" variant="filled">Pro</Badge>
      <Tag gray>Design System</Tag>
      <Tag onRemove={() => undefined}>Removable</Tag>
    </div>
  ),
};

export const FormAtoms: StoryObj = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <Label required>Email</Label>
      <Switch defaultChecked />
      <CheckboxControl defaultChecked />
      <RadioGroup defaultValue="a" className="flex gap-3">
        <RadioControl value="a" />
        <RadioControl value="b" />
      </RadioGroup>
    </div>
  ),
};

export const Typography: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Heading level="h4">Display Heading</Heading>
      <Text size="md">Body paragraph with AlignUI tone.</Text>
      <Subheading size="xs">Stat Label</Subheading>
    </div>
  ),
};

export const MiscAtoms: StoryObj = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Alex Morgan" color="blue" status="online" />
      <Icon><Bell className="size-5" /></Icon>
      <Kbd>⌘K</Kbd>
      <Separator className="h-8 w-px" orientation="vertical" />
      <Skeleton className="h-10 w-32" />
    </div>
  ),
};
