import React from "react";
import { Card, CardGroup } from "react-bootstrap";


const SpecaialPhotosCard = ({ data }) => {
const { img ,category , text} = data;
return (
   <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <CardGroup>
      <Card>
         <Card.Img variant="top" style={{width:'100%',height:'250px'}} src={img} />
         <Card.Body>
            <Card.Title>{category}</Card.Title>
            <Card.Text>{text}</Card.Text>
         </Card.Body>
         <Card.Footer>
            <small className="text-muted">Last updated 24 hr ago</small>
         </Card.Footer>
      </Card>
   </CardGroup>
   </div>
);
};

export default SpecaialPhotosCard;
