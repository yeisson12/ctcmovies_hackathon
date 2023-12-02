<?php
require_once("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $correo = $_POST["correo"];
    $contrasena = $_POST["contrasena"];

    // Verificar las credenciales (suponiendo una tabla llamada 'usuarios')
    $sql = "SELECT * FROM usuarios WHERE correo = '$correo'";
    $result = mysqli_query($conexion, $sql);

    if ($result) {
        $row = mysqli_fetch_assoc($result);
        if ($row && password_verify($contrasena, $row["contrasena"])) {
            echo "Inicio de sesión exitoso";
            // Aquí puedes redirigir al usuario a la página principal, por ejemplo.
        } else {
            echo "Credenciales incorrectas";
        }
    } else {
        echo "Error al iniciar sesión: " . mysqli_error($conexion);
    }
}

mysqli_close($conexion);
?>
