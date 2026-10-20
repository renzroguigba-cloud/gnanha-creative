import { useState } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactSchema, submitContact } from "@/lib/contact.functions";
import { LINKS, SITE } from "@/lib/site";

const TYPES = ["Site vitrine", "Boutique en ligne", "Branding / identité", "Refonte de site", "Maintenance", "Autre"];
const field = "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await submitContact({ data: parsed.data });
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const contacts = [
    { icon: MessageCircle, label: "WhatsApp", value: SITE.phoneDisplay, href: LINKS.whatsapp, ext: true },
    { icon: Mail, label: "Gmail", value: SITE.email, href: LINKS.gmail, ext: true },
    { icon: Phone, label: "Téléphone", value: SITE.phoneDisplay, href: LINKS.tel, ext: false },
    { icon: MapPin, label: "Adresse", value: SITE.city, href: undefined, ext: false },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-5 lg:px-8">
        <div className="space-y-4 lg:col-span-2">
          <h2 className="text-3xl text-gold">Parlons de votre projet</h2>
          <p className="text-muted-foreground">Le moyen le plus rapide : un message WhatsApp. Je réponds généralement dans la journée.</p>
          {contacts.map((c) => {
            const inner = (
              <>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-primary"><c.icon className="h-5 w-5" aria-hidden /></span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">{c.label}</span>
                  <span className="block break-all text-foreground">{c.value}</span>
                </span>
              </>
            );
            return c.href ? (
              <a key={c.label} href={c.href} {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="card-lux flex items-center gap-4 p-4">{inner}</a>
            ) : (
              <div key={c.label} className="card-lux flex items-center gap-4 p-4">{inner}</div>
            );
          })}
        </div>

        <div className="card-lux p-6 md:p-10 lg:col-span-3">
          {status === "done" ? (
            <div className="flex flex-col items-center py-16 text-center" role="status">
              <CheckCircle2 className="h-14 w-14 text-primary" aria-hidden />
              <h3 className="mt-5 text-2xl text-foreground">Merci, message bien reçu !</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">Je reviens vers vous très rapidement. Pour une réponse immédiate, écrivez-moi sur WhatsApp.</p>
              <button type="button" onClick={() => setStatus("idle")} className="btn-outline-gold mt-8">Envoyer un autre message</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">Nom complet *</label>
                <input id="name" name="name" autoComplete="name" className={field} placeholder="Votre nom" aria-invalid={!!errors.name} aria-describedby="name-err" />
                {errors.name && <p id="name-err" className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">Email *</label>
                <input id="email" name="email" type="email" autoComplete="email" className={field} placeholder="vous@exemple.com" aria-invalid={!!errors.email} aria-describedby="email-err" />
                {errors.email && <p id="email-err" className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="company" className="text-sm font-medium">Entreprise</label>
                <input id="company" name="company" autoComplete="organization" className={field} placeholder="Nom de votre entreprise" />
              </div>
              <div>
                <label htmlFor="project_type" className="text-sm font-medium">Type de projet *</label>
                <select id="project_type" name="project_type" defaultValue="" className={field} aria-invalid={!!errors.project_type} aria-describedby="type-err">
                  <option value="" disabled>Choisir…</option>
                  {TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
                {errors.project_type && <p id="type-err" className="mt-1 text-xs text-destructive">{errors.project_type}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium">Message *</label>
                <textarea id="message" name="message" rows={5} className={field} placeholder="Parlez-moi de votre projet, vos objectifs, vos délais…" aria-invalid={!!errors.message} aria-describedby="msg-err" />
                {errors.message && <p id="msg-err" className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              {status === "error" && <p className="text-sm text-destructive sm:col-span-2" role="alert">L'envoi a échoué. Réessayez ou écrivez-moi sur WhatsApp.</p>}
              <button type="submit" disabled={status === "sending"} className="btn-gold sm:col-span-2 disabled:opacity-70">
                {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Envoi…</> : "Envoyer le message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
