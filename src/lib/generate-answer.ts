import { PromptTemplate } from "langchain/prompts";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import prisma from "@/prisma";

export const generateAnswer = async (data: {
  templateId: number;
  input: string;
}): Promise<string | null> => {
  const { input, templateId } = data;

  const template = await prisma.template.findFirst({
    where: {
      id: templateId,
    },
  });

  if (!template) {
    return null;
  }

  const instruction = template.prompt;

  const model = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    maxOutputTokens: 2048,
    apiKey: process.env.GOOGLE_API_KEY,
  });

  const promptTemplate = PromptTemplate.fromTemplate(
    `You are a proficient English speaker and an effective communicator. Your task is to generate responses based on the given instruction and input.
    **Instruction:**
    ${instruction}
    
    **Input:**
    ${input}`
  );

  const chain = promptTemplate.pipe(model);

  const result = await chain.invoke({ input: input });

  await prisma.history.create({
    data: {
      input: input,
      modelName: "gemini-pro",
      output: result.text,
      templateId: template.id,
    },
  });

  return result.text;
};
