const router = require("express").Router();
 const user = require('../models/User')

 //REGISTER
 router.post("/register" , (req , res) =>{
    const newUser  = new User({
        username:req.body.username,
        
    })
 })