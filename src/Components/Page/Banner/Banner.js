   import React from "react";
   import { Carousel } from "react-bootstrap";
   import banner1 from '../../../images/banner.jpg'
   import banner2 from '../../../images/banner1.jpg'
   import banner3 from '../../../images/banner3.jpg'

   const Banner = () => {

   return (
      <Carousel>
         <Carousel.Item style={{width:'100%',height:'auto'}}>
         <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
         />
         <Carousel.Caption>
            <h3>Hello This AR Photography</h3>
            <p>
            Most completed photography & Magazine photos collection </p>
         </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item style={{width:'100%',height:'auto'}}>
         <img  
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
         />

         <Carousel.Caption>
            <h4>In photography there is a reality</h4>
            <p>so subtle that it becomes more real than reality.</p>
         </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item style={{width:'100%',height:'auto'}}>
         <img 
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
         />

         <Carousel.Caption>
            <h3>The best thing about a picture is</h3>
            <p>
            That it never changes, even when the people in it do.
            </p>
         </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
   };

   export default Banner;
