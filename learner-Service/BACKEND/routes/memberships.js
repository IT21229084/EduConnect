const express = require("express");
const keys = require("../config/keys");
const Membership = require("../models/Membership");
require("dotenv").config();

const router = express.Router();

router.post("/registerMembership", (req, res) =>{

    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const membershipType = req.body.membershipType;

    const newMembership = new Membership({
        name,
        email,
        contact,
        membershipType,

    })

    newMembership.save().then(()=>{
        res.json("Membership type created succesfully")
    }).catch((err)=>{
        console.log(err);
        res.json("Unsuccessfully")
    })
})

router.put("/updateMembership/:id", async(req, res)=>{
 
    let id = req.params.id;

    const {name, email, contact, membershipType} = req.body;
    console.log(id)
    const updateMembership ={
        name,
        email,
        contact,
        membershipType
    }
    
    try{
      const update = await Membership.findByIdAndUpdate(id, updateMembership)
      res.json("Memebership Update Successfully")
    }catch(error){
      console.log(error)
    }
    
  })


  router.route("/deleteMembership/:id").delete(async(req, res)=>{
    let membershipId = req.params.id;
  
       await Membership.findByIdAndDelete(membershipId).then(()=>{
            res.status(200).send({status: "Memebership deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete membership", error: err.message});
    })
  })
  

  //Get all users details router
router.route("/membershipsDetails").get((req, res)=>{

    Membership.find().then((membserships)=>{
        res.json(membserships)
    }).catch((err)=>{
        console.log(err);
    });
  });


  router.route("/membership/:id").get((req, res)=>{
    let membershipId = req.params.id;

    Membership.findById(membershipId).then((membership)=>{
       res.json(membership)
    }).catch((err)=>{
        console.log("Cannot get user");
    });
  });


module.exports = router;