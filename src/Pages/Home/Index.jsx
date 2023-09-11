import React, { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import Modal from "../../Components/Modal";

function Home() {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const apiKey = "9399d9ba15211a26c3c2ff8ecbb4bab2";
  const baseUrl = "https://api.themoviedb.org/3/";
  const endpoint = "movie/popular";
  const apiUrl = `${baseUrl}${endpoint}?api_key=${apiKey}`;
  console.log(apiUrl, 90);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      });
  }, [apiUrl]);

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
