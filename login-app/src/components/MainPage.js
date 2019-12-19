import React from "react"
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons'
import {Link} from "react-router-dom"

import axios from "axios";

class MainPage extends React.Component{
constructor(props){
  super(props)
  this.state={
    users:{},
    check:"false",
    find:" "
  }
  this.handleSubmit=this.handleSubmit.bind(this)

}


componentDidUpdate(){

  if(this.state.check==="true"){
  axios.get("http://localhost:5000/users/",{
    params: {email: document.getElementById("email").value,
            password:document.getElementById("password").value

    }})
  .then(res=>{ console.log(res.status);

if(res.data.length!==0){
    if (this._isMounted){
  this.setState({ users: res.data[0] ,check:"false"})}
  this.props.history.push({
            pathname: '/login',
            state: { user: this.state.users }})
    }else{

      this.setState({check:"false",find:"  Wrong email or password"})}
    })
}}

componentDidMount() {
    this._isMounted = true;
}

handleSubmit() {
this.setState({check:"true"})
  }

  render(){
    return(
  <Form className="login-form">
    <h1 className="text-center"><span className="font-weight-bold ">Lunatechs</span>.gr</h1>
    <h2 className="text-center">Welcome</h2>

    <FormGroup>
      <Label>Email<span class="text-danger">{this.state.find} </span></Label>
    <Input id="email" type="email" placeholder="Email"/>
    </FormGroup>

    <FormGroup>
      <Label>Password</Label>
    <Input id="password" type="password" placeholder="Password"/>
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
