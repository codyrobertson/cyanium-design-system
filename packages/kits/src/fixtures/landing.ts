import type { FaqItemProps } from "@cyanium/ui";
import type { LandingPageProps } from "../landing/landing-page";

export const landingFaq: FaqItemProps[] = [
  { value: "1", question: "Can I use Cyanium in commercial projects?", answer: "Yes. The design system is built for production apps with MIT-licensed dependencies." },
  { value: "2", question: "Does it work with Next.js and Vite?", answer: "Import @cyanium/ui and @cyanium/tokens CSS in any React 18+ app." },
  { value: "3", question: "Is dark mode supported?", answer: "Yes — toggle data-theme=\"dark\" and data-mode for palette variants." },
];

export const landingStats = [
  { num: "36", label: "UI primitives" },
  { num: "3", label: "Product kits" },
  { num: "AA", label: "Accessibility" },
  { num: "MIT", label: "Licensed deps" },
];

export const landingFeatures = [
  { icon: "sparkles", title: "Design tokens", description: "Semantic colors, typography, and shadows from AlignUI.", link: "Learn more" },
  { icon: "zap", title: "Fast to adopt", description: "shadcn-style composition with Radix primitives.", link: "Learn more" },
  { icon: "shield", title: "Accessible", description: "Keyboard, focus, and ARIA patterns built in.", link: "Learn more" },
  { icon: "chart", title: "Product kits", description: "Dashboard, landing, and chat templates included.", link: "Learn more" },
];

export const landingPricing = [
  {
    name: "Starter",
    description: "For side projects",
    price: "$0",
    per: "/mo",
    cta: "Get started",
    features: [{ label: "Core components" }, { label: "Storybook docs" }, { label: "Community support" }, { label: "Premium kits", muted: true }],
  },
  {
    name: "Pro",
    description: "For growing teams",
    price: "$29",
    per: "/mo",
    cta: "Start trial",
    featured: true,
    badge: "Popular",
    features: [{ label: "All UI kits" }, { label: "Figma sync" }, { label: "Priority support" }, { label: "Custom themes" }],
  },
  {
    name: "Enterprise",
    description: "For organizations",
    price: "Custom",
    cta: "Contact sales",
    features: [{ label: "SSO & audit logs" }, { label: "Dedicated support" }, { label: "SLA" }, { label: "On-prem option" }],
  },
];

export const landingTestimonials = [
  { quote: "We shipped our finance dashboard in a week.", name: "Sarah Chen", role: "PM, NovaPay" },
  { quote: "The token system saved us months of design debt.", name: "Marcus Lee", role: "Design Lead, Stackline", featured: true },
  { quote: "Radix + AlignUI is the combo we needed.", name: "Elena Ruiz", role: "Engineer, Flowbase" },
];

export const landingGallery = [
  { url: "app.example.com/dashboard", label: "Finance dashboard" },
  { url: "app.example.com/chat", label: "AI chat" },
];

export const landingBrandName = "Helm";

export const landingHero = {
  eyebrow: "Now in public beta",
  title: "Ship product UI your team actually wants to use",
  subtitle: "Helm combines AlignUI tokens, Radix accessibility, and production-ready kits so you can launch faster.",
  primaryCta: "Start building",
  secondaryCta: "View docs",
  screenshotLabel: "Product screenshot",
};

export const landingNav: LandingPageProps["nav"] = {
  links: [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  signInLabel: "Sign in",
  getStartedLabel: "Get started",
};

export const landingSections: LandingPageProps["sections"] = {
  features: {
    eyebrow: "Features",
    title: "Everything you need to ship",
    subtitle: "Primitives, patterns, and kits aligned to your tokens.",
  },
  gallery: { eyebrow: "Gallery", title: "See it in action" },
  pricing: { eyebrow: "Pricing", title: "Simple, transparent plans" },
  testimonials: { eyebrow: "Testimonials", title: "Loved by product teams" },
  faq: { eyebrow: "FAQ", title: "Common questions" },
};

export const landingFooterText = `© ${new Date().getFullYear()} Helm`;

export const landingPageContent: LandingPageProps = {
  brandName: landingBrandName,
  hero: landingHero,
  nav: landingNav,
  sections: landingSections,
  stats: landingStats,
  features: landingFeatures.map((f) => ({ ...f, icon: f.icon as "sparkles" | "zap" | "shield" | "chart" })),
  faq: landingFaq,
  pricing: landingPricing,
  testimonials: landingTestimonials,
  gallery: landingGallery,
  footerText: landingFooterText,
};
