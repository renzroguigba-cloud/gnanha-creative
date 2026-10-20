import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";
import { PageHero } from "@/components/site/Sections";
import { ContactSection } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact — Démarrer un projet", "Contactez Cadorelle par WhatsApp, Gmail ou via le formulaire pour lancer votre site web.", "/contact"),
  component: () => (
    <>
      <PageHero eyebrow="Contact" title="Démarrons votre projet" desc="Décrivez votre besoin, je vous réponds rapidement avec une proposition adaptée." />
      <ContactSection />
    </>
  ),
});
