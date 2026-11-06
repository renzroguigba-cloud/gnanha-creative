import { describe, expect, it } from "vitest";
import { contactSchema, CONTACT_PROJECT_TYPES } from "@/lib/contact.schema";
import { LINKS } from "@/lib/site";

const lead = { name: "Test Vérification", email: "test@example.com", company: "", message: "Demande de vérification du formulaire." };

describe("Contact destinations and services", () => {
  it("offers only the three real services", () => {
    expect(CONTACT_PROJECT_TYPES).toEqual([
      "Création de site web vitrine",
      "Création de portfolio professionnel",
      "Création de boutique catalogue avec commande par WhatsApp",
    ]);
  });
  it.each(CONTACT_PROJECT_TYPES)("accepts %s", (project_type) => {
    expect(contactSchema.safeParse({ ...lead, project_type }).success).toBe(true);
  });
  it.each(["Refonte de site", "Marketing digital", "Boutique en ligne", "Autre"])("rejects unsupported service %s", (project_type) => {
    expect(contactSchema.safeParse({ ...lead, project_type }).success).toBe(false);
  });
  it("opens the owner's WhatsApp number", () => {
    expect(new URL(LINKS.whatsapp).pathname).toBe("/2290142554156");
  });
  it("opens Gmail composition addressed to the owner", () => {
    expect(new URL(LINKS.gmail).searchParams.get("to")).toBe("waldellecadorelle@gmail.com");
  });
});