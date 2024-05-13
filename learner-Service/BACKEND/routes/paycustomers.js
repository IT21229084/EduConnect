const router = require("express").Router() ;
let PayCustomer = require("../models/PayCustomer.js") ;

/*console.log("sus cls") ;*/

// Insert Payment Details

router.route("/add").post((req,res)=>{
    const paymentMethod = req.body.paymentMethod ;
    const cardNumber = Number(req.body.cardNumber) ;
    const cvv = Number(req.body.cvv) ;
    const expDate = req.body.expDate ;

    const newPayment = new PayCustomer({      // create object
        paymentMethod,
        cardNumber,
        cvv,
        expDate
    })

    newPayment.save().then(()=>{
        res.json("Payment Added")
    }).catch((err)=>{
        console.log(err) ;
    })
})



// display all customers' payment details

router.route("/").get((req,res)=>{

    PayCustomer.find().then((paycustomers)=>{
        res.json(paycustomers)
    }).catch((err)=>{
        console.log(err)
    })

})




// Update payment details

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id ;
    const {paymentMethod, cardNumber, cvv, expDate} = req.body ;     // D Structure

    const updatePayment = {
        paymentMethod,
        cardNumber,
        cvv,
        expDate 
    }

    const update = await PayCustomer.findByIdAndUpdate(userId, updatePayment)
    .then(() => {
        res.status(200).send({status: "Payment updated"})
    }).catch((err) => {
        console.log(err) ;
        res.send({status: "Error with updating data", error: err.message}) ;
    })


})




// Delete Payment Details

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id ;

    await PayCustomer.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Payment deleted"}) ;
    }).catch((err) => {
        console.log(err.message) ;
        res.status(500).send({status: "Error with delete payment", error:err.message}) ;
    })
})


// Get only one payment details

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id ;
    const user = await PayCustomer.findById(userId)
    .then(() => {
        res.status(200).send({status: "User fetched"})
    }).catch((err) => {
        console.log(err.message) ;
        res.status(500).send({status: "Error with get user", error: err.message}) ;
    })
})


module.exports = router ;