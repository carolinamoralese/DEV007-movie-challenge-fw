import React, { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import Modal from "../../Components/Modal";
import { peticionMostrarPeliculas } from "../../Components/servicios/peticion";
import { useContext } from "react";
import { MostarPeliculasContext } from "../../Context";

function Home() {
  const context = useContext(MostarPeliculasContext);
  console.log(context,101)
  // const [movies, setMovies] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedMovie, setSelectedMovie] = useState(null);
  const endpoint = "movie/popular";

  useEffect(() => {
    peticionMostrarPeliculas(endpoint).then((responseJson) => {
      // setMovies(responseJson);
      context.setMovies(responseJson)
    });
  }, []);

  // const openModal = (movie) => {
  //   setSelectedMovie(movie);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setSelectedMovie(null);
  //   setIsModalOpen(false);
  // };

  return (
    <Layout>
      <div className="flex flex-wrap">
        {context.movies.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            onCardClick={() => context.openModal(movie)}
          />
        ))}
      </div>
      {context.isModalOpen && (
        <Modal
          isOpen={context.isModalOpen}
          closeModal={context.closeModal}
          movie={context.selectedMovie}
        />
      )}
    </Layout>
  );
}

export default Home;
