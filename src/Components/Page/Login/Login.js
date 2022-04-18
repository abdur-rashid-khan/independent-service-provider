import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import LoginWithXX from "../LoginWithXX/LoginWithXX";
import swal from 'sweetalert';
import './Login.css';

const Login = () => {
   let errorElement='';
   let navigate=useNavigate();
   const location = useLocation();
   const form = location.state?.from?.pathname || "/";
   const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useSignInWithEmailAndPassword(auth);
   const login = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      createUserWithEmailAndPassword(email,password);
   }
   if(loading){
      return <Loading></Loading>
   }
   if(user){
      navigate(form,{replace:true})
      swal("Login successfully","", "success");
   }
   if (error) {
      errorElement = <p className='text-danger'>Error: {error?.message}</p>
   }
   
return (
   <section style={{paddingTop:"5rem",}} className="container">
      <div id='loginForm' className='rounded'>
      <Form onSubmit={login}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      
      <Button style={{width:'100%',margin:'auto'}} variant="primary" type="submit">
         LogIn
      </Button>
      <div id="forget" className="pt-3 ">
         <div className="forget">
            <Link className="" to='/forget-password'>Forget Password ?</Link>
         </div>
         <div className="sigIn">
            <Link className="" to='/signIn'> create a new account ?</Link>
         </div>
      </div>
      {
         errorElement?errorElement:''
      }
      <LoginWithXX></LoginWithXX>
      </Form>
      </div>
   </section>
);
};

export default Login;
