import 'dotenv/config'
import express from 'express';
import router from './routes/routes.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use('/api',router);
app.use(cookieParser());

app.listen(3000, ()=> console.log('server listening on port 3000'));