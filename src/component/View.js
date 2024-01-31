// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import "../App.css";
// import movie from "./movie.json";

// const View = () => {
//   // const BandeAnnonce = () => {
//     const {id} = useParams();
//     const keys = Object.keys(movie)
//     const movieId = keys[id]
//     const element = movie[movieId]
//     console.log(element.Title);

//     return (
//       <>
//         <div className="div_return_bar">
//           <Link to="/"> Home</Link>

//         </div>
//       </>
//     );
//   };

// export default View;

import React from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import movie from "./movie.json";

const View = () => {
  const { id } = useParams();
  const keys = Object.keys(movie);

  // Check if the id is within valid range
  if (id >= 0 && id < keys.length) {
    const movieId = keys[id];
    const currentMovie = movie[movieId];

    // Check if the currentMovie is defined before accessing its properties
    if (currentMovie) {
      return (
        <>
          <div className="div_return_bar">
            <Link to="/"> Home</Link>
          </div>
          <h1>{currentMovie.Title}</h1>
          <div className="view_big_div">
            <div>
              <iframe
                src={currentMovie.video}
                className="trailer_video"
              ></iframe>
            </div>
            {/* div de la description */}
            <div className="description_div">
              <h3>{currentMovie.note}</h3>
              <p>{currentMovie.description}</p>
            </div>
          </div>
        </>
      );
    } else {
      // Handle the case where the movie with the given ID is not found
      return <div>Movie not found</div>;
    }
  } else {
    // Handle invalid id (outside the range of available movies)
    return <div>Invalid movie ID</div>;
  }
};

export default View;
