import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import movie from "./movie.json";
import "../App.css";

const Mynavbar = () => {
  // État pour gérer les données
  const [data, setData] = useState(movie);

  // Fonction à appeler lors du clic sur le bouton de recherche (search).
  const search = (e) => {
    e.preventDefault(); // Empêche le formulaire de se soumettre

    // Récupérer la valeur de l'input
    const inputValue = document.getElementsByClassName("submitsearch")[0].previousSibling.value;

    // Vérifier si la valeur de l'input correspond à un titre de film existant
    const matchingMovie = data.find((movie) => movie.title === inputValue);

    if (matchingMovie) {
      console.log(matchingMovie);
      // Faire quelque chose avec les données du film correspondant
    } else {
      console.log("Film non trouvé");
    }
  };

  return (
    <nav>
      <div className="divtitle">
        <h2 className="navtitle">
          Ciné<b style={{ color: "#D10005C1" }}>Moi</b>
        </h2>
      </div>
      <div className="divsearch">
        <input placeholder="Rechercher..."></input>
        <Button variant="primary" className="submitsearch" onClick={search}>
          Rechercher
        </Button>{" "}
      </div>
    </nav>
  );
};

export default Mynavbar;
