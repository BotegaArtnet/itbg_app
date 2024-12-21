import { OpenAI } from "langchain/llms/openai"; import { config } from "dotenv"; config(); export const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.7 });
