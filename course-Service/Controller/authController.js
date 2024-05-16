// import jwt from "jsonwebtoken";

// export const restrictTo = (...roles) => {
//     return (req, res, next) => {
//         const user = authenticateRequest(req, res, next);
//         if (!roles.includes(user.userRole)) {
//             return next(
//                 console.log("You do not have permission to perform this action")
//             );
//         }
//         console.log(user);
//         req.user = user;
//         next();
//     };
// };

// export const authenticateRequest = (req, res, next) => {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];
//     return (userToken = jwt.decode(token));
// }
