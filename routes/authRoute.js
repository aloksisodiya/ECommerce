import express from 'express';
import { register,login } from '../controllers/auth.controllers.js';

const registerRouter = express.Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Register a User
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's name
 *                 example: ""
 *               email:
 *                 type: string
 *                 description: User's email
 *                 example: ""
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: ""
 *     responses:
 *       '200':
 *         description: added Successfully
 *       '500':
 *         description: server error
 */
registerRouter.post('/register',register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login a User
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email
 *                 example: ""
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: ""
 *     responses:
 *       '200':
 *         description: Login Successful
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: server error
 */
registerRouter.post('/login',login);

export default registerRouter;