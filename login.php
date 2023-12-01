<?php 
//------------------------------------------------------login
require_once("conexion.php");

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="css/login.css">

</head>
<body>

<div class="sidenav">
    <div class="login-main-text">
        <h2>Application<br> Login Page</h2>
        <p>Login or register from here to access.</p>
    </div>
</div>

<div class="main">
    <div class="col-md-6 col-sm-12">
        <div class="login-form" id="loginForm">
            <form action="ingresoAndRegister.php" method="post">
                <div class="form-group">
                    <label>Correo</label>
                    <input type="text" class="form-control" name="email" placeholder="Usuario">
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" class="form-control" name="pass" placeholder="Contraseña">
                </div>
                <button type="submit" class="btn btn-black">Ingresar</button>
                <button onclick="showRegisterForm()" class="btn btn-secondary">Registrar</button>
            </form>
        </div>

        <div class="register-form" id="registerForm" style="display: none;">
            <form action="login.php" method="post">
                <div class="form-group">
                    <label>Nombre de usuario</label>
                    <input type="text" class="form-control" placeholder="Usuario">
                </div>
                <div class="form-group">
                    <label>Correo</label>
                    <input type="email" class="form-control" placeholder="Correo">
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" class="form-control" placeholder="Password">
                </div>
                <div class="form-group">
                    <label>categoria favorita</label>
                    <select class="form-input form-control" name="categoria" id="categoria">
                        <option selected>categoria favorita</option>
                        <?php
                        include "conexion.php";
                        $sql = "SELECT * FROM categoria";
                        $result = $conexion->query($sql);
                        while ($row = $result->fetch_assoc()) {
                          echo "<option value='" . $row["idcategoria"] . "'>" . $row["nombre"] . "</option>";
                        }
                        ?>
                      </select>
                </div>
                <div class="form-group">
                    <label>categoria 2</label>
                    <select class="form-input form-control" name="categoria" id="categoria">
                        <option selected>categoria 2</option>
                        <?php
                        include "conexion.php";
                        $sql = "SELECT * FROM categoria";
                        $result = $conexion->query($sql);
                        while ($row = $result->fetch_assoc()) {
                          echo "<option value='" . $row["idcategoria"] . "'>" . $row["nombre"] . "</option>";
                        }
                        ?>
                      </select>
                </div>
                <div class="form-group">
                    <label>categoria 3</label>
                    <select class="form-input form-control" name="categoria" id="categoria">
                        <option selected>categoria 3</option>
                        <?php
                        include "conexion.php";
                        $sql = "SELECT * FROM categoria";
                        $result = $conexion->query($sql);
                        while ($row = $result->fetch_assoc()) {
                          echo "<option value='" . $row["idcategoria"] . "'>" . $row["nombre"] . "</option>";
                        }
                        ?>
                      </select>
                </div>
                <button onclick="showLoginForm()" class="btn btn-secondary">Regresar al Ingreso</button>
                <button type="submit" class="btn btn-black">Resgistrar</button>
            </form>
        </div>
    </div>
</div>

<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="js/login y registro.js"></script>

</body>
</html>
