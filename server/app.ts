import express from "express";
import morgan from "morgan";
import cors from "cors";

import indexRouter from "./api/v1/routes/index";
import chatRouter from "./api/v1/routes/cahtgpt.routes";
import authRouter from './api/v1/routes/auth.routes'

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(indexRouter);
app.use(chatRouter);
app.use(authRouter);

export default app;
