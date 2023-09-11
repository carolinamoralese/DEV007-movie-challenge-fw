import React, { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import Modal from "../../Components/Modal";
import { peticionMostrarPeliculas } from "../../Components/servicios/peticion";

function Home() {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const endpoint = "movie/popular";
  
  useEffect(() => {
    peticionMostrarPeliculas(endpoint).then((responseJson) => {
      setMovies(responseJson);
    });
  }, []);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <div className="flex flex-wrap">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            onCardClick={() => openModal(movie)}
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          movie={selectedMovie}
        />
      )}
    </Layout>
  );
}

export default Home;
