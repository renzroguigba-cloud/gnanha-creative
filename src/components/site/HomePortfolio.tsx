import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./Reveal";
const featured = ["do-REGO Julio", "LUMÎA Studio", "CoachVie", "Warren Adjovi"].flatMap((name) => PROJECTS.filter((project) => project.title === name));
export function HomePortfolio() {
  const [viewport, carousel] = useEmblaCarousel({ align: "start", loop: false });
  return <section className="section-space overflow-hidden" aria-label="Réalisations en vedette" aria-roledescription="carrousel"><div className="site-container">
    <div className="mb-12 flex flex-wrap items-end justify-between gap-6"><SectionHeading eyebrow="Réalisations" title="Mes réalisations" desc="Six projets, six univers. Découvrez les sites créés pour mes clients." /><div className="flex gap-2"><Button variant="outline" size="icon" aria-label="Réalisation précédente" title="Réalisation précédente" onClick={() => carousel?.scrollPrev()}><ArrowLeft /></Button><Button variant="outline" size="icon" aria-label="Réalisation suivante" title="Réalisation suivante" onClick={() => carousel?.scrollNext()}><ArrowRight /></Button></div></div>
    <div ref={viewport} className="overflow-hidden"><div className="-ml-6 flex touch-pan-y">{featured.map((project, index) => <article key={project.url} className="min-w-0 flex-[0_0_90%] pl-6 md:flex-[0_0_55%]" aria-label={`${index + 1} sur 4 : ${project.title}`} aria-roledescription="diapositive"><a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full overflow-hidden rounded border border-border bg-card" aria-label={`Visiter ${project.title}`}><img src={project.img} alt={`Page d’accueil du site ${project.title}`} loading="lazy" className="aspect-[4/3] w-full border-b border-border object-cover object-top" /><div className="p-6"><p className="text-primary">{project.category}</p><div className="mt-3 flex items-center justify-between gap-3"><h3 className="text-3xl">{project.title}</h3><ExternalLink className="h-5 w-5 shrink-0 text-primary" /></div><p className="mt-4 text-muted-foreground">{project.desc}</p></div></a></article>)}</div></div>
    <Button asChild variant="link" className="mt-8 h-auto px-0 text-foreground"><Link to="/realisations">Toutes mes réalisations<ArrowRight /></Link></Button>
  </div></section>;
}
