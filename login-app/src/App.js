import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import SignUp from "./components/SignUp"
import ForgotPass from "./components/ForgotPass"
import LogIn from "./components/LogIn"
import MainPage from "./components/MainPage"
import Error404 from "./components/Error404"


class App extends React.Component {

render(){
  return (
<div>

<Router>
  <Switch>
<Route path="/" exact component={MainPage}/>
<Route path="/sign-up" exact component={SignUp}/>
<Route path="/forgot-password" exact component={ForgotPass}/>
<Route path="/login:id" exact component={LogIn}/>
<Route component={Error404} />
</Switch>
</Router>
</div>);
}}

export default App;
