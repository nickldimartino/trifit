/*----------------------------------- Module Imports -----------------------------------*/
// External
import { Request, Response } from "express";
const Groq = require("groq-sdk");

/*----------------------------------- Module Exports -----------------------------------*/
module.exports = {
  read,
};

// -------------------- API Key --------------------
// for use in the Groq Chatbot
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/*------------------------------------- Functions --------------------------------------*/
// Retrieve all the body stats for the current user
export async function read(req: Request, res: Response) {
  console.log("hi");
  try {
    // get the user inputted text
    const userPrompt: string = req.body.question;

    // generate the response
    const response: string = await groq.chat.completions.create({
      messages: [
        {
          role: "personal fitness trainer",
          content: userPrompt,
        },
      ],
      model: "mixtral-8x7b-32768",
    });

    // respond with the user's body stats
    res.json(response);
  } catch (err) {
    res.status(400).json(err);
  }
}
