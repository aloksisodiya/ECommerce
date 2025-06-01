require('dotenv').config()
const express = require('express');
const router = require('./routes/authRoute');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use('/api/auth',router);
app.use(cookieParser());

app.listen(3000, ()=> console.log('server listening on port 3000'));