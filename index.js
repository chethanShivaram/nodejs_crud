const express = require('express');
const mongoose = require('mongoose');

//Initialize express app
const app = express();

const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb+srv://admin:admin@cluster0.xk9bj.mongodb.net/AddressBook';
const PORT = process.env.PORT || 3000;

// Connecting to DB
mongoose.connect(CONNECTION_URI, {useNewUrlParser: true, useUnifiedTopology: true});
// const con = mongoose.connection
// con.on('open', function() {
//   console.log('db connected');
// });
app.use(express.json());

const addressRouter = require('./routes/address-book-route');
app.use('/address', addressRouter);

//Initialize the sever
app.listen(PORT, () => {
    console.log(`server listening on port:${PORT}`);
});