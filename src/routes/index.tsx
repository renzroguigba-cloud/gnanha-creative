import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, MonitorSmartphone, ShoppingBag, Briefcase, Search } from "lucide-react";
import portrait from "@/assets/cadorelle.jpg.asset.json";
import paradise from "@/assets/realisation-paradise.jpg.asset.json";
import lumia from "@/assets/realisation-lumia.jpg.asset.json";
import { pageHead, SITE } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { TestimonialsSection } from "@/components/site/SocialTestimonials";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => pageHead("Créatrice de sites web à Bohicon, Bénin", "Découvrez Gnanha W. Cadorelle, ses sites vitrines, boutiques catalogue WhatsApp et portfolios, ainsi que les témoignages de ses clients.", "/"),
  component: Index,
});

const cards = [
  { icon: MonitorSmartphone, title: "Sites vitrines élégants pour présenter votre activité", tone: "bg-card text-foreground border border-border" },
  { icon: ShoppingBag, title: "Boutiques catalogue avec commande WhatsApp", tone: "bg-primary text-primary-foreground" },
  { icon: Briefcase, title: "Portfolios pour marques et entrepreneurs", tone: "bg-accent text-foreground border border-primary/30" },
] as const;

function Index() {
  const [idea, setIdea] = useState("");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Bonjour Cadorelle, je souhaite créer : ${idea.trim() || "un site web"}.`);
    window.location.assign(`https://wa.me/2290142554256?text=${text}`);
  };

  return (
    <>
      <section className="relative flex min-h-[640px] items-center overflow-hidden pt-28 md:min-h-[720px]">
        <img src={portrait.url} alt="Gnanha W. Cadorelle, créatrice de sites web à Bohicon" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="hero-shade absolute inset-0" aria-hidden />
        <div className="relative mx-auto w-full max-w-4xl px-5 pb-36 text-center">
          <Reveal>
            <p className="eyebrow">Créatrice de sites web · {SITE.city}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-gold sm:text-5xl lg:text-6xl">Votre site web professionnel, pensé pour attirer vos clients</h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">Je suis {SITE.fullName} : 4 ans d'expérience, 50+ projets livrés, 95% de clients satisfaits.</p>
            <form onSubmit={onSubmit} className="mx-auto mt-9 flex max-w-xl items-center rounded-full border border-border bg-card p-1.5 shadow-[var(--shadow-soft)]">
              <Search className="ml-4 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
              <label htmlFor="idea" className="sr-only">Quel site souhaitez-vous créer ?</label>
              <input id="idea" value={idea} onChange={(e) => setIdea(e.target.value)} maxLength={200} placeholder="Quel site souhaitez-vous créer ?" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none" />
              <Button type="submit" className="btn-gold h-auto !rounded-full !px-6 !py-3">Démarrer</Button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 -mt-24 px-5 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <Link to="/services" className={`block h-full rounded-2xl p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 ${c.tone}`}>
                <c.icon className="h-7 w-7" aria-hidden />
                <p className="mt-4 text-sm font-medium leading-relaxed">{c.title}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="eyebrow">Bienvenue</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-gold sm:text-4xl">Votre présence en ligne commence ici</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">J'accompagne les marques, entrepreneurs et entreprises qui veulent un site clair, professionnel et à leur image — sur téléphone comme sur ordinateur.</p>
            <Link to="/services" className="btn-gold mt-8">Voir mes services <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
          <Reveal delay={100}>
            <img src={paradise.url} alt="Aperçu du site Paradise Abomey réalisé par Cadorelle" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]" />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 lg:px-8">
          <Reveal className="md:order-1">
            <img src={lumia.url} alt="Aperçu du portfolio Lumia réalisé par Cadorelle" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]" />
          </Reveal>
          <Reveal delay={100} className="md:order-2">
            <p className="eyebrow">Réalisations</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-gold sm:text-4xl">Des sites réels, en ligne et appréciés</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">Découvrez les sites vitrines et portfolios livrés à mes clients, puis imaginez le vôtre.</p>
            <Link to="/realisations" className="btn-gold mt-8">Voir mes réalisations <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>
      <TestimonialsSection />
    </>
  );
}
