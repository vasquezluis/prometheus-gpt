import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const PORT = process.env.PORT;
const JWT_SECRET = <string>process.env.JWT_SECRET;
const DB_NAME = <string>process.env.DB_NAME;
const DB_USER = <string>process.env.DB_USER;
const DB_PASSWORD = <string>process.env.DB_PASSWORD;
const DB_HOST = <string>process.env.DB_HOST;

// config for sequelize
const sequelizeConfig = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

export { PORT, JWT_SECRET, sequelizeConfig };
