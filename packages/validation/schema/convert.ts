import * as z from "zod";

export const convertInputSchema = z.object({
  input: z.string().min(1, {
    message: "input is required.",
  }),
  templateId: z.number({
    required_error: "templateId required.",
  }),
});
