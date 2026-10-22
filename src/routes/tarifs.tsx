import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { pageHead } from "@/lib/site";
import { CtaSection, PageHero, PricingSection } from "@/components/site/Sections";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

const included = [
  "Nom de domaine et hébergement configurés",
  "Site adapté au mobile, à la tablette et à l'ordinateur",
  "Boutons WhatsApp et formulaire de contact",
  "Référencement de base sur Google",
  "Formation à la gestion de vos contenus",
  "Support réactif après la livraison",
];

export const Route = createFileRoute("/tarifs")({
  head: () => pageHead("Tarifs de création de site web", "Offres Essentiel, Premium et Sur mesure pour la création de votre site web au Bénin.", "/tarifs"),
  component: () => (
    <>
      <PageHero eyebrow="Tarifs" title="Investissez dans votre image" desc="Trois formules transparentes, adaptables à votre projet." />
      <PricingSection />
      <section className="bg-surface py-20 md:py-28" aria-labelledby="included-title">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="Bon à savoir" title="Inclus dans toutes les offres" desc="Quelle que soit la formule choisie, votre site est livré complet et prêt à l'emploi." />
            <Reveal className="mt-12">
              <ul className="grid gap-4 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Paiement en deux temps : un acompte au lancement, le solde à la livraison. Mobile Money accepté.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  ),
});
