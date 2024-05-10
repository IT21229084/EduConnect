import express from "express"
import  { allPayments, getPaymentsByCourseID, getPaymentsByUser, newPayment, test } from "../controllers/paymentController.js";
import  { Test, paymentGateway } from "../controllers/paymentGateway.js";
const router = express.Router();

// Test the payment controller
router.get("/test", test);

// Define routes for storing and retrieving payments
router.post("/new", newPayment);
router.get("/all", allPayments);
router.get("/paymentsByUser/:userId", getPaymentsByUser);
router.get("/paymentsByCourse/:courseId", getPaymentsByCourseID);
router.post("/stripe", paymentGateway);
router.get("/stripe/test", Test);

export default router
