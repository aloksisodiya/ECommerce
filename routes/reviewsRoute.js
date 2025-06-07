const express = require('express');
const reviewRouter = express.Router();

const { createReview, readReview, updateReview, deleteReview } = require('../controllers/reviewController');

reviewRouter.post('/',createReview);
reviewRouter.get('/:id',readReview);
reviewRouter.put('/:id',updateReview);
reviewRouter.delete('/:id',deleteReview);

module.exports = reviewRouter;