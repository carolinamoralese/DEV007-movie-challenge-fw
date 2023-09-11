import { useEffect } from "react";
import { peticionMostrarPeliculas } from "../../Components/servicios/peticion";
import { useContext } from "react";
import { MostarPeliculasContext } from "../../Context";
import Renderizado from "../../Components/Renderizado";

function PeliculasDestacadas() {
  const context = useContext(MostarPeliculasContext);
  const endpoint = "/movie/top_rated";
    
  useEffect(() => {
    peticionMostrarPeliculas(endpoint).then((responseJson) => {
      context.setMovies(responseJson);
    });
  }, []);

  return (
    <Renderizado />
  );
}

export default PeliculasDestacadas;
