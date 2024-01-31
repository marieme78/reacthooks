import React from "react";
import "./App.css";
import Telelist from "./Telelist";
import { Routes, Route } from "react-router-dom";
import View from "./component/View";

function App() {

  return (
    <>
    {/* creation de routes */}
      <Routes>
        <Route path="/" element={<Telelist />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>

    </>
  );
}

export default App;


