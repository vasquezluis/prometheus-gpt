import { Router } from "express";
import { getModels, chatgpt } from "../controllers/chatgpt.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";

const router = Router();

router.get("/api/v1/chatgpt/models", verifyToken, getModels);
router.post("/api/v1/chatgpt/chat", verifyToken, chatgpt);

export default router;
