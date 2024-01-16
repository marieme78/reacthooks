import React, { useState } from "react";
import Moviecard from "./component/Moviecard";
import movie from "./component/movie.json";
import Createfilm from "./Createfilm";
import Button from "react-bootstrap/Button";
import "./App.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Telelist = ({ movies }) => {
  const [data, setData] = useState(movie);
  const handleaddmovie = (newmovie) => {
    const updatemovie = [...data, { ...newmovie }];
    setData(updatemovie);
  };
  // État pour gérer la valeur de l'input de recherche
  const [searchInput, setSearchInput] = useState("");

  // Fonction à appeler lors du changement de la valeur de l'input de recherche
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Fonction à appeler lors du clic sur le bouton de recherche (search).
  const search = () => {
    // Filtrer les films qui ont la même note que la valeur de l'input (insensible à la casse)
    const matchingMovies = data.filter((movie) => movie.note == searchInput);

    if (matchingMovies.length > 0) {
      // Retourner les films correspondants
      return matchingMovies.map((movie) => console.log(movie));
    } else {
      // Aucun film trouvé, retourner un message ou un composant indiquant qu'aucun film n'a été trouvé
      return console.log("Aucun film trouvée");
    }
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "#FFB300C2",
          paddingLeft: "800px",
          paddingBottom: "30px",
        }}
      >
        <h2 style={{ marginLeft: "60px" }}>
          <b>Recherche</b>
        </h2>
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchInput}
          onChange={handleInputChange}
        ></input>
        <Button variant="primary" className="submitsearch" onClick={search}>
          Rechercher
        </Button>{" "}
      </div>
      <div className="cardplayer">
        {data.map((film, index) => (
          <Moviecard key={index} {...film} />
        ))}
      </div>
      <Createfilm addMovie={handleaddmovie} />
    </>
  );
};

export default Telelist;
