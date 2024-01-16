import React, { useState } from "react";
import Moviecard from "./component/Moviecard";
import movie from "./component/movie.json";
import Createfilm from "./Createfilm";
import "./App.css";

const Telelist = ({ movies }) => {
  // État pour gérer les données des films
  const [data, setData] = useState(movie);

  // État pour gérer la recherche
  const [search, setSearch] = useState(data);

  // Fonction pour ajouter un nouveau film à la liste
  const handleaddmovie = (newmovie) => {
    // Utiliser l'opérateur de propagation (...) pour créer un nouveau tableau avec les films existants et le nouveau film
    const updatemovie = [...data, newmovie];
    setData(updatemovie);
  };

  return (
    <>
      <div className="cardplayer">
        {/* Utiliser la méthode .filter avec la condition appropriée pour filtrer les films */}
        {data.map((film, index) => (
          <Moviecard key={index} {...film} />
        ))}
      </div>
      {/* Composant pour créer un nouveau film */}
      <Createfilm addMovie={handleaddmovie} />
    </>
  );
};

export default Telelist;
