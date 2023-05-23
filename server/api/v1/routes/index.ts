import { Router, Request, Response } from "express";
import { response } from "../../../common/response";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.redirect("/api/v1/api-docs");
});

export default router;
