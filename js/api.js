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
                <div class="card" id="movie-${movie.imdbID}">
                    <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title} Poster">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title} (${movie.Year})</h5>
                        <p>Type: ${movie.Type}</p>
                        ${movie.Plot ? `<p>Descripción: ${movie.Plot}</p>` : '<p>No hay descripción disponible</p>'}
                    </div>
                </div>
            `;
            movieCardsContainer.appendChild(cardCol);
        });
    } else {
        displayError('No se encontraron resultados');
    }
}

function displayError(message) {
    const resultadoContainer = document.querySelector('#resultado');
    resultadoContainer.innerHTML = `<p style="color: red;">${message}</p>`;
}
