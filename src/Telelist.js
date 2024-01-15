import React from "react";
import Moviecard from "./component/Moviecard";
import movie from "./component/movie.json";
import "./App.css"
const Telelist = () => {

    return (
      <div className="cardplayer">
        {movie.map((film, index) => (
          <Moviecard key={index} {...film} />
        ))}
      </div>
    );
  };
  
export default Telelist;
