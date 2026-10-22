import { MonitorSmartphone, ShoppingBag, Briefcase } from "lucide-react";
import lumia from "@/assets/realisation-lumia.jpg.asset.json";
import sagesse from "@/assets/realisation-sagesse.jpg.asset.json";
import genie from "@/assets/realisation-genie.jpg.asset.json";
import warren from "@/assets/realisation-warren.jpg.asset.json";
import paradise from "@/assets/realisation-paradise.jpg.asset.json";

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
  { to: "/services", label: "Services & tarifs" },
  { to: "/a-propos", label: "À propos" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  { icon: MonitorSmartphone, title: "Création de site web vitrine", desc: "Un site élégant qui présente votre activité, inspire confiance et transforme vos visiteurs en clients.", benefits: ["Design sur mesure et responsive", "Formulaire de contact & WhatsApp", "Référencement de base inclus"] },
  { icon: ShoppingBag, title: "Boutique catalogue avec commande WhatsApp", desc: "Présentez vos produits dans un catalogue en ligne clair : vos clients commandent directement sur WhatsApp, sans paiement en ligne compliqué.", benefits: ["Catalogue produits organisé", "Commande directe via WhatsApp", "Gestion simple de vos articles"] },
  { icon: Briefcase, title: "Portfolio pour marques et entrepreneurs", desc: "Un portfolio professionnel qui met en valeur votre travail et votre image, pour marques, entrepreneurs et entreprises.", benefits: ["Mise en valeur de vos réalisations", "Image premium et crédible", "Parcours pensé pour convaincre"] },
];

export const PROJECTS = [
  { img: lumia.url, title: "LUMÎA Studio", category: "Photographie", desc: "Studio photo : mariages, portraits et photographie corporate.", url: "https://lumia-shooting-portfolio.vercel.app/" },
  { img: sagesse.url, title: "MemeTon Sagesse", category: "Portfolio · Montage vidéo", desc: "Un portfolio consacré aux Reels, Shorts et TikToks.", url: "https://sagesse-memeton-psi.vercel.app/" },
  { img: genie.url, title: "CoachVie", category: "Coaching", desc: "Une présence en ligne dédiée au coaching et au développement personnel.", url: "https://genie-s1m3.vercel.app/" },
  { img: warren.url, title: "Warren Adjovi", category: "Portfolio · Montage vidéo", desc: "Le portfolio d’un monteur vidéo professionnel.", url: "https://warren-adjovi-two.vercel.app/" },
  { img: paradise.url, title: "Paradise Hotel Abomey", category: "Hôtellerie", desc: "Le site du Paradise Hotel, à Abomey au Bénin.", url: "https://paradise-abomey.lovable.app/" },
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
  { value: "50+", label: "Projets livrés" },
  { value: "95%", label: "Clients satisfaits" },
  { value: "4 ans", label: "D'expérience" },
  { value: "100%", label: "Accompagnement personnalisé" },
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
