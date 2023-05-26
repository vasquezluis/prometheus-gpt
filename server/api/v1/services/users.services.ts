import { UsersModel } from "../../../models/users.model";
import { MessagesModel } from "../../../models/messages.model";

// get messages by user id from sequelize model
export const getUsersMessages = async (userId: string) => {
  try {
    const messages = await MessagesModel.findAll({ where: { userId } });

    return messages;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
