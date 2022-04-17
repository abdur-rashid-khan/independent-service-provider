import React from "react";
import {Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import './Header.css'

const Header = () => {
return (
   <Navbar style={{borderBottom:'3px solid #e9ecef'}} expand="lg">
      <Container className="align-content-center">
      <Navbar.Brand as={Link} to="/" style={{width:'152px',height:'auto'}}>
         <img src={logo} className='img-fluid' alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
         <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "auto" }}
            navbarScroll
         >
            <Nav.Link className="text-dark" style={{fontWeight:'bold',fontSize:'1rem'}} as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="text-dark" style={{fontWeight:'bold',fontSize:'1rem'}} as={Link} to="/service">Service</Nav.Link>
            <Nav.Link className="text-dark" style={{fontWeight:'bold',fontSize:'1rem'}} as={Link} to="/gallery">
            Photo Gallery
            </Nav.Link>
            <Nav.Link className="text-dark" style={{fontWeight:'bold',fontSize:'1rem'}} as={Link} to="/about">
            About
            </Nav.Link>
         </Nav>
            <div className="d-flex">
               {/* <UserCircleIcon style={{width:'36px',height:'auto',color:'#6c757d',cursor:'pointer'}}></UserCircleIcon> */}
               <button className="border-0 bg-primary px-3 py-2 rounded">Login</button>
            </div>
      </Navbar.Collapse>
      </Container>
   </Navbar>
   );
};

export default Header;
