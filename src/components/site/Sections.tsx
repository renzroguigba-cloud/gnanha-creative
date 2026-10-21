import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import portrait from "@/assets/cadorelle.jpg.asset.json";
import { FAQS, LINKS, PLANS, PROJECTS, SERVICES, SITE, STATS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";
export { TestimonialsSection } from "./SocialTestimonials";

export function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <section className="glow-bg relative overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} desc={desc} />
      </div>
    </section>
  );
}

export function ServicesSection({ limit }: { limit?: number }) {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section className="py-20 md:py-28" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Services" title="Tout pour une présence en ligne remarquable" desc="De l'identité de marque au site final, je vous accompagne à chaque étape avec exigence et créativité." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="card-lux group h-full p-7">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-primary/30 bg-accent text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground/90"><Check className="h-4 w-4 text-primary" aria-hidden />{b}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="bg-surface py-20 md:py-28" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2.5rem] border border-primary/40" aria-hidden />
          <img src={portrait.url} alt={`Portrait de ${SITE.fullName}, créatrice de sites web`} width={736} height={718} loading="lazy" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]" />
          <div className="card-lux absolute -bottom-6 -right-2 px-6 py-4 sm:-right-8">
            <p className="font-display text-3xl text-gold">9 ans</p>
            <p className="text-xs text-muted-foreground">d'expertise web</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">À propos</p>
          <h2 id="about-title" className="mt-4 text-3xl font-semibold leading-tight text-gold sm:text-4xl md:text-5xl">Bonjour, je suis Cadorelle.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Créatrice de sites web basée à Bohicon, j'aide les entrepreneurs, PME et marques ambitieuses à exister en ligne avec élégance. Depuis 9 ans, je conçois des sites qui allient beauté, clarté et performance — pour que chaque visiteur ait envie de vous faire confiance.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { t: "Mission", d: "Rendre le web premium accessible aux marques africaines." },
              { t: "Vision", d: "Des entreprises locales visibles et crédibles partout." },
              { t: "Valeurs", d: "Exigence, écoute, transparence et créativité." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="text-lg text-primary">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
          <Link to="/a-propos" className="btn-outline-gold mt-8">En savoir plus <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="py-16" aria-label="Chiffres clés">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 md:grid-cols-4 lg:px-8">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="card-lux p-6 text-center md:p-8">
              <p className="font-display text-4xl font-semibold text-gold md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function PortfolioSection({ limit }: { limit?: number }) {
  const list = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <section className="py-20 md:py-28" aria-labelledby="portfolio-title">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Portfolio" title="Mes réalisation" />
        <div className={cn("mt-14 grid gap-6 sm:grid-cols-2", list.length === 3 && "lg:grid-cols-3")}>
          {list.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="card-lux group h-full overflow-hidden">
                <div className="overflow-hidden">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Visiter le site ${p.title}`}>
                    <img src={p.img} alt={`Aperçu du site ${p.title}`} width={1280} height={850} loading="lazy" className="aspect-[1280/850] w-full object-cover transition duration-700 group-hover:scale-105" />
                  </a>
                </div>
                <div className="p-6">
                  <p className="eyebrow !text-[0.68rem]">{p.category}</p>
                  <h3 className="mt-2 text-2xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <Button asChild variant="link" className="mt-5 h-auto px-0"><a href={p.url} target="_blank" rel="noopener noreferrer">Voir le site <ArrowUpRight className="h-4 w-4" /></a></Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Tarifs" title="Des offres claires, sans surprise" desc="Chaque projet est unique : ces formules sont un point de départ, ajustable à vos besoins." />
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <article className={cn("card-lux relative flex h-full flex-col p-8", p.featured && "border-primary/70 lg:-translate-y-4")}>
                {p.featured && <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Le plus choisi</span>}
                <h3 className="text-2xl text-foreground">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <p className="mt-6 font-display text-4xl text-gold">{p.price} <span className="font-sans text-sm text-muted-foreground">{p.unit}</span></p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => <li key={f} className="flex gap-2 text-sm text-foreground/90"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />{f}</li>)}
                </ul>
                <Link to="/contact" className={cn("mt-8 w-full", p.featured ? "btn-gold" : "btn-outline-gold")}>{p.price === "Sur devis" ? "Demander un devis" : "Choisir cette offre"}</Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes" />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`} className="rounded-2xl border border-border bg-card px-6">
                <AccordionTrigger className="py-5 text-left font-display text-lg hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <Reveal className="glow-bg mx-auto max-w-5xl rounded-[2rem] border border-primary/30 bg-card px-6 py-14 text-center md:px-16">
        <h2 className="text-3xl text-gold md:text-5xl">Prête à donner vie à votre projet ?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Parlons de vos objectifs. Réponse rapide sur WhatsApp ou par email.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/contact" className="btn-gold">Démarrer un projet <ArrowRight className="h-4 w-4" /></Link>
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">Écrire sur WhatsApp</a>
        </div>
      </Reveal>
    </section>
  );
}
