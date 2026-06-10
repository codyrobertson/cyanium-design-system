import { StrictMode, useState } from "react";
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
import { CyaniumSite, type KitView } from "./site/cyanium-site";
import { DemoChrome } from "./demo-chrome";
import "./index.css";

type View = "home" | KitView;
type Mode = "demo" | "integration";

function App() {
  const [view, setView] = useState<View>("home");
  const [mode, setMode] = useState<Mode>("demo");

  if (view === "home") {
    return (
      <ToasterProvider>
        <CyaniumSite onExploreKit={(kit) => setView(kit)} />
      </ToasterProvider>
    );
  }

  const content = {
    finance: mode === "demo" ? <FinanceAppDemo /> : <FinanceApp {...buildFinanceAppProps()} />,
    landing: mode === "demo" ? <LandingPageDemo /> : <LandingPage {...buildLandingPageProps()} />,
    ai: mode === "demo" ? <AiChatAppDemo /> : <AiChatApp {...buildAiChatAppProps()} />,
  }[view];

  return (
    <ToasterProvider>
      <DemoChrome view={view} mode={mode} onHome={() => setView("home")} onView={setView} onMode={setMode} />
      {content}
    </ToasterProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
