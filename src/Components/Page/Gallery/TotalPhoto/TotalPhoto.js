import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const TotalPhoto = ({data}) => {
   const {photos,views,download,like,desc,date } = data;
   return (
      <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
         <CardGroup>
         <Card>
               <Card.Img
               variant="top"
               style={{ width: "100%", height: "auto" }}
               src={photos}
               />
               <Card.Body>
               <ul style={{listStyle:'none',padding:'0'}}>
                  <li>Views : {views}</li>
                  <li>Download : {download}</li>
                  <li>Like : {like}</li>
                  <li>Date : {date}</li>
                  <li>Description : {desc}</li>
               </ul>
               </Card.Body>
               {/* <Card.Footer>
               <small className="text-muted">Last updated 24 hr ago</small>
               </Card.Footer> */}
            </Card>
         </CardGroup>
      </div>
   );
};

export default TotalPhoto;