import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../config/config";

// chats model for queries
export const MessagesModel = sequelizeConfig.define(
  "messages",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      unique: false,
    },
    role: {
      type: DataTypes.ENUM("user", "bot"),
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
