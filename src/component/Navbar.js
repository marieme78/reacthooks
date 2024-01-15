import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Mynavbar = () => {
  return (
    <nav>
      <div className="divtitle">
        <h2  className="navtitle">Ciné<b style={{"color":"#D10005C1"}}>Moi</b></h2>
      </div>
      <div className="divsearch">
        <input placeholder="Rechercher..."></input>
        <Button variant="primary" className="submitsearch">
          Search
        </Button>{" "}
      </div>
    </nav>
  );
};

export default Mynavbar;