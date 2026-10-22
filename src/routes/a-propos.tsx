import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";
import { AboutSection, CtaSection, PageHero, StatsSection } from "@/components/site/Sections";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

const approach = [
  { title: "Écoute avant tout", desc: "Chaque projet commence par comprendre votre activité, vos clients et vos ambitions. Un bon site naît d'une bonne conversation." },
  { title: "L'élégance utile", desc: "Un beau site ne suffit pas : il doit être clair, rapide et pousser vos visiteurs à vous contacter. Le design sert toujours l'objectif." },
  { title: "Un accompagnement durable", desc: "Je ne disparais pas après la livraison. Formation, conseils et ajustements : vous n'êtes jamais seul face à votre site." },
];

export const Route = createFileRoute("/a-propos")({
  head: () => pageHead("À propos de Gnanha W. Cadorelle", "Découvrez le parcours, la mission et les valeurs de Cadorelle, créatrice de sites web à Bohicon.", "/a-propos"),
  component: () => (
    <>
      <PageHero eyebrow="À propos" title="Le web, avec élégance et exigence" desc="Une créatrice passionnée au service des marques qui veulent se démarquer." />
      <AboutSection />
      <StatsSection />
      <section className="py-20 md:py-28" aria-labelledby="approach-title">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Mon approche" title="Une façon de travailler qui rassure" desc="Voici ce qui guide chacun de mes projets, du premier échange à la mise en ligne." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <article className="card-lux h-full p-7">
                  <h3 className="text-xl font-semibold text-primary">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  ),
});
