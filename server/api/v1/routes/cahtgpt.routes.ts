import { Router } from "express";
import { getModels, chatgpt } from "../controllers/chatgpt.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";

const router = Router();

/**
 * * http://localhost:3000/api/v1/chatgpt
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Model:
 *      type: object
 *    Chat:
 *      type: object
 *      required:
 *        - message
 *      properties:
 *        message:
 *          type: string
 *          description: Message to use the OpenAI API
 *      example:
 *        message: "Hello, who is your creator?"
 *  securitySchemes:
 *    chatAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *      description: "Token for Bearer, e.g. 'abcde12345'"
 *  parameters:
 *    chatId:
 *      in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: Id of the chat
 */

/**
 * @swagger
 * tags:
 *  name: ChatGPT
 *  description: API for openAI chat
 */

/**
 * @swagger
 * /chatgpt/models:
 *   get:
 *     summary: List of all models
 *     tags: [ChatGPT]
 *     security:
 *       - chatAuth: []
 *     responses:
 *       200:
 *        description: The list of all models from OpenAI
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Model'
 *       401:
 *        description: Unauthorized, non-exist token
 *       403:
 *        description: Unauthorized, invalid or expired token
 *       500:
 *        description: Server error.
 */
router.get("/api/v1/chatgpt/models", getModels);

/**
 * @swagger
 * /chatgpt/chat:
 *  post:
 *    summary: Use the company chat
 *    tags: [ChatGPT]
 *    security:
 *      - chatAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Chat'
 *    responses:
 *      202:
 *        description: Chat responded successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Chat'
 *      400:
 *        description: Incorrect request
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Chat'
 *      401:
 *        description: Unauthorized, non-exist token
 *      403:
 *        description: Unauthorized, non-exist, invalid or expired token
 *      500:
 *        description: Server error.
 */
router.post("/api/v1/chatgpt/chat", chatgpt);

export default router;
