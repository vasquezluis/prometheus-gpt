import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import swaggerOptionsFile from "./swagger.json";

import indexRouter from "./api/v1/routes/index";
import chatRouter from "./api/v1/routes/cahtgpt.routes";
import authRouter from "./api/v1/routes/auth.routes";

const app = express();

// -> swagger
const specs = swaggerJSDoc(swaggerOptionsFile);
app.use("/api/v1/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(indexRouter);
app.use(chatRouter);
app.use(authRouter);

export default app;
