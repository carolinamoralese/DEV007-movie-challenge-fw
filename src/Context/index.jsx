import { createContext, useEffect, useState } from "react";

export const MostarPeliculasContext = createContext({
  movies: [],
  setMovies: () => {},
  openModal: () => {},
  closeModal: () => {},
  isModalOpen: null,
  selectedMovie: null,
  buscarPeliculas: [],
  setBuscarPeliculas: () => {},
  setFiltroPeliculas: () => {},
  peliculasFiltradas: null,
});

export const MostarPeliculasProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [buscarPeliculas, setBuscarPeliculas] = useState(null);
  const [peliculasFiltradas, setFiltroPeliculas] = useState(null);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  const filtrarPeliculasPorTitulo = (movies, buscarPeliculas) => {
    return movies?.filter(
      pelicula => pelicula.title.toLowerCase().includes(buscarPeliculas.toLowerCase())
    );
  };
  

  useEffect(() => {
    if (buscarPeliculas){
      setFiltroPeliculas(
        filtrarPeliculasPorTitulo(movies, buscarPeliculas)
      );
    }
  }, [movies, buscarPeliculas]);


  return (
    <MostarPeliculasContext.Provider
      value={{
        movies, //se manda el valor a leer y el valor a modificar a todos los hijos
        setMovies,
        openModal,
        closeModal,
        isModalOpen,
        selectedMovie,
        setBuscarPeliculas,
        buscarPeliculas,
        peliculasFiltradas,
      }}
    >
      {children}
    </MostarPeliculasContext.Provider>
  );
};