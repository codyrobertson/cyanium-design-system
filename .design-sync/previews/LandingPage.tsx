import { LandingPage } from "@cyanium/kits/landing";
import { buildLandingPageProps } from "@cyanium/kits/fixtures";

/**
 * LandingPage — full marketing page template: sticky nav, hero with product
 * frame, stats band, feature grid, gallery, pricing tiers, testimonials, FAQ,
 * and footer. Rendered with production fixture data via buildLandingPageProps().
 */
export const Marketing = () => <LandingPage {...buildLandingPageProps()} />;
