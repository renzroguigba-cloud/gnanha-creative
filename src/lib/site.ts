import { Palette, MonitorSmartphone, Code2, Megaphone, LayoutTemplate, Wrench } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import mockup from "@/assets/hero-mockup.jpg";

export const SITE = {
  brand: "Cadorelle W.",
  fullName: "Gnanha W. Cadorelle",
  slogan: "Des sites web élégants qui font grandir votre marque.",
  city: "Bohicon, Bénin",
  email: "waldellecadorelle@gmail.com",
  phoneDisplay: "+229 01 42 55 42 56",
  phoneTel: "+2290142554256",
};

const waText = encodeURIComponent("Bonjour Cadorelle, je souhaite discuter d'un projet de site web.");
export const LINKS = {
  whatsapp: `https://wa.me/2290142554256?text=${waText}`,
  gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${SITE.email}&su=${encodeURIComponent("Nouveau projet de site web")}`,
  mailto: `mailto:${SITE.email}?subject=${encodeURIComponent("Nouveau projet de site web")}`,
  tel: `tel:${SITE.phoneTel}`,
};

export const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  { icon: Palette, title: "Branding & Positionnement", desc: "Une identité visuelle cohérente qui reflète vos valeurs et vous distingue durablement.", benefits: ["Logo & charte graphique", "Ton et messages clés", "Image premium"] },
  { icon: MonitorSmartphone, title: "Design de sites web", desc: "Des maquettes élégantes, pensées pour séduire vos visiteurs et les transformer en clients.", benefits: ["Design sur mesure", "Mobile-first", "Parcours orientés conversion"] },
  { icon: Code2, title: "Développement web", desc: "Des sites rapides, sécurisés et faciles à faire évoluer, construits avec des technologies modernes.", benefits: ["Performance élevée", "SEO technique", "Code propre"] },
  { icon: LayoutTemplate, title: "UX/UI design", desc: "Des interfaces claires et intuitives où chaque détail sert l'expérience de vos utilisateurs.", benefits: ["Ergonomie", "Accessibilité", "Prototypes interactifs"] },
  { icon: Megaphone, title: "Marketing digital", desc: "Visibilité sur Google et les réseaux sociaux pour attirer les bons clients au bon moment.", benefits: ["Référencement", "Réseaux sociaux", "Contenus engageants"] },
  { icon: Wrench, title: "Maintenance & optimisation", desc: "Votre site reste à jour, sécurisé et performant, pendant que vous vous concentrez sur votre activité.", benefits: ["Mises à jour", "Sauvegardes", "Support réactif"] },
];

export const PROJECTS = [
  { img: p1, title: "La Belle Table", category: "Restaurant · Site vitrine", desc: "Un site raffiné avec menu interactif et réservation en ligne pour un restaurant gastronomique." },
  { img: p2, title: "Zawadi Fashion", category: "Mode · E-commerce", desc: "Une boutique en ligne qui célèbre la mode africaine, avec paiement mobile intégré." },
  { img: p3, title: "Velmora", category: "Branding · Identité", desc: "Identité complète et application mobile pour une marque d'hébergement haut de gamme." },
  { img: mockup, title: "Studio Velmora", category: "Agence · Site web", desc: "Un site d'agence sombre et doré, pensé pour inspirer confiance dès la première seconde." },
];

export const TESTIMONIALS = [
  { name: "Arnaud K.", role: "Gérant", company: "La Belle Table", text: "Cadorelle a parfaitement saisi l'esprit de notre restaurant. Les réservations en ligne ont doublé en deux mois.", rating: 5 },
  { name: "Mireille A.", role: "Fondatrice", company: "Zawadi Fashion", text: "Professionnelle, à l'écoute et très créative. Ma boutique en ligne est exactement ce dont je rêvais.", rating: 5 },
  { name: "Serge D.", role: "Directeur", company: "Velmora", text: "Un travail précis et élégant, livré dans les délais. Nos clients nous complimentent sur notre nouvelle image.", rating: 5 },
];

export const PLANS = [
  { name: "Essentiel", price: "150 000", unit: "FCFA", desc: "Pour lancer votre présence en ligne avec élégance.", features: ["Site vitrine jusqu'à 4 pages", "Design responsive", "Formulaire de contact & WhatsApp", "SEO de base", "Livraison en 2 semaines"], featured: false },
  { name: "Premium", price: "350 000", unit: "FCFA", desc: "Le choix idéal pour les entreprises ambitieuses.", features: ["Jusqu'à 8 pages sur mesure", "Branding léger inclus", "Animations premium", "SEO avancé & statistiques", "1 mois de maintenance offert"], featured: true },
  { name: "Sur mesure", price: "Sur devis", unit: "", desc: "Pour les projets complexes : e-commerce, plateformes.", features: ["Fonctionnalités avancées", "Boutique & paiement en ligne", "Identité visuelle complète", "Accompagnement dédié", "Maintenance continue"], featured: false },
];

export const FAQS = [
  { q: "Combien de temps faut-il pour créer un site ?", a: "Comptez 2 à 3 semaines pour un site vitrine, et 4 à 8 semaines pour un projet plus complet comme une boutique en ligne." },
  { q: "Est-ce que mon site sera adapté aux téléphones ?", a: "Oui. Chaque site est conçu d'abord pour le mobile, puis adapté aux tablettes et ordinateurs." },
  { q: "Comment se déroule le paiement ?", a: "Un acompte est demandé au lancement du projet, le solde à la livraison. Le paiement par Mobile Money est accepté." },
  { q: "Pourrai-je modifier mon site moi-même ?", a: "Oui, si vous le souhaitez. Je vous forme à la gestion de vos contenus à la livraison." },
  { q: "Travaillez-vous avec des clients hors du Bénin ?", a: "Absolument. Je travaille à distance avec des clients partout en Afrique et dans le monde." },
  { q: "Le référencement Google est-il inclus ?", a: "Toutes les offres incluent les bases du référencement. L'offre Premium ajoute une optimisation avancée." },
  { q: "Que se passe-t-il après la mise en ligne ?", a: "Je reste disponible pour la maintenance, les mises à jour et l'évolution de votre site." },
];

export const STATS = [
  { value: "200+", label: "Projets livrés" },
  { value: "97%", label: "Clients satisfaits" },
  { value: "9 ans", label: "D'expérience" },
  { value: "4.9/5", label: "Note moyenne" },
];

export function pageHead(title: string, description: string, path: string) {
  const full = `${title} | ${SITE.fullName}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
