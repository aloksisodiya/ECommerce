import express from 'express';
import { register,login } from '../controllers/auth.controllers.js';

const registerRouter = express.Router();

registerRouter.post('/register',register);
registerRouter.post('/login',login);

export default registerRouter;