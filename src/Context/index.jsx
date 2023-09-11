import { createContext, useState } from "react";

export const MostarPeliculasContext = createContext({
    movies:[],
    setMovies:() =>{},
    openModal:()=>{},
    closeModal:()=>{},
    isModalOpen:null,
    selectedMovie:null
});

export const MostarPeliculasProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };


  return (
    <MostarPeliculasContext.Provider
      value={{
        movies, //se manda el valor a leer y el valor a modificar a todos los hijos
        setMovies,
        openModal,
        closeModal,
        isModalOpen,
        selectedMovie,
      }}
    >
      {children}
    </MostarPeliculasContext.Provider>
  );
};
