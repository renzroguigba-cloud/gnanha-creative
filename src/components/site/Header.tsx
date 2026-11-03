import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${SITE.brand} — accueil`}>
      <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">C</span>
      <span className="font-display text-lg font-semibold tracking-wide text-foreground">
        Cadorelle<span className="text-primary-glow"> W.</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent") }>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-4 xl:gap-6">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} activeOptions={{ exact: true }} className="relative py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-gold hidden !px-5 !py-2.5 text-sm sm:inline-flex">Démarrer un projet</Link>
          <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white/80 lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Navigation mobile" className="border-t border-border bg-background/95 px-5 pb-6 lg:hidden">
          <ul className="flex flex-col py-2">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }} className="block border-b border-border/60 py-4 font-display text-xl text-foreground" activeProps={{ className: "text-primary" }}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-4 w-full">Démarrer un projet</Link>
        </nav>
      )}
    </header>
  );
}
