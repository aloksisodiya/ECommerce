import express from 'express';
const orderRouter = express.Router();

import { createOrder, readOrder, updateOrder, deleteOrder } from '../controllers/order.controller.js';

/**
 * @swagger
 * /api/order/:
 *   post:
 *     tags:
 *       - Order Routes
 *     summary: Create a new order
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *                 description: User ID
 *                 example: ""
 *               product_ids:
 *                 type: string
 *                 description: Comma separated product IDs
 *                 example: ""
 *               total:
 *                 type: string
 *                 description: Total amount
 *                 example: ""
 *     responses:
 *       '200':
 *         description: Order created
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
orderRouter.post('/',createOrder);

/**
 * @swagger
 * /api/order/{id}:
 *   get:
 *     tags:
 *       - Order Routes
 *     summary: Get order by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *     responses:
 *       '200':
 *         description: Order details
 *       '404':
 *         description: Order not found
 *       '500':
 *         description: Server error
 */
orderRouter.get('/:id',readOrder);

/**
 * @swagger
 * /api/order/{id}:
 *   put:
 *     tags:
 *       - Order Routes
 *     summary: Update order by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               product_ids:
 *                 type: string
 *                 description: Comma separated product IDs
 *                 example: ""
 *               total:
 *                 type: string
 *                 description: Total amount
 *                 example: ""
 *     responses:
 *       '200':
 *         description: Order updated
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Order not found
 *       '500':
 *         description: Server error
 */
orderRouter.put('/:id',updateOrder);

/**
 * @swagger
 * /api/order/{id}:
 *   delete:
 *     tags:
 *       - Order Routes
 *     summary: Delete order by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *     responses:
 *       '200':
 *         description: Order deleted
 *       '404':
 *         description: Order not found
 *       '500':
 *         description: Server error
 */
orderRouter.delete('/:id',deleteOrder);

export default orderRouter;