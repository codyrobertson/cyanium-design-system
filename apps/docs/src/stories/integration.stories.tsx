import type { Meta, StoryObj } from "@storybook/react-vite";
import { FinanceApp } from "@cyanium/kits/finance";
import { LandingPage } from "@cyanium/kits/landing";
import { AiChatApp } from "@cyanium/kits/ai";
import {
  buildAiChatAppProps,
  buildFinanceAppProps,
  buildLandingPageProps,
} from "@cyanium/kits/fixtures";

const meta = {
  title: "Kits/Integration",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Production wiring via `build*AppProps()` from `@cyanium/kits/fixtures`. Same data as *Demo wrappers, explicit import path for copy-paste.",
      },
    },
  },
} satisfies Meta;

export default meta;

export const FinanceAppExplicitProps: StoryObj = {
  name: "FinanceApp",
  render: () => <FinanceApp {...buildFinanceAppProps()} />,
};

export const LandingPageExplicitProps: StoryObj = {
  name: "LandingPage",
  render: () => <LandingPage {...buildLandingPageProps()} />,
};

export const AiChatAppExplicitProps: StoryObj = {
  name: "AiChatApp",
  render: () => <AiChatApp {...buildAiChatAppProps()} />,
};

export const FinanceAppCustomBrand: StoryObj = {
  name: "FinanceApp (overrides)",
  render: () =>
    <FinanceApp
      {...buildFinanceAppProps({
        sidebar: {
          ...buildFinanceAppProps().sidebar,
          brandName: "Acme Bank",
          brandSubtitle: "Business banking",
        },
        topbar: {
          ...buildFinanceAppProps().topbar,
          title: "Jordan Lee",
          subtitle: "Welcome back to Acme",
          avatarName: "Jordan Lee",
        },
      })}
    />,
};
