import { describe, expect, it } from "vitest";
import { CATALOGUE_SERVICE, MAIN_SERVICES, NAV, PRICING_NOTICE, PROJECTS, SERVICES, STATS } from "@/lib/site";

describe("Client-supplied portfolio", () => {
  it("contains only the six supplied website destinations", () => {
    expect(PROJECTS.map((project) => project.url)).toEqual([
      "https://lumia-shooting-portfolio.vercel.app/",
      "https://sagesse-memeton-psi.vercel.app/",
      "https://genie-s1m3.vercel.app/",
      "https://warren-adjovi-two.vercel.app/",
      "https://paradise-abomey.lovable.app/",
      "https://julio-reel.vercel.app/",
    ]);
  });
});

describe("Real services and stats", () => {
  it("combines services and pricing into one navigation destination", () => {
    expect(NAV.filter((item) => item.to === "/services")).toHaveLength(1);
    expect(NAV.map((item) => item.to)).not.toContain("/tarifs");
  });

  it("keeps testimonials with home instead of a separate navigation destination", () => {
    expect(NAV.map((item) => item.to)).toContain("/");
    expect(NAV.map((item) => item.to)).not.toContain("/temoignages");
  });
  it("offers exactly the three services the creator provides", () => {
    expect(SERVICES.map((s) => s.title)).toEqual([
      "Création de site web vitrine",
      "Boutique catalogue avec commande WhatsApp",
      "Portfolio pour marques et entrepreneurs",
    ]);
  });

  it("shows the creator's real figures", () => {
    const values = Object.fromEntries(STATS.map((s) => [s.label, s.value]));
    expect(values["Projets livrés"]).toBe("50+");
    expect(values["Clients satisfaits"]).toBe("95%");
    expect(values["D'expérience"]).toBe("4 ans");
  });
});

describe("Services & tarifs pricing", () => {
  it("presents the three main services with their exact price ranges", () => {
    expect(MAIN_SERVICES.map((s) => [s.title, s.price])).toEqual([
      ["Création de site web vitrine", "180 € – 1 000 €"],
      ["Création de portfolio professionnel", "150 € – 1 000 €"],
      ["Création de boutique catalogue avec commande par WhatsApp", "250 € – 2 000 €"],
    ]);
  });

  it("states that domain name and hosting are not included in the prices", () => {
    expect(PRICING_NOTICE).toContain("Le nom de domaine et l'hébergement web ne sont pas inclus");
  });

  it("gives each service its own call to action", () => {
    expect(MAIN_SERVICES.map((s) => s.cta)).toEqual(["Demander un devis", "Créer mon portfolio", "Demander un devis boutique"]);
  });
});

describe("WhatsApp catalogue offer conditions", () => {
  it("costs between 250 and 2000 euros", () => {
    expect(CATALOGUE_SERVICE.priceRange).toEqual({ min: 250, max: 2000, currency: "EUR" });
  });

  it("estimates 5 to 7 business days after required information and photos arrive", () => {
    expect(CATALOGUE_SERVICE.delivery).toEqual({ min: 5, max: 7, unit: "businessDays", startsAfter: "requiredInformationAndPhotos" });
  });

  it.each(["onlinePayment", "automaticInventory", "productAdmin", "domainAndHosting"])("excludes %s from this offer", (feature) => {
    expect(CATALOGUE_SERVICE.exclusions.map((item) => item.key)).toContain(feature);
  });
});