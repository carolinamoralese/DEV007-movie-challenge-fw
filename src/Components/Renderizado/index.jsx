import Layout from "../Layout"
import Card from "../Card"
import { useContext } from "react";
import { MostarPeliculasContext } from "../../Context";
import Modal from "../Modal";


function Renderizado (){
    const context = useContext(MostarPeliculasContext);
    return (
        <Layout>
          <div className="flex flex-wrap">
            {context.movies.map((movie) => (
              <Card
                key={movie.id}
                movie={movie}
                onCardClick={() => context.openModal(movie)}
              />
            ))}
          </div>
          {context.isModalOpen && (
            <Modal
              isOpen={context.isModalOpen}
              closeModal={context.closeModal}
              movie={context.selectedMovie}
            />
          )}
        </Layout>
      )
}

export default Renderizado