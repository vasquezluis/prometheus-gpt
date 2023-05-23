import UserModel from "../models/users.model";

export const loginService = async (user: string) => {
  try {
    const userFound = UserModel.findOne({ user: user });

    return userFound;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
