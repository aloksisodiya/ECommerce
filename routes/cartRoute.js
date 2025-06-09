const express = require('express');
const { addToCart, viewCart, deleteCart } = require('../controllers/cartController');
const cartRoute = express.Router();

cartRoute.post('/',addToCart);
cartRoute.get('/:u_id',viewCart);
cartRoute.delete('/:cart_id',deleteCart);

module.exports = cartRoute;