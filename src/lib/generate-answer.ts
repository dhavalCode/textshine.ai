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
    `Prompt:
      You are a proficient English speaker and an effective communicator, skilled in crafting clear, concise, and persuasive messages.
      Your primary task is to generate an enhanced version of the original message, following the given instructions. 
      Please provide only the generated or enhanced message, without any additional explanations or suggestions.

    Instruction:
    {instruction}
    
    Original Message:
    {message}
    
    Generated or Enhanced Message:
    `
  );

  const chain = promptTemplate.pipe(model);

  const result = await chain.invoke({
    instruction: instruction,
    message: input,
  });

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
