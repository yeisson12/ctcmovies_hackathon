<?php
require_once("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $contrasena = password_hash($_POST["contrasena"], PASSWORD_DEFAULT);

    // Insertar datos en la base de datos (suponiendo una tabla llamada 'usuarios')
    $sql = "INSERT INTO usuarios (nombre, correo, contrasena) VALUES ('$nombre', '$correo', '$contrasena')";
    if (mysqli_query($conexion, $sql)) {
        echo "Registro exitoso";
    } else {
        echo "Error al registrar: " . mysqli_error($conexion);
    }
}

mysqli_close($conexion);
?>
