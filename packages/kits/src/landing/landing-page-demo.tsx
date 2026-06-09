"use client";

import { LandingPage } from "./landing-page";
import { buildLandingPageProps } from "../fixtures/builders";

export function LandingPageDemo() {
  return <LandingPage {...buildLandingPageProps()} />;
}
