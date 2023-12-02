const apiKey = '711ffca8';

function buscarPeliculas() {
    const searchTerm = document.querySelector('#ingresarPelicula').value;
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            generateMovieCards(data.Search);
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
                        <h5 class="Titulo">${movie.Title} (${movie.Year})</h5>
                        <p class="t_pelicula">Type: ${movie.Type}</p>
                        <p class="descripcion">${movie.Plot}</p>
                    </div>
                </div>
            `;

            // Agregar evento de hover para mostrar detalles
            cardCol.addEventListener('mouseover', () => showDetails(movie.imdbID));

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
            document.querySelector('#moviePlot').textContent = `Descripcion ${movie.Plot}`;
            const detail=movie.Plot;
            detail.innerHTML;
            
        })
        .catch(error => {
            console.error('Error al obtener detalles de la película:', error);
            displayError('Error al obtener detalles de la película');
        });
}

function displayError(message) {
    const resultadoContainer = document.querySelector('#resultado');
    resultadoContainer.innerHTML = `<p style="color: red;">${message}</p>`;
}
