import { Router } from "express";
import { getItems, createItem } from "../controllers/messages.controllers";

const router = Router();

router.get("/api/v1/messages", getItems);
router.post("/api/v1/messages", createItem);

export default router;
