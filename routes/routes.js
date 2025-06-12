const express = require('express');
const router = express.Router();
const {userAuth} = require("../middleware/userAuth");

const authRoutes = require('./authRoute');
const productRoutes = require('./productRoute');
const orderRoutes = require('./orderRoute');
const reviewRoutes = require('./reviewsRoute');
const cartRoutes = require('./cartRoute');

router.use('/auth',authRoutes);
router.use('/product',userAuth,productRoutes);
router.use('/order',userAuth,orderRoutes);
router.use('/review',userAuth,reviewRoutes);
router.use('/cart',userAuth,cartRoutes);


module.exports = router;