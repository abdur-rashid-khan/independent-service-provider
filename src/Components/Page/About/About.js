import React from 'react';
import photo from '../../../images/me.JPG'

const About = () => {
   return (
      <section style={{paddingTop:'5rem'}}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-sm-12 col-md-6">
                  <div className="">
                     <img className='img-fluid' src={photo} alt="photos" />
                  </div>
               </div>
               <div className="col-sm-12 col-md-6">
                  <h5>I Have Been Designing And Developing Website For 1.3. Year.I Try My Best To Learn Web Design. Daily I Am Working 7 Hours For Learning . If I Work Hard One Day I Will Be Success.So I Can't Waste My Time . I Have Learned Html,Css,Bootstrap,Tailwind Css, Simple Javascript ,Simple PHP .  recently i am Learne to react . i hope 
Something good will happen  inshallah. </h5>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;