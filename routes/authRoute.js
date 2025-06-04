const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authControllers');
const {createProduct} = require('../controllers/productController');

router.post('/register',register);
router.post('/login',login);
router.post('/create-product',createProduct);

module.exports = router;