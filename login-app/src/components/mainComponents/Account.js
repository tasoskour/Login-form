import React from "react";


class Account extends React.Component {
  constructor(props){
  super(props);
  this.state={
    user:{}
  }
  }
  componentDidMount(){
   this.setState({user:this.props.history.location.state.user});
   console.log(this.props.history.location)
}

  render(){

    if(window.location.pathname!=="/loginguest/account"){
    var user=this.state.user

    return(

      <div>
      <h1> Welcome {user.username}  </h1>
      <p>your id is:{user._id}</p>
      <p>Your account created at: {user.createdAt}</p>
      </div>


    )
  }
else {return (<h1>Logged out</h1>)}
}

}
export default Account
