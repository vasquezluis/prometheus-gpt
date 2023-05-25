import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import swaggerOptionsFile from "./swagger.json";

// -> routes
import indexRouter from "./api/v1/routes/index";
import chatRouter from "./api/v1/routes/cahtgpt.routes";
import authRouter from "./api/v1/routes/auth.routes";
import messagesRouter from "./api/v1/routes/messages.routes";

const app = express();

// -> swagger config
const specs = swaggerJSDoc(swaggerOptionsFile);
app.use("/api/v1/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// -> middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(indexRouter);
app.use(chatRouter);
app.use(authRouter);
app.use(messagesRouter);

export default app;
