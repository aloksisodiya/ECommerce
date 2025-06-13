import express from 'express';
const reviewRouter = express.Router();

import { createReview, readReview, updateReview, deleteReview } from '../controllers/review.controller.js';

reviewRouter.post('/',createReview);
reviewRouter.get('/:id',readReview);
reviewRouter.put('/:id',updateReview);
reviewRouter.delete('/:id',deleteReview);

export default reviewRouter;