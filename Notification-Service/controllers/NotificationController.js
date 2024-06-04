import dotenv from "dotenv";
import nodemailer from "nodemailer"
import Mailgen from "mailgen"
import twilio from "twilio"
dotenv.config()

const accountsid = "AC4bbdb3a8f101aa674d7d3b5cfaf8d215"
const Authtoken = "190b6f2885fb2bbbba9977c351e1680b"
const client = twilio(accountsid, Authtoken);

export const email = async (req, res) => {

    const { userEmail, Item, des, Amount } = req.body;

    let config = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.APP_PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "salted",
        product: {
            name: "Mailgen",
            link: 'https://mailgen.js/',
            copyright: 'Copyright © 2016 Mailgen. All rights reserved',
        }
    })

    let response = {
        body: {
            name: "Student",
            intro: "You are Successfully Entrolled!",
            table: {
                data: [
                    {
                        // item: "MERN STACK FOR BEGINNERS",
                        // description: "Master the knowledge after You can play with world. ",
                        // price: "$20.99",
                        item: Item,
                        description: des,
                        price: Amount+'$',
                    }
                ]
            },
            outro: "Looking forward to do more Educations"
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from: process.env.EMAIL,
        to: userEmail,
        subject: "Course Payment",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })
}

export const sms = async (req, res) => {

    // const { number } = req.body

    const sendSms = async (body) => {
        let msgOptions = {
            from: +14403874480,
            to: +94773032542,
            body
        }
        try {
            const message = await client.messages.create(msgOptions);
            console.log(message)
        } catch {
            console.error(error)
        }
    }
    sendSms("Welcome to Educonnect! Knowdge is power!")
}

