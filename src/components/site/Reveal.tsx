import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  center = true,
  as: Tag = "h2",
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <Tag className="hero-word mt-4 text-3xl font-semibold leading-[1.05] text-gold sm:text-4xl md:text-5xl">{title}</Tag>
      {desc && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{desc}</p>}
    </Reveal>
  );
}
