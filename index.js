const express = require('express');
const mongoose = require('mongoose');

//Initialize express app
const app = express();

// Connecting to DB
mongoose.connect('mongodb://localhost/AddressBook', {useNewUrlParser: true, useUnifiedTopology: true})
// const con = mongoose.connection
// con.on('open', function() {
//   console.log('db connected');
// });
app.use(express.json());

const addressRouter = require('./routes/address-book-route');
app.use('/address', addressRouter);

//Initialize the sever
app.listen(3000, () => {
    console.log('server listening on port:3000');
});