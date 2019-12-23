import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import SignUp from "./components/SignUp"
import ForgotPass from "./components/ForgotPass"
import LoggedIn from "./components/LoggedIn"
import MainLoginPage from "./components/MainLoginPage"
import Error404 from "./components/Error404"
import Account from "./components/mainComponents/Account"
import MainPage from "./components/mainComponents/MainPage"
import Collection from "./components/mainComponents/Collection"
import Reviews from "./components/mainComponents/Reviews"



class App extends React.Component {

render(){
  return (
<div>
<Router>
  <Switch>
<Route path="/" exact component={MainLoginPage}/>
<Route path="/sign-up" exact component={SignUp}/>
<Route path="/forgot-password" exact component={ForgotPass}/>

<Route path="/login:id">
  <Route path="/login:id" component={LoggedIn}/>
  <Route path="/login:id/account" exact component={Account}/>
    <Route path={"/login:id/main"} component={MainPage}/>
    <Route path={"/login:id/coll"} component={Collection}/>
    <Route path={"/login:id/reviews"} component={Reviews}/>
</Route>
<Route component={Error404}/>
  </Switch>
</Router>
</div>);
}}

export default App;
