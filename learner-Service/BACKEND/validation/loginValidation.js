const validator = require("validator");
const isEmpty = require("is-empty");

function validateLoginInputs(data){

    let errors = {};

    //Covert empty fields to empty string so we can use validator function
    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ? data.password: "";

    //Check all fields
    if(validator.isEmpty(data.email && data.password)){
        errors = "All fields required";
        console.log(errors);
    }

    //Email check
    if(validator.isEmpty(data.email)){
        errors.email = "Email is required";
    }else if(!validator.isEmail(data.email)){
        errors = "Email is Invalid";
    }

    //Password check
    if(validator.isEmpty(data.password)){
        errors = "Password is required";
    }
    if(!validator.isLength(data.password, {min: 6, max: 30})){
        errors = "Password must be at 6-30 characters";
    }

    return{
        errors, isValid: isEmpty(errors)
    };
}

module.exports = validateLoginInputs;