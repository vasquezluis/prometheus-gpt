import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../config/config";

import { MessagesModel } from "./messages.model";

// users model for queries
export const UsersModel = sequelizeConfig.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: true,
  }
);

// TODO: relations with other tables

// -> relation with message
// * one to many relation
// * one user can have many messages
UsersModel.hasMany(MessagesModel, {
  foreignKey: "userId",
  sourceKey: "id",
});
MessagesModel.belongsTo(UsersModel, {
  foreignKey: "userId",
  targetKey: "id",
});

// TODO: realtion with companies
