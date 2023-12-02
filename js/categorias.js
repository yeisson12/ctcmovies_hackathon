const apiKey = '711ffca8';

  // Agregar controladores de eventos a los enlaces de categoría
  document.querySelectorAll('.cag').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const categoria = this.textContent;
      buscarPeliculas(categoria);
    });
  });

  function buscarPeliculas(categoria) {
    const searchTerm = document.querySelector('#ingresarPelicula').value;
    // Ajustar la URL de la API para incluir la categoría
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&type=movie&plot=full&genre=${categoria}`;

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