import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import portrait from "@/assets/cadorelle.jpg.asset.json";
import { pageHead, SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { AnimatedHeading } from "@/components/site/AnimatedHeading";
import { HomePortfolio } from "@/components/site/HomePortfolio";
import { HomeStats, HomeServices, HomeProcess, HomeCta } from "@/components/site/HomeSections";
import { TestimonialsSection } from "@/components/site/SocialTestimonials";

export const Route = createFileRoute("/")({
  head: () => pageHead("Créatrice de sites web à Bohicon, Bénin", "Découvrez Gnanha W. Cadorelle, ses sites vitrines, boutiques catalogue WhatsApp et portfolios, ainsi que les témoignages de ses clients.", "/"),
  component: Index,
});
function Index() {
  return <>
    <section className="home-hero">
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Créatrice de sites web · {SITE.city}</p>
          <AnimatedHeading as="h1" keyword="professionnel," className="mt-6">Votre site web professionnel, pensé pour attirer vos clients</AnimatedHeading>
          <p className="mt-8 max-w-xl">Je suis {SITE.fullName} : 4 ans d'expérience, 50+ projets livrés, 95 % de clients satisfaits.</p>
          <div className="mt-8 flex flex-wrap gap-4"><Button asChild className="btn-gold"><Link to="/contact">Démarrer un projet<ArrowRight /></Link></Button><Button asChild variant="outline" className="btn-outline-gold"><Link to="/realisations">Voir mes réalisations</Link></Button></div>
        </div>
        <figure className="hero-portrait"><img src={portrait.url} alt="Gnanha W. Cadorelle, créatrice de sites web à Bohicon" fetchPriority="high" width={736} height={718} /></figure>
      </div>
    </section>
    <HomeStats /><HomePortfolio /><HomeServices /><HomeProcess /><TestimonialsSection /><HomeCta />
  </>;
}
