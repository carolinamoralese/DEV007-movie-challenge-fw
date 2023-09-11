export function peticionMostrarPeliculas(endpoint) {
  const apiKey = "9399d9ba15211a26c3c2ff8ecbb4bab2";
  const baseUrl = "https://api.themoviedb.org/3/";
  const apiUrl = `${baseUrl}${endpoint}?api_key=${apiKey}`;
  console.log(apiUrl);

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo obtener la respuesta de la API");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      return data.results; // Devolver los resultados de películas
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
      throw error; // Propagar el error para que pueda ser manejado en el componente que llama a esta función
    });
}
