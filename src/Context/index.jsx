import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [isDetallePeliculaOpen, setIsDetallePeliculaOpen] = useState(false);
  const abrirDetallePelicula = () => setIsDetallePeliculaOpen(true);
  const cerrarDetallePelicula = () => setIsDetallePeliculaOpen(false);
  return (
    <MovieContext.Provider 
      value={{
        abrirDetallePelicula,
        cerrarDetallePelicula,
        isDetallePeliculaOpen,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
