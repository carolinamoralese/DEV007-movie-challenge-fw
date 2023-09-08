import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";

function Home() {
  const [movies, setMovies] = useState([]);
  const apiKey = "9399d9ba15211a26c3c2ff8ecbb4bab2";
  const baseUrl = "https://api.themoviedb.org/3/";
  const endpoint = "movie/popular";
  const apiUrl = `${baseUrl}${endpoint}?api_key=${apiKey}`;
  console.log(apiUrl, 90);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      });
  }, [apiUrl]);

  console.log(movies);
  return (
    <Layout>
      <div className="flex flex-wrap">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
