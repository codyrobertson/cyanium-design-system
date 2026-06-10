import type { ComponentType } from "react";
import {
  AccordionPreview,
  AlertPreview,
  AvatarPreview,
  BadgePreview,
  BannerPreview,
  BrandMarkPreview,
  BreadcrumbPreview,
  ButtonPreview,
  CardPreview,
  CheckboxPreview,
  DataTablePreview,
  DropdownPreview,
  EmptyStatePreview,
  EyebrowPreview,
  FaqListPreview,
  FeatureCardPreview,
  IconPreview,
  InputPreview,
  KbdPreview,
  ModalPreview,
  PaginationPreview,
  PanelPreview,
  ProgressBarPreview,
  RadioGroupPreview,
  SearchFieldPreview,
  SectionHeadPreview,
  SegmentedControlPreview,
  SelectPreview,
  SeparatorPreview,
  SkeletonPreview,
  SliderPreview,
  SwitchPreview,
  TabsPreview,
  TagPreview,
  TextareaPreview,
  TooltipPreview,
  TypographyPreview,
} from "./previews";

export type GalleryCategory =
  | "Atoms"
  | "Forms"
  | "Feedback"
  | "Overlays"
  | "Data"
  | "Patterns";

export interface GalleryPropDoc {
  name: string;
  description: string;
}

export interface GalleryEntry {
  id: string;
  name: string;
  category: GalleryCategory;
  description: string;
  importLine: string;
  usage: string;
  props?: GalleryPropDoc[];
  Preview: ComponentType;
}

const commonFieldProps: GalleryPropDoc[] = [
  { name: "label", description: "Visible field label (wraps control in Field)." },
  { name: "hint", description: "Helper text below the control." },
  { name: "error", description: "Error state — red keyline and hint color." },
  { name: "disabled", description: "Non-interactive, muted styling." },
];

export const galleryCatalog: GalleryEntry[] = [
  {
    id: "button",
    name: "Button",
    category: "Atoms",
    description: "Primary actions with intent, variant, and size options.",
    importLine: 'import { Button } from "@cyanium/ui";',
    usage: "intent: primary | neutral | error. variant: filled | stroke | lighter | ghost. size: xsmall | small | medium | large.",
    props: [
      { name: "intent", description: "Semantic color family." },
      { name: "variant", description: "Visual weight within an intent." },
      { name: "size", description: "Height and padding scale." },
      { name: "leadingIcon / trailingIcon", description: "Optional lucide icons." },
      { name: "iconOnly", description: "Square icon button — pass icon as children." },
      { name: "disabled", description: "Muted, non-interactive." },
    ],
    Preview: ButtonPreview,
  },
  {
    id: "badge",
    name: "Badge",
    category: "Atoms",
    description: "Compact status labels with color and dot variants.",
    importLine: 'import { Badge } from "@cyanium/ui";',
    usage: "color: green | blue | orange | red | gray. variant: filled | lighter. dot for presence indicators.",
    props: [
      { name: "color", description: "Semantic palette slot." },
      { name: "variant", description: "filled or lighter background." },
      { name: "dot", description: "Leading status dot." },
      { name: "size", description: "small for dense tables." },
    ],
    Preview: BadgePreview,
  },
  {
    id: "tag",
    name: "Tag",
    category: "Atoms",
    description: "Inline labels for metadata, filters, and removable chips.",
    importLine: 'import { Tag } from "@cyanium/ui";',
    usage: "Pass onRemove for dismissible tags. gray for neutral metadata.",
    props: [
      { name: "gray", description: "Neutral styling (boolean prop on component)." },
      { name: "onRemove", description: "Shows dismiss control when set." },
    ],
    Preview: TagPreview,
  },
  {
    id: "avatar",
    name: "Avatar",
    category: "Atoms",
    description: "User initials with optional status indicator.",
    importLine: 'import { Avatar } from "@cyanium/ui";',
    usage: "name drives initials. status: online | offline | busy.",
    props: [
      { name: "name", description: "Generates initials and aria label." },
      { name: "color", description: "Background hue from token palette." },
      { name: "size", description: "Pixel diameter (default 40)." },
      { name: "status", description: "Presence badge overlay." },
    ],
    Preview: AvatarPreview,
  },
  {
    id: "icon",
    name: "Icon",
    category: "Atoms",
    description: "Sized wrapper for lucide icons in nav and lists.",
    importLine: 'import { Icon } from "@cyanium/ui";',
    usage: "Wrap lucide icons. size: xs | sm | md | lg. muted for tertiary color.",
    props: [
      { name: "size", description: "xs through lg — scales child svg." },
      { name: "muted", description: "Uses text-icon-soft." },
    ],
    Preview: IconPreview,
  },
  {
    id: "brand-mark",
    name: "BrandMark",
    category: "Atoms",
    description: "Cyanium logomark with brand orange treatment.",
    importLine: 'import { BrandMark } from "@cyanium/ui";',
    usage: "Pass size in px for app chrome and marketing headers.",
    props: [{ name: "size", description: "Width and height in pixels (default 40)." }],
    Preview: BrandMarkPreview,
  },
  {
    id: "typography",
    name: "Typography",
    category: "Atoms",
    description: "Heading, Text, and Subheading scale components.",
    importLine: 'import { Heading, Text, Subheading } from "@cyanium/ui";',
    usage: "Heading level h1–h6. Text size sm | md | lg. Subheading for stat labels.",
    props: [
      { name: "Heading level", description: "h1–h6 maps to title scale." },
      { name: "Text size", description: "Paragraph sm | md | lg." },
    ],
    Preview: TypographyPreview,
  },
  {
    id: "separator",
    name: "Separator",
    category: "Atoms",
    description: "Horizontal or vertical divider.",
    importLine: 'import { Separator } from "@cyanium/ui";',
    usage: "orientation: horizontal | vertical.",
    Preview: SeparatorPreview,
  },
  {
    id: "switch",
    name: "Switch",
    category: "Atoms",
    description: "Toggle control for boolean settings.",
    importLine: 'import { Switch } from "@cyanium/ui";',
    usage: "Controlled or defaultChecked. size: small | medium.",
    props: [
      { name: "checked / onCheckedChange", description: "Controlled mode." },
      { name: "size", description: "small | medium." },
      { name: "disabled", description: "Non-interactive." },
    ],
    Preview: SwitchPreview,
  },
  {
    id: "checkbox",
    name: "Checkbox",
    category: "Atoms",
    description: "Checkbox field and bare control for forms.",
    importLine: 'import { Checkbox, CheckboxControl } from "@cyanium/ui";',
    usage: "Checkbox adds label. CheckboxControl is the bare Radix primitive.",
    props: [
      { name: "label", description: "Optional inline label." },
      { name: "defaultChecked / checked", description: "Selection state." },
      { name: "indeterminate", description: "Partial selection (CheckboxControl)." },
    ],
    Preview: CheckboxPreview,
  },
  {
    id: "radio-group",
    name: "RadioGroup",
    category: "Atoms",
    description: "Single-select radio list with labeled items.",
    importLine: 'import { RadioGroup, Radio } from "@cyanium/ui";',
    usage: "Wrap Radio items. defaultValue or value for selection.",
    props: [
      { name: "value / onValueChange", description: "Controlled selection." },
      { name: "Radio label", description: "Optional per-item label." },
    ],
    Preview: RadioGroupPreview,
  },
  {
    id: "kbd",
    name: "Kbd",
    category: "Atoms",
    description: "Keyboard shortcut display.",
    importLine: 'import { Kbd } from "@cyanium/ui";',
    usage: "Compose multiple Kbd elements for chord shortcuts.",
    Preview: KbdPreview,
  },
  {
    id: "skeleton",
    name: "Skeleton",
    category: "Atoms",
    description: "Loading placeholder shapes.",
    importLine: 'import { Skeleton } from "@cyanium/ui";',
    usage: "Match dimensions to content being loaded.",
    Preview: SkeletonPreview,
  },
  {
    id: "input",
    name: "Input",
    category: "Forms",
    description: "Labeled text field with hint, error, and icon slots.",
    importLine: 'import { Input } from "@cyanium/ui";',
    usage: "inputSize: small | medium | large. leadingIcon / trailingIcon for adornments.",
    props: [
      ...commonFieldProps,
      { name: "inputSize", description: "small | medium | large height." },
      { name: "leadingIcon / trailingIcon", description: "Icon adornments." },
      { name: "required", description: "Shows asterisk on label." },
    ],
    Preview: InputPreview,
  },
  {
    id: "search-field",
    name: "SearchField",
    category: "Forms",
    description: "Input preset with search icon and optional shortcut badge.",
    importLine: 'import { SearchField } from "@cyanium/ui";',
    usage: "shortcut defaults to ⌘K. Inherits Input props except leadingIcon.",
    props: [
      { name: "shortcut", description: "Kbd badge on the right (set empty to hide)." },
      { name: "placeholder", description: "Input placeholder text." },
    ],
    Preview: SearchFieldPreview,
  },
  {
    id: "select",
    name: "Select",
    category: "Forms",
    description: "Dropdown select with label and options array.",
    importLine: 'import { Select } from "@cyanium/ui";',
    usage: "options: { value, label, disabled? }[]. Chevron aligns to the trailing edge.",
    props: [
      ...commonFieldProps,
      { name: "options", description: "Array of { value, label }." },
      { name: "placeholder", description: "Empty-state label." },
      { name: "value / onValueChange", description: "Controlled selection." },
      { name: "leadingIcon", description: "Optional leading adornment." },
    ],
    Preview: SelectPreview,
  },
  {
    id: "textarea",
    name: "Textarea",
    category: "Forms",
    description: "Multi-line input with optional character counter.",
    importLine: 'import { Textarea } from "@cyanium/ui";',
    usage: "showCounter + maxLength for comment fields.",
    props: [
      ...commonFieldProps,
      { name: "showCounter", description: "Shows length / maxLength." },
      { name: "maxLength", description: "Character limit for counter." },
    ],
    Preview: TextareaPreview,
  },
  {
    id: "slider",
    name: "Slider",
    category: "Forms",
    description: "Range input for numeric settings.",
    importLine: 'import { Slider } from "@cyanium/ui";',
    usage: "Radix slider — value array, min, max, step.",
    props: [
      { name: "value / onValueChange", description: "Controlled value (number[])." },
      { name: "disabled", description: "Non-interactive track." },
    ],
    Preview: SliderPreview,
  },
  {
    id: "segmented-control",
    name: "SegmentedControl",
    category: "Forms",
    description: "Mutually exclusive pill toggle group.",
    importLine: 'import { SegmentedControl } from "@cyanium/ui";',
    usage: "items: { value, label, icon?, disabled? }[].",
    props: [
      { name: "items", description: "Segment definitions." },
      { name: "value / onChange", description: "Active segment." },
    ],
    Preview: SegmentedControlPreview,
  },
  {
    id: "alert",
    name: "Alert",
    category: "Feedback",
    description: "Inline status messages.",
    importLine: 'import { Alert } from "@cyanium/ui";',
    usage: "status: info | success | warning | error. variant: light | filled | stroke.",
    props: [
      { name: "status", description: "Semantic color." },
      { name: "variant", description: "light | filled | stroke." },
      { name: "title", description: "Bold headline." },
      { name: "onClose", description: "Dismiss button." },
    ],
    Preview: AlertPreview,
  },
  {
    id: "banner",
    name: "Banner",
    category: "Feedback",
    description: "Page-level announcement bar.",
    importLine: 'import { Banner } from "@cyanium/ui";',
    usage: "color + icon for release notes. onClose for dismissible banners.",
    props: [
      { name: "color", description: "blue | orange | green | red | gray." },
      { name: "onClose", description: "Dismiss handler." },
    ],
    Preview: BannerPreview,
  },
  {
    id: "progress-bar",
    name: "ProgressBar",
    category: "Feedback",
    description: "Linear or circular determinate progress.",
    importLine: 'import { ProgressBar } from "@cyanium/ui";',
    usage: "variant: linear | circular. showValue for numeric readout.",
    props: [
      { name: "value / max", description: "Progress percentage inputs." },
      { name: "variant", description: "linear | circular." },
      { name: "showValue", description: "Shows computed percent." },
    ],
    Preview: ProgressBarPreview,
  },
  {
    id: "empty-state",
    name: "EmptyState",
    category: "Feedback",
    description: "Placeholder when a list has no data.",
    importLine: 'import { EmptyState } from "@cyanium/ui";',
    usage: "title + description. Optional action slot.",
    Preview: EmptyStatePreview,
  },
  {
    id: "modal",
    name: "Modal",
    category: "Overlays",
    description: "Dialog overlay on Radix Dialog.",
    importLine: 'import { Modal } from "@cyanium/ui";',
    usage: "open / onOpenChange. footer slot for actions.",
    props: [
      { name: "open / onOpenChange", description: "Visibility control." },
      { name: "title / description", description: "Header copy." },
      { name: "footer", description: "Action button row." },
    ],
    Preview: ModalPreview,
  },
  {
    id: "dropdown",
    name: "Dropdown",
    category: "Overlays",
    description: "Action menu with separators and danger items.",
    importLine: 'import { Dropdown } from "@cyanium/ui";',
    usage: "Pass trigger element. items support icon, shortcut, danger.",
    Preview: DropdownPreview,
  },
  {
    id: "tooltip",
    name: "Tooltip",
    category: "Overlays",
    description: "Contextual hint on hover or focus.",
    importLine: 'import { Tooltip, TooltipProvider } from "@cyanium/ui";',
    usage: "Wrap section in TooltipProvider once.",
    Preview: TooltipPreview,
  },
  {
    id: "card",
    name: "Card",
    category: "Data",
    description: "Composable inset surface for grouped content.",
    importLine: 'import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@cyanium/ui";',
    usage: "raised for elevation. padding: none | md | lg.",
    props: [
      { name: "raised", description: "Adds shadow-sm." },
      { name: "padding", description: "none | md | lg." },
    ],
    Preview: CardPreview,
  },
  {
    id: "panel",
    name: "Panel",
    category: "Data",
    description: "Card with title row, icon, and action slot.",
    importLine: 'import { Panel } from "@cyanium/ui";',
    usage: "Used in finance kit dashboards.",
    props: [
      { name: "title", description: "Header label." },
      { name: "icon", description: "Leading icon in title row." },
      { name: "action", description: "Trailing header slot." },
    ],
    Preview: PanelPreview,
  },
  {
    id: "tabs",
    name: "Tabs",
    category: "Data",
    description: "Tabbed navigation with optional badges.",
    importLine: 'import { Tabs, TabsContent } from "@cyanium/ui";',
    usage: "variant: line | pill. items array for triggers.",
    props: [
      { name: "variant", description: "line (underline) or pill." },
      { name: "items", description: "{ value, label, badge? }[]." },
    ],
    Preview: TabsPreview,
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    category: "Data",
    description: "Hierarchy navigation trail.",
    importLine: 'import { Breadcrumb } from "@cyanium/ui";',
    usage: "items: { label, href?, onClick? }[].",
    Preview: BreadcrumbPreview,
  },
  {
    id: "data-table",
    name: "DataTable",
    category: "Data",
    description: "Selectable table with typed columns.",
    importLine: 'import { DataTable } from "@cyanium/ui";',
    usage: "columns with cell renderers. selectable + selectedIds for bulk actions.",
    Preview: DataTablePreview,
  },
  {
    id: "accordion",
    name: "Accordion",
    category: "Data",
    description: "Low-level expandable sections (Radix).",
    importLine: 'import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@cyanium/ui";',
    usage: "type single + collapsible for FAQ-style panels.",
    Preview: AccordionPreview,
  },
  {
    id: "faq-list",
    name: "FaqList",
    category: "Data",
    description: "Opinionated FAQ accordion preset.",
    importLine: 'import { FaqList } from "@cyanium/ui";',
    usage: "items: { value, question, answer }[].",
    Preview: FaqListPreview,
  },
  {
    id: "pagination",
    name: "Pagination",
    category: "Data",
    description: "Page controls for long lists.",
    importLine: 'import { Pagination } from "@cyanium/ui";',
    usage: "total page count + current page.",
    Preview: PaginationPreview,
  },
  {
    id: "eyebrow",
    name: "Eyebrow",
    category: "Patterns",
    description: "Section kicker with primary dot.",
    importLine: 'import { Eyebrow } from "@cyanium/ui";',
    usage: "Pairs with SectionHead in marketing layouts.",
    Preview: EyebrowPreview,
  },
  {
    id: "section-head",
    name: "SectionHead",
    category: "Patterns",
    description: "Eyebrow + title + subtitle block.",
    importLine: 'import { SectionHead } from "@cyanium/ui";',
    usage: "align: center | left.",
    Preview: SectionHeadPreview,
  },
  {
    id: "feature-card",
    name: "FeatureCard",
    category: "Patterns",
    description: "Icon + title + description marketing tile.",
    importLine: 'import { FeatureCard } from "@cyanium/ui";',
    usage: "Used in landing kit feature grids.",
    Preview: FeatureCardPreview,
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
