import React from "react";
import { Card, CardGroup, ListGroup } from "react-bootstrap";

const Services = () => {
return (
   <section>
      <div className="container">
      <div className="service-title text-center">
         <h2>Service Session</h2>
      </div>
      <div className="row py-4">
         <div className="col-sm-12 col-md-6 col-lg-4">
            <CardGroup>
            <Card>
               <Card.Img
                  style={{ width: "100%", height: "auto" }}
                  variant="top"
                  src="https://images.unsplash.com/photo-1551860863-d98db3dbbee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
               />
               <Card.Body>
                  <Card.Title> Wadding  Photography</Card.Title>
                  <ListGroup variant="flush">
                  <ListGroup.Item>
                     Photographer: 1 Top Photographer
                  </ListGroup.Item>
                  <ListGroup.Item>Event Duration: 4 Hours </ListGroup.Item>
                  <ListGroup.Item>
                     {" "}
                     Price : <strong className="h3">৳</strong> 12,500
                  </ListGroup.Item>
                  <ListGroup.Item>
                     Specially Edited Photos: 100 copies
                  </ListGroup.Item>
                  <ListGroup.Item>
                     Number of Pictures: Unlimited (All post processed)
                  </ListGroup.Item>
                  </ListGroup>
               </Card.Body>
               <Card.Footer>
                  <button className="btn btn-primary d-block w-100">
                  Contact Now
                  </button>
               </Card.Footer>
            </Card>
            </CardGroup>
         </div>
         <div className="col-sm-12 col-md-6 col-lg-4">
            <CardGroup>
            <Card>
               <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1542042161784-26ab9e041e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
               />
               <Card.Body>
                  <Card.Title> Wadding  Photography</Card.Title>
                  <ListGroup variant="flush">
                  <ListGroup.Item>
                     Photographer: 1 Top Photographer
                  </ListGroup.Item>
                  <ListGroup.Item>Event Duration: 1 days </ListGroup.Item>
                  <ListGroup.Item>
                     {" "}
                     Price : <strong className="h3">৳</strong> 12,500
                  </ListGroup.Item>
                  <ListGroup.Item>
                     Specially Edited Photos: 100 copies
                  </ListGroup.Item>
                  <ListGroup.Item>
                     Number of Pictures: Unlimited (All post processed)
                  </ListGroup.Item>
                  </ListGroup>
               </Card.Body>
               <Card.Footer>
                  <button className="btn btn-primary d-block w-100">
                  Contact Now
                  </button>
               </Card.Footer>
            </Card>
            </CardGroup>
         </div>
         <div className="col-sm-12 col-md-6 col-lg-4">
            <CardGroup>
            <Card>
               <Card.Img
                  style={{ width: "100%", height: "auto" }}
                  variant="top"
                  src="https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbCUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
               />
               <Card.Body>
                  <Card.Title> Travel   Photography</Card.Title>
                  <ListGroup variant="flush">
                  <ListGroup.Item>
                     Photographer: 1 Top Photographer
                  </ListGroup.Item>
                  <ListGroup.Item>Event Duration: 4 Hours </ListGroup.Item>
                  <ListGroup.Item>
                     {" "}
                     Price : <strong className="h3">৳</strong> 12,500
                  </ListGroup.Item>
                  <ListGroup.Item>
                     Specially Edited Photos: 100 copies
                  </ListGroup.Item>
                  <ListGroup.Item>
                     Number of Pictures: Unlimited (All post processed)
                  </ListGroup.Item>
                  </ListGroup>
               </Card.Body>
               <Card.Footer>
                  <button className="btn btn-primary d-block w-100">
                  Contact Now
                  </button>
               </Card.Footer>
            </Card>
            </CardGroup>
         </div>
      </div>
      </div>
   </section>
);
};

export default Services;
