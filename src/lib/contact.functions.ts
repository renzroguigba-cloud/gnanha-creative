import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Votre nom est requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  project_type: z.string().trim().min(1, "Choisissez un type de projet").max(60),
  message: z.string().trim().min(10, "Message trop court").max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      project_type: data.project_type,
      message: data.message,
    });
    if (error) {
      console.error("contact insert failed", error);
      throw new Error("Envoi impossible pour le moment.");
    }
    return { ok: true };
  });
