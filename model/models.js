const mongoose = require('mongoose');
// Schema for AddressBook
const addressSchema = mongoose.Schema({
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
module.exports = mongoose.model('Address', addressSchema);
