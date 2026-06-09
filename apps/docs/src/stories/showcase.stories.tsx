import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Alert,
  Avatar,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Modal,
  Switch,
  Tabs,
  Button,
} from "@cyanium/ui";
import { useState } from "react";
import { Info } from "lucide-react";

const meta = {
  title: "Overview/Showcase",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ComponentGallery: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(true);

    return (
      <div className="flex w-[720px] flex-col gap-6 rounded-2xl bg-bg-weak p-8">
        <div className="flex items-center gap-3">
          <Avatar name="Alex Morgan" color="blue" size={48} status="online" />
          <div>
            <div className="font-display text-xl font-medium">Welcome back 👋</div>
            <div className="text-sm text-text-sub">Finance dashboard kit</div>
          </div>
          <Badge color="green" variant="lighter" dot>
            Active
          </Badge>
        </div>

        <Tabs
          variant="line"
          defaultValue="overview"
          items={[
            { value: "overview", label: "Overview", badge: 3 },
            { value: "cards", label: "My Cards" },
            { value: "transactions", label: "Transactions" },
          ]}
        />

        <Card raised padding="lg">
          <CardHeader>
            <CardTitle>Weekly Spending Limit</CardTitle>
            <CardDescription>Your weekly spending limit is $2,000.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between gap-4 pt-2">
            <label className="flex items-center gap-2 text-sm">
              <Switch checked={checked} onCheckedChange={setChecked} />
              Enable limit alerts
            </label>
            <Checkbox label="Email me when close" defaultChecked />
          </CardContent>
        </Card>

        <Alert status="info" title="Heads up" variant="light">
          You can adjust your limit anytime from account settings.
        </Alert>

        <div className="flex gap-3">
          <Button intent="primary" onClick={() => setOpen(true)}>
            Open Modal
          </Button>
          <Button intent="neutral" variant="stroke">
            See All Transactions
          </Button>
        </div>

        <Modal
          open={open}
          onOpenChange={setOpen}
          title="Adjust Limit"
          description="Set a new weekly spending cap for your account."
          icon={<Info className="size-5" />}
          footer={
            <>
              <Button intent="neutral" variant="stroke" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button intent="primary" onClick={() => setOpen(false)}>
                Save Changes
              </Button>
            </>
          }
        >
          Changes take effect immediately and apply to all linked cards.
        </Modal>
      </div>
    );
  },
};
