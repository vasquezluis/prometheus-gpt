import { Configuration, OpenAIApi } from "openai";
// import { Chat } from '../interfaces/chatgpt.interface'

const API_KEY = process.env.API_KEY;

const configuration = new Configuration({
  apiKey: `${API_KEY}`,
});
const openai = new OpenAIApi(configuration);

export const getModelsService = async () => {
  try {
    const response = await openai.listModels();

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const chatgptService = async (message: string) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      max_tokens: 200,
      temperature: 0,
    });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
