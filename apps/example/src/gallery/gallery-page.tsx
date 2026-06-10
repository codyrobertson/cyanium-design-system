import { Heading, Text, cn } from "@cyanium/ui";
import { CopyBlock } from "../site/copy-block";
import { SiteShell, SidebarLink, SidebarSection } from "../site/site-shell";
import { navigateTo } from "../site/navigation";
import {
  entriesByCategory,
  galleryCategories,
  getGalleryEntry,
} from "./catalog";

export interface GalleryPageProps {
  selectedId?: string;
}

export function GalleryPage({ selectedId }: GalleryPageProps) {
  const entry = getGalleryEntry(selectedId);
  const grouped = entriesByCategory();
  const Preview = entry.Preview;

  return (
    <SiteShell
      active="gallery"
      sidebar={
        <>
          {galleryCategories.map((category) => {
            const items = grouped[category];
            if (items.length === 0) return null;
            return (
              <SidebarSection key={category} title={category}>
                {items.map((item) => (
                  <SidebarLink
                    key={item.id}
                    active={item.id === entry.id}
                    onClick={() => navigateTo({ view: "gallery", galleryId: item.id })}
                  >
                    {item.name}
                  </SidebarLink>
                ))}
              </SidebarSection>
            );
          })}
        </>
      }
    >
      <div className="space-y-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-soft">{entry.category}</p>
          <Heading level="h1" className="mt-2 font-display text-3xl font-medium tracking-tight">
            {entry.name}
          </Heading>
          <Text size="md" className="mt-2 max-w-2xl text-text-sub">
            {entry.description}
          </Text>
        </div>

        <section>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text-soft">Preview</p>
          <div
            className={cn(
              "rounded-2xl border border-stroke-soft bg-bg-white p-6 md:p-8",
              "shadow-[inset_0_0_0_1px_var(--stroke-soft-200)]",
            )}
          >
            <Preview />
          </div>
        </section>

        <section>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text-soft">Import</p>
          <CopyBlock command={entry.importLine} variant="light" />
        </section>

        <section>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text-soft">Usage</p>
          <Text size="sm" className="max-w-2xl leading-relaxed text-text-sub">
            {entry.usage}
          </Text>
        </section>

        {entry.props && entry.props.length > 0 ? (
          <section>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text-soft">Props</p>
            <dl className="max-w-2xl divide-y divide-stroke-soft rounded-xl border border-stroke-soft">
              {entry.props.map((prop) => (
                <div key={prop.name} className="grid gap-1 px-4 py-3 sm:grid-cols-[minmax(8rem,30%)_1fr]">
                  <dt className="font-mono text-sm text-text-strong">{prop.name}</dt>
                  <dd className="text-sm text-text-sub">{prop.description}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}
      </div>
    </SiteShell>
  );
}
