import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";
import { CtaSection, PageHero, TestimonialsSection } from "@/components/site/Sections";

export const Route = createFileRoute("/temoignages")({
  head: () => pageHead("Témoignages clients", "Découvrez les témoignages vidéo et le retour WhatsApp des clients de Gnanha W. Cadorelle.", "/temoignages"),
  component: () => <><PageHero eyebrow="Témoignages" title="Mes clients prennent la parole" desc="Leurs expériences, en images et en vidéos." /><TestimonialsSection /><CtaSection /></>,
});