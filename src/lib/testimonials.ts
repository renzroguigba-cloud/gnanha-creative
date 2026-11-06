// The 3 authentic client testimonials (WhatsApp screenshot + 2 videos) are rendered first
// in SocialTestimonials. The 10 written entries below are placeholders: replace each one
// with a real review and set isPlaceholder to false.
export type WrittenTestimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: 4.5 | 5;
  text: string;
  isPlaceholder: boolean;
};

export const WRITTEN_TESTIMONIALS: WrittenTestimonial[] = [
  { id: 1, name: "Gaspard Lemercier", role: "Fondateur", company: "Atelier Lemercier Ébénisterie", location: "Lyon, France", rating: 5, isPlaceholder: true, text: "Mon atelier avait besoin d’une vitrine à la hauteur de nos meubles. Le design est sobre, les photos respirent, et les demandes de devis arrivent désormais chaque semaine." },
  { id: 2, name: "Sènami Hounkpè", role: "Gérante", company: "Maison Sènami Wax", location: "Cotonou, Bénin", rating: 5, isPlaceholder: true, text: "Le catalogue WhatsApp a changé ma façon de vendre. Mes clientes choisissent un modèle et m’écrivent directement, sans perdre de temps." },
  { id: 3, name: "Réka Szalontai", role: "Photographe indépendante", company: "Réka Studio", location: "Budapest, Hongrie", rating: 4.5, isPlaceholder: true, text: "Communication fluide malgré le décalage horaire. Mon portfolio est enfin clair et mes galeries se chargent vite." },
  { id: 4, name: "Bérénice Crozatier", role: "Consultante RH", company: "Cap Talents Conseil", location: "Bordeaux, France", rating: 5, isPlaceholder: true, text: "Délais respectés à la journée près. Chaque étape était expliquée simplement, et le site inspire confiance à mes clients dès la première visite." },
  { id: 5, name: "Edem Akakpo", role: "Directeur", company: "Akakpo Logistique Express", location: "Lomé, Togo", rating: 5, isPlaceholder: true, text: "Nous voulions un site sérieux pour rassurer nos partenaires. Le résultat est professionnel, rapide sur téléphone et nos prises de contact ont nettement augmenté." },
  { id: 6, name: "Torvald Eikrem", role: "Co-fondateur", company: "Fjordlys Design", location: "Bergen, Norvège", rating: 4.5, isPlaceholder: true, text: "Un vrai sens du détail dans la typographie et les espacements. Les retours ont été pris en compte rapidement." },
  { id: 7, name: "Wilfried Ahoua", role: "Chef cuisinier", company: "Le Comptoir d’Ahoua", location: "Abidjan, Côte d’Ivoire", rating: 5, isPlaceholder: true, text: "Le site met en valeur nos plats et nos horaires. Les réservations par WhatsApp ont doublé en un mois." },
  { id: 8, name: "Constanza Arriagada", role: "Créatrice de bijoux", company: "Taller Arriagada", location: "Santiago, Chili", rating: 5, isPlaceholder: true, text: "J’avais peur que mon univers soit mal compris à distance. Au contraire : le portfolio reflète exactement mon style, et les échanges ont été très agréables." },
  { id: 9, name: "Ombeline Fauchard", role: "Coach en image", company: "Ombeline Style & Conseil", location: "Nantes, France", rating: 4.5, isPlaceholder: true, text: "Un site élégant, simple à parcourir et livré dans les temps. Mes clientes me disent souvent qu’il leur ressemble." },
  { id: 10, name: "Haruki Tsujimoto", role: "Architecte", company: "Tsujimoto Espace", location: "Osaka, Japon", rating: 5, isPlaceholder: true, text: "Une présentation claire de mes projets, avec un rendu soigné sur tous les écrans. Le travail a été organisé et ponctuel du début à la fin." },
];
