import Layout from "../Layout";
import Card from "../Card";
import { useContext } from "react";
import { MostarPeliculasContext } from "../../Context";
import Modal from "../Modal";

function Renderizado() {
  const context = useContext(MostarPeliculasContext);
  const renderizadoConFiltro = () => {
    if (context.buscarPeliculas?.length > 0) {
      if (context.peliculasFiltradas?.length > 0) {
        return (
          <div className="flex flex-wrap">
            {context.peliculasFiltradas.map((movie) => (
              <Card
                key={movie.id}
                movie={movie}
                onCardClick={() => context.openModal(movie)}
              />
            ))}
          </div>
        );
      } else {
        return <div>No se encontraron coincidencias</div>;
      }
    } else {
      return (
        <div className="flex flex-wrap">
          {context.movies.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              onCardClick={() => context.openModal(movie)}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <Layout>
      <div className="mt-0">
        <input
          type="text"
          placeholder="Ingresa el nombre de la película"
          className="rounded-lg border border-black w-80 h-8 p-4 mb-6 focus:outline-none text-center"
          onChange={(event) => context.setBuscarPeliculas(event.target.value)}
        />
      </div>

      {renderizadoConFiltro()}
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

export default Renderizado;
