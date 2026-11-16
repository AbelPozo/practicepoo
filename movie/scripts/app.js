import { Movie } from "./types/movie.js";

//Buscamos el contenedor donde mostraremos las películas
let movieList = document.getElementById("movie-list");

//Cargamos las películas del archivo JSON
fetch("./data/movies.json")
    .then(response => {
        console.log("Respuesta del JSON:", response.status);
        return response.json();
    })
    .then(data => {
        console.log("Películas cargadas:", data);

        data.forEach(movieData => {
            let movie = new Movie(
                movieData.title,
                movieData.director,
                movieData.year,
                movieData.rating
            );

            movieList.appendChild(movie.Render());
        });
    })
    .catch(error => {
        console.log("Error al cargar las películas:", error);
    });