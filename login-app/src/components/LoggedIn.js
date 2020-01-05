import React from "react"
import Error404 from "../components/Error404"
import {NavLink} from "react-router-dom"
import {Navbar,Nav,Button} from 'reactstrap';

class LoggedIn extends React.Component {
constructor(props){
super(props);
this.state={
  user:{},
  loggedIn:false,
  hasError: false
}
this.account=this.account.bind(this);
this.logOut=this.logOut.bind(this);
}
componentDidMount(){
try{
 this.setState({user:this.props.history.location.state.user,
   loggedIn:this.props.history.location.state.loggedIn});
this.props.history.push({pathname:"/login"+this.props.history.location.state.user._id+"/main"})}
catch (e) {
this.setState({hasError: true})
  console.log("Error")}
}

logOut(){
this.setState({user:{},loggedIn:false});
if(window.location.pathname==="/login"+this.state.user._id+"/account"){
  this.props.history.push("/loginguest/account");
}

}
logIn(){
  this.props.history.push({pathname:"/"});
}

account(e){
 if(this.state.loggedIn===true){
   e.preventDefault();
   this.props.history.push({
          pathname: "/login"+this.state.user._id+"/account",
          state: { user: this.state.user,loggedIn:this.state.loggedIn}});
}
}

componentDidUpdate(){

}
render() {
  if(this.state.loggedIn===true){
      return(
  <div>
    <Navbar  className=" nav-tabs navbar-light bg-light">
      <Nav className="mr-auto">
        <NavLink className="nav-link"  to={"./main"}>Home</NavLink>
        <NavLink className="nav-link" to={"./coll"}>Collection</NavLink>
        <NavLink className="nav-link" to={"./reviews"}>Reviews</NavLink>
      </Nav>
      <Nav className="nav navbar-right">
        <Button    className="m-2"  onClick={this.account} > {this.state.user.username} Account</Button>
        <Button    className="m-2"   onClick={this.logOut}> Log out</Button>
      </Nav>
    </Navbar>
    <br />
  </div>);}
else if(this.state.loggedIn===false){
  return(
<div>
  <Navbar  className=" nav-tabs navbar-light bg-light">
    <Nav className="mr-auto">
      <NavLink className="nav-link"  to={"./main"}>Home</NavLink>
      <NavLink className="nav-link" to={"./coll"}>Collection</NavLink>
      <NavLink className="nav-link" to={"./reviews"}>Reviews</NavLink>
    </Nav>
    <Nav className="nav navbar-right">
          <Button    className="m-2"  onClick={this.account} > Guest</Button>
          <Button    className="m-2"   onClick={()=>this.logIn()}> Log in </Button>
    </Nav>
  </Navbar>
  <br />
  </div>);
}


}
    }

export default LoggedIn
