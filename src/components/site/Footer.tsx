import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { LINKS, NAV, SITE } from "@/lib/site";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {SITE.fullName}, créatrice de sites web basée à {SITE.city}. Design premium, développement moderne et accompagnement humain pour les marques qui veulent briller en ligne.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={LINKS.whatsapp} aria-label="WhatsApp" className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition hover:bg-accent"><MessageCircle className="h-5 w-5" /></a>
            <a href={LINKS.gmail} aria-label="Gmail" className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition hover:bg-accent"><Mail className="h-5 w-5" /></a>
            <a href={LINKS.tel} aria-label="Téléphone" className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition hover:bg-accent"><Phone className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h2 className="font-display text-lg text-foreground">Liens rapides</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-muted-foreground transition hover:text-primary">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg text-foreground">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-primary" />{SITE.city}</li>
            <li><a href={LINKS.gmail} className="flex gap-2 break-all hover:text-primary"><Mail className="h-4 w-4 shrink-0 text-primary" />{SITE.email}</a></li>
            <li><a href={LINKS.whatsapp} className="flex gap-2 hover:text-primary"><MessageCircle className="h-4 w-4 shrink-0 text-primary" />{SITE.phoneDisplay}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} {SITE.fullName}. Tous droits réservés.</p>
          <Link to="/mentions-legales" className="hover:text-primary">Mentions légales & confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
