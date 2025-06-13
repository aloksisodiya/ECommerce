import express from 'express';
const productRouter = express.Router();

import  {createProduct,getProduct,updateProduct, deleteProduct} from '../controllers/product.controller.js';

productRouter.post('/',createProduct);
productRouter.get('/',getProduct);
productRouter.put('/:id',updateProduct);
productRouter.delete('/:id',deleteProduct);

export default productRouter;
