import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKS, MAIN_SERVICES } from "@/lib/site";
import { AnimatedHeading } from "./AnimatedHeading";
import { SectionHeading } from "./Reveal";

function Count({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(value);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => { const progress = Math.min((now - start) / 850, 1); setCount(Math.round(value * progress)); if (progress < 1) frame = requestAnimationFrame(tick); };
      setCount(0); frame = requestAnimationFrame(tick);
    });
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export function HomeStats() {
  return <section className="home-stats bg-surface" aria-label="Chiffres clés"><div className="site-container grid gap-8 md:grid-cols-3">{[{ value: 4, suffix: "", label: "ans d'expérience" }, { value: 50, suffix: "+", label: "projets livrés" }, { value: 95, suffix: " %", label: "de clients satisfaits" }].map((stat) => <p key={stat.label} className="stat-item"><strong className="stat-number"><Count value={stat.value} suffix={stat.suffix} /></strong><span>{stat.label}</span></p>)}</div></section>;
}

export function HomeServices() {
  return <section className="section-space"><div className="site-container"><SectionHeading eyebrow="Services & tarifs" title="Trois services, des budgets clairs" /><div className="mt-12 grid gap-5 lg:grid-cols-3">{MAIN_SERVICES.map((service, index) => <article key={service.title} className="home-service bg-card"><div className="flex items-center justify-between text-primary"><span className="text-lg">0{index + 1}</span><service.icon strokeWidth={1.5} className="h-6 w-6" /></div><h3 className="mt-8 text-2xl">{service.title}</h3><p className="mt-5 text-muted-foreground">{service.desc}</p><p className="service-price mt-8">{service.price}</p><Button asChild className="btn-gold mt-7 w-full"><Link to="/contact">{service.cta}<ArrowRight /></Link></Button></article>)}</div></div></section>;
}

export function HomeProcess() {
  const steps = [{ title: "Échange", text: "Je prends le temps de comprendre votre activité et vos besoins." }, { title: "Maquette", text: "Je vous propose une maquette que nous validons ensemble." }, { title: "Création", text: "Je construis votre site et le teste sur téléphone et ordinateur." }, { title: "Livraison", text: "Je mets votre site en ligne après votre validation." }];
  return <section className="section-space pt-0"><div className="site-container"><SectionHeading eyebrow="Méthode" title="Votre projet, étape par étape" /><ol className="process-line mt-12 grid gap-8 md:grid-cols-4">{steps.map((step, index) => <li key={step.title}><span className="process-number">0{index + 1}</span><h3 className="mt-6 text-2xl">{step.title}</h3><p className="mt-4">{step.text}</p></li>)}</ol></div></section>;
}

export function HomeCta() {
  return <section className="section-space pt-0"><div className="site-container"><div className="home-cta bg-card"><p className="eyebrow">Parlons de votre projet</p><AnimatedHeading className="mt-5">Vous avez une idée ? Je vous écoute.</AnimatedHeading><Button asChild className="btn-gold mt-8"><a href={LINKS.whatsapp}><MessageCircle />Écrire sur WhatsApp</a></Button></div></div></section>;
}