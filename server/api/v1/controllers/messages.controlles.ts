import { Request, Response } from "express";
import {
  getMessages,
  createMessagesByUser,
} from "../services/messages.services";
import { response } from "../../../common/response";

export const getItems = async (req: Request, res: Response) => {
  try {
    const result = await getMessages();

    response.success(res, 200, "Messages retrieved!", result);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return res.status(500).json({ message: "Server error" });
    }
  }
};

export const createItem = async (req: Request, res: Response) => {
  const { messages } = req.body;
  console.log("messages en el controlador", messages);

  try {
    const result = await createMessagesByUser(messages);

    response.success(res, 200, "Messages created!", result);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return res.status(500).json({ message: "Server error" });
    }
  }
};
