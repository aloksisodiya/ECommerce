import express from 'express';
const reviewRouter = express.Router();

import
 { 
    createReview,
    readReview, 
    updateReview, 
    deleteReview 
} from '../controllers/review.controller.js';

/**
 * @swagger
 * /api/review/:
 *   post:
 *     tags:
 *       - Review Route
 *     summary: Create a new review
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: string
 *                 description: Product ID
 *                 example: ""
 *               user_id:
 *                 type: string
 *                 description: User ID
 *                 example: ""
 *               rating:
 *                 type: string
 *                 description: Rating value
 *                 example: ""
 *               comment:
 *                 type: string
 *                 description: Review comment
 *                 example: ""
 *     responses:
 *       '200':
 *         description: Review created
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Server error
 */
reviewRouter.post('/',createReview);

/**
 * @swagger
 * /api/review/{id}:
 *   get:
 *     tags:
 *       - Review Route
 *     summary: Get review by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Review ID
 *     responses:
 *       '200':
 *         description: Review details
 *       '404':
 *         description: Review not found
 *       '500':
 *         description: Server error
 */
reviewRouter.get('/:id',readReview);

/**
 * @swagger
 * /api/review/{id}:
 *   put:
 *     tags:
 *       - Review Route
 *     summary: Update review by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Review ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               rating:
 *                 type: string
 *                 description: Rating value
 *                 example: ""
 *               comment:
 *                 type: string
 *                 description: Review comment
 *                 example: ""
 *     responses:
 *       '200':
 *         description: Review updated
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Review not found
 *       '500':
 *         description: Server error
 */
reviewRouter.put('/:id',updateReview);

/**
 * @swagger
 * /api/review/{id}:
 *   delete:
 *     tags:
 *       - Review Route
 *     summary: Delete review by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Review ID
 *     responses:
 *       '200':
 *         description: Review deleted
 *       '404':
 *         description: Review not found
 *       '500':
 *         description: Server error
 */
reviewRouter.delete('/:id',deleteReview);

export default reviewRouter;