export type KitView = "finance" | "landing" | "ai";
export type AppView = "home" | "gallery" | "docs" | KitView;

export interface RouteState {
  view: AppView;
  galleryId?: string;
  docSlug?: string;
}

const KIT_VIEWS = new Set<string>(["finance", "landing", "ai"]);

export function parseHash(hash: string): RouteState {
  const raw = hash.replace(/^#/, "").replace(/^\//, "");
  if (!raw) return { view: "home" };

  const segments = raw.split("/").filter(Boolean);
  const [section, ...rest] = segments;

  switch (section) {
    case "gallery":
      return { view: "gallery", galleryId: rest[0] };
    case "docs":
      return { view: "docs", docSlug: rest[0] };
    case "kits": {
      const kit = rest[0];
      if (kit && KIT_VIEWS.has(kit)) return { view: kit as KitView };
      return { view: "home" };
    }
    default:
      return { view: "home" };
  }
}

export function buildHash(state: RouteState): string {
  switch (state.view) {
    case "home":
      return "#/";
    case "gallery":
      return state.galleryId ? `#/gallery/${state.galleryId}` : "#/gallery";
    case "docs":
      return state.docSlug ? `#/docs/${state.docSlug}` : "#/docs";
    case "finance":
    case "landing":
    case "ai":
      return `#/kits/${state.view}`;
    default:
      return "#/";
  }
}

export function navigateTo(state: RouteState): void {
  const next = buildHash(state);
  if (window.location.hash !== next) {
    window.location.hash = next;
  }
}

export function subscribeHash(onChange: (state: RouteState) => void): () => void {
  const handler = () => onChange(parseHash(window.location.hash));
  window.addEventListener("hashchange", handler);
  return () => window.removeEventListener("hashchange", handler);
}
