import React from "react";
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import axios from "axios";

class SignUp extends React.Component{
constructor(props){
super(props)
this.state={
  username:"",
  email:"",
  password1:" ",
  password2:" "
}
this.getUsername=this.getUsername.bind(this);
this.getEmail=this.getEmail.bind(this);
this.getPassword1=this.getPassword1.bind(this);
this.getPassword2=this.getPassword2.bind(this);
this.onSubmit=this.onSubmit.bind(this);

}

getEmail(e){
this.setState({email:e.target.value})
}
getUsername(e){
this.setState({username:e.target.value})
}
getPassword1(e){
this.setState({password1:e.target.value})
}
getPassword2(e){
this.setState({password2:e.target.value})
}

onSubmit(e){
e.preventDefault();
const user={username:this.state.username,
            email:this.state.email,
            password:this.state.password1  }

console.log(user);
axios.post("http://localhost:5000/users/add",user)
.then(res=>console.log(res.data))
.catch(err=>console.log(err));
//window.location='/';
}
  render() {
  return(
<Form className="login-form" onSubmit={this.onSubmit}>

  <FormGroup>
  <Label>Username</Label>
  <Input type="text" onChange={this.getUsername} placeholder="Username"/>
  </FormGroup>

  <FormGroup>
  <Label>Email</Label>
   <Input type="email" onChange={this.getEmail} placeholder="Email" />
 </FormGroup>

 <FormGroup>
 <Label>Password</Label>
  <Input type="password" placeholder="Password" onChange={this.getPassword1}/>
 </FormGroup>

 <FormGroup>
 <Label>Re-enter Password</Label>
  <Input type="password" placeholder="Password" onChange={this.getPassword2}/>
 </FormGroup>

 <Button className="btn-lg brn-dark btn-block">Sign Up</Button>

</Form>
  );}
}
export default SignUp
