//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = process.env.MONGODB_URI || 'mongodb+srv://admin:admin@cluster0.xk9bj.mongodb.net/AddressBook';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));