<?php 
$hostname = "localhost"; 
$username = "root"; 
$password = ""; 
$database = "ctcmovie_db"; 
$conexion = mysqli_connect($hostname, $username, $password, $database); 
if (!$conexion) { 
    die("No se ha podido conectar a la base de datos"); 
} 