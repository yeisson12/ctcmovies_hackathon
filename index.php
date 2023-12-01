<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>ingreso</h1>
    <a href="close.php">cerrar</a>
  
    <input type="text" id="ingresarPelicula" placeholder="busca una pelicula">
<button onclick="buscarPeliculas()">Buscar</button>

<div id="resultado"></div>

<script src="js/api.js"></script>
</body>
</html>