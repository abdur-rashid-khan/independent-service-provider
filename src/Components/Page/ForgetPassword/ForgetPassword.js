import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Alert from '../Alert/Alert';
import swal from 'sweetalert';
import './forget.css'

const ForgetPassword = () => {
   let errorElement='';
   const [sendPasswordResetEmail, updating, error] = useSendPasswordResetEmail(auth);
   const resetPassword =(e)=>{
      e.preventDefault();
      const email = e.target.email.value;
      sendPasswordResetEmail(email);
   }
   if(updating){
      swal("Send Email","", "success");
   }
   if (error) {
      errorElement = <p className='text-danger'>Error: {error?.message}</p>
   }
   return (
      <section style={{paddingTop:"5rem",}} className="container">
      <div id='forgetPass' className='rounded'>
      <Form onSubmit={resetPassword}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>
      {errorElement}
      <Button style={{width:'100%',margin:'auto'}} variant="primary" type="submit">
         Reset Password
      </Button>
      <div className="pt-3 " id='forget'>
         <div className="forget">
            <Link to='/login'>I Have Account ?</Link>
         </div>
         <div className="sigIn">
            <Link to='/sigIn'> create a new account ?</Link>
         </div>
      </div>
      </Form>
      </div>
   </section>
   );
};

export default ForgetPassword;