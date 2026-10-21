import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";
import { CtaSection, PageHero, PortfolioSection, TestimonialsSection } from "@/components/site/Sections";

export const Route = createFileRoute("/realisations")({
  head: () => pageHead("Réalisations & portfolio", "Sites vitrines, boutiques en ligne et identités de marque réalisés par Cadorelle W.", "/realisations"),
  component: () => (
    <>
      <PageHero eyebrow="Portfolio" title="Mes réalisation" desc="Découvrez les sites de mes clients." />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  ),
});
