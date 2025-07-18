const express = require("express");
const User = require("../models/user");

const Router = express.Router();

Router.post("/signup",async(req, res)=>{
try{
    console.log(req.body);
    const {firstName, lastName,email, age} = req.body;
    const user = new User({firstName, lastName,email, age});
    const update = await user.save();
    res.send(update);
}catch(err){
    console.error(err);
    res.send(err);
}
});

module.exports = Router;