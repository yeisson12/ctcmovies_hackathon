const apiKey = '711ffca8';
const youtubeApiKey = 'AIzaSyD3GXhq4P7NNF_bUcs1pDH76axkfwhJ7Ic';

document.querySelectorAll('.cag').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const categoria = this.textContent;
        buscarPeliculas(categoria);
    });
});

async function buscarPeliculas(categoria) {
    const searchTerm = document.querySelector('#ingresarPelicula').value;
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&type=movie&plot=full&genre=${categoria}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.Response === 'True') {
            await actualizarConIdYoutube(data.Search);
            generateMovieCards(data.Search);
        } else {
            displayError('No se encontraron resultados');
        }
    } catch (error) {
        console.error('Error en la solicitud a la API de OMDB:', error);
        displayError('Error en la conexión a la API');
    }
}


async function actualizarConIdYoutube(movies) {
    for (const movie of movies) {
        movie.youtubeID = await obtenerIdYoutube(movie.Title);
    }
}

async function obtenerIdYoutube(movieTitle) {
    const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(movieTitle)}&type=video&key=${youtubeApiKey}`;

    try {
        const response = await fetch(youtubeApiUrl);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            return data.items[0].id.videoId;
        } else {
            console.error('No se encontraron resultados de YouTube para:', movieTitle);
            return null;
        }
    } catch (error) {
        console.error('Error al obtener el ID de YouTube:', error);
        return null;
    }
}


function generateMovieCards(movies) {
    const movieCardsContainer = document.querySelector('#movie-cards');
    movieCardsContainer.innerHTML = '';

    movies.forEach(movie => {
        const cardCol = document.createElement('div');
        cardCol.classList.add('col');
        cardCol.innerHTML = `
            <div class="card-container" id="movie-${movie.imdbID}">
                <img src="${movie.Poster}" class="img" alt="${movie.Title} Poster">
                <div class="card">
                    <h5 class="Titulo">${movie.Title}</h5>
                    <h5 class="year">${movie.Year}</h5>
                    <button class="view-details" onclick="showDetails('${movie.imdbID}', '${movie.youtubeID}')">Ver Detalles</button>
                </div>
            </div>
        `;
        movieCardsContainer.appendChild(cardCol);
    });
}


function watchTrailer(youtubeID) {
    console.log(youtubeID);
    if (youtubeID) {
        const youtubeLink = `https://www.youtube.com/watch?v=${youtubeID}`;

        window.open(youtubeLink, '_blank');
    } else {
        // Manejar el caso en el que no hay un tráiler disponible
        console.error('Tráiler no disponible para esta película');
    }
}

function showDetails(movieId, youtubeID) {
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(movie => {
            // Llenar elementos en el modal con la información de la película
            document.querySelector('#movieTitle').textContent = `${movie.Title} (${movie.Year})`;
            document.querySelector('#moviePlot').textContent = `Descripción: ${movie.Plot}`;
            document.querySelector('#movieDirector').textContent = `Director: ${movie.Director}`;
            document.querySelector('#movieCast').textContent = `Reparto: ${movie.Actors}`;
            document.querySelector('#movieRating').textContent = `Calificación IMDB: ${movie.imdbRating}`;

            const trailerIframe = document.querySelector('#trailerIframe');
            if (youtubeID) {
                trailerIframe.src = `https://www.youtube.com/embed/${youtubeID}?autoplay=1`;
            } else {
                trailerIframe.src = ''; // Manejar el caso en el que no hay un tráiler disponible
            }

            const movieDetailsModal = new bootstrap.Modal(document.querySelector('#movieDetailsModal'));
            movieDetailsModal.show();
        })
        .catch(error => {
            console.error('Error al obtener detalles de la película:', error);
            // Manejo de errores
        });
}



