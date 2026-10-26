type Lead = { name: string; email: string; company?: string | null | undefined; project_type: string; message: string };

const OWNER_EMAIL = "waldellecadorelle@gmail.com";

const b64 = (s: string) => btoa(Array.from(new TextEncoder().encode(s), (b) => String.fromCharCode(b)).join(""));
const header = (v: string) => (/^[\x00-\x7F]*$/.test(v) ? v : `=?UTF-8?B?${b64(v)}?=`);

function summary(l: Lead) {
  return [
    `Nom : ${l.name}`,
    `Email : ${l.email}`,
    `Entreprise : ${l.company || "—"}`,
    `Type de projet : ${l.project_type}`,
    "",
    "Message :",
    l.message,
  ].join("\n");
}

export async function notifyOwnerByGmail(l: Lead) {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const gmailKey = process.env["GOOGLE_MAIL_API_KEY"];
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
  if (!res.ok) throw new Error(`Gmail ${res.status}: ${await res.text()}`);
}

// Free WhatsApp alert via CallMeBot (personal use). Needs CALLMEBOT_API_KEY.
export async function notifyOwnerByWhatsApp(l: Lead) {
  const apiKey = process.env["CALLMEBOT_API_KEY"];
  if (!apiKey) return;
  const text = encodeURIComponent(`Nouvelle demande sur votre site\n\n${summary(l)}`);
  const res = await fetch(`https://api.callmebot.com/whatsapp.php?phone=2290142554256&text=${text}&apikey=${encodeURIComponent(apiKey)}`);
  if (!res.ok) throw new Error(`WhatsApp ${res.status}`);
}
