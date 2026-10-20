import { createFileRoute } from "@tanstack/react-router";
import { pageHead, SITE } from "@/lib/site";
import { PageHero } from "@/components/site/Sections";

export const Route = createFileRoute("/mentions-legales")({
  head: () => pageHead("Mentions légales & confidentialité", "Mentions légales et politique de confidentialité du site de Gnanha W. Cadorelle.", "/mentions-legales"),
  component: () => (
    <>
      <PageHero eyebrow="Légal" title="Mentions légales" desc="Informations légales et protection de vos données." />
      <div className="mx-auto max-w-3xl space-y-8 px-5 pb-24 leading-relaxed text-muted-foreground">
        <section><h2 className="text-2xl text-foreground">Éditrice du site</h2><p className="mt-3">{SITE.fullName}, créatrice de sites web — {SITE.city}. Contact : {SITE.email} · {SITE.phoneDisplay}.</p></section>
        <section><h2 className="text-2xl text-foreground">Données personnelles</h2><p className="mt-3">Les informations envoyées via le formulaire de contact servent uniquement à répondre à votre demande. Elles ne sont jamais revendues ni partagées. Vous pouvez demander leur suppression à tout moment par email.</p></section>
        <section><h2 className="text-2xl text-foreground">Propriété intellectuelle</h2><p className="mt-3">Les contenus de ce site (textes, visuels, logo) sont la propriété de leur autrice et ne peuvent être reproduits sans autorisation.</p></section>
      </div>
    </>
  ),
});
