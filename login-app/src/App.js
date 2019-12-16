import React from 'react';
import './App.css';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons'
import {BrowserRouter as Router,Route} from "react-router-dom"
import SignUp from "./components/SignUp"
import ForgotPass from "./components/ForgotPass"
import MainPage from "./components/MainPage"
class App extends React.Component {

render(){
  return (
<div>

<Router>
<Route path="/" exact component={MainPage}/>
<Route path="/sign-up" exact component={SignUp}/>
<Route path="/forgot-password" exact component={ForgotPass}/>
</Router>
</div>



);
}}

export default App;
