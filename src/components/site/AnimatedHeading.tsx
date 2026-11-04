import { useEffect, useRef, type ElementType } from "react";
import { cn } from "@/lib/utils";

export function AnimatedHeading({ children, as: Tag = "h2", className, keyword }: { children: string; as?: ElementType; className?: string; keyword?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = children.split(" ");
  const chosen = keyword ?? words.find((word) => /professionnel|activité|Cadorelle|élégance|réalisations|projet|réponses|fréquentes|services|Témoignages/i.test(word)) ?? words[Math.floor(words.length / 2)];
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { element.classList.add("heading-visible"); observer.disconnect(); }
    }, { threshold: 0.15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <Tag ref={ref} className={cn("animated-heading", className)} aria-label={children}>{words.map((word, index) => <span key={index} className="heading-word" aria-hidden="true" style={{ transitionDelay: `${Math.min(index * 60, 600)}ms` }}>{word === chosen ? <em className="heading-keyword">{word}</em> : word}{index < words.length - 1 ? "\u00a0" : ""}</span>)}</Tag>;
}