import { MessagesModel } from "../../../models/messages.model";
import { IMessages } from "../../../interfaces/messages.interface";

// get all messages from sequelize model
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

// create messages by user id from sequelize model
export const createMessagesByUser = async (
  messages: Array<any>,
  userId: number
) => {
  try {
    let response: any;

    // loop through messages array and create messages
    // messages is an array of objects with title, role, content
    for (const message of messages) {
      const { title, role, content } = message;

      response = await MessagesModel.create({ title, role, content, userId });
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
