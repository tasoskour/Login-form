import React from "react"
import Error404 from "../components/Error404"
import MainPage from "./mainComponents/MainPage"
import {Route,Redirect,Switch,NavLink} from "react-router-dom"
import Account from "./mainComponents/Account"
import {Navbar,Nav,Button} from 'reactstrap';

class LoggedIn extends React.Component {
constructor(props){
super(props);
this.state={
  user:{username:"Paraskevas",
  _id:11},
  hasError: false,
  redirect:false
}
this.redirect=this.redirect.bind(this)
}
componentDidMount(){
try{
 this.setState({user:this.props.history.location.state.user});
this.props.history.push({pathname:"/login"+this.props.history.location.state.user._id+"/main"})}
catch (e) {
this.setState({hasError: true})
  console.log("Error")
}

}

redirect(e){
e.preventDefault();
this.setState({redirect:true})
}

componentDidUpdate(){
if(this.state.redirect===true){
  this.setState({redirect:false})
      this.props.history.push({
            pathname: "/login"+this.state.user._id+"/account",
            state: { user: this.state.user}})}
}
render() {
  if(this.state.hasError===true){
    console.log(this.state.loggedIn)
    return (<Error404/>)
    }
    else{
      return(
  <div>
    <Navbar  className=" nav-tabs navbar-light bg-light">
      <Nav className="mr-auto">
        <NavLink className="nav-link"  to={"./main"}>Home</NavLink>
        <NavLink className="nav-link" to={"./coll"}>Collection</NavLink>
        <NavLink className="nav-link" to={"./reviews"}>Reviews</NavLink>
      </Nav>
      <Nav className="nav navbar-right">
        <Button    className="m-2"  onClick={this.redirect} >{this.state.user.username}  Account</Button>
        <Button    className="m-2"   onClick={(e)=>{this.props.history.replace('/');}}> Log out</Button>

      </Nav>
    </Navbar>
    <br />
  </div>);}}
    }

export default LoggedIn
