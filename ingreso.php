<?php
session_start();
include 'conexion.php';

$user = $_POST['email'];
$pass = $_POST['pass'];

$validate_login = mysqli_query($conexion, "SELECT * FROM user WHERE email = '$user' AND password  = '$pass'");

if (mysqli_num_rows($validate_login) > 0) {
  $_SESSION['email'] = $user; // Corregido de $email a $user

  header("Location: index.php");
  exit;
} else {
  echo '
        <script>
            alert("ESTE USUARIO NO EXISTE, POR FAVOR VERIFIQUE LOS DATOS INTRODUCIDOS E INTENTE NUEVAMENTE");
            window.location = "login.php";    
        </script>
    ';
  exit;
}
?>

