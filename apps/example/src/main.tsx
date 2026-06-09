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
import { ToasterProvider, Button } from "@cyanium/ui";
import "./index.css";

type View = "finance" | "landing" | "ai";
type Mode = "demo" | "integration";

function App() {
  const [view, setView] = useState<View>("finance");
  const [mode, setMode] = useState<Mode>("demo");

  const content = {
    finance: mode === "demo" ? <FinanceAppDemo /> : <FinanceApp {...buildFinanceAppProps()} />,
    landing: mode === "demo" ? <LandingPageDemo /> : <LandingPage {...buildLandingPageProps()} />,
    ai: mode === "demo" ? <AiChatAppDemo /> : <AiChatApp {...buildAiChatAppProps()} />,
  }[view];

  return (
    <ToasterProvider>
      <div className="fixed left-4 top-4 z-50 flex flex-col gap-2">
        <div className="flex gap-2">
          <Button size="small" variant={view === "finance" ? "filled" : "stroke"} onClick={() => setView("finance")}>Finance</Button>
          <Button size="small" variant={view === "landing" ? "filled" : "stroke"} onClick={() => setView("landing")}>Landing</Button>
          <Button size="small" variant={view === "ai" ? "filled" : "stroke"} onClick={() => setView("ai")}>AI</Button>
        </div>
        <div className="flex gap-2">
          <Button size="small" variant={mode === "demo" ? "filled" : "stroke"} onClick={() => setMode("demo")}>Demo</Button>
          <Button size="small" variant={mode === "integration" ? "filled" : "stroke"} onClick={() => setMode("integration")}>Integration</Button>
        </div>
        {mode === "integration" ? (
          <p className="max-w-xs rounded-lg bg-bg-white px-2 py-1 text-xs text-text-sub shadow-sm">
            Wired via <code className="font-mono">build*AppProps()</code> from <code className="font-mono">@cyanium/kits/fixtures</code>
          </p>
        ) : null}
      </div>
      {content}
    </ToasterProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
