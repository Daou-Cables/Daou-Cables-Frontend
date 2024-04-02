"use server";
import { z } from "zod";
import { sendQuota } from "./services/QuotaServices";

const ContactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function contactUs(prevState: any, formData: FormData) {
  const { name, email, message } = ContactFormSchema.parse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  });
  try {
    await sendQuota({ name, email, message });
    console.log("Form Sent Successfully.");
    return { message: 'Form Sent Successfully.'}
  } catch (error) {
    return { message: 'Failed to Send Form.'}
  }
}
