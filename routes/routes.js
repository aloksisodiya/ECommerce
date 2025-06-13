import express from 'express';
import { userAuth } from '../middleware/userAuth.js';
import authRoutes from './authRoute.js';
import productRoutes from './productRoute.js';
import orderRoutes from './orderRoute.js';
import reviewRoutes from './reviewsRoute.js';
import cartRoutes from './cartRoute.js';

const router = express.Router();

router.use('/auth',authRoutes);
router.use('/product',userAuth,productRoutes);
router.use('/order',userAuth,orderRoutes);
router.use('/review',userAuth,reviewRoutes);
router.use('/cart',userAuth,cartRoutes);


export default router;