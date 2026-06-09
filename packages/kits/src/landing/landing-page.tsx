import * as React from "react";
import { ArrowRight, Check, Lock, Star, X, Sparkles, Zap, Shield, BarChart3 } from "lucide-react";
import {
  Avatar,
  Badge,
  Button,
  Eyebrow,
  FaqList,
  FeatureCard,
  MarketingShell,
  SectionHead,
  type FaqItemProps,
} from "@cyanium/ui";

const iconMap = {
  sparkles: Sparkles,
  zap: Zap,
  shield: Shield,
  chart: BarChart3,
};

export function Wordmark({ name, className }: { name: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display text-lg font-semibold text-text-strong ${className ?? ""}`}>
      <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary text-white"><span className="size-4 rounded-sm bg-white/90" /></span>
      {name}
    </span>
  );
}

export function StatItem({ num, label }: { num: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-title-h2 font-display font-medium tracking-tight text-text-strong">{num}</div>
      <div className="mt-1 text-label-md text-text-sub">{label}</div>
    </div>
  );
}

export function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={`flex min-h-[200px] items-center justify-center rounded-xl bg-[repeating-linear-gradient(45deg,var(--bg-soft-200)_0_8px,var(--bg-weak-50)_8px_16px)] text-sm font-medium text-text-soft ${className ?? ""}`}>
      {label}
    </div>
  );
}

export interface PricingFeature { label: string; muted?: boolean }

export function PricingTier({ name, description, price, per, cta, features, featured, badge }: {
  name: string; description: string; price: string; per?: string; cta: string; features: PricingFeature[]; featured?: boolean; badge?: string;
}) {
  return (
    <div className={`relative rounded-2xl p-6 shadow-[inset_0_0_0_1px_var(--stroke-soft-200)] ${featured ? "bg-bg-strong text-white shadow-none" : ""}`}>
      {badge ? <Badge color="orange" variant="filled" size="small" className="absolute -top-2.5 right-4">{badge}</Badge> : null}
      <div className={`text-lg font-semibold ${featured ? "text-white" : "text-text-strong"}`}>{name}</div>
      <p className={`mt-1 text-sm ${featured ? "text-white/70" : "text-text-sub"}`}>{description}</p>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-4xl font-semibold tracking-tight">{price}</span>
        {per ? <span className={`text-sm ${featured ? "text-white/70" : "text-text-sub"}`}>{per}</span> : null}
      </div>
      <Button className="mt-4 w-full" variant={featured ? "filled" : "stroke"} intent={featured ? "primary" : "neutral"}>{cta}</Button>
      <ul className="mt-5 flex flex-col gap-2.5 text-sm">
        {features.map((f) => (
          <li key={f.label} className={`flex items-center gap-2 ${f.muted ? "opacity-50" : ""}`}>
            {f.muted ? <X className="size-4 shrink-0" /> : <Check className="size-4 shrink-0 text-success" />}
            {f.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TestimonialCard({ quote, name, role, featured }: { quote: string; name: string; role: string; featured?: boolean }) {
  return (
    <figure className={`rounded-2xl p-6 shadow-[inset_0_0_0_1px_var(--stroke-soft-200)] ${featured ? "bg-primary-lighter" : ""}`}>
      <div className="flex gap-0.5 text-[var(--orange-400)]" aria-label="5 out of 5">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
      </div>
      <blockquote className="mt-4 text-paragraph-md text-text-strong">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <Avatar name={name} size={40} color="gray" />
        <span><div className="text-sm font-medium text-text-strong">{name}</div><div className="text-xs text-text-sub">{role}</div></span>
      </figcaption>
    </figure>
  );
}

export interface LandingHeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  screenshotLabel: string;
}

export interface LandingNavContent {
  links: { href: string; label: string }[];
  signInLabel: string;
  getStartedLabel: string;
}

export interface LandingSectionHeadings {
  features: { eyebrow: string; title: string; subtitle: string };
  gallery: { eyebrow: string; title: string };
  pricing: { eyebrow: string; title: string };
  testimonials: { eyebrow: string; title: string };
  faq: { eyebrow: string; title: string };
}

export function LandingNav({ brandName, nav }: { brandName: string; nav: LandingNavContent }) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-stroke-soft bg-bg-white/90 px-6 py-4 backdrop-blur-md">
      <Wordmark name={brandName} />
      <nav className="hidden items-center gap-8 text-sm font-medium text-text-sub md:flex">
        {nav.links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="ghost" intent="neutral" size="small">{nav.signInLabel}</Button>
        <Button size="small" trailingIcon={<ArrowRight className="size-4" />}>{nav.getStartedLabel}</Button>
      </div>
    </header>
  );
}

export function LandingHero({ content }: { content: LandingHeroContent }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-center md:py-24">
      <Eyebrow>{content.eyebrow}</Eyebrow>
      <h1 className="mt-6 font-display text-title-h1 font-medium tracking-tight text-text-strong md:text-[56px] md:leading-[1.1]">{content.title}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-paragraph-lg text-text-sub">{content.subtitle}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button size="medium" trailingIcon={<ArrowRight className="size-5" />}>{content.primaryCta}</Button>
        <Button size="medium" variant="stroke" intent="neutral">{content.secondaryCta}</Button>
      </div>
      <ProductFrame className="mt-12 text-left">
        <Placeholder label={content.screenshotLabel} className="min-h-[320px]" />
      </ProductFrame>
    </section>
  );
}

export interface LandingPageProps {
  brandName: string;
  hero: LandingHeroContent;
  nav: LandingNavContent;
  sections: LandingSectionHeadings;
  stats: { num: string; label: string }[];
  features: { icon: keyof typeof iconMap; title: string; description: string; link?: string }[];
  faq: FaqItemProps[];
  pricing: React.ComponentProps<typeof PricingTier>[];
  testimonials: React.ComponentProps<typeof TestimonialCard>[];
  gallery: { url: string; label: string }[];
  footerText: string;
}

export function LandingPage({
  brandName,
  hero,
  nav,
  sections,
  stats,
  features,
  faq,
  pricing,
  testimonials,
  gallery,
  footerText,
}: LandingPageProps) {
  return (
    <MarketingShell>
      <LandingNav brandName={brandName} nav={nav} />
      <LandingHero content={hero} />
      <section className="border-y border-stroke-soft bg-bg-weak py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map((s) => <StatItem key={s.label} {...s} />)}
        </div>
      </section>
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHead eyebrow={sections.features.eyebrow} title={sections.features.title} subtitle={sections.features.subtitle} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = iconMap[f.icon];
            return <FeatureCard key={f.title} icon={<Icon className="size-5" />} title={f.title} description={f.description} link={f.link} />;
          })}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHead eyebrow={sections.gallery.eyebrow} title={sections.gallery.title} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {gallery.map((g) => (
            <ProductFrame key={g.url} url={g.url}><Placeholder label={g.label} /></ProductFrame>
          ))}
        </div>
      </section>
      <section id="pricing" className="bg-bg-weak py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead eyebrow={sections.pricing.eyebrow} title={sections.pricing.title} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricing.map((tier) => <PricingTier key={tier.name} {...tier} />)}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHead eyebrow={sections.testimonials.eyebrow} title={sections.testimonials.title} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </section>
      <section id="faq" className="mx-auto max-w-2xl px-6 py-20">
        <SectionHead eyebrow={sections.faq.eyebrow} title={sections.faq.title} />
        <div className="mt-10"><FaqList items={faq} /></div>
      </section>
      <footer className="border-t border-stroke-soft py-8 text-center text-sm text-text-sub">
        {footerText}
      </footer>
    </MarketingShell>
  );
}

export function ProductFrame({ children, url, className }: { children?: React.ReactNode; url?: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-bg-white shadow-regular-md shadow-[inset_0_0_0_1px_var(--stroke-soft-200)] ${className ?? ""}`}>
      <div className="flex items-center gap-2 border-b border-stroke-soft bg-bg-weak px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-bg-white px-3 py-1 text-xs text-text-sub shadow-[inset_0_0_0_1px_var(--stroke-soft-200)]">
          <Lock className="size-3" />{url}
        </span>
      </div>
      <div className="min-h-[280px] bg-bg-weak p-4">{children}</div>
    </div>
  );
}
