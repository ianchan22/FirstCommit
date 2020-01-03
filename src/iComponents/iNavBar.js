import React, {useState} from 'react';
// import React, {useState, useEffect, Component} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
// import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
// DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Button } from 'reactstrap';

// import Image from "react-graceful-image";
import Logo from "../iImage/icon.jpg";

// export default (props) => {
//   return (
//     <Button color="danger">Danger!</Button>
//   );
// };

const buttonstyle = {
  marginRight : "5px"
}

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand href="#"><img src={Logo} weight="27" height="27" alt="xxxPic"></img></NavbarBrand>
        <NavbarBrand href="/">CHANagram</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem> <NavLink href="/components/">Components</NavLink> </NavItem>
            <NavItem> <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret> Options </DropdownToggle> 
                <DropdownMenu right>
                <DropdownItem> Option 1 </DropdownItem>
                <DropdownItem> Option 2 </DropdownItem>
                <DropdownItem divider /> 
                <DropdownItem> Reset </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          </Collapse>
          <Button style={buttonstyle} color="success">Log In</Button>{' '}
          <Button color="primary">Sign Up</Button>{' '}
          {/* <Button style={{marginRight:'5px'}} color="success">pqr</Button>{' '} */}
          {/* <NavbarText> <Button href="/components/" color="success">Log In</Button> </NavbarText>
          <NavbarText> <NavLink href="/components/">[Log In]</NavLink> </NavbarText>
          <NavbarText> <NavLink href="/components/">Sign Up</NavLink> </NavbarText> */}
          {/* <NavbarText>Sign In ??</NavbarText> */}
      </Navbar>
    </div>
  );
}

export default Example;
// class NavBarMain extends Component {
//   render() {
//     return (
//         <div>
//           <h1>Simple SPA</h1>
//           <ul className="header">
//             <li><a href="/">Home</a></li>
//             <li><a href="/stuff">Stuff</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//           <div className="content">
             
//           </div>
//         </div>
//     );
//   }
// }
// export default NavBarMain;
// import Navbar from 'react-bootstrap/Navbar'
// class ShowNavBar {
// render(){
//     <Navbar sticky="top" bg="dark" variant="dark">
//         <Navbar.Brand href="#home">
//         <img
//             alt=""
//             src="/logo.svg"
//             width="30"
//             height="30"
//             className="d-inline-block align-top"
//         />{' '}
//         React Bootstrap
//         </Navbar.Brand>
//     </Navbar>
// }}

// export default ShowNavBar

// import React, { Component } from "react";
 
// tart

