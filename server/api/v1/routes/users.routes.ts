import { Router } from "express";
import { getItemsByUserId } from "../controllers/users.controllers";

const router = Router();

router.get("/api/v1/users/:userId/messages", getItemsByUserId);

export default router;
