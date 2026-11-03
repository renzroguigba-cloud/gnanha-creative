import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { searchSite } from "@/lib/site-search";
import { HomePortfolio } from "@/components/site/HomePortfolio";
import { ArrowRight, Search } from "lucide-react";
import portrait from "@/assets/cadorelle.jpg.asset.json";
import paradise from "@/assets/realisation-paradise.jpg.asset.json";
import lumia from "@/assets/realisation-lumia.jpg.asset.json";
import { pageHead, SITE, MAIN_SERVICES } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { TestimonialsSection } from "@/components/site/SocialTestimonials";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => pageHead("Créatrice de sites web à Bohicon, Bénin", "Découvrez Gnanha W. Cadorelle, ses sites vitrines, boutiques catalogue WhatsApp et portfolios, ainsi que les témoignages de ses clients.", "/"),
  component: Index,
});

function Index() {
  const [idea, setIdea] = useState("");
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const [best] = searchSite(idea);
    if (!best) { setNotFound(true); return; }
    setNotFound(false);
    navigate({ to: best.to });
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
              <label htmlFor="idea" className="sr-only">Rechercher une page du site</label>
              <input id="idea" value={idea} onChange={(e) => { setIdea(e.target.value); setNotFound(false); }} maxLength={200} placeholder="Ex. : services, réalisations, contact…" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none" />
              <Button type="submit" className="btn-gold h-auto !rounded-full !px-6 !py-3">Rechercher</Button>
            </form>
            {notFound && <p role="status" className="mt-3 text-sm text-muted-foreground">Aucune page trouvée. Essayez « services », « réalisations », « FAQ » ou « contact ».</p>}
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 -mt-24 px-5 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {MAIN_SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <Link to="/services" className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1.5 hover:border-primary ${i === 1 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground"}`}>
                <span className="absolute right-5 top-4 font-display text-5xl opacity-15" aria-hidden>0{i + 1}</span>
                <span className={`grid h-14 w-14 place-items-center rounded-full border transition group-hover:rotate-6 ${i === 1 ? "border-primary-foreground/40" : "border-primary/40 text-primary"}`}><s.icon className="h-6 w-6" aria-hidden /></span>
                <h2 className="mt-6 text-xl font-semibold leading-snug">{s.title}</h2>
                <p className={`mt-3 text-2xl font-semibold ${i === 1 ? "" : "text-primary"}`}>{s.price}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium">Découvrir l’offre <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden /></span>
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
      <HomePortfolio />
      <TestimonialsSection />
    </>
  );
}
