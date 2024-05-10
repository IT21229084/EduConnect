// const Payment = require("../model/PaymentModel.js");
import Payment from "../model/PaymentModel.js";
import  { Test, paymentGateway } from "../controllers/paymentGateway.js";
export const test = (req, res) => {
    res.send("Payment controller is working!");
};

//store new payment
export const newPayment = async (req, res) => {
    const payment = new Payment({
        amount: req.body.amount,
        course: req.body.course,
        user: req.body.user,
    });

    try {
        
        if (!payment.amount || !payment.course || !payment.user) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

       
        const newPayment = await payment.save();
        
        //return success message
        res.status(201).json({
            success: true,
            message: "Payment stored successfully",
            payment: newPayment,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error storing payment",
            error: err.message,
        });
    }
};

//get all payments
export const allPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.status(200).json({
            success: true,
            message: "Payments retrieved successfully",
            //return no of payments
            count: payments.length,
            payments,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error retrieving payments",
            error: err.message,
        });
    }
};

//get payment by userID
export const getPaymentsByUser = async (req, res) => {
    const { userId } = req.params;
    console.log(userId);
    try {
        const payments = await Payment.find({ "user._id": userId });

        if (payments.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No payments found for this user",
            });
        }
        res.status(200).json({
            success: true,
            message: "Payments retrieved successfully",
            count: payments.length,
            payments,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error retrieving payments",
            error: err.message,
        });
    }
};

//get payment by courseID
export const getPaymentsByCourseID = async (req, res) => {
    const { courseId } = req.params;

    try {
        const payments = await Payment.find({ "course._id": courseId });

        if (payments.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No payments found for this course",
            });
        }
        res.status(200).json({
            success: true,
            message: "Payments retrieved successfully",
            count: payments.length,
            payments,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error retrieving payments",
            error: err.message,
        });
    }
};
