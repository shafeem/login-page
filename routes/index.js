var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  if (req.session.login){
    res.redirect("/home");

  }
  else{
    res.render("index",{mess:req.session.loginErr})

    req.session.loginErr=false;
  }

});


let name="shafeemshan5303@gmail.com";
let pass="shan";

router.post("/",function (req, res,next){


  console.log(req.body);
  let email =req.body.email
  let password=req.body.password


  if (email === name && password === pass){
    req.session.login=true;
    res.redirect ("/home");
    console.log("in")
  }else{
    req.session.loginErr=true;
    
    res.redirect("/");
    console.log("out")
    
  }
})

router.get ("/logout",(req,res)=>{
  req.session.destroy();
  res.redirect("/");
})

module.exports = router;
