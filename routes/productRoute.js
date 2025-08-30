import express from 'express';
const productRouter = express.Router();

import  {createProduct,getProduct,updateProduct, deleteProduct} from '../controllers/product.controller.js';

/**
 * @swagger
 * /api/product/:
 *   post:
 *     tags:
 *       - Product Routes
 *     summary: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Product name
 *                 example: ""
 *               price:
 *                 type: string
 *                 description: Product price
 *                 example: ""
 *               description:
 *                 type: string
 *                 description: Product description
 *                 example: ""
 *     responses:
 *       '200':
 *         description: Product created
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
productRouter.post('/',createProduct);

/**
 * @swagger
 * /api/product/:
 *   get:
 *     tags:
 *       - Product Routes
 *     summary: Get all products
 *     responses:
 *       '200':
 *         description: List of products
 *       '500':
 *         description: Server error
 */
productRouter.get('/',getProduct);

/**
 * @swagger
 * /api/product/{id}:
 *   put:
 *     tags:
 *       - Product Routes
 *     summary: Update product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Product name
 *                 example: ""
 *               price:
 *                 type: string
 *                 description: Product price
 *                 example: ""
 *               description:
 *                 type: string
 *                 description: Product description
 *                 example: ""
 *     responses:
 *       '200':
 *         description: Product updated
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Server error
 */
productRouter.put('/:id',updateProduct);

/**
 * @swagger
 * /api/product/{id}:
 *   delete:
 *     tags:
 *       - Product Routes
 *     summary: Delete product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       '200':
 *         description: Product deleted
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Server error
 */
productRouter.delete('/:id',deleteProduct);

export default productRouter;
