import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";
import { AboutSection, CtaSection, PageHero, StatsSection, TestimonialsSection } from "@/components/site/Sections";

export const Route = createFileRoute("/a-propos")({
  head: () => pageHead("À propos de Gnanha W. Cadorelle", "Découvrez le parcours, la mission et les valeurs de Cadorelle, créatrice de sites web à Bohicon.", "/a-propos"),
  component: () => (
    <>
      <PageHero eyebrow="À propos" title="Le web, avec élégance et exigence" desc="Une créatrice passionnée au service des marques qui veulent se démarquer." />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  ),
});
