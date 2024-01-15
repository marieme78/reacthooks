import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "../App.css"

const Moviecard = ({ id, Title, note, description, image }) => {
  return (
    <>
    <div className="item">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Title>{note}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Ajouter</Button>
        </Card.Body>
      </Card>
      </div>
    </>
  );
};

export default Moviecard;
