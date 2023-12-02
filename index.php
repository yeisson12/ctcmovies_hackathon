<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>CTCMovies</title>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">CTCMovies</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <input class="form-control me-2" type="search" id="ingresarPelicula" placeholder="Busca una película"
                        aria-label="Search">
                    <button class="btn btn-outline-success" onclick="buscarPeliculas()">Buscar</button>
                    <button class="btn btn-outline-danger" href="cerrar.php">Cerrar sesión</button>
                </div>
            </div>
        </nav>
    </header>

    <section>
        <div class="pelicula" id="movie-cards">
        <p id="moviePlot"></p>
        <p id="movieDirector"></p>
        <p id="movieCast"></p>
        <p id="movieRating"></p>
        </div>
    </section>
    <!-- Modal para mostrar detalles de la película -->
<div class="modal" tabindex="-1" id="movieDetailsModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="movieTitle"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p id="moviePlot"></p>
        <p id="movieDirector"></p>
        <p id="movieCast"></p>
        <p id="movieRating"></p>
      </div>
    </div>
  </div>
</div>


    <script src="js/api.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
</body>

</html>
