import React from "react"
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
import {Link} from "react-router-dom"
import axios from "axios";
import FacebookLogin from 'react-facebook-login'


class MainLoginPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      users:{},
      submit:false,
      wrongMsg:" ",
    loggedIn:false}

    this.handleSubmit=this.handleSubmit.bind(this)
    this.responseFacebook=this.responseFacebook.bind(this)
  }

componentDidUpdate(){
  if(this.state.submit){
    axios.get("http://localhost:5000/users/",{
      params: {email: document.getElementById("email").value,
               password:document.getElementById("password").value}})
    .then(res=>{if(res.data.length!==0&&this._isMounted){
                 this.setState({ users: res.data[0] ,submit:false,loggedIn:true})
                 this.props.history.push({pathname: '/login'+this.state.users._id,
                                          state:{user: this.state.users,
                                                 loggedIn:this.state.loggedIn}});}
                else{if (this._isMounted){
                  this.setState({submit:false,wrongMsg:"  Wrong email or password"})
                }}});}
      }

componentDidMount() {this._isMounted = true;}

responseFacebook(response){
    var fbuser={
      username:response.name,
      email:response.email,
      _id:response.id}
  this.setState({ users: fbuser ,submit:false,loggedIn:true})
  this.props.history.push({pathname: '/login'+this.state.users._id,
                           state:{  user: this.state.users,
                                    loggedIn:this.state.loggedIn}});
}

handleSubmit(e) {
  e.preventDefault()
  this.setState({submit:true})}

render(){


  return(
  <div>
    <Form className="login-form" onSubmit={(e)=>this.handleSubmit(e)}>
      <h1 className="text-center"><span className="font-weight-bold ">Lunatechs</span>.gr</h1>
      <h2 className="text-center">Welcome</h2>

      <FormGroup>
        <Label>Email<span className="text-danger">{this.state.wrongMsg} </span></Label>
      <Input id="email" type="email" placeholder="Email"/>
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
      <Input id="password" type="password" placeholder="Password"/>
      </FormGroup>
      <div className="text-center">
      <Button   className="btn-lg btn-block">Login</Button>
      </div>
      <div className="pl-4">
      <Link to="/sign-up" className="navbar-brand mr-0 p-2">Sign up</Link>
        <span className="pr-2">/</span>
      <Link to="/forgot-password" className="navbar-brand">Forgot Password</Link>
      </div>
    </Form>

    <div className="text-center ">Or continue with Facebook  </div>

    <Form  className="login-form" >

      <FacebookLogin
        appId="1463519250482931"
        fields="name,email,picture"
        callback={this.responseFacebook}
        cssClass="fb-btn btn-lg btn-block"
        icon=" fa fa-facebook "
      />


      <div className="text-center">

        <Link to="/loginguest/main"  className="btn-lg">Continue as Guest</Link>
      </div>
    </Form>
  </div>);
  }
}
export default MainLoginPage
