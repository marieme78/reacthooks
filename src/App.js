import React, { useState } from "react";
import "./App.css";
import Telelist from "./Telelist";
import Createfilm from "./Createfilm";

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <>
      <Telelist movies={movies} />
    </>
  );
}

export default App;
