import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import mockup from "@/assets/hero-mockup.jpg";
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
      <section className="glow-bg relative overflow-hidden pt-32 md:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 lg:grid-cols-2 lg:px-8 lg:pb-24">
          <Reveal>
            <p className="eyebrow">Créatrice de sites web · Bénin</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-gold sm:text-5xl lg:text-6xl">Des sites web élégants qui font grandir votre marque.</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Je conçois des sites premium, rapides et pensés pour convertir — pour que votre entreprise inspire confiance dès le premier regard.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-gold">Démarrer un projet <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/realisations" className="btn-outline-gold">Voir mes réalisations</Link>
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
          <Reveal delay={150} className="relative">
            <div className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl" aria-hidden />
            <img src={mockup} alt="Maquette d'un site web premium sur ordinateur et smartphone" width={1600} height={1008} fetchPriority="high" className="relative w-full rounded-[2rem] border border-border object-cover shadow-[var(--shadow-soft)]" />
            <div className="card-lux absolute -bottom-6 left-4 flex items-center gap-3 px-5 py-3 sm:left-8">
              <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden />)}</div>
              <span className="text-sm text-foreground">Clients ravis</span>
            </div>
          </Reveal>
        </div>
      </section>
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <PortfolioSection limit={3} />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
