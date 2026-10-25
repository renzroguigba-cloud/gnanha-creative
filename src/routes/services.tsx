import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageSquare, PencilRuler, Rocket, SearchCheck } from "lucide-react";
import { pageHead } from "@/lib/site";
import { CtaSection, PageHero, ServicesPricingSection } from "@/components/site/Sections";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

const steps = [
  { icon: MessageSquare, title: "Écoute & cadrage", desc: "On discute de votre activité, vos objectifs et vos clients pour définir exactement ce dont vous avez besoin." },
  { icon: PencilRuler, title: "Maquette & design", desc: "Je vous propose un design sur mesure, élégant et adapté à votre image. Vous validez avant le développement." },
  { icon: SearchCheck, title: "Réalisation & tests", desc: "Je construis votre site et le teste sur mobile, tablette et ordinateur pour un rendu impeccable." },
  { icon: Rocket, title: "Mise en ligne", desc: "Votre site est publié et je vous forme à son utilisation. Je reste disponible après la livraison." },
];

const included = [
  "Accompagnement pour choisir et configurer votre nom de domaine et votre hébergement",
  "Site adapté au mobile, à la tablette et à l'ordinateur",
  "Boutons WhatsApp et formulaire de contact",
  "Référencement de base sur Google",
  "Conseils pour utiliser votre site et recevoir les demandes de vos clients",
  "Support réactif après la livraison",
];

export const Route = createFileRoute("/services")({
  head: () => pageHead("Services & tarifs de création de sites web", "Sites vitrines dès 180 €, portfolios dès 150 € et boutiques catalogues WhatsApp de 250 € à 2 000 € : demandez votre devis à Cadorelle.", "/services"),
  component: () => (
    <>
      <PageHero eyebrow="Services & tarifs" title="Des sites pensés pour votre activité" desc="Site vitrine, portfolio professionnel ou boutique catalogue avec commande par WhatsApp : découvrez mes services et les budgets adaptés à votre projet." />
      <ServicesPricingSection />
      <section className="bg-surface py-20 md:py-28" aria-labelledby="process-title">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Méthode" title="Comment se déroule votre projet" desc="Un processus simple et transparent, du premier échange à la mise en ligne." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="card-lux h-full p-7">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-primary/30 bg-accent text-primary">
                      <s.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <span className="font-display text-3xl text-gold/60">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
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
