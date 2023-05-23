import { Router } from "express";
import { loginController } from "../controllers/auth.controllers";

const router = Router();

router.post("/api/v1/auth", loginController);

export default router;
