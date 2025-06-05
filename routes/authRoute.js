const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authControllers');
const {createProduct,getProduct,updateProduct, deleteProduct} = require('../controllers/productController');
const { createReview, readReview, updateReview, deleteReview } = require('../controllers/reviewController');
const { createOrder, readOrder, updateOrder, deleteOrder } = require('../controllers/orderController');

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
router.delete('/delete-review/:id',deleteReview);

//order routes
router.post('/place-order',createOrder);
router.get('/read-order/:id',readOrder);
router.put('/update-order/:id',updateOrder);
router.delete('/delete-order/:id',deleteOrder);

module.exports = router;