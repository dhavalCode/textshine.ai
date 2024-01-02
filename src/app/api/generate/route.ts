import * as z from "zod";
import { NextResponse } from "next/server";
import { generateAnswer } from "@/lib/generate-answer";

const generateInputSchema = z.object({
  inputText: z.string().min(1, {
    message: "input is required.",
  }),
  templateId: z.number({
    required_error: "templateId required.",
  }),
});

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = (await req.json()) as unknown;

    const validatedInput = generateInputSchema.safeParse(body);

    if (!validatedInput.success) {
      return NextResponse.json(
        {
          message: "Please provide valid input parameters.",
          error: validatedInput.error.format(),
        },
        {
          status: 400,
        }
      );
    }

    const { inputText, templateId } = validatedInput.data;

    const result = await generateAnswer({
      input: inputText,
      templateId,
    });

    return NextResponse.json({ text: result }, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
