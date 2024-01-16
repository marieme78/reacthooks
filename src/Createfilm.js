import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Createfilm = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    note: "",
    image: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Movie:", newMovie); // pour vérifier les données
    addMovie(newMovie);
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      title: "",
      note: "",
      image: "",
      description: "",
    }));
  };

  return (
    <>
      <div className="div_parent">
        <div>
          <div className="title">
            <h1 className="big_title">Mes choix</h1>
          </div>
          <div className="added_film">
            <p>Mes choix</p>
          </div>
        </div>
        <div className="formulaire">
          <div className="title">
            <h1 className="big_title">Crée un film !</h1>
          </div>
          <div className="div_formulaire">
            <form>
              <ul>
                <li>
                  <label htmlFor="title">
                    <b>Title:</b>
                  </label>
                  <input
                    type="text"
                    id="title"
                    onChange={handleInputChange}
                    name="title"
                    value={newMovie.title}
                  />
                </li>
                <li>
                  <label htmlFor="note">
                    <b>Note:</b>
                  </label>
                  <input
                    type="text"
                    id="note"
                    onChange={handleInputChange}
                    name="note"
                    value={newMovie.note}
                  />
                </li>
                <li>
                  <label htmlFor="image">
                    <b>URL de l'image:</b>
                  </label>
                  <input
                    type="text"
                    id="image"
                    onChange={handleInputChange}
                    name="image"
                    value={newMovie.image}
                  />
                </li>
                <li>
                  <label htmlFor="description">
                    <b>Description</b>:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    onChange={handleInputChange}
                    value={newMovie.description}
                  ></textarea>
                </li>
              </ul>
              <Button
                variant="danger"
                className="submitsearch"
                onClick={handleSubmit}
              >
                Create
              </Button>{" "}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createfilm;
