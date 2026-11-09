import { MonitorSmartphone, ShoppingBag, Briefcase } from "lucide-react";
import lumia from "@/assets/realisation-lumia.jpg.asset.json";
import sagesse from "@/assets/realisation-sagesse.jpg.asset.json";
import genie from "@/assets/realisation-genie.jpg.asset.json";
import warren from "@/assets/realisation-warren-accueil.jpg.asset.json";
import paradise from "@/assets/realisation-paradise.jpg.asset.json";
import julio from "@/assets/realisation-julio.jpg.asset.json";
import andy from "@/assets/realisation-andy.jpg.asset.json";

export const SITE = {
  brand: "Cadorelle W.",
  fullName: "Gnanha W. Cadorelle",
  slogan: "Des sites web élégants qui font grandir votre marque.",
  city: "Bohicon, Bénin",
  email: "waldellecadorelle@gmail.com",
  phoneDisplay: "+229 01 42 55 41 56",
  phoneTel: "+2290142554156",
};

const waText = encodeURIComponent("Bonjour Cadorelle, je souhaite discuter d'un projet de site web.");
export const LINKS = {
  whatsapp: `https://wa.me/2290142554156?text=${waText}`,
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
  { icon: ShoppingBag, title: "Boutique catalogue avec commande WhatsApp", desc: "Présentez vos produits dans un catalogue en ligne clair : vos clients commandent directement sur WhatsApp, sans paiement en ligne.", benefits: ["Catalogue produits organisé", "Commande directe via WhatsApp", "Photos, prix et fiches produits"] },
  { icon: Briefcase, title: "Portfolio pour marques et entrepreneurs", desc: "Un portfolio professionnel qui met en valeur votre travail et votre image, pour marques, entrepreneurs et entreprises.", benefits: ["Mise en valeur de vos réalisations", "Image premium et crédible", "Parcours pensé pour convaincre"] },
];

export const CATALOGUE_SERVICE = {
  icon: ShoppingBag,
  title: "Création de boutique catalogue avec commande par WhatsApp",
  price: "250 € – 2 000 €",
  priceRange: { min: 250, max: 2000, currency: "EUR" },
  desc: "Présentez vos produits en ligne et recevez vos commandes directement sur WhatsApp. Vous avez une boutique de vêtements, de chaussures, de cosmétiques, de téléphones ou d'autres produits ? Je crée pour vous une boutique catalogue moderne : vos clients découvrent vos articles, consultent les prix et vous contactent facilement pour commander.",
  audience: "Pour les commerçants, entrepreneurs et petites entreprises qui souhaitent présenter leurs produits sur Internet sans mettre en place un système de paiement en ligne.",
  highlights: [
    "Design professionnel : une boutique à l'image de votre activité",
    "Catalogue de produits : photos, noms, prix et descriptions",
    "Organisation par catégories pour retrouver facilement les articles",
    "Fiches produits avec les informations propres à chaque article",
    "Commande par WhatsApp : contact direct avec le vendeur au sujet du produit choisi",
    "Adaptation au téléphone, à la tablette et à l'ordinateur",
    "Mise en ligne après validation et tests",
  ],
  exclusions: [
    { key: "onlinePayment", label: "Le paiement en ligne" },
    { key: "automaticInventory", label: "La gestion automatique des stocks" },
    { key: "productAdmin", label: "L'espace d'administration des produits" },
    { key: "domainAndHosting", label: "Les frais de nom de domaine ou d'hébergement" },
  ],
  delivery: { min: 5, max: 7, unit: "businessDays", startsAfter: "requiredInformationAndPhotos" },
  priceFactor: "Contactez-moi pour présenter votre activité et recevoir une proposition adaptée à vos besoins.",
  cta: "Demander un devis boutique",
} as const;

export const MAIN_SERVICES = [
  {
    icon: MonitorSmartphone,
    title: "Création de site web vitrine",
    price: "180 € – 1 000 €",
    desc: "La solution des entrepreneurs, entreprises, restaurants, hôtels, commerces et prestataires de services qui souhaitent développer leur présence en ligne.",
    highlights: ["Design professionnel et navigation fluide", "Adapté aux mobiles et aux ordinateurs", "Présentation claire de vos activités et services"],
    priceFactor: "Le prix final dépend du nombre de pages, des fonctionnalités, du niveau de personnalisation et de la complexité du projet.",
    cta: "Demander un devis",
  },
  {
    icon: Briefcase,
    title: "Création de portfolio professionnel",
    price: "150 € – 1 000 €",
    desc: "Pour les freelances, créateurs, consultants, artistes, professionnels et entrepreneurs qui veulent valoriser leurs réalisations et attirer de nouveaux clients.",
    highlights: ["Présentation de vos projets et compétences", "Navigation fluide et image crédible", "Moyens de contact accessibles"],
    priceFactor: "Le prix final dépend du volume de contenu, du nombre de projets, du niveau de personnalisation et des fonctionnalités souhaitées.",
    cta: "Créer mon portfolio",
  },
  CATALOGUE_SERVICE,
] as const;

export const PRICING_NOTICE =
  "Les tarifs indiqués couvrent uniquement la création du site web ou du portfolio. Le nom de domaine et l'hébergement web ne sont pas inclus et restent à la charge du client. Ces frais peuvent être souscrits séparément auprès d'un fournisseur.";

export const PROJECTS = [
  { img: lumia.url, title: "LUMÎA Studio", category: "Photographie", desc: "Studio photo : mariages, portraits et photographie corporate.", url: "https://lumia-shooting-portfolio.vercel.app/" },
  { img: sagesse.url, title: "MemeTon Sagesse", category: "Portfolio · Montage vidéo", desc: "Un portfolio consacré aux Reels, Shorts et TikToks.", url: "https://sagesse-memeton-psi.vercel.app/" },
  { img: genie.url, title: "CoachVie", category: "Coaching", desc: "Une présence en ligne dédiée au coaching et au développement personnel.", url: "https://genie-s1m3.vercel.app/" },
  { img: warren.url, title: "Warren Adjovi", category: "Portfolio · Montage vidéo", desc: "Le portfolio d’un monteur vidéo professionnel.", url: "https://warren-adjovi-two.vercel.app/" },
  { img: paradise.url, title: "Paradise Hotel Abomey", category: "Hôtellerie", desc: "Le site du Paradise Hotel, à Abomey au Bénin.", url: "https://paradise-abomey.lovable.app/" },
  { img: julio.url, title: "do-REGO Julio", category: "Portfolio · Montage vidéo", desc: "Le portfolio d’un monteur vidéo freelance spécialisé en contenu court et motion design.", url: "https://julio-reel.vercel.app/" },
  { img: andy.url, title: "Andy do-REGO", category: "Portfolio · Montage vidéo", desc: "Le portfolio d’un monteur vidéo freelance disponible en remote.", url: "https://andy-rego-showcase.vercel.app/" },
];


export const FAQS = [
  { q: "Combien de temps faut-il pour créer un site ?", a: "Comptez 2 à 3 semaines pour un site vitrine. Pour une boutique catalogue avec commande par WhatsApp, la livraison est estimée à 5 à 7 jours ouvrés après réception des informations et des photos nécessaires." },
  { q: "Est-ce que mon site sera adapté aux téléphones ?", a: "Oui. Chaque site est conçu d'abord pour le mobile, puis adapté aux tablettes et ordinateurs." },
  { q: "Comment se déroule le paiement ?", a: "Un acompte est demandé au lancement du projet, le solde à la livraison. Le paiement par Mobile Money est accepté." },
  { q: "Pourrai-je modifier mon site moi-même ?", a: "Selon les fonctionnalités convenues pour votre site vitrine ou portfolio, une formation peut être prévue. La formule boutique catalogue WhatsApp ne comprend pas d'espace d'administration des produits ni de gestion automatique des stocks." },
  { q: "Travaillez-vous avec des clients hors du Bénin ?", a: "Absolument. Je travaille à distance avec des clients partout en Afrique et dans le monde." },
  { q: "Le référencement Google est-il inclus ?", a: "Toutes les offres incluent les bases du référencement. Une optimisation avancée peut être ajoutée selon votre projet." },
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
