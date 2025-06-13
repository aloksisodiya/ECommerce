import express from 'express';
const orderRouter = express.Router();

import { createOrder, readOrder, updateOrder, deleteOrder } from '../controllers/orderController.js';

orderRouter.post('/',createOrder);
orderRouter.get('/:id',readOrder);
orderRouter.put('/:id',updateOrder);
orderRouter.delete('/:id',deleteOrder);

export default orderRouter;