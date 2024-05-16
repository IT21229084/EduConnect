// const userModel = require('../models/User');
// const jwt = require('jsonwebtoken');

// const isAuthenticated = async (req,res,next)=>{
//     try {
//         //request token
//         const {token} = req.cookies;

//         if(!token){
//             return next('Please login to access the data');
//         }
//         //verify token
//         const verify = await jwt.verify(token,process.env.secretOrPrivateKey);
//         req.user = await userModel.findById(verify.id);
//         next();

//     } catch (error) {
//        return next(error); 
//     }
// }


const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')

// const protect = asyncHandler(async (req, res, next) => {
//   let token

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     try {
//       // Get token from header
//       token = req.headers.authorization.split(' ')[1]

//       // Verify token
//       const decoded = jwt.verify(token, process.env.secretOrPrivateKey)

//       // Get user from the token
//       req.user = await User.findById(decoded.id)

//       next()
//     } catch (error) {
//       console.log(error)
//       res.status(401)
//       throw new Error('Not authorized')
//     }
//   }

//   if (!token) {
//     res.status(401)
//     throw new Error('Not authorized, no token')
//   }
// })

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log("Hello" , authHeader)
  if(authHeader){
    const token = authHeader.split(' ')[1];
    

    jwt.verify(token, process.env.secretOrPrivateKey, (err, user) => {
      if(err){
        return res.status(403).send({status: "Not found user", user: req.user});
      }
      req.user = user;
      next();
    });
  }else{
    
    return res.status(403).send({status: "Not Autherized", user: req.user});
  }
}

module.exports = protect;
// module.exports = isAuthenticated;