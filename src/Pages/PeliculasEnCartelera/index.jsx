import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import { peticionMostrarPeliculas } from "../../Components/servicios/peticion";


function PeliculasEnCartelera() {
  const [movies, setMovies] = useState([]);
  const endpoint = "/movie/now_playing";
    
  useEffect(() => {
    peticionMostrarPeliculas(endpoint).then((responseJson) => {
      setMovies(responseJson);
    });
  }, []);

  console.log(movies);
  return (
    <Layout>
      <div className="flex flex-wrap">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
      {/* <DetallePelicula /> */}
    </Layout>
  );
}

export default PeliculasEnCartelera;
