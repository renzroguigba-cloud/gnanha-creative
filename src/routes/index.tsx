import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import portrait from "@/assets/cadorelle.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { AboutSection, CtaSection, FaqSection, PortfolioSection, PricingSection, ServicesSection, StatsSection, TestimonialsSection } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => pageHead("Créatrice de sites web premium à Bohicon, Bénin", "Gnanha W. Cadorelle conçoit des sites web élégants, rapides et sur mesure pour entrepreneurs et entreprises au Bénin et en Afrique.", "/"),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <img src={portrait.url} alt="Gnanha W. Cadorelle, créatrice de sites web à Bohicon" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="hero-shade absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24">
          <Reveal>
            <p className="eyebrow">Créatrice de sites web · Bénin</p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] text-gold sm:text-5xl lg:text-6xl">Gnanha W. Cadorelle</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Des sites web élégants qui font grandir votre marque. Je conçois des sites premium, rapides et pensés pour convertir.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="btn-gold h-auto"><Link to="/contact">Démarrer un projet <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" className="btn-outline-gold h-auto"><Link to="/realisations">Voir mes réalisations</Link></Button>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-8">
              {[["200+", "projets"], ["4.9/5", "satisfaction"], ["9 ans", "d'expérience"]].map(([v, l]) => (
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
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
