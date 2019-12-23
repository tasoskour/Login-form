import React from "react";
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import axios from "axios";

class SignUp extends React.Component{
constructor(props){
super(props)
this.state={
  username:"",
  email:"",
  password:" ",
  confirmPassword:" ",
  wrongPasswordMsg:"",
  msgs:{ wrongPasswordMsg:"",
        created:"",
        smallNameMsg:"",    }
}
this.getUsername=this.getUsername.bind(this);
this.getEmail=this.getEmail.bind(this);
this.getPassword=this.getPassword.bind(this);
this.getPassword2=this.getPassword2.bind(this);
this.onSubmit=this.onSubmit.bind(this);

}

getEmail(e){
this.setState({email:e.target.value})
}
getUsername(e){
this.setState({username:e.target.value})
}
getPassword(e){
this.setState({password:e.target.value})
}
getPassword2(e){
this.setState({confirmPassword:e.target.value})
}

onSubmit(e){
e.preventDefault();
const user={username:this.state.username,
            email:this.state.email,
            password:this.state.password,
           }
let confirmPassword=this.state.confirmPassword
if(user.username.length>=3&&user.email.length>1){
  this.setState({msgs:{  smallNameMsg:""}})
if(confirmPassword===user.password){
  this.setState({msgs:{wrongPasswordMsg:" "}})
axios.post("http://localhost:5000/users/add",user)
.then(res=>{console.log("Data:"+res.data)
  if(res.data==='User added'){this.setState({msgs:{  created:"User created succesfully"}})}
  else if(res.data==="Error11000"){this.setState({msgs:{  created:"User already exists"}})}

})

//window.location='/';
}else{
  this.setState( {
    msgs:{wrongPasswordMsg:"Password doesn't match"}})
    }}
else {
  if(user.email.length<1){
  this.setState({msgs:{  smallNameMsg:"Please enter your e-mail address"}})
  }
  if(user.username.length<3){
    console.log(user.username.length)
  this.setState({msgs:{  smallNameMsg:"Username have to be at least 3 chars"}})}
  }
}



  render() {
  return(
<div className="form-group">
  <div className="text-center">
    <h1 >Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
  </div>
  <hr/>
  <Form className="login-form font-weight-bold" onSubmit={this.onSubmit}>

    <FormGroup >
    <Label>Username <small className="text-danger ">{this.state.msgs.smallNameMsg} </small></Label>
    <Input type="text" onChange={this.getUsername} placeholder="Username"/>
    </FormGroup>

    <FormGroup>
    <Label>Email</Label>
     <Input type="email" onChange={this.getEmail} placeholder="Email" />
   </FormGroup>

   <FormGroup>
   <Label>Password </Label>
    <Input type="password" placeholder="Password" onChange={this.getPassword}/>
   </FormGroup>

   <FormGroup>
   <Label>Repeat Password <small className="text-danger ">{this.state.msgs.wrongPasswordMsg} </small></Label>
    <Input type="password" placeholder="Password" onChange={this.getPassword2}/>
   </FormGroup>

   <Button className="btn-lg brn-dark btn-block">Sign Up</Button>
   <small className="text-danger ">{this.state.msgs.created}</small>
  </Form>
</div>
)
}}
export default SignUp
