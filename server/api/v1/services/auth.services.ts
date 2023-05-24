import { UsersModel } from "../../../models/users.model";
import { IUsers } from "../../../interfaces/users.interface";

export const loginService = async (user: string) => {
  try {
    const userFound: any = await UsersModel.findOne({
      where: { username: user },
    });

    if (userFound) {
      const mappedUser: IUsers = {
        id: userFound.id,
        username: userFound.username,
        password: userFound.password,
        active: userFound.active,
      };

      return mappedUser;
    }

    return null;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
