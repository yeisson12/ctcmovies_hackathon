<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <link rel="stylesheet" href="css/styles.css">
    <title>CTC Login</title>
</head>
<body>
    <div class="container_CTC">
        <div class="signin-signup">
            <form action="ingreso.php" method="post" class="sign-in-form">
                <h2 class="title">Iniciar Sesión</h2><!-- Iniciar session-  -   -   - -->
                <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input type="text" name="email" placeholder="Correo">
                </div>
                <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input type="password" name="pass" placeholder="Contraseña">
                </div>
                <input type="submit" value="Ingresar" class="btn">
                <p class="account-text">¿No estás registrado? <a href="#" id="sign-up-btn2">Registrarse</a></p>
            </form>
            <form action="registro.php" method="post" class="sign-up-form">
                <h2 class="title">Registrarse</h2><!-- Registro -   -   -   -   -   -   -->
                <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input type="text" name="name" placeholder="Usuario">
                </div>
                <div class="input-field">
                    <i class="fas fa-envelope"></i>
                    <input type="text" name="email" placeholder="Correo">
                </div>
                <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input type="password" name="pass" placeholder="Contraseña">
                </div>
                <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <label for="">Accion</label>
                    <input type="checkbox" name="categorias[]" value="Acción" placeholder="Acción">
                </div>
                <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <label for="">Comedia</label>
                    <input type="checkbox" name="categorias[]" value="Comedia" placeholder="Comedia">
                </div>
                <input type="submit" value="Registrarse" class="btn">
                <p class="account-text">¿Ya tienes una cuenta? <a href="#" id="sign-in-btn2">Iniciar Sesión</a></p>
            </form>
        </div>
        <div class="panels-container_CTC">
            <div class="panel left-panel">
                <div class="contenido_Sub_Panel">
                    <h3>¿Ya eres miembro?</h3>
                    <p>Inicia sesión para acceder a todas las funciones de la página</p>
                    <button class="btn" id="sign-in-btn">Iniciar Sesión</button>
                </div>
                <img src="signin.svg" alt="" class="image">
            </div>
            <div class="panel right-panel">
                <div class="contenido_Sub_Panel">
                    <h3> Registrate para acceder a las funciones de la página</h3>
                    <button class="btn" id="sign-up-btn">Registrarse</button>
                </div>
            </div>
        </div>
    </div>
    <script src="js/Login_Registro.js"></script>
</body>
</html>