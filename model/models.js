const { Schema, model } = require('mongoose');
// Schema for AddressBook
const addressSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    place: {
        type: String
    },
    subscrib: {
        type: Boolean
    }
}, { versionKey: false });

//Creating the collection Address
module.exports =  new model('Address', addressSchema);
