import React from "react";
import {Container,Nav, Navbar,} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import CustomLink from "../Page/Active/CustomLink";
import './Header.css'

const Header = () => {
return (
   <Navbar style={{borderBottom:'3px solid #e9ecef'}} expand="lg">
      <Container className="align-content-center">
      <Navbar.Brand as={Link} to="/" style={{width:'102px',height:'auto'}}>
         <img src={logo} className='img-fluid' alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
         <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "auto" }}
            navbarScroll
         >
            <CustomLink className='h6 me-3'  to="/">Home</CustomLink>
            <CustomLink className='h6 me-3'  to="/service">Service</CustomLink>
            <CustomLink className='h6 me-3'  to="/gallery"> Photo Gallery </CustomLink>
            <CustomLink className='h6 me-3' to="/about"> About </CustomLink>
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
