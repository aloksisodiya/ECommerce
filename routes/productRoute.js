const express = require('express');
const productRouter = express.Router();

const {createProduct,getProduct,updateProduct, deleteProduct} = require('../controllers/productController');

productRouter.post('/',createProduct);
productRouter.get('/',getProduct);
productRouter.put('/:id',updateProduct);
productRouter.delete('/:id',deleteProduct);

module.exports = productRouter;
