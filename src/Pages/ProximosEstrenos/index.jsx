import { useEffect } from "react";
import { peticionMostrarPeliculas } from "../../Components/servicios/peticion";
import { useContext } from "react";
import { MostarPeliculasContext } from "../../Context";
import Renderizado from "../../Components/Renderizado";

function ProximosEstrenos() {
  const context = useContext(MostarPeliculasContext);
  const endpoint = "movie/upcoming";
    
  useEffect(() => {
    peticionMostrarPeliculas(endpoint).then((responseJson) => {
    context.setMovies(responseJson);
    });
  }, []);

  return(
    <Renderizado />
  )
}

export default ProximosEstrenos;
