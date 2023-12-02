<?php
include 'conexion.php';

// Verificar si se enviaron datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    echo $_POST['pass'];
    $password = isset($_POST['pass']);

    // Insertar el nuevo usuario en la tabla `usuarios`
    $sql_insert_usuario = "INSERT INTO user (name, email, password) VALUES ('$name', '$email', '$password')";
    if ($conexion->query($sql_insert_usuario) === TRUE) {
        $id_usuario = $conexion->insert_id;  // Obtener el ID del usuario recién registrado

        // Verificar si se seleccionaron categorías y registrar las preferencias
        if (!empty($_POST['categorias'])) {
            foreach ($_POST['categorias'] as $categoria) {
                $sql_insert_preferencia = "INSERT INTO preferencia_usuario (id_user, categoria) VALUES ('$id_usuario', '$categoria')";
                $conexion->query($sql_insert_preferencia);
            }
        }

        echo "Registro exitoso. ¡Gracias por registrarte!";
    } else {
        echo "Error al registrar el usuario: " . $conexion->error;
    }
} else {
    echo "Error: Método de solicitud incorrecto.";
}

// Cerrar la conexión
$conexion->close();
?>
