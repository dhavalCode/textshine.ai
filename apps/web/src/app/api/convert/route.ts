import { convertInputSchema } from "@repo/validation";
import { NextResponse } from "next/server";
import { sendPrompt } from "@repo/lib/api";

export async function POST(req: Request): Promise<unknown> {
  try {
    const body = (await req.json()) as unknown;

    const validatedInput = convertInputSchema.safeParse(body);

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

    const { input, templateId } = validatedInput.data;

    const result = await sendPrompt({
      input,
      templateId,
    });

    return NextResponse.json({ output: result }, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
