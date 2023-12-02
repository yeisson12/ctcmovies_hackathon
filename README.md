# ctcmovies_hackathon

# Nombre del Proyecto

Documentación del Proyecto: CTCMovies

# Introducción
Este documento proporciona una descripción detallada del código implementado para el proyecto CTCMovies. El proyecto se centra en crear una aplicación web que permite a los usuarios buscar y obtener información sobre películas, así como ver trailers de YouTube relacionados.

# Archivos Principales
api.js: Contiene funciones para interactuar con las API de OMDB y YouTube, así como funciones para manipular la interfaz de usuario.

# index.html: La página principal de la aplicación web con la interfaz de usuario y elementos HTML necesarios.

# login.php: La página de inicio de sesión y registro con funcionalidades PHP para la autenticación.

# Funcionalidades Clave
1. Búsqueda de Películas (buscarPeliculas)
La función buscarPeliculas realiza una solicitud a la API de OMDB para buscar películas según un término de búsqueda y una categoría específica. Los resultados se muestran en tarjetas en la interfaz de usuario.

2. Actualización con ID de YouTube (actualizarConIdYoutube)
Esta función actualiza la lista de películas con sus respectivos ID de YouTube llamando a la función obtenerIdYoutube para cada película.

3. Obtención de ID de YouTube (obtenerIdYoutube)
La función obtenerIdYoutube realiza una solicitud a la API de YouTube para obtener el ID de un video relacionado con el título de la película. Este ID se utiliza para mostrar el tráiler de YouTube en la interfaz de usuario.

4. Generación de Tarjetas de Películas (generateMovieCards)
La función generateMovieCards crea tarjetas de películas dinámicamente y las muestra en la interfaz de usuario, con información como título, año y un botón para ver detalles.

5. Ver Detalles y Ver Tráiler (showDetails y watchTrailer)
Estas funciones permiten al usuario ver detalles completos de una película, incluida la trama, el director, el elenco y la calificación OMDB. También se proporciona un enlace para ver el tráiler de YouTube.

# Interfaz de Usuario
La interfaz de usuario incluye una barra de navegación, una sección para seleccionar categorías, una barra de búsqueda, y una sección para mostrar las tarjetas de películas. Se utiliza Bootstrap para mejorar el diseño y la responsividad.

# Uso
Ingresar un término de búsqueda y seleccionar una categoría.
Hacer clic en "Buscar" para obtener resultados.
Explorar las tarjetas de películas y hacer clic en "Ver Detalles" para obtener información adicional.
En la vista de detalles, hacer clic en "Ver Tráiler" para ver el tráiler de YouTube.

# Tecnologías Utilizadas
HTML5,
CSS3,
JavaScript (ES6+),
Bootstrap,
PHP (para la autenticación)

# Conclusión
El proyecto CTCMovies busca proporcionar a los usuarios una experiencia intuitiva y atractiva para explorar información y trailers de películas. El código se ha documentado para facilitar la comprensión y colaboración entre desarrolladores.
