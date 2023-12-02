// Clave de API para OMDB
const apiKey = '711ffca8';

// Función para buscar películas
function buscarPeliculas() {
    const searchTerm = document.querySelector('#ingresarPelicula').value;
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                generateMovieCards(data.Search);
            } else {
                displayError('No se encontraron resultados');
            }
        })
        .catch(error => {
            console.error('Error en la solicitud a la API:', error);
            displayError('Error en la conexión a la API');
        });
}

// Función para generar tarjetas de películas
function generateMovieCards(movies) {
    const movieCardsContainer = document.querySelector('#movie-cards');
    movieCardsContainer.innerHTML = '';

    if (movies) {
        movies.forEach(movie => {
            const cardCol = document.createElement('div');
            cardCol.classList.add('col');
            cardCol.innerHTML = `
                <div class="card-container" id="movie-${movie.imdbID}">
                    <img src="${movie.Poster}" class="img" alt="${movie.Title} Poster">
                    <div class="card">
                        <h5 class="Titulo">${movie.Title}</h5>
                        <h5 class="Titulo">${movie.Year}</h5>
                        <button class="view-details" onclick="showDetails('${movie.imdbID}')">Ver Detalles</button>
                    </div>
                </div>
            `;
            movieCardsContainer.appendChild(cardCol);
        });
    } else {
        displayError('No se encontraron resultados');
    }
}

// Función para mostrar detalles de la película en un modal
function showDetails(movieId) {
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(movie => {
            // Llenar elementos en el modal con la información de la película
            document.getElementById('movieTitle').textContent = `${movie.Title} (${movie.Year})`;
            document.getElementById('moviePlot').textContent = `Descripción: ${movie.Plot}`;
            document.getElementById('movieDirector').textContent = `Director: ${movie.Director}`;
            document.getElementById('movieCast').textContent = `Reparto: ${movie.Actors}`;
            document.getElementById('movieRating').textContent = `Calificación IMDB: ${movie.imdbRating}`;

            // Mostrar el modal
            const movieDetailsModal = new bootstrap.Modal(document.getElementById('movieDetailsModal'));
            movieDetailsModal.show();
        })
        .catch(error => {
            console.error('Error al obtener detalles de la película:', error);
            // Manejo de errores
        });
}





