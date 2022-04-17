import React from 'react';
import logo from '../../../images/logo.png'

const Footer = () => {
   return (
      <footer className='bg-dark text-light py-4'>
         <div className="container">
            <div className="row text-center">
               <div className="col-sm-4">
                  <div style={{width:'100%',height:'auto'}}>
                     <img className='img-fluid' src={logo} alt="footer-logo" />
                  </div>
               </div>
               <div className="col-sm-8 text-end">
                  <strong>Other Info</strong>
                  <ul style={{listStyle:'none'}}>
                     <li>Name : Rashid khan</li>
                     <li>Email : rashidkhanbd57@gmail.com</li>
                     <li>Mobile : 016*************</li>
                     <li>Foridpur , Dhaka</li>
                     <li>Bangla Desh</li>
                  </ul>
               </div>
               <strong>Copyright &copy; 2022</strong>
            </div>
         </div>
      </footer>
   );
};

export default Footer;