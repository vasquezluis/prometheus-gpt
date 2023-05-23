import { Schema, model } from "mongoose";
import { Users } from "../interfaces/users.interface";

// * users schema based on user interface

const UserSchema = new Schema<Users>(
  {
    user: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: [String],
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  { timestamps: true, versionKey: false }
);

//* model creation
const UserModel = model("users", UserSchema);
export default UserModel;
