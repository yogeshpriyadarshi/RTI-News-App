const express = require("express");
const Languages = require("../models/languages");
const Category = require("../models/categories");
const Location = require("../models/locations");

const Routes = express.Router();

Routes.post("/language",async(req,res)=>{
    try{
        const {language} = req.body;
        const lan = new Languages({language});
        await lan.save();
    }catch(err){
        console.error(err);
    }

});


Routes.delete("/language",async(req,res)=>{
    try{
        const {language} = req.body;
        await Languages.deleteOne({language})
    }catch(err){
        console.error(err);
    }

});

Routes.patch("/language",async(req,res)=>{
    try{
        const {language} = req.body;
        await Languages.patch()
        await Languages.deleteOne({language})
    }catch(err){
        console.error(err);
    }

});

Routes.post("/category",async(req, res)=>{
    try{
        const {category} = req.body;
        const cat = new Category({category});
        await cat.save();
        res.send("successfully added category!!!");
    }catch(err){
        console.error(err);
        res.send(err);
    }

});

Routes.delete("/category",async(req, res)=>{
    try{
        const {category} = req.body;
        await Category.deleteOne({category});
        res.send("successfully added category!!!");
    }catch(err){
        console.error(err);
        res.send(err);
    }

});


Routes.patch("/category",async(req, res)=>{
    try{
        const {category} = req.body;
        await Category.deleteOne({category});
        res.send("successfully added category!!!");
    }catch(err){
        console.error(err);
        res.send(err);
    }

});

Routes.post("/location",async(req, res)=>{
    try{
        const {location} = req.body;
        const loc = new Location({location});
        await loc.save();
        res.send("done!");
    }catch(err){
        console.error(err);
    }

})

Routes.delete("/location",async(req, res)=>{
    try{
        const {location} = req.body;
        await Location.deleteOne({location});
        res.send("done!");
    }catch(err){
        console.error(err);
    }

})

Routes.patch("/location",async(req, res)=>{
    try{
        const {location} = req.body;
        await Location.deleteOne({location});
        res.send("done!");
    }catch(err){
        console.error(err);
    }

})

module.exports = Routes;