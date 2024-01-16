import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import movie from "./movie.json";
import "../App.css";

const Mynavbar = () => {
  // État pour gérer les données
  const [data, setData] = useState(movie);

  // État pour gérer la valeur de l'input de recherche
  const [searchInput, setSearchInput] = useState("");

  // Fonction à appeler lors du changement de la valeur de l'input de recherche
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Fonction à appeler lors du clic sur le bouton de recherche (search).
  const search = () => {
    // Filtrer les films qui ont la même note que la valeur de l'input (insensible à la casse)
    const matchingMovies = data.filter(
      (movie) => movie.note.toLowerCase() === searchInput.toLowerCase()
    );

    if (matchingMovies.length > 0) {
      // Afficher les films correspondants
      return matchingMovies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.image}></img>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          {/* Ajoutez d'autres éléments que vous souhaitez afficher */}
        </div>
      ));
    } else {
      // Aucun film trouvé
      return <p>Aucun film trouvé</p>;
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
        <input
          placeholder="Rechercher..."
          value={searchInput}
          onChange={handleInputChange}
        ></input>
        <Button variant="primary" className="submitsearch" onClick={search}>
          Rechercher
        </Button>{" "}
      </div>

      {/* Affiche les films correspondants */}
      <div className="matching-movies">{search()}</div>
    </nav>
  );
};

export default Mynavbar;
