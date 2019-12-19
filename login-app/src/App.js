import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import SignUp from "./components/SignUp"
import ForgotPass from "./components/ForgotPass"
import LogIn from "./components/LogIn"
import MainPage from "./components/MainPage"
class App extends React.Component {

render(){
  return (
<div>

<Router>
<Route path="/" exact component={MainPage}/>
<Route path="/sign-up" exact component={SignUp}/>
<Route path="/forgot-password" exact component={ForgotPass}/>
<Route path="/login" exact component={LogIn}/>
</Router>
</div>



);
}}

export default App;
