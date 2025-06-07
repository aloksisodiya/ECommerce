const express = require('express');
const orderRouter = express.Router();

const { createOrder, readOrder, updateOrder, deleteOrder } = require('../controllers/orderController');

orderRouter.post('/',createOrder);
orderRouter.get('/:id',readOrder);
orderRouter.put('/:id',updateOrder);
orderRouter.delete('/:id',deleteOrder);

module.exports = orderRouter;