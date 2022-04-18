import React from 'react';
import googleIcon from '../../../images/icon/google.png'
import gitIcon from '../../../images/icon/git.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { useNavigate,useLocation } from 'react-router-dom';
import swal from 'sweetalert';

const LoginWithXX = () => {
   let navigate = useNavigate();
   let location =useLocation();
   const form = location.state?.from?.pathname || "/";
   let errorElement='';
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
   const loginWithGoogle =()=>{
      signInWithGoogle()
   }
   const gitHubLogin =()=>{
      signInWithGithub()
   }
   if(loading || loading1){
      return <Loading></Loading>
   }
   if(user || user1){
      navigate(form,{replace:true});
      swal("Login successfully","", "success");
   }
   if (error || error1) {
      errorElement = <p className='text-danger'>Error:{error?.message} {error1?.message}</p>
   }
   return (
      <div className='py-4'>
         {
            errorElement
         }
         <div className="d-flex text-center align-items-center ">
            <div className='mx-2' style={{width:'100%',height:'2px',background:'#9D9D9D'}}></div>
            <div><strong>or</strong></div>
            <div className='mx-2' style={{width:'100%',height:'2px',background:'#9D9D9D'}}></div>
         </div>
         <div className="d-flex justify-content-center ">
         <div onClick={()=>loginWithGoogle()} className="googleIcon me-4" style={{width:'40px',height:'30px',cursor:'pointer'}}>
            <img className="img-fluid" src={googleIcon} alt="" />
         </div>
         <div onClick={()=>gitHubLogin()} className="gitIcon me-4 pt-1" style={{width:'35px',height:'30px',cursor:'pointer'}}>
            <img className="img-fluid" src={gitIcon} alt="" />
         </div>
      </div>
      </div>
   );
};

export default LoginWithXX;