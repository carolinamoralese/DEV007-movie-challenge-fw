import { useEffect } from "react";
import { peticionMostrarPeliculas } from "../../Components/servicios/peticion";
import { useContext } from "react";
import { MostarPeliculasContext } from "../../Context";
import Renderizado from "../../Components/Renderizado";


function PeliculasEnCartelera() {
  const context = useContext(MostarPeliculasContext);
  const endpoint = "/movie/now_playing";

  useEffect(() => {
    peticionMostrarPeliculas(endpoint).then((responseJson) => {
      context.setMovies(responseJson);
    });
  }, []);

  return(
    <Renderizado />
  )

}
export default PeliculasEnCartelera;
