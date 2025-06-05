const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authControllers');
const {createProduct,getProduct,updateProduct} = require('../controllers/productController');

router.post('/register',register);
router.post('/login',login);
router.post('/create-product',createProduct);
router.get('/get-product',getProduct);
router.put('/update-product/:id',updateProduct);

module.exports = router;