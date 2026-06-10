import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { FinanceAppDemo } from "@cyanium/kits/finance";
import { LandingPageDemo } from "@cyanium/kits/landing";
import { AiChatAppDemo } from "@cyanium/kits/ai";
import { FinanceApp } from "@cyanium/kits/finance";
import { LandingPage } from "@cyanium/kits/landing";
import { AiChatApp } from "@cyanium/kits/ai";
import {
  buildAiChatAppProps,
  buildFinanceAppProps,
  buildLandingPageProps,
} from "@cyanium/kits/fixtures";
import { ToasterProvider } from "@cyanium/ui";
import { CyaniumSite } from "./site/cyanium-site";
import { DemoChrome } from "./demo-chrome";
import { GalleryPage } from "./gallery/gallery-page";
import { DocsPage } from "./docs/docs-page";
import {
  navigateTo,
  parseHash,
  subscribeHash,
  type KitView,
  type RouteState,
} from "./site/navigation";
import "./index.css";

type Mode = "demo" | "integration";

function App() {
  const [route, setRoute] = useState<RouteState>(() => parseHash(window.location.hash));
  const [mode, setMode] = useState<Mode>("demo");

  useEffect(() => subscribeHash(setRoute), []);

  const goHome = () => navigateTo({ view: "home" });
  const goGallery = (galleryId?: string) => navigateTo({ view: "gallery", galleryId });
  const goDocs = (docSlug?: string) => navigateTo({ view: "docs", docSlug });
  const goKit = (kit: KitView) => navigateTo({ view: kit });

  if (route.view === "home") {
    return (
      <ToasterProvider>
        <CyaniumSite
          onExploreKit={goKit}
          onOpenGallery={() => goGallery()}
          onOpenDocs={() => goDocs()}
        />
      </ToasterProvider>
    );
  }

  if (route.view === "gallery") {
    return (
      <ToasterProvider>
        <GalleryPage selectedId={route.galleryId} />
      </ToasterProvider>
    );
  }

  if (route.view === "docs") {
    return (
      <ToasterProvider>
        <DocsPage slug={route.docSlug} />
      </ToasterProvider>
    );
  }

  const kitView = route.view as KitView;
  const content = {
    finance: mode === "demo" ? <FinanceAppDemo /> : <FinanceApp {...buildFinanceAppProps()} />,
    landing: mode === "demo" ? <LandingPageDemo /> : <LandingPage {...buildLandingPageProps()} />,
    ai: mode === "demo" ? <AiChatAppDemo /> : <AiChatApp {...buildAiChatAppProps()} />,
  }[kitView];

  return (
    <ToasterProvider>
      <DemoChrome
        view={kitView}
        mode={mode}
        onHome={goHome}
        onView={goKit}
        onMode={setMode}
        onGallery={() => goGallery()}
        onDocs={() => goDocs()}
      />
      {content}
    </ToasterProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
