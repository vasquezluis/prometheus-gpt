import { Router } from "express";
import { loginController } from "../controllers/auth.controllers";

const router = Router();

/**
 * * http://localhost:3000/api/v1/auth
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Auth:
 *      type: object
 *      required:
 *        - username
 *        - password
 *      properties:
 *        username:
 *          type: string
 *          description: Username for login
 *        password:
 *          type: string
 *          description: Password for login
 *      example:
 *        username: "luisvasquez"
 *        password: "123456"
 *  parameters:
 *    loginId:
 *      in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: El id login
 */

/**
 * @swagger
 * tags:
 *  name: Auths
 *  description: User authentication 
 */

/**
 * @swagger
 * /auth:
 *  post:
 *    summary: Login to get token
 *    tags: [Auths]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Auth'
 *    responses:
 *      200:
 *        description: Login successfuly
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Auth'
 *      400:
 *        description: Body data is incorrect
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Auth'
 *      401:
 *        description: Password is incorrect
 *      404:
 *        description: User not found
 *      500:
 *        description: Internal server error
 */

router.post("/api/v1/auth", loginController);

export default router;
