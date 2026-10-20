import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";
import { CtaSection, PageHero, ServicesSection } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({
  head: () => pageHead("Services : design, développement & branding", "Création de sites web, UX/UI design, branding, marketing digital et maintenance au Bénin.", "/services"),
  component: () => (
    <>
      <PageHero eyebrow="Services" title="Une expertise complète, du concept au lancement" desc="Chaque service est pensé pour renforcer votre image et attirer davantage de clients." />
      <ServicesSection />
      <CtaSection />
    </>
  ),
});
