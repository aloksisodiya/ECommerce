import express from 'express';
import { addToCart, viewCart, deleteCart } from '../controllers/cart.controller.js';

const cartRoute = express.Router();

cartRoute.post('/',addToCart);
cartRoute.get('/:u_id',viewCart);
cartRoute.delete('/:cart_id',deleteCart);

export default cartRoute;