import { describe, expect, it } from "vitest";
import { PROJECTS, SERVICES, STATS } from "@/lib/site";

describe("Client-supplied portfolio", () => {
  it("contains only the five supplied website destinations", () => {
    expect(PROJECTS.map((project) => project.url)).toEqual([
      "https://lumia-shooting-portfolio.vercel.app/",
      "https://sagesse-memeton-psi.vercel.app/",
      "https://genie-s1m3.vercel.app/",
      "https://warren-adjovi-two.vercel.app/",
      "https://paradise-abomey.lovable.app/",
    ]);
  });
});

describe("Real services and stats", () => {
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