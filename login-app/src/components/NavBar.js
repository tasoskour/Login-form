import React from 'react';
import {NavLink} from "react-router-dom"
import {Navbar,Nav,Button} from 'reactstrap';

function NavBar(props){

return(
  <div>
    <Navbar  className=" nav-tabs navbar-light bg-light">
      <Nav className="mr-auto">
        <NavLink className="nav-link"  to={"./main"}>Home</NavLink>
        <NavLink className="nav-link" to={"./coll"}>Collection</NavLink>
        <NavLink className="nav-link" to={"./photogal"}>Reviews</NavLink>
      </Nav>
      <Nav className="nav navbar-right">
        <Button    className="m-2"  onClick={props.account} > {props.username} Account</Button>
        <Button    className="m-2"   onClick={props.logOut}> {props.logged}</Button>
      </Nav>
    </Navbar>
    <br />
  </div>
)

}
export default NavBar
