import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Alert,
  Banner,
  Checkbox,
  Eyebrow,
  FeatureCard,
  Field,
  Input,
  InputControl,
  ProgressBar,
  SearchField,
  SectionHead,
  Select,
  Slider,
  Textarea,
  Tooltip,
  TooltipProvider,
  Button,
} from "@cyanium/ui";
import { NavItem, StatCard, TransactionRow } from "@cyanium/kits/patterns";
import { ArrowDownLeft, LayoutDashboard, Sparkles } from "lucide-react";

const meta = {
  title: "Molecules",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const InputField: StoryObj = {
  render: () => (
    <div className="w-80 space-y-4">
      <Input label="Email" placeholder="you@company.com" hint="This is a hint text to help user." />
      <SearchField placeholder="Search transactions…" />
      <Field label="Bare control" hint="Atom + field wrapper"><InputControl placeholder="No label wrapper" /></Field>
    </div>
  ),
};

export const SelectAndSlider: StoryObj = {
  render: () => (
    <div className="w-80 space-y-6">
      <Select label="Country" placeholder="Select…" options={[{ value: "us", label: "United States" }, { value: "uk", label: "United Kingdom" }]} />
      <Slider defaultValue={[40]} max={100} step={1} />
      <Textarea label="Notes" showCounter maxLength={120} defaultValue="Hello" />
      <Checkbox label="Remember me" defaultChecked />
    </div>
  ),
};

export const Feedback: StoryObj = {
  render: () => (
    <div className="w-[480px] space-y-3">
      <Alert status="info" title="Heads up">You can adjust your limit anytime.</Alert>
      <Banner color="blue" icon={<Sparkles className="size-4" />}>New features are available in this release.</Banner>
      <ProgressBar value={68} showValue label="Weekly limit" />
    </div>
  ),
};

export const Compositions: StoryObj = {
  render: () => (
    <div className="w-[520px] space-y-6">
      <StatCard icon={<ArrowDownLeft className="size-4" />} label="Income" value="$96,000.00" delta="+5%" deltaColor="green" />
      <NavItem icon={<LayoutDashboard className="size-5" />} label="Dashboard" active />
      <SectionHead eyebrow="Features" title="Built for operators" subtitle="Calm, direct, utilitarian copy." align="left" />
      <FeatureCard icon={<Sparkles className="size-5" />} title="Token-first" description="Semantic CSS variables across every layer." link="Learn more" />
      <TransactionRow icon={<span>🎬</span>} name="Netflix Cashback" subtitle="September 2023" amount="$36.24" positive />
      <TooltipProvider>
        <Tooltip content="Adjust spending limit"><Button variant="stroke" intent="neutral">Hover me</Button></Tooltip>
      </TooltipProvider>
    </div>
  ),
};
