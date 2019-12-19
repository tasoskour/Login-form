import React from "react"
import {Link,Redirect,withRouter } from "react-router-dom"
class LogIn extends React.Component {
constructor(props){
super(props);
this.state={
  user:{username:"ASd"}
}
}
componentDidMount(){
this.setState({user:this.props.history.location.state.user})
console.log(this.props.history.location.state.user)
}

render(props) {


    return(
<div>
<h1> Hello {this.state.user.username} </h1>
</div>

    );
  }
}

export default LogIn
