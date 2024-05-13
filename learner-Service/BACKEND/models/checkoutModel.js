 const mongoose = require('mongoose');
 const validator = require('validator');

 const checkoutSchema = new mongoose.Schema({
    name:{
        type : String,
        required:[true, `Please enter the name`]
    },
    email:{
        type:String,
        required:[true, `Please enter your Email`],
        unique: true,
        validate:[validator.isEmail, `Please enter a valid Email`]
    },
    contact:{
        type:Number,
        required:true,
        maxlength:[10, `Please enter a valid Contact number`]
    },
    city:{
        type:String,
        required:true,
        
    },
    town:{
        type:String,
        required:true
    },
    homeNo:{
        type:String,
        required:true
    },
    postalCode:{
        type:Number,
        required: [true, `please enter a valid Code`]
    }
    
 })

 let model = mongoose.model('checkout', checkoutSchema);

 module.exports =  model;