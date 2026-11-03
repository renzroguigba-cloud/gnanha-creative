import { MessageCircle, Star, Video } from "lucide-react";
import { TESTIMONIALS, MEDIA } from "@/lib/site";
import { Reveal, SectionHeading } from "./Reveal";

const videos = [
  { video: MEDIA.videos.client1, compatible: MEDIA.videos.client1Webm, poster: MEDIA.videos.poster1, title: "Témoignage client · 01" },
  { video: MEDIA.videos.client2, compatible: MEDIA.videos.client2Webm, poster: MEDIA.videos.poster2, title: "Témoignage client · 02" },
];

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-20 md:py-28" aria-label="témoignage sociale">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="La parole à mes clients" title="témoignage sociale" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80} className="h-full">
              <figure className="card-lux flex h-full flex-col p-7">
                <div className="flex gap-1" aria-label={`Note : ${t.rating} sur 5`}>
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star key={s} className={s < t.rating ? "h-4 w-4 fill-primary text-primary" : "h-4 w-4 text-border"} aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">« {t.text} »</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl items-start gap-6 md:grid-cols-3">
          <Reveal>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <a href={MEDIA.projects.testimonialWarren} target="_blank" rel="noopener noreferrer" aria-label="Voir le témoignage WhatsApp de Warren Adjovi en grand">
                <img src={MEDIA.projects.testimonialWarren} alt="Message WhatsApp de Warren Adjovi remerciant Cadorelle pour son site portfolio professionnel." width={720} height={960} loading="lazy" className="aspect-[3/4] w-full object-cover" />
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

