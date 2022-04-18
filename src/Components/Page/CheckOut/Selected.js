import React from "react";
import { Card, CardGroup, ListGroup } from "react-bootstrap";

const Selected = () => {
return (
   <CardGroup>
      <Card>
      <Card.Img
         variant="top"
         src="https://images.unsplash.com/photo-1542042161784-26ab9e041e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      />
      <Card.Body>
         <Card.Title> Wadding Photography</Card.Title>
         <ListGroup variant="flush">
            <ListGroup.Item>Photographer: 1 Top Photographer</ListGroup.Item>
            <ListGroup.Item>Event Duration: 1 days </ListGroup.Item>
            <ListGroup.Item>
            {" "}
            Price : <strong className="h3">৳</strong> 12,500
            </ListGroup.Item>
            <ListGroup.Item>Specially Edited Photos: 100 copies</ListGroup.Item>
            <ListGroup.Item>
            Number of Pictures: Unlimited (All post processed)
            </ListGroup.Item>
         </ListGroup>
      </Card.Body>
      {/* <Card.Footer>
               <button onClick={()=>checkout(2)} className="btn btn-primary d-block w-100">
                  Contact Now
                  </button>
               </Card.Footer> */}
      </Card>
   </CardGroup>
);
};

export default Selected;
