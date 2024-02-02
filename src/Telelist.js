import React, { useState } from "react";
import Moviecard from "./component/Moviecard";
import movie from "./component/movie.json";
import Createfilm from "./Createfilm";
import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import View from "./component/View";

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
    // Filtrer les films dont le genre contient la valeur de l'input (insensible à la casse)
    const matchingMovies = data.filter((movie) =>
      movie.Title.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (matchingMovies.length > 0) {
      // Retourner les films correspondants
      return matchingMovies.map((movie) => (
        <div key={movie.id}>
          <Moviecard {...movie} />
        </div>
      ));
    } else {
      // Aucun film trouvé, retourner un message ou un composant indiquant qu'aucun film n'a été trouvé
      // Aucun film trouvé, retourner un message ou un composant indiquant qu'aucun film n'a été trouvé
      return (
        <div>
          <p>Aucun film trouvé.</p>
        </div>
      );
    }
  };

  return (
    <>
      {/* creation de navbar */}
      <div
        style={{
          backgroundColor: "#FFB300C2",
          paddingLeft: "800px",
          paddingBottom: "30px",
          display: "flex",
        }}
      >
        {/* creation de logo */}
        <div className="logo">
          <h1>
            <b>Ciné</b>
            <b style={{ color: "red" }}>moi</b>
          </h1>
        </div>
        <div style={{ display: "flex" }}>
          {" "}
          <h2 style={{ marginLeft: "60px" }}>
            {/* creation de l'input de recherche */}
            <b>Recherche</b>
          </h2>
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchInput}
            onChange={handleInputChange}
          ></input>
          {/* bouton de soumiss */}
          <Button variant="primary" className="submitsearch" onClick={search}>
            Rechercher
          </Button>{" "}
        </div>{" "}
      </div>
      <div className="cardplayer">
        {searchInput
          ? // Afficher les résultats de la recherche
            search()
          : // Afficher tous les films si aucun filtre n'est appliqué
            data.map((film, index) => <Moviecard key={index} {...film} />)}
      </div>
      {/* Composant qui crée les films */}
      <Createfilm addMovie={handleaddmovie} />
      {/* Composant pour l'affichge de la bande annonce du film selectionner */}
      <View />
    </>
  );
};

export default Telelist;
