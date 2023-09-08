function Card({movie}){
  const imageUrl = "https://image.tmdb.org/t/p/original"
    return(
        <div className="bg-white cursor-pointer w-60 h-65 rounded-lg">
        <figure className="relative mb-4 w-full h-5/6 flex flex-col justify-center items-center">
          <img
            className="w-full h-full rounded-lg"
            src={`${imageUrl + movie.poster_path}`}
            alt={movie.overview}
            style={{ maxWidth: "80%", maxHeight: "90%" }}
          />
        </figure>
        <p className="flex flex-col items-center">
          <span className="text-s items-center font-medium mr-2 line-clamp-2">
            {movie.title}
          </span>
          {/* <span className="text-xs font-light mr-2">{movie.release_date}</span> */}
        </p>
      </div>
    )
}

export default Card