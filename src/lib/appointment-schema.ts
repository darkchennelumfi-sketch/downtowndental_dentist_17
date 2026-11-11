import { z } from "zod";

export const appointmentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Please keep your name under 120 characters."),
  newPatient: z.enum(["yes", "no"], {
    message: "Please let us know if you are a new patient.",
  }),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(160, "Please use a shorter email address."),
  phone: z
    .string()
    .trim()
    .max(30, "Please keep your phone number under 30 characters.")
    .optional(),
  address: z
    .string()
    .trim()
    .max(200, "Please keep your address under 200 characters.")
    .optional(),
  preferredDays: z
    .string()
    .trim()
    .max(160, "Please keep this under 160 characters.")
    .optional(),
  convenientTimes: z
    .string()
    .trim()
    .max(160, "Please keep this under 160 characters.")
    .optional(),
  insurance: z.enum(["yes", "no", "not-sure"]).optional(),
  hearAbout: z.string().trim().max(80).optional(),
  findWebsite: z.string().trim().max(80).optional(),
  comments: z
    .string()
    .trim()
    .max(1200, "Please keep your message under 1,200 characters.")
    .optional(),
});

export type AppointmentValues = z.infer<typeof appointmentSchema>;
