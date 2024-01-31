import React from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import movie from "./movie.json";

const View = () => {
  // Récupérer l'ID à partir des paramètres de l'URL
  const { id } = useParams(); 
  // Obtenir les clés (ID des films) du fichier JSON
  const keys = Object.keys(movie);

  // Vérifier si l'ID est dans la plage valide
  if (id >= 0 && id < keys.length) {
    // Récupérer l'ID du film actuel
    const movieId = keys[id];
    // Obtenir les détails du film actuel
    const currentMovie = movie[movieId];

    // Vérifier si le film actuel est défini avant d'accéder à ses propriétés
    if (currentMovie) {
      return (
        <>
          {/* Barre de retour à la page d'accueil */}
          <div className="div_return_bar">
            <Link to="/"> Accueil</Link>
          </div>
          
          {/* Titre du film */}
          <h1>{currentMovie.Title}</h1>
          
          {/* Conteneur principal pour la vidéo et la description */}
          <div className="view_big_div">
            {/* Partie vidéo */}
            <div>
              <iframe
                src={currentMovie.video}
                className="trailer_video"
                title="Bande-annonce"
              ></iframe>
            </div>
            
            {/* Partie description */}
            <div className="description_div">
              {/* Note du film */}
              <h3>{currentMovie.note}</h3>
              {/* Description du film */}
              <p>{currentMovie.description}</p>
            </div>
          </div>
        </>
      );
    } else {
      // Gérer le cas où le film avec l'ID donné n'est pas trouvé
      return <div>Film non trouvé</div>;
    }
  } else {
    // Gérer l'ID invalide (en dehors de la plage des films disponibles)
    return <div>ID de film invalide</div>;
  }
};

export default View;
