/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Request, Response } from "express";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatGroq } from "@langchain/groq";

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = {
  read,
};

/*-------------------------------------- API Keys --------------------------------------*/
// Groq API Key
const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
});

/*------------------------------------- Functions --------------------------------------*/
// Retrieve a prompt from the Groq AI API
export async function read(req: Request, res: Response) {
  try {
    // save the user inputted text
    const userPrompt: string = req.body.question;
    const userSystem = "personal fitness trainer";

    // create the prompt template
    const prompt = ChatPromptTemplate.fromMessages([
      ["system", `You are a ${userSystem}`],
      ["human", "{input}"],
    ]);

    // set up the Large-Language Model (LLM)
    const chain = prompt.pipe(model);

    // generate the response
    const response = await chain.invoke({
      input: userPrompt,
    });

    // save the AI response
    const langchainResponse = response.content;

    // respond with an answer the the user's question
    res.json(langchainResponse);
  } catch (err) {
    res.status(400).json(err);
  }
}
