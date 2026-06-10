import { Heading, Text, cn } from "@cyanium/ui";
import { CopyBlock } from "../site/copy-block";
import { SiteShell, SidebarLink, SidebarSection } from "../site/site-shell";
import { navigateTo } from "../site/navigation";
import { docPages, getDocPage, type DocSection } from "./content";

function DocSectionRenderer({ section }: { section: DocSection }) {
  switch (section.type) {
    case "heading":
      if (section.level === "h3") {
        return (
          <Heading level="h3" className="mt-6 font-display text-lg font-medium text-text-strong">
            {section.content}
          </Heading>
        );
      }
      return (
        <Heading level="h2" className="mt-8 font-display text-xl font-medium text-text-strong">
          {section.content}
        </Heading>
      );
    case "paragraph":
      return (
        <Text size="md" className="mt-3 max-w-2xl leading-relaxed text-text-sub">
          {section.content}
        </Text>
      );
    case "code":
      return (
        <div className="mt-4">
          <CopyBlock command={section.content ?? ""} variant="light" />
        </div>
      );
    case "list":
      return (
        <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-text-sub">
          {section.items?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "link":
      return (
        <a
          href={section.href}
          className={cn(
            "mt-3 inline-flex text-sm font-medium text-primary hover:underline",
          )}
        >
          {section.label} →
        </a>
      );
    default:
      return null;
  }
}

export interface DocsPageProps {
  slug?: string;
}

export function DocsPage({ slug }: DocsPageProps) {
  const page = getDocPage(slug);

  return (
    <SiteShell
      active="docs"
      sidebar={
        <SidebarSection title="Documentation">
          {docPages.map((doc) => (
            <SidebarLink
              key={doc.slug}
              active={doc.slug === page.slug}
              onClick={() => navigateTo({ view: "docs", docSlug: doc.slug })}
            >
              {doc.title}
            </SidebarLink>
          ))}
        </SidebarSection>
      }
    >
      <article className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-soft">Docs</p>
        <Heading level="h1" className="mt-2 font-display text-3xl font-medium tracking-tight">
          {page.title}
        </Heading>
        <Text size="md" className="mt-2 text-text-sub">
          {page.description}
        </Text>
        <div className="mt-4">
          {page.sections.map((section, i) => (
            <DocSectionRenderer key={`${section.type}-${i}`} section={section} />
          ))}
        </div>
      </article>
    </SiteShell>
  );
}
