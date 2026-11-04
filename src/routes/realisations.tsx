import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";
import { CtaSection, PageHero, PortfolioSection } from "@/components/site/Sections";

export const Route = createFileRoute("/realisations")({
  head: () => pageHead("Réalisations & portfolio", "Découvrez les six sites vitrines et portfolios réalisés par Cadorelle W., avec leurs aperçus et liens directs.", "/realisations"),
  component: () => (
    <>
      <PageHero eyebrow="Portfolio" title="Mes réalisations" desc="Sites vitrines, portfolios et sites d'hôtellerie : chaque projet ci-dessous est en ligne — cliquez pour le visiter." />
      <PortfolioSection />
      <CtaSection />
    </>
  ),
});
