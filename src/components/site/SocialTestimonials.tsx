import { MessageCircle, Video } from "lucide-react";
import screenshot from "@/assets/temoignage-warren.jpg.asset.json";
import video1 from "@/assets/temoignage-client-1.mp4.asset.json";
import video2 from "@/assets/temoignage-client-2.mp4.asset.json";
import compatible1 from "@/assets/temoignage-client-1.webm.asset.json";
import compatible2 from "@/assets/temoignage-client-2.webm.asset.json";
import poster1 from "@/assets/VID-20260412-WA0032.mp4-poster.jpg.asset.json";
import poster2 from "@/assets/VID-20260311-WA0073.mp4-poster.jpg.asset.json";
import { Reveal, SectionHeading } from "./Reveal";

const videos = [
  { video: video1.url, compatible: compatible1.url, poster: poster1.url, title: "Témoignage client · 01" },
  { video: video2.url, compatible: compatible2.url, poster: poster2.url, title: "Témoignage client · 02" },
];

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-20 md:py-28" aria-label="témoignage sociale">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="La parole à mes clients" title="témoignage sociale" />
        <div className="mx-auto mt-14 grid max-w-5xl items-start gap-6 md:grid-cols-3">
          <Reveal>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <a href={screenshot.url} target="_blank" rel="noopener noreferrer" aria-label="Voir le témoignage WhatsApp de Warren Adjovi en grand">
                <img src={screenshot.url} alt="Message WhatsApp de Warren Adjovi remerciant Cadorelle pour son site portfolio professionnel, fluide et fidèle à son image." width={720} height={1179} loading="lazy" className="aspect-[9/16] w-full object-contain" />
              </a>
              <figcaption className="flex items-center gap-2 border-t border-border p-4 text-sm text-foreground"><MessageCircle className="h-4 w-4 shrink-0 text-primary" />Warren Adjovi · WhatsApp</figcaption>
            </figure>
          </Reveal>
          {videos.map((item, i) => (
            <Reveal key={item.video} delay={(i + 1) * 90}>
              <figure className="overflow-hidden rounded-lg border border-border bg-card">
                <video controls playsInline preload="none" poster={item.poster} aria-label={item.title} className="aspect-[9/16] w-full bg-background object-contain">
                  <source src={item.compatible} type="video/webm" />
                  <source src={item.video} type="video/mp4" />
                  <a href={item.video}>Voir la vidéo</a>
                </video>
                <figcaption className="flex items-center gap-2 border-t border-border p-4 text-sm text-foreground"><Video className="h-4 w-4 shrink-0 text-primary" />{item.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}