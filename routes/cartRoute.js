const express = require('express');
const { addToCart, viewCart } = require('../controllers/cartController');
const cartRoute = express.Router();

cartRoute.post('/',addToCart);
cartRoute.get('/:u_id',viewCart);

module.exports = cartRoute;