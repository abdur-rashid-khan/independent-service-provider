import { signOut } from "firebase/auth";
import React from "react";
import {Container,Nav, Navbar,} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.png";
import CustomLink from "../Page/Active/CustomLink";
import Loading from "../Page/Loading/Loading";
import './Header.css'
import swal from 'sweetalert';

const Header = () => {
   // let errorElement = '';
   const [user, loading, error] = useAuthState(auth);

   const logout = () => {
      signOut(auth);
      if(user){
         swal("logOut successfully","", "success");
      }
   };
   // if(loading){
   //    return <Loading></Loading>
   // }

return (
   <Navbar style={{borderBottom:'3px solid #e9ecef',position:'fixed', zIndex:'11111', width:'100%'}} expand="lg">
      <Container className="align-content-center px-3">
      <Navbar.Brand id='logoSize' as={Link} to="/" style={{width:'84px',height:'64'}}>
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
            <CustomLink className='h6 me-3'  to="/gallery"> Photo Gallery </CustomLink>
            <CustomLink className='h6 me-3'  to="/checkout">CheckOut</CustomLink>
            <CustomLink className='h6 me-3'  to="/blog">Blog</CustomLink>
            <CustomLink className='h6 me-3' to="/about"> About </CustomLink>
         </Nav>
            <div className="d-flex">
               {
                  user?
                  <Link onClick={()=>logout()} to={'/login'} style={{textDecoration:'none',color:'#fff'}} className="border-0 bg-danger px-3 py-2 rounded mx-2">LogOut</Link>
                  :<div> 
                     <Link to={'/login'} style={{textDecoration:'none',color:'#fff'}} className="border-0 bg-primary px-3 py-2 rounded mx-2">Login</Link>
                     <Link to={'/signIn'} style={{textDecoration:'none',color:'#fff'}} className="border-0 bg-info px-3 py-2 rounded mx-2">sign In</Link>
                  </div>
                  
               }
            
            </div>
      </Navbar.Collapse>
      </Container>
   </Navbar>
   );
};

export default Header;
