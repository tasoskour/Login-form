const router=require('express').Router();
let User=require("../models/users.model");

router.route('/').get((req,res)=>{

User.find({  "email": req.query["email"],"password":req.query["password"]} )
.then(user=>res.json(user))
.catch(err=>res.status(400).json('Error:'+err));

});

router.route('/add').post((req,res)=>{
const username=req.body.username;
const email=req.body.email;
const password=req.body.password;

const newUser= new User({username,email,password});

newUser.save()
  .then(()=>res.json('User added'))
  .catch(err=>res.json('Error'+err.code))
});

module.exports=router;
