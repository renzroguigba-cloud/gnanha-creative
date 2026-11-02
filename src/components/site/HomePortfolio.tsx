import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, Pause, Play } from "lucide-react";
import { PROJECTS } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function HomePortfolio() {
  const [viewport, carousel] = useEmblaCarousel({ loop: true, align: "start" });
  const [playing, setPlaying] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!carousel || !playing || interacting || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) carousel.scrollNext();
    }, 4000);
    return () => window.clearInterval(timer);
  }, [carousel, playing, interacting, reducedMotion]);

  return (
    <section className="overflow-hidden bg-surface py-20 md:py-28" aria-label="Réalisations" aria-roledescription="carrousel" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Réalisations</p>
            <h2 className="mt-4 text-3xl font-semibold text-gold sm:text-4xl">Mes réalisations</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">Six projets, six univers. Découvrez les sites créés pour mes clients.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" aria-label="Réalisation précédente" title="Réalisation précédente" onClick={() => carousel?.scrollPrev()}><ArrowLeft /></Button>
            {!reducedMotion && <Button variant="outline" size="icon" aria-label={playing ? "Mettre le défilement en pause" : "Reprendre le défilement"} title={playing ? "Pause" : "Reprendre"} onClick={() => setPlaying((value) => !value)}>{playing ? <Pause /> : <Play />}</Button>}
            <Button variant="outline" size="icon" aria-label="Réalisation suivante" title="Réalisation suivante" onClick={() => carousel?.scrollNext()}><ArrowRight /></Button>
          </div>
        </div>
        <div ref={viewport} className="overflow-hidden">
          <div className="-ml-5 flex touch-pan-y">
            {PROJECTS.map((project, index) => (
              <article key={project.url} className="min-w-0 flex-[0_0_88%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]" aria-label={`${index + 1} sur ${PROJECTS.length} : ${project.title}`} aria-roledescription="diapositive">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block h-full overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary" aria-label={`Visiter ${project.title}`}>
                  <div className="aspect-[4/3] overflow-hidden border-b border-border"><img src={project.img} alt={`Page d’accueil du site ${project.title}`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105" /></div>
                  <div className="p-6">
                    <p className="text-xs text-primary">{project.category}</p>
                    <div className="mt-3 flex items-center justify-between gap-3"><h3 className="text-xl">{project.title}</h3><ExternalLink className="h-4 w-4 shrink-0 text-primary" /></div>
                    <p className="mt-3 min-h-16 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
        <Button asChild variant="link" className="mt-8 h-auto px-0"><Link to="/realisations">Toutes mes réalisations <ArrowRight /></Link></Button>
      </div>
    </section>
  );
}