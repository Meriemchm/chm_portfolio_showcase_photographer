import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
