import { TESTIMONIALS } from "@/lib/site";
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
  return <section className="section-space" aria-label="Témoignages"><div className="site-container">
    <SectionHeading eyebrow="La parole à mes clients" title="Témoignages" />
    <div className="featured-rail mt-12" aria-label="Témoignages clients en vedette" tabIndex={0}>
      <figure className="overflow-hidden rounded border border-border bg-card"><a href={screenshot.url} target="_blank" rel="noopener noreferrer" aria-label="Voir le témoignage WhatsApp de Warren Adjovi en grand"><img src={screenshot.url} alt="Message WhatsApp de Warren Adjovi remerciant Cadorelle pour son site portfolio professionnel, fluide et fidèle à son image." width={720} height={1179} loading="lazy" className="aspect-[9/16] w-full object-contain" /></a><figcaption className="border-t border-border p-5"><p className="font-medium">Warren Adjovi</p><p className="mt-1">Monteur vidéo professionnel · WhatsApp</p></figcaption></figure>
      {videos.map((item) => <figure key={item.video} className="overflow-hidden rounded border border-border bg-card"><video controls playsInline preload="none" poster={item.poster} aria-label={item.title} className="aspect-[9/16] w-full object-contain"><source src={item.video} type="video/mp4" /><source src={item.compatible} type="video/webm" /><a href={item.video}>Voir la vidéo</a></video><figcaption className="border-t border-border p-5">{item.title}</figcaption></figure>)}
    </div>
    <details className="mt-8 border-t border-border pt-6"><summary className="cursor-pointer">Textes de témoignages à valider</summary><p className="mt-4">Ces textes rédigés pour le site ne sont pas des avis clients vérifiés.</p><div className="mt-6 space-y-6">{TESTIMONIALS.map((item) => <figure key={item.name} className="border-l border-border pl-5"><blockquote>« {item.text} »</blockquote><figcaption className="mt-3">{item.name} · {item.role}</figcaption></figure>)}</div></details>
  </div></section>;
}
