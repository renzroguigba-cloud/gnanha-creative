import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact.schema";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      project_type: data.project_type,
      message: data.phone ? `${data.message}\n\nWhatsApp : ${data.phone}` : data.message,
    });
    if (error) {
      console.error("contact insert failed", error);
      throw new Error("Envoi impossible pour le moment.");
    }
    const { notifyOwnerByGmail, notifyOwnerByWhatsApp } = await import("./notify.server");
    const results = await Promise.allSettled([
      notifyOwnerByGmail(data, { lovableKey: process.env["LOVABLE_API_KEY"], gmailKey: process.env["GOOGLE_MAIL_API_KEY"] }),
      notifyOwnerByWhatsApp(data, process.env["CALLMEBOT_API_KEY"]),
    ]);
    results.forEach((r) => r.status === "rejected" && console.error("owner notification failed", r.reason));
    return { ok: true };
  });
