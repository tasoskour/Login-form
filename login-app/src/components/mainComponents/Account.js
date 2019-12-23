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
    return(
      <div>
      <h1> Welcome {this.state.user.username}  </h1>
      <p>your id is:{this.state.user._id}</p>
      <p>Your account created at: {this.state.user.createdAt}</p>
      </div>


    )
  }

}
export default Account
