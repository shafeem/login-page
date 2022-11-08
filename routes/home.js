var express =require ("express");
const { get } = require("http");
var router =express.Router();

let product =[
    {
        phone:"apple",
        category:"smartphone",
        description:" It is one of the most popular product in the world.And its have a lot of features."
    },
    {
        phone:"apple",
        category:"smartphone",
        description:" It is one of the most popular product in the world.And its have a lot of features."
    },
    {
        phone:"apple",
        category:"smartphone",
        description:" It is one of the most popular product in the world.And its have a lot of features."
    },
    {
        phone:"apple",
        category:"smartphone",
        description:" It is one of the most popular product in the world.And its have a lot of features."
    },
    {
        phone:"apple",
        category:"smartphone",
        description:" It is one of the most popular product in the world.And its have a lot of features."
    },
    {
        phone:"apple",
        category:"smartphone",
        description:" It is one of the most popular product in the world.And its have a lot of features."
    },
    {
        phone:"apple",
        category:"smartphone",
        description:" It is one of the most popular product in the world.And its have a lot of features."
    },
    {
        phone:"apple",
        category:"smartphone",
        description:" It is one of the most popular product in the world.And its have a lot of features."
    },
    {
        phone:"apple",
        category:"smartphone",
        description:" It is one of the most popular product in the world.And its have a lot of features."
    },
    {
        phone:"apple",
        category:"smartphone",
        description:" It is one of the most popular product in the world.And its have a lot of features."
    },
    {
        phone:"apple",
        category:"smartphone",
        description:" It is one of the most popular product in the world.And its have a lot of features."
    },
    {
        phone:"apple",
        category:"smartphone",
        description:" It is one of the most popular product in the world.And its have a lot of features."
    },
]

router.get("/", (req,res)=>{
    if  (req.session.login){
        res.render ("home",{product})
    }else{
        res.redirect("/");
    }
})

module.exports=router;