const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
//let User=require("../backend/models/users.model.js");

require('dotenv').config();

const app=express();
const port=process.env.PORT||5000;

app.use(cors());
app.use(express.json());

 const uri=process.env.ATLAS_URI;
mongoose.connect(uri,
{useNewUrlParser:true,useCreateIndex: true, useUnifiedTopology: true });
const connection=mongoose.connection;
console.log("Connection...");

//once will call the provided callback only one time on will call the provided callback each time an open event occurs
connection.once('open',()=>{
  console.log("Connection to mongodb successfull")
});

/*
//GET Users
app.route('/users').get((req,res)=>{
User.find()
.then(users=>res.json(users))
.catch(err=>res.status(400).json('Error'+err));
});

//POST Users
app.route('/users/add').post((req,res)=>{
const username=req.body.username;
const newUser= new User({username});

newUser.save()
  .then(()=>res.json('User added'))
  .catch(err=>res.status(400).json('Error'+err))
});

*/

const usersRouter =require("./routes/users")
app.use('/users',usersRouter);

    app.listen(port, ()=>{
      console.log(`Server is running on port: ${port}`);
    });
