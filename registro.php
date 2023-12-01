<?php
require_once("conexion.php");

$nameerror = $emailrror =$passerror = "";

$name = "";
$email = "";
$pass="";
$categoria = "";
$categoria2 = "";
$categoria3="";

if ($_SERVER["REQUEST_METHOD"] == "POST") {


    if (empty($_POST["name"])) {
        $nameerror = "nombre es requerido";
    } else {
        $name = test_input($_POST["name"]);

        if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
            $nameerror = "solo texto";
        }
    }

    
    if (empty($_POST["pass"])) {
        $passerror = "contraseña es requerida";
    }else {
        $pass = test_input($_POST["pass"]);
    }

    if (empty($_POST["email"])) {
        $emailerror = "correo es requerido";
    } else {
        $email = test_input($_POST["email"]);

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailerror = "Invalid email format";
        }
    }


function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    return $data;
}
echo $name,$email,$pass,$categoria,$categoria2,$categoria3;

$sql = "INSERT INTO user ('name', 'email', 'password', 'id_categoria1', 'id_categoria2', 'id_categoria3') VALUES ('$name', '$email', '$pass', '$categoria', '$categoria2', '$categoria3');
if ($conexion->query($sql) === TRUE) { 
    echo "Nuevo registro creado correctamente"; 
    header("location:login.php");
} else { 
    echo "Error: " . $sql . "<br>" . $conexion->error; 
} 

?>