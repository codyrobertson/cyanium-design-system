import { useState, type ComponentType } from "react";
import {
  Alert,
  Avatar,
  Badge,
  Banner,
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
  FaqList,
  Input,
  Kbd,
  Label,
  Modal,
  Pagination,
  ProgressBar,
  Select,
  Skeleton,
  Slider,
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
import { Info, MoreHorizontal, Search, Sparkles } from "lucide-react";

export type GalleryCategory =
  | "Atoms"
  | "Forms"
  | "Feedback"
  | "Overlays"
  | "Data"
  | "Patterns";

export interface GalleryEntry {
  id: string;
  name: string;
  category: GalleryCategory;
  description: string;
  importLine: string;
  usage: string;
  Preview: ComponentType;
}

function ButtonPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button intent="primary">Primary</Button>
      <Button intent="neutral" variant="stroke">
        Neutral
      </Button>
      <Button intent="error" variant="lighter">
        Error
      </Button>
      <Button iconOnly intent="neutral" variant="stroke" aria-label="Search">
        <Search className="size-5" />
      </Button>
    </div>
  );
}

function BadgePreview() {
  return (
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
      <Badge color="gray">Default</Badge>
    </div>
  );
}

function TagPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag>Design System</Tag>
      <Tag gray>Neutral</Tag>
      <Tag onRemove={() => undefined}>Removable</Tag>
    </div>
  );
}

function AvatarPreview() {
  return (
    <div className="flex items-center gap-4">
      <Avatar name="Alex Morgan" color="blue" status="online" />
      <Avatar name="Sam Lee" color="green" />
      <Avatar name="Jordan" color="orange" size={48} />
    </div>
  );
}

function SwitchPreview() {
  return (
    <div className="flex items-center gap-4">
      <Switch defaultChecked />
      <Switch />
      <Label>Enable notifications</Label>
    </div>
  );
}

function CheckboxPreview() {
  return (
    <div className="flex flex-col gap-3">
      <Checkbox label="Remember me" defaultChecked />
      <CheckboxControl defaultChecked />
      <Checkbox label="Marketing emails" />
    </div>
  );
}

function InputPreview() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <Input label="Email" placeholder="you@company.com" hint="We'll never share your email." />
      <Input label="Password" type="password" placeholder="••••••••" />
    </div>
  );
}

function SelectPreview() {
  return (
    <div className="w-full max-w-sm">
      <Select
        label="Country"
        placeholder="Select…"
        options={[
          { value: "us", label: "United States" },
          { value: "uk", label: "United Kingdom" },
          { value: "ca", label: "Canada" },
        ]}
      />
    </div>
  );
}

function TextareaPreview() {
  return (
    <div className="w-full max-w-sm">
      <Textarea label="Notes" showCounter maxLength={120} defaultValue="Hello from Cyanium." />
    </div>
  );
}

function SliderPreview() {
  return (
    <div className="w-full max-w-sm">
      <Slider defaultValue={[40]} max={100} step={1} />
    </div>
  );
}

function AlertPreview() {
  return (
    <div className="w-full max-w-lg space-y-3">
      <Alert status="info" title="Heads up">
        You can adjust your limit anytime.
      </Alert>
      <Alert status="success" title="Saved">
        Your changes were saved successfully.
      </Alert>
      <Alert status="error" title="Error">
        Something went wrong. Try again.
      </Alert>
    </div>
  );
}

function BannerPreview() {
  return (
    <Banner color="blue" icon={<Sparkles className="size-4" />}>
      New features are available in this release.
    </Banner>
  );
}

function ProgressBarPreview() {
  return (
    <div className="w-full max-w-sm">
      <ProgressBar value={68} showValue label="Weekly limit" />
    </div>
  );
}

function ModalPreview() {
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

function DropdownPreview() {
  return (
    <Dropdown
      trigger={
        <Button variant="stroke" intent="neutral" iconOnly aria-label="Menu">
          <MoreHorizontal className="size-5" />
        </Button>
      }
      items={[
        { label: "Edit", onClick: () => undefined },
        { type: "separator" },
        { label: "Delete", danger: true, onClick: () => undefined },
      ]}
    />
  );
}

function TooltipPreview() {
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

function CardPreview() {
  return (
    <Card raised padding="lg" className="max-w-sm">
      <CardHeader>
        <CardTitle>Card surface</CardTitle>
        <CardDescription>White fill + keyline + soft radius.</CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <Text size="sm" className="text-text-sub">
          Composable card primitives for dashboards and settings.
        </Text>
      </CardContent>
    </Card>
  );
}

function TabsPreview() {
  return (
    <Tabs
      defaultValue="one"
      items={[
        { value: "one", label: "Overview", badge: 3 },
        { value: "two", label: "Settings" },
      ]}
    >
      <TabsContent value="one" className="pt-4 text-sm text-text-sub">
        Panel one content
      </TabsContent>
      <TabsContent value="two" className="pt-4 text-sm text-text-sub">
        Panel two content
      </TabsContent>
    </Tabs>
  );
}

function DataTablePreview() {
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
        {
          id: "amount",
          header: "Amount",
          cell: (r) => r.amount,
          className: "text-right font-semibold",
        },
      ]}
      data={data}
      getRowId={(r) => r.id}
      selectable
      selectedIds={selected}
      onSelectionChange={setSelected}
    />
  );
}

function AccordionPreview() {
  return (
    <FaqList
      items={[
        { value: "a", question: "What is Cyanium?", answer: "A production design system for React." },
        { value: "b", question: "Radix or native?", answer: "Radix primitives with Cyanium tokens." },
      ]}
    />
  );
}

function KbdPreview() {
  return (
    <div className="flex items-center gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <Text size="sm" className="text-text-sub">
        Quick search
      </Text>
    </div>
  );
}

function SkeletonPreview() {
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

function EmptyStatePreview() {
  return (
    <EmptyState
      title="No transactions"
      description="When you make transactions they will show up here."
    />
  );
}

function PaginationPreview() {
  return <Pagination total={12} page={3} />;
}

export const galleryCatalog: GalleryEntry[] = [
  {
    id: "button",
    name: "Button",
    category: "Atoms",
    description: "Primary actions with intent, variant, and size options.",
    importLine: 'import { Button } from "@cyanium/ui";',
    usage: "Use intent for semantic color (primary, neutral, error). Variants: filled, stroke, lighter, ghost.",
    Preview: ButtonPreview,
  },
  {
    id: "badge",
    name: "Badge",
    category: "Atoms",
    description: "Compact status labels with color and dot variants.",
    importLine: 'import { Badge } from "@cyanium/ui";',
    usage: "Pair color with variant (filled, lighter) for hierarchy on dense dashboards.",
    Preview: BadgePreview,
  },
  {
    id: "tag",
    name: "Tag",
    category: "Atoms",
    description: "Inline labels for metadata, filters, and removable chips.",
    importLine: 'import { Tag } from "@cyanium/ui";',
    usage: "Pass onRemove for dismissible tags in filter bars.",
    Preview: TagPreview,
  },
  {
    id: "avatar",
    name: "Avatar",
    category: "Atoms",
    description: "User initials with optional status indicator.",
    importLine: 'import { Avatar } from "@cyanium/ui";',
    usage: "Set status to online, offline, or busy for presence in nav and lists.",
    Preview: AvatarPreview,
  },
  {
    id: "switch",
    name: "Switch",
    category: "Atoms",
    description: "Toggle control for boolean settings.",
    importLine: 'import { Switch } from "@cyanium/ui";',
    usage: "Use with Label for accessible toggle groups in settings panels.",
    Preview: SwitchPreview,
  },
  {
    id: "checkbox",
    name: "Checkbox",
    category: "Atoms",
    description: "Checkbox field and bare control for forms.",
    importLine: 'import { Checkbox, CheckboxControl } from "@cyanium/ui";',
    usage: "Checkbox wraps label + control; CheckboxControl is the bare Radix primitive.",
    Preview: CheckboxPreview,
  },
  {
    id: "kbd",
    name: "Kbd",
    category: "Atoms",
    description: "Keyboard shortcut display for command palettes and hints.",
    importLine: 'import { Kbd } from "@cyanium/ui";',
    usage: "Compose multiple Kbd elements for chord shortcuts like ⌘K.",
    Preview: KbdPreview,
  },
  {
    id: "skeleton",
    name: "Skeleton",
    category: "Atoms",
    description: "Loading placeholder for text and avatar shapes.",
    importLine: 'import { Skeleton } from "@cyanium/ui";',
    usage: "Match skeleton dimensions to the content they replace to avoid layout shift.",
    Preview: SkeletonPreview,
  },
  {
    id: "input",
    name: "Input",
    category: "Forms",
    description: "Labeled text field with hint and error support.",
    importLine: 'import { Input } from "@cyanium/ui";',
    usage: "Label, hint, and error props keep form copy co-located with the control.",
    Preview: InputPreview,
  },
  {
    id: "select",
    name: "Select",
    category: "Forms",
    description: "Dropdown select with label and options array.",
    importLine: 'import { Select } from "@cyanium/ui";',
    usage: "Pass options as { value, label } pairs. Use placeholder for empty state.",
    Preview: SelectPreview,
  },
  {
    id: "textarea",
    name: "Textarea",
    category: "Forms",
    description: "Multi-line input with optional character counter.",
    importLine: 'import { Textarea } from "@cyanium/ui";',
    usage: "Enable showCounter with maxLength for comment and note fields.",
    Preview: TextareaPreview,
  },
  {
    id: "slider",
    name: "Slider",
    category: "Forms",
    description: "Range input for numeric settings.",
    importLine: 'import { Slider } from "@cyanium/ui";',
    usage: "Controlled via value/onValueChange or defaultValue for uncontrolled use.",
    Preview: SliderPreview,
  },
  {
    id: "alert",
    name: "Alert",
    category: "Feedback",
    description: "Inline status messages for forms and panels.",
    importLine: 'import { Alert } from "@cyanium/ui";',
    usage: "Status drives color: info, success, warning, error. Include a title for scanability.",
    Preview: AlertPreview,
  },
  {
    id: "banner",
    name: "Banner",
    category: "Feedback",
    description: "Page-level announcement bar with icon slot.",
    importLine: 'import { Banner } from "@cyanium/ui";',
    usage: "Place at the top of a section for release notes or maintenance notices.",
    Preview: BannerPreview,
  },
  {
    id: "progress-bar",
    name: "ProgressBar",
    category: "Feedback",
    description: "Determinate progress with optional label and value.",
    importLine: 'import { ProgressBar } from "@cyanium/ui";',
    usage: "Use showValue for limits, quotas, and upload progress.",
    Preview: ProgressBarPreview,
  },
  {
    id: "empty-state",
    name: "EmptyState",
    category: "Feedback",
    description: "Placeholder when a list or table has no data.",
    importLine: 'import { EmptyState } from "@cyanium/ui";',
    usage: "Keep copy direct — title + one-line description is enough.",
    Preview: EmptyStatePreview,
  },
  {
    id: "modal",
    name: "Modal",
    category: "Overlays",
    description: "Dialog overlay built on Radix Dialog primitives.",
    importLine: 'import { Modal } from "@cyanium/ui";',
    usage: "Control with open/onOpenChange. Footer slot accepts action buttons.",
    Preview: ModalPreview,
  },
  {
    id: "dropdown",
    name: "Dropdown",
    category: "Overlays",
    description: "Action menu with separators and danger items.",
    importLine: 'import { Dropdown } from "@cyanium/ui";',
    usage: "Pass trigger as a Button or icon button. Items support onClick handlers.",
    Preview: DropdownPreview,
  },
  {
    id: "tooltip",
    name: "Tooltip",
    category: "Overlays",
    description: "Contextual hint on hover or focus.",
    importLine: 'import { Tooltip, TooltipProvider } from "@cyanium/ui";',
    usage: "Wrap the app or section in TooltipProvider once. Keep content under one line.",
    Preview: TooltipPreview,
  },
  {
    id: "card",
    name: "Card",
    category: "Data",
    description: "Composable surface for grouped content.",
    importLine: 'import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@cyanium/ui";',
    usage: "Use raised + padding props for dashboard tiles. Compose header and content slots.",
    Preview: CardPreview,
  },
  {
    id: "tabs",
    name: "Tabs",
    category: "Data",
    description: "Tabbed navigation with optional badges.",
    importLine: 'import { Tabs, TabsContent } from "@cyanium/ui";',
    usage: "Pass items array for triggers. TabsContent children map to panel bodies.",
    Preview: TabsPreview,
  },
  {
    id: "data-table",
    name: "DataTable",
    category: "Data",
    description: "Selectable table with typed columns.",
    importLine: 'import { DataTable } from "@cyanium/ui";',
    usage: "Define columns with id, header, and cell renderers. Use getRowId for selection.",
    Preview: DataTablePreview,
  },
  {
    id: "accordion",
    name: "Accordion",
    category: "Data",
    description: "Expandable FAQ-style list (FaqList).",
    importLine: 'import { FaqList } from "@cyanium/ui";',
    usage: "Items need value, question, and answer. One panel open at a time by default.",
    Preview: AccordionPreview,
  },
  {
    id: "pagination",
    name: "Pagination",
    category: "Data",
    description: "Page controls for long lists and tables.",
    importLine: 'import { Pagination } from "@cyanium/ui";',
    usage: "Pass total page count and current page. Wire onPageChange for navigation.",
    Preview: PaginationPreview,
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Atoms",
  "Forms",
  "Feedback",
  "Overlays",
  "Data",
  "Patterns",
];

export function getGalleryEntry(id: string | undefined): GalleryEntry {
  if (id) {
    const found = galleryCatalog.find((e) => e.id === id);
    if (found) return found;
  }
  return galleryCatalog[0]!;
}

export function entriesByCategory(): Record<GalleryCategory, GalleryEntry[]> {
  const map = Object.fromEntries(galleryCategories.map((c) => [c, [] as GalleryEntry[]])) as Record<
    GalleryCategory,
    GalleryEntry[]
  >;
  for (const entry of galleryCatalog) {
    map[entry.category].push(entry);
  }
  return map;
}
