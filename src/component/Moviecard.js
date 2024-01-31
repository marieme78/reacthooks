import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Moviecard = ({ id, Title, note, description, image }) => {
  return (
    <div className="item">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Title>{note}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/view/${id}`}>
            <Button variant="danger">
              Bande annonce
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Moviecard;
