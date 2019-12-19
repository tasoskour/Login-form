import React from "react";
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import axios from "axios";

class SignUp extends React.Component{
constructor(props){
super(props)
this.state={
  email:"",
  password1:" ",
  password2:" "
}
this.getEmail=this.getEmail.bind(this);
this.getPassword1=this.getPassword1.bind(this);
this.getPassword2=this.getPassword2.bind(this);
this.onSubmit=this.onSubmit.bind(this);

}

getEmail(e){
this.setState({email:e.target.value})
}
getPassword1(e){
this.setState({password1:e.target.value})
}
getPassword2(e){
this.setState({password2:e.target.value})
}

onSubmit(e){
e.preventDefault();
const user={username:this.state.email

          }
console.log(user);
axios.post("http://localhost:5000/users/add",user)
.then(res=>console.log(res.data))
//window.location='/';
}
  render() {
  return(
<Form className="login-form" onSubmit={this.onSubmit}>

  <FormGroup>
  <Label>Email</Label>
   <Input type="email" onChange={this.getEmail} placeholder="Email" autoComplete="on"/>
 </FormGroup>

 <FormGroup>
 <Label>Password</Label>
  <Input type="password" placeholder="Password" onChange={this.getPassword1}/>
 </FormGroup>

 <FormGroup>
 <Label>Password</Label>
  <Input type="password" placeholder="Password" onChange={this.getPassword2}/>
 </FormGroup>

 <Button className="btn-lg brn-dark btn-block">Sign Up</Button>

</Form>
  );}
}
export default SignUp
