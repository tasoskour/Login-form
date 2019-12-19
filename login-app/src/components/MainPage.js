import React from "react"
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons'
import {Link,Redirect} from "react-router-dom"

import axios from "axios";

class MainPage extends React.Component{
constructor(props){
  super(props)
  this.state={

    users:{username:"manos"}
  }
  this.handleSubmit=this.handleSubmit.bind(this)
}

checker()
{
  var users={ };
  axios.get("http://localhost:5000/users/",{params: {
    username: "asdas@asda.gt"
  }})
  .then(res=>console.log(res.data))
  .catch(function(error) {
  console.error(error);
}
);
console.log("Users: "+users)

}
handleSubmit = () => {
  this.checker();
this.props.history.push({
          pathname: '/login',
          state: { user: this.state.users }})
  }




  render(){
    return(
  <Form className="login-form">
    <h1 className="text-center"><span className="font-weight-bold ">Lunatechs</span>.gr</h1>
    <h2 className="text-center">Welcome</h2>

    <FormGroup>
      <Label>Email</Label>
        <Input type="email" placeholder="Email"/>
    </FormGroup>

    <FormGroup>
      <Label>Password</Label>
        <Input type="password" placeholder="Password"/>
    </FormGroup>

    <Button type="button" onClick={this.handleSubmit} className="btn-lg brn-dark btn-block">Login</Button>


    <div className="text-center pt-3">Or continue with your social account  </div>

    <FacebookLoginButton className="mt-3 mb-3"/>
    <GoogleLoginButton className="mt-3 mb-3"/>

    <div className="text-center">
      <Link to="/sign-up" className="navbar-brand">Sign up</Link>
        <span className="p-2">/</span>
      <Link to="/forgot-password" className="navbar-brand">Forgot Password</Link>
    </div>
  </Form>

    )
  }
}
export default MainPage
