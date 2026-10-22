import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MonitorSmartphone, ShoppingBag, Briefcase } from "lucide-react";
import portrait from "@/assets/cadorelle.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { pageHead, SITE } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { TestimonialsSection } from "@/components/site/SocialTestimonials";

export const Route = createFileRoute("/")({
   head: () => pageHead("Créatrice de sites web à Bohicon, Bénin", "Découvrez Gnanha W. Cadorelle, ses sites vitrines, boutiques catalogue WhatsApp et portfolios, ainsi que les témoignages de ses clients.", "/"),
  component: Index,
});

const highlights = [
  { icon: MonitorSmartphone, title: "Sites vitrines", desc: "Présentez votre activité avec élégance.", to: "/services" },
  { icon: ShoppingBag, title: "Boutiques catalogue", desc: "Vendez via WhatsApp, simplement.", to: "/services" },
  { icon: Briefcase, title: "Portfolios", desc: "Mettez en valeur votre travail.", to: "/realisations" },
] as const;

function Index() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <img src={portrait.url} alt="Gnanha W. Cadorelle, créatrice de sites web à Bohicon" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="hero-shade absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24">
          <Reveal>
            <p className="eyebrow">Créatrice de sites web · Bohicon, Bénin</p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] text-gold sm:text-5xl lg:text-6xl">Gnanha W. Cadorelle</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Des sites web élégants qui font grandir votre marque. Sites vitrines, boutiques catalogue avec commande WhatsApp et portfolios — conçus pour inspirer confiance et convertir.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="btn-gold h-auto"><Link to="/contact">Démarrer un projet <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" className="btn-outline-gold h-auto"><Link to="/realisations">Voir mes réalisations</Link></Button>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-8">
              {[["50+", "projets livrés"], ["95%", "clients satisfaits"], ["4 ans", "d'expérience"]].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-2xl text-foreground sm:text-3xl">{v}</dd>
                  <dd className="text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="welcome-title">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow">Bienvenue</p>
              <h2 id="welcome-title" className="mt-4 text-3xl font-semibold leading-tight text-gold sm:text-4xl">Votre présence en ligne commence ici</h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Je suis {SITE.fullName}, créatrice de sites web basée à {SITE.city}. Depuis 4 ans, j'accompagne les marques, entrepreneurs et entreprises qui veulent une présence en ligne professionnelle, claire et à leur image. Chaque projet est unique : explorez mes services, découvrez mes réalisations et parlons de votre projet.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 80}>
                <Link to={h.to} className="card-lux group block h-full p-7">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-primary/30 bg-accent text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <h.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{h.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">Découvrir <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </>
  );
}
