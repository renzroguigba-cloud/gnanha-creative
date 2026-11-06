import { afterEach, describe, expect, it, vi } from "vitest";
import { notifyOwnerByGmail, notifyOwnerByWhatsApp } from "@/lib/notify.server";

const lead = { name: "Client Vérification", email: "client@example.com", company: "Entreprise Test", project_type: "Création de site web vitrine", message: "Je souhaite un devis pour mon projet." };

afterEach(() => vi.unstubAllGlobals());

describe("Owner notifications", () => {
  it("sends every client field to the owner's Gmail and uses the client reply address", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('{}', { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);
    await notifyOwnerByGmail(lead, { lovableKey: "test-only", gmailKey: "test-only" });
    const options = fetchMock.mock.calls[0]?.[1];
    const raw = JSON.parse(options.body).raw.replace(/-/g, "+").replace(/_/g, "/");
    const email = new TextDecoder().decode(Uint8Array.from(atob(raw), (char) => char.charCodeAt(0)));
    expect(email).toContain("To: waldellecadorelle@gmail.com");
    expect(email).toContain("Reply-To: client@example.com");
    for (const value of Object.values(lead)) expect(email).toContain(value);
  });
  it("sends every client field to the owner's WhatsApp when authorized", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('OK', { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);
    await notifyOwnerByWhatsApp(lead, "test-only");
    const url = new URL(fetchMock.mock.calls[0]?.[0]);
    expect(url.searchParams.get("phone")).toBe("2290142554156");
    for (const value of Object.values(lead)) expect(url.searchParams.get("text")).toContain(value);
  });
  it("does not silently claim WhatsApp is configured without the owner's key", async () => {
    await expect(notifyOwnerByWhatsApp(lead)).rejects.toThrow("autorisation CallMeBot requise");
  });
});
import { whatsappMessage } from "@/lib/notify.server";
import { it as it2, expect as expect2 } from "vitest";
it2("formats the owner WhatsApp alert with client details", () => {
  const m = whatsappMessage({ name: "Cadoshop", email: "a@b.com", phone: "+2290195147035", project_type: "Création de site web vitrine", message: "Je veux un site" });
  expect2(m).toContain("NOUVEAU PROJET");
  expect2(m).toContain("*Client :* Cadoshop");
  expect2(m).toContain("*WhatsApp :* +2290195147035");
  expect2(m).toContain("*Type :* Création de site web vitrine");
});
