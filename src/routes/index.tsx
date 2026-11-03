import { Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { searchSite } from "@/lib/site-search";
import { HomePortfolio } from "@/components/site/HomePortfolio";
import { pageHead, SITE, MAIN_SERVICES } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { TestimonialsSection } from "@/components/site/SocialTestimonials";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => pageHead("Créatrice de sites web à Bohicon, Bénin", "Découvrez Gnanha W. Cadorelle, ses sites vitrines, boutiques catalogue WhatsApp et portfolios, ainsi que les témoignages de clients.", "/"),
  component: Index,
});

function Index() {
  const [idea, setIdea] = useState("");
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const [best] = searchSite(idea);
    if (!best) {
      setNotFound(true);
      return;
    }
    setNotFound(false);
    navigate({ to: best.to });
  };

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(71,118,168,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(214,183,121,0.15),transparent_32%)]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <p className="eyebrow">Créatrice de sites web • {SITE.city}</p>
              <h1 className="hero-word mt-5 text-4xl font-semibold leading-[0.95] text-foreground sm:text-5xl lg:text-6xl">
                Votre site web professionnel, pensé pour faire grandir votre marque.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Je suis {SITE.fullName}, créatrice de sites web à Bohicon. Je conçois des sites vitrines, portfolios et boutiques catalogue qui inspirent confiance et convertissent.
              </p>

              <form onSubmit={onSubmit} className="mt-8 flex max-w-2xl items-center gap-2 rounded-full border border-border bg-white/80 p-2 shadow-[var(--shadow-soft)] backdrop-blur-sm">
                <Search className="ml-3 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
                <label htmlFor="site-search" className="sr-only">Rechercher une page du site</label>
                <input
                  id="site-search"
                  value={idea}
                  onChange={(e) => {
                    setIdea(e.target.value);
                    setNotFound(false);
                  }}
                  maxLength={200}
                  placeholder="Tapez un mot-clé : services, réalisations, tarifs, contact…"
                  className="w-full border-0 bg-transparent px-2 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <Button type="submit" className="btn-gold !rounded-full !px-5 !py-3 text-sm">Rechercher</Button>
              </form>

              {notFound && (
                <p role="status" className="mt-3 text-sm text-muted-foreground">
                  Aucun résultat trouvé. Essayez « services », « réalisations », « tarifs », « FAQ » ou « contact ».
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1.5">+50 projets livrés</span>
                <span className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1.5">95% de clients satisfaits</span>
                <span className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1.5">4 ans d’expérience</span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-5 rounded-[2rem] border border-primary/10 bg-primary/5" aria-hidden />
                <img
                  src={portrait.url}
                  alt="Portrait de Gnanha W. Cadorelle, créatrice de sites web à Bohicon"
                  fetchPriority="high"
                  className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-strong)]"
                />
                <div className="card-lux absolute -bottom-6 right-4 flex items-center gap-3 px-5 py-4">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">4A</div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-primary-glow">Expérience</p>
                    <p className="text-lg font-semibold text-foreground">4 ans</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-6 pt-2 md:pb-10">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { value: "50+", label: "Projets livrés" },
              { value: "95%", label: "Clients satisfaits" },
              { value: "4 ans", label: "D'expérience web" },
            ].map((item, index) => (
              <Reveal key={item.label} delay={index * 90}>
                <div className="card-lux p-6 text-center">
                  <p className="font-display text-3xl font-semibold text-foreground md:text-4xl">{item.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="eyebrow">Bienvenue</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Un site qui reflète votre excellence.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              J'accompagne les entrepreneurs, agences, PME et marques ambitieuses à créer une présence en ligne claire, premium et orientée conversion.
            </p>
            <Link to="/services" className="btn-gold mt-8">Voir mes services <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
          <Reveal delay={100}>
            <img src={paradise.url} alt="Aperçu du site Paradise Abomey réalisé par Cadorelle" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]" />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 lg:px-8">
          <Reveal className="md:order-1">
            <img src={lumia.url} alt="Aperçu du portfolio Lumia réalisé par Cadorelle" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]" />
          </Reveal>
          <Reveal delay={100} className="md:order-2">
            <p className="eyebrow">Réalisations</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Des sites pensés pour inspirer confiance.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Découvrez les sites vitrine, portfolios et boutiques catalogues créés pour des marques qui veulent se démarquer avec élégance.
            </p>
            <Link to="/realisations" className="btn-gold mt-8">Voir mes réalisations <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Services</p>
                <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Ce que je peux vous offrir.</h2>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Voir tous les services <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {MAIN_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="card-lux h-full p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <span className="text-lg font-semibold">{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-2xl font-semibold text-primary">{s.price}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HomePortfolio />
      <TestimonialsSection />
    </>
  );
}
