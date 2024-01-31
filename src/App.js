import React from "react";
import "./App.css";
import Telelist from "./Telelist";
import { Routes, Route } from "react-router-dom";
import View from "./component/View";

function App() {
  // const [movies, setMovies] = useState([]);

  // const addMovie = (newMovie) => {
  //   setMovies([...movies, newMovie]);
  // };

  return (
    <>
      <Routes>
        <Route path="/" element={<Telelist />} />
        {/* <Route path="/trailer" element={<View />} /> / */}
        <Route path="/view/:id" element={<View />} />
      </Routes>
      {/*  Importez les composants nécessaires */}
      {/* 
      je commente mon code 
      je comment mon code
      je commente mon code */}
    </>
  );
}

export default App;


