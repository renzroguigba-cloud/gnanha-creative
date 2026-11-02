import { describe, expect, it } from "vitest";
import { searchSite } from "@/lib/site-search";

describe("Home page keyword search", () => {
  it.each(["réalisation", "réalisations", "REALISATION", "portfolio", "Julio", "Warren"])("finds the portfolio page for %s", (query) => {
    expect(searchSite(query)[0]?.to).toBe("/realisations");
  });
  it.each(["service", "services", "tarifs", "catalogue", "vitrine"])("finds services for %s", (query) => {
    expect(searchSite(query)[0]?.to).toBe("/services");
  });
  it.each([["Accueil", "/"], ["À propos", "/a-propos"], ["FAQ", "/faq"], ["Contact", "/contact"], ["Gmail", "/contact"]])("finds the page for %s", (query, destination) => {
    expect(searchSite(query)[0]?.to).toBe(destination);
  });
  it("does not redirect empty or unknown searches", () => {
    expect(searchSite("   ")).toEqual([]);
    expect(searchSite("xyzzy")).toEqual([]);
  });
});