import { FAQS, MAIN_SERVICES, NAV, PROJECTS, SITE } from "@/lib/site";

function normalize(text: string) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

const aliases: Record<(typeof NAV)[number]["to"], string> = {
  "/": "accueil bienvenue home temoignage temoignages avis experience",
  "/services": "service services tarif tarifs prix devis vitrine boutique catalogue whatsapp creation hebergement domaine",
  "/a-propos": "a propos apropos cadorelle gnanha parcours mission valeurs bohicon benin creatrice",
  "/realisations": "realisation realisations projet projets portfolio portfolios travail travaux photographie coaching hotel video videaste",
  "/faq": "faq question questions reponse reponses delai delais paiement maintenance referencement",
  "/contact": "contact contacter email gmail telephone message demande formulaire nom prenom",
};

const content: Record<(typeof NAV)[number]["to"], string> = {
  "/": SITE.slogan,
  "/services": MAIN_SERVICES.map((s) => `${s.title} ${s.desc} ${s.highlights.join(" ")}`).join(" "),
  "/a-propos": `${SITE.fullName} ${SITE.city}`,
  "/realisations": PROJECTS.map((p) => `${p.title} ${p.category} ${p.desc}`).join(" "),
  "/faq": FAQS.map((f) => `${f.q} ${f.a}`).join(" "),
  "/contact": `${SITE.email} ${SITE.phoneDisplay}`,
};

export function searchSite(query: string) {
  const normalized = normalize(query);
  if (!normalized) return [];
  const words = normalized.split(" ");
  return NAV.map((page) => {
    const primary = normalize(`${page.label} ${aliases[page.to]}`).split(" ");
    const secondary = normalize(content[page.to]).split(" ");
    const score = words.reduce((total, word) => total + (primary.includes(word) ? 10 : secondary.includes(word) ? 1 : 0), 0);
    return { ...page, score };
  }).filter((page) => page.score > 0).sort((a, b) => b.score - a.score);
}