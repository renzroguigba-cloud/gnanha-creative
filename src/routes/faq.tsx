import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";
import { CtaSection, FaqSection, PageHero } from "@/components/site/Sections";

export const Route = createFileRoute("/faq")({
  head: () => pageHead("FAQ — Questions fréquentes", "Délais, paiement, référencement, maintenance : toutes les réponses sur la création de votre site.", "/faq"),
  component: () => (
    <>
      <PageHero eyebrow="FAQ" title="Vos questions, mes réponses" desc="Tout ce qu'il faut savoir avant de lancer votre projet." />
      <FaqSection />
      <CtaSection />
    </>
  ),
});
