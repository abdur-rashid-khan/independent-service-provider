import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LoginWithXX from "../LoginWithXX/LoginWithXX";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import swal from 'sweetalert';
import Loading from "../Loading/Loading";

const SignIn = () => {
   const navigate= useNavigate();
   const location = useLocation();
   const form = location.state?.from?.pathname || "/";
   
   const [updateProfile] = useUpdateProfile(auth);
   const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
   const loginWithEmailPassword =async (e) =>{
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      if(password.length < 6){
         swal("Enter Strong Password","", "error");
         return ;
      }
      await createUserWithEmailAndPassword(email,password,);
      await updateProfile({ displayName: name });
   }
      if(user){
         navigate(form,{replace:true})
         swal("your account create successfully","", "success");
      }
      let errorElement='';
      if (error) {
         errorElement = <p className='text-danger'>Error: {error?.message}</p>
      }
      if (loading) {
         return <Loading></Loading>
      }
return (
   <section style={{ paddingTop: "5rem" }} className="container">
      <div
      style={{
         width: "50%",
         margin: "auto",
         background: "#E3ECF0",
         padding: "2rem",
      }}
      className="rounded"
      >
      <Form onSubmit={loginWithEmailPassword}>
         <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Name" required/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" required/>
            <p className="text-muted">minimum 6 characters password</p>
         </Form.Group>
            {
               errorElement?errorElement:''
            }
         <Button
            style={{ width: "100%", margin: "auto" }}
            variant="primary"
            type="submit"
         >
            Sig In
         </Button>
         <div
            className="d-flex pt-3 "
            style={{ justifyContent: "space-between" }}
         >
            <div className="forget">
            <Link to="/login">I Have Account</Link>
            </div>
            <div className="sigIn">
            {/* <Link to="/sigIn"> create a new account ?</Link> */}
            </div>
         </div>
         <LoginWithXX></LoginWithXX>
      </Form>
      </div>
   </section>
);
};

export default SignIn;
