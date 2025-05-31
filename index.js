const express = require('express');
const router = require('./routes/authRoute');

const app = express();
app.use(express.json());
app.use('/api/auth',router);

app.listen(3000, ()=> console.log('server listening on port 3000'));