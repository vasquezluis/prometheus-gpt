import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../config/config";

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
// TODO: relation with message
// TODO: realtion with companies
