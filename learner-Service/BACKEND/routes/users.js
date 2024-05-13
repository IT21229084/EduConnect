const express = require("express");
const bcrypt = require("bcrypt");
const keys = require("../config/keys");
const passport = require("passport");
const jwt = require('jsonwebtoken');
const isEmpty = require("is-empty");
require("dotenv").config();

// Load User model
const User = require("../models/User");
const protect = require("../middleware/auth");

//Load Input validation
const validateRegisterInputs = require("../validation/registerValidation");
const validateLoginInputs = require("../validation/loginValidation");

//Control of the requests startimg with path
const router = express.Router();

// @route POST users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => { 

  //Form Validation
  const {errors, isValid} = validateRegisterInputs(req.body);

  //Check Validation
  if(!isValid){
    return res.status(400).send(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    // Check if user exists
    if (user) {
      return res.status(400).send("Email already exists" );
    } else{
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          accountType: req.body.accountType
        });

        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
            .save()
            
            if(newUser){
              res.status(201).json({
                _id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                accountType: newUser.accountType,
                token: generateToken(newUser._id),
              })
            } else {
              res.status(400)
              throw new Error('Invalid user data')
            }
          });
        });
        
      }
  });
});

// @route POST users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res, next) => {

  //Form Validation
  const {errors, isValid} = validateLoginInputs(req.body);

  //Check Validation
  if(!isValid){
    return res.status(400).send(errors);
  }

    const email = req.body.email;
    const password = req.body.password;
  
    // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(403).send("Email not found" );
      }
  
      // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            accountType: user.accountType,
            token: generateToken(user._id),
          })
          
        } else {
          return res
            .status(403)
            .send("Password Incorrect" );
        }
      });
    });
});


//Add User router
router.post("/add-user", (req, res) => { 

  //Form Validation
  const {errors, isValid} = validateRegisterInputs(req.body);

  //Check Validation
  if(!isValid){
    return res.status(400).send(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    // Check if user exists
    if (user) {
      return res.status(400).send("Email already exists" );
    } else{
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          accountType: req.body.accountType
        });

        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
            .save()
            
            if(newUser){
              res.status(201).json({
                _id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                accountType: newUser.accountType,
                token: generateToken(newUser._id),
              })
            } else {
              res.status(400)
              throw new Error('Invalid user data')
            }
          });
        });
        
      }
  });
});


//Get all users details router
router.route("/users").get((req, res)=>{

  User.find().then((user)=>{
      res.json(user)
  }).catch((err)=>{
      console.log(err);
  });
});

//Get one user Details
router.route("/profile/:id").get((req, res)=>{
  let userId = req.params.id;
  User.findById(userId).then((user)=>{
     res.json(user)
  }).catch((err)=>{
      console.log("Cannot get user");
  });
});

//get one user details
// router.route("/get/:id", protect).get(async(req, res)=>{
//   let userId = req.params.id;
  
//       const user = await User.findById(userId).then((user)=>{
//         return  res.status(200).send({status: "User fetched", user: user});
//   }).catch((err)=>{
//       console.log(err.message);
//       res.status(500).send({status: "Error with get user", error: err.message});
//   })
// })


router.get("/get", protect, async(req, res)=>{
    
  const {id}  = req.user;
  // console.log(id)
  const user = await User.findById(id)
  .then((user)=>{
    res.json(user)
    // console.log(user)
 }).catch((err)=>{
     console.log("Cannot get user");
 });
  
})


//Update User Details
router.put("/update", protect, async(req, res)=>{
 
  // const {id} = req.query;
  const {id} = req.user;
  // console.log("Hello",id)
  const {name, email} = req.body;
  console.log(id)
  const updateUser ={
      name,
      email
  }
  
  try{
    const update = await User.findByIdAndUpdate(id, updateUser)
    res.send(update)
  }catch(error){
    console.log(error)
  }
  
})


//Update User Details
router.route("/edit-employee/:id").put(async(req, res)=>{
  let userId = req.params.id;
  const {name, email, accountType} = req.body;

  const updateUser ={
      name,
      email,
      accountType
  }
  const update = await User.findByIdAndUpdate(userId, updateUser).then(()=>{
      res.status(200).send({status: "User Updated"})

  }).catch((err) => {
      console.log(err);
      res.status(500).send({status: "Error with updating data", error: err.message});
  })
})

//Delete User
router.route("/delete/:id").delete(async(req, res)=>{
  let userId = req.params.id;

     await User.findByIdAndDelete(userId).then(()=>{
          res.status(200).send({status: "User deleted"});
  }).catch((err)=>{
      console.log(err.message);
      res.status(500).send({status: "Error with delete user", error: err.message});
  })
})


//Generate token
const generateToken = (id) =>{
  return jwt.sign({id}, process.env.secretOrPrivateKey,{
    expiresIn: '1d',
  })
}
module.exports = router;