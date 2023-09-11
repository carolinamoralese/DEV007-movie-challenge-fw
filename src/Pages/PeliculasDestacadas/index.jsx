import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import { peticionMostrarPeliculas } from "../../Components/servicios/peticion";
import { useContext } from "react";
import { MostarPeliculasContext } from "../../Context";
import Modal from "../../Components/Modal";


function PeliculasDestacadas() {
  const context = useContext(MostarPeliculasContext);
  // const [movies, setMovies] = useState([]);
  const endpoint = "/movie/top_rated";
    
  useEffect(() => {
    peticionMostrarPeliculas(endpoint).then((responseJson) => {
      context.setMovies(responseJson);
    });
  }, []);

  console.log(context.movies);
  return (
    <Layout>
      <div className="flex flex-wrap">
        {context.movies.map((movie) => (
          <Card key={movie.id} movie={movie} onCardClick={() => context.openModal(movie)} />
        ))}
      </div>
      {context.isModalOpen && (
        <Modal
          isOpen={context.isModalOpen}
          closeModal={context.closeModal}
          movie={context.selectedMovie}
        />
      )}
      {/* <DetallePelicula /> */}
    </Layout>
  );
}

export default PeliculasDestacadas;
