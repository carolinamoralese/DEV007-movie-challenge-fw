function Modal({ isOpen, closeModal, movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  if (!isOpen || !movie) {
    return null;
  }
  console.log(movie, 100);
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="modal-overlay bg-black opacity-75 absolute inset-0"
        onClick={closeModal}
      />
      <div className="bg-white w-3/5 h-3/5 rounded-lg shadow-lg relative">
        {/* Contenido del modal */}
        <div className="grid grid-cols-2 gap-2 p-4">
          <div className="col-span-1">
            <img className="relative"
              src={`${imageUrl + movie.poster_path}`}
              alt={movie.overview}
              style={{ maxWidth: "60%"}}
            />
          </div>
          <div className="col-span-1">
            <button
              className="absolute top-0 right-2 mt-4 px-4 py-2 bg-black text-white rounded hover:bg-blue-600"
              onClick={closeModal}
            >
              X
            </button>
            <h2 className="text-3xl font-bold mb-2 right-0">{movie.title}</h2>
            <p className="text-xl mb-4">{movie.release_date}</p>
            <p className="text-justify pr-4">{movie.overview}</p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;