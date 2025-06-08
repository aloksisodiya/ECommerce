const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoute');
const productRoutes = require('./productRoute');
const orderRoutes = require('./orderRoute');
const reviewRoutes = require('./reviewsRoute');
const cartRoutes = require('./cartRoute');

router.use('/auth',authRoutes);
router.use('/product',productRoutes);
router.use('/order',orderRoutes);
router.use('/review',reviewRoutes);
router.use('/cart',cartRoutes);


module.exports = router;