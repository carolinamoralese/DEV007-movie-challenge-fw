import React from "react";

function Card({ movie, onCardClick }) {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div
      className="bg-white cursor-pointer w-60 h-65 rounded-lg transform transition-transform hover:scale-105"
      onClick={() => onCardClick(movie)} // Llama a la función onCardClick al hacer clic en la tarjeta
    >
      <figure className="relative mb-4 w-full h-5/6 flex flex-col justify-center items-center">
        <img
          className="w-full h-full rounded-lg"
          src={`${imageUrl + movie.poster_path}`}
          alt={movie.overview}
          style={{ maxWidth: "80%", maxHeight: "90%" }}
        />
      </figure>
      <p className="flex flex-col items-center">
        <span className="text-s items-center font-medium mr-2 line-clamp-1">
          {movie.title}
        </span>
      </p>
    </div>
  );
}

export default Card;
