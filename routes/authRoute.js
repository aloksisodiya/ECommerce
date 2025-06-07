const express = require('express');
const registerRouter = express.Router();
const { register, login } = require('../controllers/authControllers');

registerRouter.post('/register',register);
registerRouter.post('/login',login);

module.exports = registerRouter;