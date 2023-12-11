const express = require("express");
const router=express.Router()
const {createToken, postStk}= require("../../../../lib/token")


router.post("/",createToken,postStk)
module.exports=router