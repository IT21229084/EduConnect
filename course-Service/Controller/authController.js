import jwt from "jsonwebtoken";
const AppError = require("../utils/AppError");
//Give rolebase authentication for protected routes
exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        const user = authenticateRequest(req, res, next);
        if (!roles.includes(user.userRole)) {
            return next(
                new AppError("You do not have permission to perform this action", 403)
            );
        }
        console.log(user);
        req.user = user;
        next();
    };
};

const authenticateRequest = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    return (userToken = jwt.decode(token));
}