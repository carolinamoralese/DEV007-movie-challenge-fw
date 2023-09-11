import { useEffect } from "react";
import Renderizado from "../../Components/Renderizado";
import { peticionMostrarPeliculas } from "../../Components/servicios/peticion";
import { useContext } from "react";
import { MostarPeliculasContext } from "../../Context";

function Home() {
  const context = useContext(MostarPeliculasContext);
  const endpoint = "movie/popular";

  useEffect(() => {
    peticionMostrarPeliculas(endpoint).then((responseJson) => {
      context.setMovies(responseJson)
    });
  }, []);

  return (
   <Renderizado >
   </Renderizado>
  );
}

export default Home;
