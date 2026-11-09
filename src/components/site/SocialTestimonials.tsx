import { WRITTEN_TESTIMONIALS } from "@/lib/testimonials";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import screenshot from "@/assets/temoignage-warren.jpg.asset.json";
import video1 from "@/assets/temoignage-client-1.mp4.asset.json";
import video2 from "@/assets/temoignage-client-2.mp4.asset.json";
import compatible1 from "@/assets/temoignage-client-1.webm.asset.json";
import compatible2 from "@/assets/temoignage-client-2.webm.asset.json";
import poster1 from "@/assets/VID-20260412-WA0032.mp4-poster.jpg.asset.json";
import poster2 from "@/assets/VID-20260311-WA0073.mp4-poster.jpg.asset.json";
import { SectionHeading } from "./Reveal";
const videos = [
  { video: video1.url, compatible: compatible1.url, poster: poster1.url, title: "Témoignage client · 01" },
  { video: video2.url, compatible: compatible2.url, poster: poster2.url, title: "Témoignage client · 02" },
];
export function TestimonialsSection() {
  const [mediaViewport, mediaCarousel] = useEmblaCarousel({ align: "start", loop: false });
  const [commentViewport, commentCarousel] = useEmblaCarousel({ align: "start", loop: true });
  return <section className="section-space" aria-label="Témoignages"><div className="site-container">
    <div className="flex flex-wrap items-end justify-between gap-6"><SectionHeading eyebrow="La parole à mes clients" title="Témoignages" /><div className="flex gap-2"><Button size="icon" aria-label="Témoignage précédent" title="Témoignage précédent" onClick={() => mediaCarousel?.scrollPrev()}><ArrowLeft /></Button><Button size="icon" aria-label="Témoignage suivant" title="Témoignage suivant" onClick={() => mediaCarousel?.scrollNext()}><ArrowRight /></Button></div></div>
    <div ref={mediaViewport} className="mt-12 overflow-hidden" aria-label="Témoignages clients authentiques" aria-roledescription="carrousel"><div className="-ml-6 flex touch-pan-y">
      <div className="testimonial-media-slide"><figure><a href={screenshot.url} target="_blank" rel="noopener noreferrer" aria-label="Voir le témoignage WhatsApp de Warren Adjovi en grand"><img src={screenshot.url} alt="Message WhatsApp de Warren Adjovi remerciant Cadorelle pour son site portfolio professionnel, fluide et fidèle à son image." width={720} height={1179} loading="lazy" className="aspect-[9/16] w-full object-contain" /></a><figcaption className="border-t border-border py-5"><p className="font-medium">Warren Adjovi</p><p className="mt-1">Monteur vidéo professionnel · WhatsApp</p></figcaption></figure></div>
      {videos.map((item) => <div key={item.video} className="testimonial-media-slide"><figure><video controls playsInline preload="none" poster={item.poster} aria-label={item.title} className="aspect-[9/16] w-full object-contain"><source src={item.video} type="video/mp4" /><source src={item.compatible} type="video/webm" /><a href={item.video}>Voir la vidéo</a></video><figcaption className="border-t border-border py-5">{item.title}</figcaption></figure></div>)}
    </div></div>
    <div className="mt-12 flex flex-wrap items-center justify-between gap-4"><div><h3 className="text-2xl">Avis clients</h3></div><div className="flex gap-2"><Button size="icon" aria-label="Commentaire précédent" title="Commentaire précédent" onClick={() => commentCarousel?.scrollPrev()}><ArrowLeft /></Button><Button size="icon" aria-label="Commentaire suivant" title="Commentaire suivant" onClick={() => commentCarousel?.scrollNext()}><ArrowRight /></Button></div></div>
    <div ref={commentViewport} className="mt-6 overflow-hidden" aria-label="Avis clients" aria-roledescription="carrousel"><div className="-ml-6 flex touch-pan-y">{WRITTEN_TESTIMONIALS.map((item) => <div key={item.id} className="testimonial-slide"><figure className="sample-comment"><div className="flex items-center gap-1" aria-label={`Note ${item.rating} sur 5`}>{[1,2,3,4,5].map((n) => <Star key={n} aria-hidden className="h-4 w-4" fill={n <= Math.floor(item.rating) ? "currentColor" : "none"} strokeWidth={1.5} />)}</div><blockquote className="mt-4">« {item.text} »</blockquote><figcaption className="mt-5"><p className="font-medium">{item.name}</p><p className="text-sm">{item.role} · {item.company} · {item.location}</p>{item.isPlaceholder && <p className="mt-2 text-sm text-muted-foreground">Avis d'exemple</p>}</figcaption></figure></div>)}</div></div>
  </div></section>;
}
