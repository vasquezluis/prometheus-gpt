import { Request, Response } from "express";
import { response } from "../../../common/response";
import { getUsersMessages } from "../services/users.services";

export const getItemsByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await getUsersMessages(userId);

    response.success(
      res,
      200,
      `Messages for user ${userId} retrieved!`,
      result
    );
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return res.status(500).json({ message: "Server error" });
    }
  }
};
