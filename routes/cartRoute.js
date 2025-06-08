const express = require('express');
const { addToCart } = require('../controllers/cartController');
const cartRoute = express.Router();

cartRoute.post('/',addToCart);

module.exports = cartRoute;