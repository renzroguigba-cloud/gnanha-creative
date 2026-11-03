type Lead = { name: string; email: string; company?: string | null | undefined; phone?: string | null | undefined; project_type: string; message: string };

const OWNER_EMAIL = "waldellecadorelle@gmail.com";

const b64 = (s: string) => btoa(Array.from(new TextEncoder().encode(s), (b) => String.fromCharCode(b)).join(""));
const header = (v: string) => (/^[\x00-\x7F]*$/.test(v) ? v : `=?UTF-8?B?${b64(v)}?=`);

function summary(l: Lead) {
  return [
    `Nom : ${l.name}`,
    `Email : ${l.email}`,
    `Entreprise : ${l.company || "—"}`,
    `WhatsApp : ${l.phone || "—"}`,
    `Type de projet : ${l.project_type}`,
    "",
    "Message :",
    l.message,
  ].join("\n");
}

export async function notifyOwnerByGmail(l: Lead, credentials: { lovableKey: string | undefined; gmailKey: string | undefined }) {
  const { lovableKey, gmailKey } = credentials;
  if (!lovableKey || !gmailKey) throw new Error("Gmail non configuré");
  const raw = b64([
    `To: ${OWNER_EMAIL}`,
    `Reply-To: ${l.email}`,
    `Subject: ${header(`Nouvelle demande de ${l.name} — ${l.project_type}`)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "",
    `Nouvelle demande reçue sur votre site :\n\n${summary(l)}`,
  ].join("\r\n")).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const res = await fetch("https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send", {
    method: "POST",
    headers: { Authorization: `Bearer ${lovableKey}`, "X-Connection-Api-Key": gmailKey, "Content-Type": "application/json" },
    body: JSON.stringify({ raw }),
  });
  if (!res.ok) {
    const body = await res.text();
    console.error(`Gmail ${res.status}: ${body}`);
    throw new Error(`Gmail ${res.status}: ${body}`);
  }
}

export function whatsappMessage(l: Lead) {
  return [
    "Bonjour Cadorelle !",
    "",
    "🚀 *NOUVEAU PROJET*",
    "",
    `👤 *Client :* ${l.name}`,
    ...(l.company ? [`🏢 *Entreprise :* ${l.company}`] : []),
    `📧 *Email :* ${l.email}`,
    `📱 *WhatsApp :* ${l.phone || "—"}`,
    `🗂️ *Type :* ${l.project_type}`,
    "",
    "💬 *Message :*",
    l.message,
  ].join("\n");
}

// Free WhatsApp alert via CallMeBot (personal use). Needs CALLMEBOT_API_KEY.
export async function notifyOwnerByWhatsApp(l: Lead, apiKey?: string) {
  if (!apiKey) throw new Error("Notifications WhatsApp non configurées : autorisation CallMeBot requise.");
  const text = encodeURIComponent(whatsappMessage(l));
  const res = await fetch(`https://api.callmebot.com/whatsapp.php?phone=2290142554256&text=${text}&apikey=${encodeURIComponent(apiKey)}`);
  if (!res.ok) {
    const body = await res.text();
    console.error(`WhatsApp ${res.status}: ${body}`);
    throw new Error(`WhatsApp ${res.status}: ${body}`);
  }
}
