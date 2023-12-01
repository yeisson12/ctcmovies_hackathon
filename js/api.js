const apiKey = '711ffca8';

function buscarPeliculas() {
    const searchTerm = document.querySelector('#ingresarPelicula').value;
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResultado(data);
        })
        .catch(error => {
            console.error('Error en la solicitud a la API:', error);
            displayError('Error en la conexión a la API');
        });
}

function displayResultado(data) {
    const resultadoContainer = document.querySelector('#resultado');
    resultadoContainer.innerHTML = '';

    if (data.Error) {
        displayError(data.Error);
    } else {
        data.Search.forEach(movie => {
            const elementoPelicula = document.createElement('div');
            elementoPelicula.innerHTML = `
                <h3>${movie.Title} (${movie.Year})</h3>
                <p>Type: ${movie.Type}</p>
                <img src="${movie.Poster}" alt="${movie.Title} Poster">
                ${movie.Plot ? `<p>Descripción: ${movie.Plot}</p>` : '<p>No hay descripción disponible</p>'}
            `;
            resultadoContainer.appendChild(elementoPelicula);
        });
    }
}

function displayError(message) {
    const resultadoContainer = document.querySelector('#resultado');
    resultadoContainer.innerHTML = `<p style="color: red;">${message}</p>`;
}
