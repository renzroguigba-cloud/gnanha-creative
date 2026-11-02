import { z } from "zod";
import { MAIN_SERVICES } from "./site";

export const CONTACT_PROJECT_TYPES = MAIN_SERVICES.map((service) => service.title);

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Votre nom est requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  project_type: z.string().trim().refine((value) => CONTACT_PROJECT_TYPES.some((type) => type === value), "Choisissez un des trois services proposés"),
  message: z.string().trim().min(10, "Message trop court").max(2000),
});