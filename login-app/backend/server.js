const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
let User=require("../backend/models/users.model.js");

require('dotenv').config();

const app=express();
const port=process.env.PORT||5000;

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;

connection.once('open',()=>{
  console.log("Connection to mongodb successfull")
});



app.route('/users').get((req,res)=>{
User.find()
.then(users=>res.json(users))
.catch(err=>res.status(400).json('Error'+err));
});

app.route('/users/add').post((req,res)=>{
const username=req.body.username;
const newUser= new User({username});

newUser.save()
  .then(()=>res.json('User added'))
  .catch(err=>res.status(400).json('Error'+err))
});


    app.listen(port, ()=>{
      console.log(`Server is running on port: ${port}`);
    });
