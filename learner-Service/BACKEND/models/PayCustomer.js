const mongoose = require('mongoose') ;

const Schema = mongoose.Schema ;

const paymentSchema = new Schema({

    paymentMethod : {
        type: String,
        required: true
    },
    cardNumber : {
        type: Number,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    },
    expDate: {
        type: String,
        required: true
    }

})

const PayCustomer = mongoose.model("PayCustomer",paymentSchema) ;

module.exports = PayCustomer ;