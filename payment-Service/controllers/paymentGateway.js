import stripePackage from "stripe";
import dotenv from "dotenv";
import Payment from "../model/PaymentModel.js";
import axios from "axios"
// const secretKey = process.env.STRIPE_SECRET_KEY;
const secretKey = "sk_test_51PE7ftGXR7QFm3FtPr4epJzbmCDeE9DLapKNdvcgwf2aW5EqGAREzSMBkR77dZrgN9jFtVmE1bHMwZPh7UhJiFhB006YSNbZta"
const stripe = stripePackage(secretKey);
dotenv.config()

//Test
export const Test = (req, res) => {
  res.send("Strip gateway controller is working!");
};

// Payment Gateway Controller
export const paymentGateway = async (req, res) => {
  const { product } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: req.body.name,
              images: [req.body.image],
            },
            unit_amount: req.body.price * 100,
          },
          quantity: req.body.quantity,
        },
      ],
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/mars",
    });

    // Return the session URL
    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};



// export const paymentGateway = async (req, res) => {
//   const { product, user } = req.body; // Assuming user and product information is included in the request body

//   try {
//     // Create a session with Stripe for payment
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: product.name,
//             },
//             unit_amount: product.price * 100, // Convert price to cents
//           },
//           quantity: 1,
//         },
//       ],
//       success_url: "http://localhost:5173/apod",
//       cancel_url: "http://localhost:5173/mars",
//     });

//     // Store payment information in your own database
//     const payment = await Payment.create({
//       user: user._id, // Assuming user ID is included in the request body
//       product: product._id, // Assuming product ID is included in the request body
//       amount: product.price, // Store the price of the product
//       // Add more fields as needed
//     });

//     // Return the session URL and stored payment details
//     res.json({ url: session.url, payment: payment });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: "Something went wrong",
//       error: error.message,
//     });
//   }
// };


