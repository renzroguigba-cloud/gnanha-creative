import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";
import { CtaSection, FaqSection, PageHero, PricingSection } from "@/components/site/Sections";

export const Route = createFileRoute("/tarifs")({
  head: () => pageHead("Tarifs de création de site web", "Offres Essentiel, Premium et Sur mesure pour la création de votre site web au Bénin.", "/tarifs"),
  component: () => (
    <>
      <PageHero eyebrow="Tarifs" title="Investissez dans votre image" desc="Trois formules transparentes, adaptables à votre projet." />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  ),
});
