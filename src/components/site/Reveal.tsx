import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnimatedHeading } from "./AnimatedHeading";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  void delay;
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, desc, center = true, as: Tag = "h2" }: { eyebrow: string; title: ReactNode; desc?: string; center?: boolean; as?: "h1" | "h2" }) {
  return (
    <Reveal className={cn("section-heading max-w-3xl")}>
      <p className="eyebrow">{eyebrow}</p>
      {typeof title === "string" ? <AnimatedHeading as={Tag} className="mt-4" >{title}</AnimatedHeading> : <Tag className="mt-4">{title}</Tag>}
      {desc && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{desc}</p>}
    </Reveal>
  );
}
