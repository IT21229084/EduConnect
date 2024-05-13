const validator = require("validator");
const isEmpty = require("is-empty");

function validateRegisterInputs(data){

    let errors = {};

    //Covert empty fields to empty string so we can use validator function
    data.name = !isEmpty(data.name) ? data.name: "";
    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ? data.password: "";
    data.password2 = !isEmpty(data.password2) ? data.password2: "";

    //Check all fields
    if(validator.isEmpty(data.name && data.email && data.password &&data.password2)){
        errors = "All fields required";
        console.log(errors);
    }

    //Name checks
    if(validator.isEmpty(data.name)){
        errors = "Name is required";
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
    if(validator.isEmpty(data.password2)){
        errors = "Confirm password is required";
    }
    if(!validator.isLength(data.password, {min: 6, max: 30})){
        errors = "Password must be at 6-30 characters"
    }
    if(!validator.equals(data.password, data.password2)){
        errors = "Password must match";
    }

    return{
        errors, isValid: isEmpty(errors)
    };
}

module.exports = validateRegisterInputs;