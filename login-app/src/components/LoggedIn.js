import React from "react"
import Error404 from "../components/Error404"
import NavBar from "./NavBar"

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
}}

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

render() {
  if(this.state.loggedIn===true){
      return(
        <NavBar logOut={this.logOut} logged="Log out"
        disabled={false} account={this.account} username={"User: "+this.state.user.username}/>);}
  else if(this.state.loggedIn===false){
      return(
        <NavBar logOut={()=>{this.props.history.push({pathname:"/"})}} btnColor="none"
        disabled={true} logged="Log in" account={this.account} username="Guest "/>);}
 }
}

export default LoggedIn
