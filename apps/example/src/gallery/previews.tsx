import { useState, type ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  Avatar,
  Badge,
  Banner,
  BrandMark,
  Breadcrumb,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  CheckboxControl,
  DataTable,
  Dropdown,
  EmptyState,
  Eyebrow,
  FaqList,
  FeatureCard,
  Heading,
  Icon,
  Input,
  Kbd,
  Label,
  Modal,
  Pagination,
  Panel,
  ProgressBar,
  Radio,
  RadioGroup,
  SearchField,
  SectionHead,
  SegmentedControl,
  Select,
  Separator,
  Skeleton,
  Slider,
  Subheading,
  Switch,
  Tabs,
  TabsContent,
  Tag,
  Text,
  Textarea,
  Tooltip,
  TooltipProvider,
} from "@cyanium/ui";
import { StatusBadge } from "@cyanium/kits/patterns";
import {
  Bell,
  Info,
  LayoutDashboard,
  Mail,
  MoreHorizontal,
  Search,
  Settings,
  Sparkles,
  Zap,
} from "lucide-react";

export function PreviewSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3 border-b border-stroke-soft pb-6 last:border-0 last:pb-0">
      <p className="text-label-sm font-medium text-text-sub">{title}</p>
      {children}
    </div>
  );
}

export function ButtonPreview() {
  return (
    <div className="space-y-6">
      <PreviewSection title="Intent × variant">
        <div className="flex flex-wrap gap-2">
          <Button intent="primary">Primary</Button>
          <Button intent="primary" variant="stroke">
            Primary stroke
          </Button>
          <Button intent="primary" variant="lighter">
            Primary lighter
          </Button>
          <Button intent="primary" variant="ghost">
            Primary ghost
          </Button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <Button intent="neutral" variant="stroke">
            Neutral
          </Button>
          <Button intent="neutral" variant="lighter">
            Neutral lighter
          </Button>
          <Button intent="error" variant="filled">
            Error
          </Button>
          <Button intent="error" variant="stroke">
            Error stroke
          </Button>
        </div>
      </PreviewSection>
      <PreviewSection title="Sizes">
        <div className="flex flex-wrap items-center gap-2">
          <Button size="xsmall">XSmall</Button>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </PreviewSection>
      <PreviewSection title="Icons & disabled">
        <div className="flex flex-wrap gap-2">
          <Button leadingIcon={<Search className="size-5" />}>Search</Button>
          <Button trailingIcon={<Mail className="size-5" />} variant="stroke" intent="neutral">
            Email
          </Button>
          <Button iconOnly variant="stroke" intent="neutral" aria-label="Search">
            <Search className="size-5" />
          </Button>
          <Button disabled>Disabled</Button>
        </div>
      </PreviewSection>
    </div>
  );
}

export function BadgePreview() {
  return (
    <div className="space-y-6">
      <PreviewSection title="Colors">
        <div className="flex flex-wrap items-center gap-2">
          {(["green", "blue", "orange", "red", "gray"] as const).map((color) => (
            <Badge key={color} color={color} variant="lighter">
              {color}
            </Badge>
          ))}
        </div>
      </PreviewSection>
      <PreviewSection title="Variants">
        <div className="flex flex-wrap items-center gap-2">
          <Badge color="green" dot>
            Active
          </Badge>
          <Badge color="blue" variant="filled">
            Pro
          </Badge>
          <Badge color="orange" variant="lighter">
            Pending
          </Badge>
          <Badge color="gray" size="small">
            Small
          </Badge>
        </div>
      </PreviewSection>
    </div>
  );
}

export function TagPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag>Default</Tag>
      <Tag gray>Neutral</Tag>
      <Tag onRemove={() => undefined}>Removable</Tag>
    </div>
  );
}

export function AvatarPreview() {
  return (
    <div className="space-y-6">
      <PreviewSection title="Sizes & colors">
        <div className="flex items-center gap-4">
          <Avatar name="Alex Morgan" color="blue" status="online" />
          <Avatar name="Sam Lee" color="green" size={40} />
          <Avatar name="Jordan" color="orange" size={48} status="busy" />
        </div>
      </PreviewSection>
      <PreviewSection title="Status">
        <div className="flex items-center gap-4">
          <Avatar name="Online" color="blue" status="online" />
          <Avatar name="Offline" color="gray" status="offline" />
          <Avatar name="Busy" color="orange" status="busy" />
        </div>
      </PreviewSection>
    </div>
  );
}

export function IconPreview() {
  return (
    <div className="flex items-center gap-4">
      <Icon size="xs">
        <Bell />
      </Icon>
      <Icon size="sm">
        <Bell />
      </Icon>
      <Icon size="md">
        <Bell />
      </Icon>
      <Icon size="lg">
        <Bell />
      </Icon>
      <Icon size="md" muted>
        <Bell />
      </Icon>
    </div>
  );
}

export function BrandMarkPreview() {
  return (
    <div className="flex items-center gap-4">
      <BrandMark size={32} />
      <BrandMark size={40} />
      <BrandMark size={48} />
    </div>
  );
}

export function TypographyPreview() {
  return (
    <div className="space-y-4">
      <Heading level="h2">Display heading</Heading>
      <Heading level="h4">Section title</Heading>
      <Text size="lg">Large body copy for introductions.</Text>
      <Text size="md">Default paragraph text with Cyanium tone.</Text>
      <Subheading size="xs">Stat label</Subheading>
    </div>
  );
}

export function SeparatorPreview() {
  return (
    <div className="flex h-10 items-center gap-4">
      <Text size="sm">Left</Text>
      <Separator className="h-6 w-px" orientation="vertical" />
      <Text size="sm">Right</Text>
    </div>
  );
}

export function SwitchPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Switch defaultChecked />
        <Label>On</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch />
        <Label>Off</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch disabled defaultChecked />
        <Label>Disabled</Label>
      </div>
      <Switch size="small" defaultChecked />
    </div>
  );
}

export function CheckboxPreview() {
  return (
    <div className="space-y-4">
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Unchecked" />
      <Checkbox label="Disabled" disabled />
      <CheckboxControl defaultChecked aria-label="Bare control" />
    </div>
  );
}

export function RadioGroupPreview() {
  return (
    <RadioGroup defaultValue="a" className="gap-3">
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C (disabled)" disabled />
    </RadioGroup>
  );
}

export function InputPreview() {
  return (
    <div className="w-full max-w-md space-y-6">
      <PreviewSection title="Default">
        <Input label="Email" placeholder="you@company.com" hint="We'll never share your email." />
      </PreviewSection>
      <PreviewSection title="States">
        <div className="space-y-4">
          <Input label="Error" error hint="Invalid email address." placeholder="bad@" />
          <Input label="Disabled" disabled placeholder="Can't edit" />
        </div>
      </PreviewSection>
      <PreviewSection title="Icons & sizes">
        <div className="space-y-4">
          <Input
            label="With icons"
            placeholder="Search…"
            leadingIcon={<Search className="size-5" />}
            trailingIcon={<Mail className="size-5" />}
          />
          <Input label="Small" inputSize="small" placeholder="Small field" />
          <Input label="Large" inputSize="large" placeholder="Large field" />
        </div>
      </PreviewSection>
    </div>
  );
}

export function SearchFieldPreview() {
  return (
    <div className="w-full max-w-sm">
      <SearchField placeholder="Search transactions…" shortcut="⌘K" />
    </div>
  );
}

export function SelectPreview() {
  const options = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
  ];
  return (
    <div className="w-full max-w-md space-y-6">
      <PreviewSection title="Placeholder">
        <Select label="Country" placeholder="Select…" options={options} />
      </PreviewSection>
      <PreviewSection title="Selected value">
        <Select label="Country" defaultValue="us" options={options} />
      </PreviewSection>
      <PreviewSection title="States">
        <div className="space-y-4">
          <Select label="Error" error hint="Required field." placeholder="Select…" options={options} />
          <Select label="Disabled" disabled placeholder="Select…" options={options} />
        </div>
      </PreviewSection>
    </div>
  );
}

export function TextareaPreview() {
  return (
    <div className="w-full max-w-md space-y-4">
      <Textarea label="Notes" placeholder="Write something…" />
      <Textarea label="With counter" showCounter maxLength={120} defaultValue="Hello from Cyanium." />
      <Textarea label="Error" error hint="Too short." defaultValue="Hi" />
    </div>
  );
}

export function SliderPreview() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <Slider defaultValue={[40]} max={100} step={1} />
      <Slider defaultValue={[70]} max={100} step={1} disabled />
    </div>
  );
}

export function SegmentedControlPreview() {
  const [value, setValue] = useState("week");
  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      items={[
        { value: "day", label: "Day" },
        { value: "week", label: "Week", icon: <LayoutDashboard className="size-4" /> },
        { value: "month", label: "Month" },
      ]}
    />
  );
}

export function AlertPreview() {
  return (
    <div className="w-full max-w-lg space-y-3">
      <Alert status="info" title="Info">
        You can adjust your limit anytime.
      </Alert>
      <Alert status="success" title="Success">
        Changes saved.
      </Alert>
      <Alert status="warning" title="Warning">
        Approaching your limit.
      </Alert>
      <Alert status="error" title="Error">
        Something went wrong.
      </Alert>
    </div>
  );
}

export function BannerPreview() {
  return (
    <div className="space-y-3">
      <Banner color="blue" icon={<Sparkles className="size-4" />}>
        New features in this release.
      </Banner>
      <Banner color="orange" onClose={() => undefined}>
        Dismissible banner.
      </Banner>
    </div>
  );
}

export function ProgressBarPreview() {
  return (
    <div className="w-full max-w-sm space-y-6">
      <ProgressBar value={68} showValue label="Linear" />
      <ProgressBar value={45} variant="circular" showValue label="Circular" />
    </div>
  );
}

export function ModalPreview() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Adjust limit"
        description="Set a new weekly spending cap."
        icon={<Info className="size-5" />}
        footer={
          <>
            <Button variant="stroke" intent="neutral" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </>
        }
      >
        Changes take effect immediately.
      </Modal>
    </div>
  );
}

export function DropdownPreview() {
  return (
    <Dropdown
      trigger={
        <Button variant="stroke" intent="neutral" iconOnly aria-label="Menu">
          <MoreHorizontal className="size-5" />
        </Button>
      }
      items={[
        { label: "Edit", onClick: () => undefined },
        { label: "Settings", icon: <Settings className="size-4" />, onClick: () => undefined },
        { type: "separator" },
        { label: "Delete", danger: true, onClick: () => undefined },
      ]}
    />
  );
}

export function TooltipPreview() {
  return (
    <TooltipProvider>
      <Tooltip content="Adjust spending limit">
        <Button variant="stroke" intent="neutral">
          Hover me
        </Button>
      </Tooltip>
    </TooltipProvider>
  );
}

export function CardPreview() {
  return (
    <div className="grid max-w-2xl gap-4 md:grid-cols-2">
      <Card padding="lg">
        <CardHeader>
          <CardTitle>Flat card</CardTitle>
          <CardDescription>Inset keyline, no shadow.</CardDescription>
        </CardHeader>
      </Card>
      <Card raised padding="lg">
        <CardHeader>
          <CardTitle>Raised card</CardTitle>
          <CardDescription>shadow-sm elevation.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export function PanelPreview() {
  return (
    <Panel title="Weekly spend" icon={<Zap className="size-5" />} action={<Badge color="green">Live</Badge>}>
      <Text size="sm" className="text-text-sub">
        Panel wraps Card with title row and action slot.
      </Text>
    </Panel>
  );
}

export function TabsPreview() {
  return (
    <div className="space-y-8">
      <PreviewSection title="Line variant">
        <Tabs
          variant="line"
          defaultValue="one"
          items={[
            { value: "one", label: "Overview", badge: 3 },
            { value: "two", label: "Settings" },
          ]}
        >
          <TabsContent value="one" className="pt-4 text-sm text-text-sub">
            Line tabs content
          </TabsContent>
          <TabsContent value="two" className="pt-4 text-sm text-text-sub">
            Settings content
          </TabsContent>
        </Tabs>
      </PreviewSection>
      <PreviewSection title="Pill variant">
        <Tabs
          variant="pill"
          defaultValue="a"
          items={[
            { value: "a", label: "Day" },
            { value: "b", label: "Week" },
          ]}
        />
      </PreviewSection>
    </div>
  );
}

export function BreadcrumbPreview() {
  return (
    <Breadcrumb
      items={[
        { label: "Home", href: "#" },
        { label: "Settings", href: "#" },
        { label: "Billing" },
      ]}
    />
  );
}

export function DataTablePreview() {
  const [selected, setSelected] = useState(new Set<string>());
  const data = [
    { id: "1", name: "Netflix", status: "completed" as const, amount: "-$15.99" },
    { id: "2", name: "Salary", status: "pending" as const, amount: "+$5,200" },
    { id: "3", name: "Spotify", status: "completed" as const, amount: "-$9.99" },
  ];
  return (
    <DataTable
      columns={[
        { id: "name", header: "Name", cell: (r) => r.name },
        { id: "status", header: "Status", cell: (r) => <StatusBadge status={r.status} /> },
        { id: "amount", header: "Amount", cell: (r) => r.amount, className: "text-right font-semibold" },
      ]}
      data={data}
      getRowId={(r) => r.id}
      selectable
      selectedIds={selected}
      onSelectionChange={setSelected}
    />
  );
}

export function AccordionPreview() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-lg">
      <AccordionItem value="1">
        <AccordionTrigger>What is Cyanium?</AccordionTrigger>
        <AccordionContent>A production design system for React.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>Can I copy components?</AccordionTrigger>
        <AccordionContent>Yes — use the shadcn registry for primitives.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function FaqListPreview() {
  return (
    <div className="max-w-lg">
      <FaqList
        items={[
          { value: "a", question: "What ships in the repo?", answer: "Tokens, UI, kits, gallery, docs." },
          { value: "b", question: "Radix or native?", answer: "Radix primitives with Cyanium tokens." },
        ]}
      />
    </div>
  );
}

export function KbdPreview() {
  return (
    <div className="flex items-center gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </div>
  );
}

export function SkeletonPreview() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  );
}

export function EmptyStatePreview() {
  return (
    <EmptyState title="No transactions" description="When you make transactions they will show up here." />
  );
}

export function PaginationPreview() {
  return <Pagination total={12} page={3} />;
}

export function SectionHeadPreview() {
  return (
    <SectionHead
      align="left"
      eyebrow="Features"
      title="Built for operators"
      subtitle="Calm surfaces, explicit props, token-first styling."
    />
  );
}

export function FeatureCardPreview() {
  return (
    <div className="grid max-w-2xl gap-4 md:grid-cols-2">
      <FeatureCard icon={<Sparkles className="size-5" />} title="Token-first" description="Semantic CSS variables across every layer." link="Learn more" />
      <FeatureCard icon={<Zap className="size-5" />} title="Radix behavior" description="Accessible primitives with Cyanium chrome." />
    </div>
  );
}

export function EyebrowPreview() {
  return <Eyebrow>Release notes</Eyebrow>;
}
