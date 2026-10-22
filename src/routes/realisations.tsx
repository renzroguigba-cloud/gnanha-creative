import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";
import { CtaSection, PageHero, PortfolioSection, TestimonialsSection } from "@/components/site/Sections";

export const Route = createFileRoute("/realisations")({
  head: () => pageHead("Réalisations & portfolio", "Sites vitrines, boutiques en ligne et identités de marque réalisés par Cadorelle W.", "/realisations"),
  component: () => (
    <>
      <PageHero eyebrow="Portfolio" title="Mes réalisation" desc="Sites vitrines, portfolios et sites d'hôtellerie : chaque projet ci-dessous est en ligne — cliquez pour le visiter." />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  ),
});
