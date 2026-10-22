import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, PencilRuler, Rocket, SearchCheck } from "lucide-react";
import { pageHead } from "@/lib/site";
import { CtaSection, PageHero, ServicesSection } from "@/components/site/Sections";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

const steps = [
  { icon: MessageSquare, title: "Écoute & cadrage", desc: "On discute de votre activité, vos objectifs et vos clients pour définir exactement ce dont vous avez besoin." },
  { icon: PencilRuler, title: "Maquette & design", desc: "Je vous propose un design sur mesure, élégant et adapté à votre image. Vous validez avant le développement." },
  { icon: SearchCheck, title: "Réalisation & tests", desc: "Je construis votre site et le teste sur mobile, tablette et ordinateur pour un rendu impeccable." },
  { icon: Rocket, title: "Mise en ligne", desc: "Votre site est publié et je vous forme à son utilisation. Je reste disponible après la livraison." },
];

export const Route = createFileRoute("/services")({
  head: () => pageHead("Services : sites vitrines, boutiques catalogue & portfolios", "Création de sites web vitrines, boutiques catalogue avec commande WhatsApp et portfolios professionnels au Bénin.", "/services"),
  component: () => (
    <>
      <PageHero eyebrow="Services" title="Des sites pensés pour votre activité" desc="Trois services complémentaires pour donner à votre marque la présence en ligne qu'elle mérite." />
      <ServicesSection />
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
      <CtaSection />
    </>
  ),
});
