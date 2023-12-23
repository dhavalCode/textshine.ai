import { PromptTemplate } from "langchain/prompts";
import { ChatOpenAI } from "langchain/chat_models/openai";
import prisma from "@repo/prisma";

export const sendPrompt = async (data: {
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

  const model = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    openAIApiKey: "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",
  });

  const promptTemplate = PromptTemplate.fromTemplate(
    `You are a very good english speaker and effective communicator. Your task is to follow below instruction and give result based on user input and instruction.
    **instruction :** 
    -----------------
    ${instruction}
    
    **input**:
    ----------
    {input}`
  );

  const chain = promptTemplate.pipe(model);

  const result = await chain.invoke({ input: input });

  console.log(result.name);

  return result.text;
};
