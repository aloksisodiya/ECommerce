import express from 'express';
import { addToCart, viewCart, deleteCart } from '../controllers/cart.controller.js';

const cartRoute = express.Router();


/**
 * @swagger
 * /api/cart/:
 *   post:
 *     tags:
 *       - Cart Routes
 *     summary: Add item to cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: string
 *                 description: Product ID to add
 *                 example: ""
 *               quantity:
 *                 type: string
 *                 description: Quantity to add
 *                 example: ""
 *     responses:
 *       '200':
 *         description: Item added to cart
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
cartRoute.post('/',addToCart);

/**
 * @swagger
 * /api/cart/{u_id}:
 *   get:
 *     tags:
 *       - Cart Routes
 *     summary: View cart for a user
 *     parameters:
 *       - in: path
 *         name: u_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       '200':
 *         description: Cart details
 *       '404':
 *         description: Cart not found
 *       '500':
 *         description: Server error
 */
cartRoute.get('/:u_id',viewCart);

/**
 * @swagger
 * /api/cart/{cart_id}:
 *   delete:
 *     tags:
 *       - Cart Routes
 *     summary: Delete cart by cart ID
 *     parameters:
 *       - in: path
 *         name: cart_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cart ID
 *     responses:
 *       '200':
 *         description: Cart deleted
 *       '404':
 *         description: Cart not found
 *       '500':
 *         description: Server error
 */
cartRoute.delete('/:cart_id',deleteCart);

export default cartRoute;