import React from 'react';
import logo from '../../../images/logo.png'

const Footer = () => {
   return (
      <footer className=' text-light py-4' style={{background:'#535353'}}>
         <div className="container">
            <div className="d-flex " style={{justifyContent:'space-between', alignItems:'center'}}>
               <div className="">
                  <div style={{width:'100%',height:'auto'}}>
                     <img className='img-fluid' src={logo} alt="footer-logo" />
                     <p>&copy; 2022 apurba photography </p>
                  </div>
               </div>
               <div className="">
                  <ul style={{listStyle:'none'}}>
                     <li><strong>Other Info</strong></li>
                     <li>Name : Rashid khan</li>
                     <li>Email : rashidkhanbd57@gmail.com</li>
                     <li>Mobile : 016*************</li>
                     <li>Foridpur , Dhaka</li>
                     <li>BanglaDesh</li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;