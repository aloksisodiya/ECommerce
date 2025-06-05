const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authControllers');
const {createProduct,getProduct,updateProduct, deleteProduct} = require('../controllers/productController');
const { createReview, readReview, updateReview } = require('../controllers/reviewController');

router.post('/register',register);
router.post('/login',login);

//products routes
router.post('/create-product',createProduct);
router.get('/get-product',getProduct);
router.put('/update-product/:id',updateProduct);
router.delete('/delete-product/:id',deleteProduct);

//review routes
router.post('/add-review',createReview);
router.get('/read-review/:id',readReview);
router.put('/update-review/:id',updateReview);

module.exports = router;