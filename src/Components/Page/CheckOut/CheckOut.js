import React from 'react';
import { Card, CardGroup, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Services from '../Services/Services/Services';
import Selected from './Selected';

const CheckOut = () => {
   const {id} = useParams();
   return (
     <section style={{paddingTop:'5rem'}}>
        <div className="container">
           <h3>
              {
                 id ? `our selected services number is ${id}`: ''
              }
           </h3>
           < > {id ? <Selected></Selected> : <Services></Services>}</>
        </div>
      </section>
   );
};

export default CheckOut;