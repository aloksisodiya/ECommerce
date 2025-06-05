const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authControllers');
const {createProduct,getProduct,updateProduct, deleteProduct} = require('../controllers/productController');
const { createReview, readReview } = require('../controllers/reviewController');

router.post('/register',register);
router.post('/login',login);

router.post('/create-product',createProduct);
router.get('/get-product',getProduct);
router.put('/update-product/:id',updateProduct);
router.delete('/delete-product/:id',deleteProduct);

router.post('/add-review',createReview);
router.get('/read-review/:id',readReview);

module.exports = router;