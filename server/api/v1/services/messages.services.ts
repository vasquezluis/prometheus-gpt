import { MessagesModel } from "../../../models/messages.model";
import { IMessages } from "../../../interfaces/messages.interface";

export const getMessages = async () => {
  try {
    const response = await MessagesModel.findAll();

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const createMessagesByUser = async (messages: Array<any>) => {
  try {
    let response: any;

    for (const message of messages) {
      const { title, role, content } = message;

      response = await MessagesModel.create({ title, role, content });
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
