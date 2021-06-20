//import express & mongoose
const express = require('express');
require('./adapter/db');

//Initialize express app
const app = express();

const PORT = process.env.NODEJS_PORT || 3000;

//makes sure the server can receive json as a request body.
app.use(express.json());

//Initialize the sever
app.listen(PORT, () => {
    console.log(`server listening on port:${PORT}`);
});

app.use('/address', require('./routes/address-book-route'));

app.use('/auth', require('./routes/user-route'));