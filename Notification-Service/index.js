import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import express from "express"
import notificationroute from "./Route/notificationroute.js"
const app = express();
const port = 4000
dotenv.config()
//+14403874480
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: "smtp.gmail.email",
//     port: 587,
//     secure: false, // Use `true` for port 465, `false` for all other ports
//     auth: {
//         user: process.env.USER,
//         pass: process.env.APP_PASSWORD,
//     },
//     // auth: {
//     //     user: "maddison53@ethereal.email",
//     //     pass: "jn7jnAPss4f63QBp6D",
//     //   },
// });

// send mail with defined transport object
// const mailOption = await transporter.sendMail({
//     from: {
//         name: "EduConnect",
//         address: process.env.USER
//     },
//     to: "malithiroshan9@gmail.com", // list of receivers
//     subject: "Hello ✔ Welcome to our Edu Connect to Enhance your Future", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello Leaner?</b>", // html body
// });

// const sendMail = async (transporter, mailOption) =>{
//     try {
//         await transporter.sendMail(mailOption)
//         console.log("Email Has been Send.")

//     } catch (error) {
//         console.error(error)
//     }
// }

// sendMail(transporter,mailOption)

app.use(express.json());

app.use("/notify",notificationroute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
