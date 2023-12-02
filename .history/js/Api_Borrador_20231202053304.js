const apiKey = '711ffca8';

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

function loadRecommendedMovies() {
    const recommendedMovieIds = ['tt0120737', 'tt0076759', 'tt0468569']; // IDs de películas recomendadas (puedes agregar más)
  
    const carouselInner = document.querySelector('#recommendedMoviesCarousel .carousel-inner');
  
    recommendedMovieIds.forEach(movieId => {
      const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(movie => {
          const carouselItem = document.createElement('div');
          carouselItem.classList.add('carousel-item');
  
          const movieDetails = `
            <img src="${movie.Poster}" class="d-block w-100" alt="${movie.Title}">
            <div class="carousel-caption d-none d-md-block">
              <h5>${movie.Title} (${movie.Year})</h5>
              <p>${movie.Plot}</p>
              <!-- Puedes agregar más detalles aquí -->
            </div>
          `;
  
          carouselItem.innerHTML = movieDetails;
          carouselInner.appendChild(carouselItem);
        })
        .catch(error => {
          console.error('Error al obtener detalles de la película:', error);
          // Manejo de errores
        });
    });
  }
  
  // Llamar a la función para cargar películas recomendadas cuando la página se cargue
  document.addEventListener('DOMContentLoaded', loadRecommendedMovies);
  