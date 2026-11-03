import { MonitorSmartphone, ShoppingBag, Briefcase } from "lucide-react";

export const MEDIA = {
  portrait:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  projects: {
    lumia:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    sagesse:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    genie:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    warren:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    paradise:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    julio:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    testimonialWarren:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
  videos: {
    client1: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    client1Webm: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    client2: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    client2Webm: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    poster1: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    poster2: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
};

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
  { icon: MonitorSmartphone, title: "Création de site web vitrine", desc: "Un site élégant qui présente votre activité, inspire confiance et transforme vos visiteurs en clients.", benefits: ["Design premium et rapide", "Navigation claire", "Conversion orientée client"] },
  { icon: ShoppingBag, title: "Boutique catalogue avec commande WhatsApp", desc: "Présentez vos produits dans un catalogue en ligne clair : vos clients commandent directement sur WhatsApp, sans friction.", benefits: ["Catalogue organisé", "Commande directe", "Mise en ligne rapide"] },
  { icon: Briefcase, title: "Portfolio pour marques et entrepreneurs", desc: "Un portfolio professionnel qui met en valeur votre travail et votre image, pour marques, entrepreneurs et entreprises.", benefits: ["Mise en avant de vos projets", "Crédibilité immédiate", "Expérience mobile optimisée"] },
];

export const CATALOGUE_SERVICE = {
  icon: ShoppingBag,
  title: "Création de boutique catalogue avec commande par WhatsApp",
  price: "250 € – 2 000 €",
  priceRange: { min: 250, max: 2000, currency: "EUR" },
  desc: "Présentez vos produits en ligne et recevez vos commandes directement sur WhatsApp. Vous avez une boutique de vêtements, de chaussures, de cosmétiques, de téléphones ou d'autres produits.",
  audience: "Pour les commerçants, entrepreneurs et petites entreprises qui souhaitent présenter leurs produits sur Internet sans mettre en place un système de paiement en ligne.",
  highlights: [
    "Design professionnel : à l'image de votre activité",
    "Catalogue de produits : photos, noms, prix et descriptions",
    "Organisation par catégories pour retrouver facilement les articles",
    "Fiches produits avec les informations propres à chaque article",
    "Commande par WhatsApp : contact direct avec le vendeur",
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
  "Les tarifs indiqués couvrent uniquement la création du site web ou du portfolio. Le nom de domaine et l'hébergement web ne sont pas inclus et restent à la charge du client. Ces frais peuvent varier selon le prestataire d'hébergement et le choix du nom de domaine.";

export const PROJECTS = [
  { img: MEDIA.projects.lumia, title: "LUMÎA Studio", category: "Photographie", desc: "Studio photo : mariages, portraits et photographie corporate.", url: "https://lumia-shooting-portfolio.vercel.app/" },
  { img: MEDIA.projects.sagesse, title: "MemeTon Sagesse", category: "Portfolio · Montage vidéo", desc: "Un portfolio consacré aux Reels, Shorts et TikToks.", url: "https://sagesse-memeton-psi.vercel.app/" },
  { img: MEDIA.projects.genie, title: "CoachVie", category: "Coaching", desc: "Une présence en ligne dédiée au coaching et au développement personnel.", url: "https://genie-s1m3.vercel.app/" },
  { img: MEDIA.projects.warren, title: "Warren Adjovi", category: "Portfolio · Montage vidéo", desc: "Le portfolio d’un monteur vidéo professionnel.", url: "https://warren-adjovi-two.vercel.app/" },
  { img: MEDIA.projects.paradise, title: "Paradise Hotel Abomey", category: "Hôtellerie", desc: "Le site du Paradise Hotel, à Abomey au Bénin.", url: "https://paradise-abomey.lovable.app/" },
  { img: MEDIA.projects.julio, title: "do-REGO Julio", category: "Portfolio · Montage vidéo", desc: "Le portfolio d’un monteur vidéo freelance spécialisé en contenu court et motion design.", url: "https://example.com/" },
];

export const FAQS = [
  { q: "Combien de temps faut-il pour créer un site ?", a: "Comptez 2 à 3 semaines pour un site vitrine. Pour une boutique catalogue avec commande par WhatsApp, la livraison est estimée à 5 à 7 jours ouvrés après validation des informations et des visuels." },
  { q: "Est-ce que mon site sera adapté aux téléphones ?", a: "Oui. Chaque site est conçu d'abord pour le mobile, puis adapté aux tablettes et ordinateurs." },
  { q: "Comment se déroule le paiement ?", a: "Un acompte est demandé au lancement du projet, le solde à la livraison. Le paiement par Mobile Money est accepté." },
  { q: "Pourrai-je modifier mon site moi-même ?", a: "Selon les fonctionnalités convenues pour votre site vitrine ou portfolio, une formation peut être prévue. La formule boutique catalogue WhatsApp reste simple à gérer." },
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

export const TESTIMONIALS = [
  { name: "Warren Adjovi", role: "Monteur vidéo professionnel", rating: 5, text: "Cadorelle a créé un portfolio professionnel, fluide et parfaitement fidèle à mon image. Je la recommande sans hésiter." },
  { name: "Sagesse MemeTon", role: "Monteur vidéo · Reels & TikToks", rating: 5, text: "Mon portfolio met enfin mes vidéos en valeur. Le site est rapide, élégant, et mes clients me contactent plus facilement." },
  { name: "Aurélie Dossou", role: "Fondatrice · LUMÎA Studio", rating: 5, text: "Notre studio photo avait besoin d'une vitrine à la hauteur de nos images. Le résultat est sublime : nos mariages et portraits sont mis en valeur." },
  { name: "Rodrigue Houngbédji", role: "Directeur · Paradise Hotel Abomey", rating: 5, text: "Le site de notre hôtel reflète enfin le standing de notre établissement. Les demandes de réservation ont augmenté." },
  { name: "Grâce Adjakly", role: "Coach en développement personnel", rating: 5, text: "Cadorelle a compris ma vision dès le premier échange. Mon site transmet exactement l'énergie et le professionnalisme recherchés." },
  { name: "Marcel Agbodan", role: "Restaurateur · Cotonou", rating: 4, text: "Un site vitrine clair et appétissant pour mon restaurant. Le menu, les photos, le contact WhatsApp : tout est simple et moderne." },
  { name: "Prisca Tossou", role: "Commerçante · Boutique catalogue", rating: 5, text: "Ma boutique catalogue avec commande WhatsApp a changé mon quotidien. Mes clientes parcourent mes articles avec plus de facilité." },
  { name: "Franck Kpomassè", role: "Consultant indépendant", rating: 5, text: "Professionnalisme, écoute et sens du détail. Mon portfolio me donne une cr��dibilité immédiate auprès de mes clients." },
  { name: "Nadège Affolabi", role: "Artisane · Bohicon", rating: 4, text: "Je n'y connaissais rien en sites web. Cadorelle m'a tout expliqué avec patience et m'a livré un site dont je suis fière." },
  { name: "Ulrich Sênami", role: "Entrepreneur · E-commerce", rating: 5, text: "De la première discussion à la mise en ligne, tout a été fluide et transparent. Le site est beau, rapide, et orienté conversion." },
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

