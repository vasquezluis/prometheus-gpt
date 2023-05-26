import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../../../config/config";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // * -> obtener token almacenado en headers

  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

  const token = authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, JWT_SECRET, (error: any, payload: any) => {
    if (error) return res.json({ message: error });

    // TODO -> verificar si el usuario pertenece a ENUM(innovacion.ai, prometheus.com, easygo.com)
    if (payload.roles.includes("user")) {
      next();
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  });
};
