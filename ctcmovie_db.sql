-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-12-2023 a las 18:43:58
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ctcmovie_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preferencia_usuario`
--

CREATE TABLE `preferencia_usuario` (
  `idpreferencia_usuario` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `categoria` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `preferencia_usuario`
--

INSERT INTO `preferencia_usuario` (`idpreferencia_usuario`, `id_user`, `categoria`) VALUES
(1, 17, 'Acción'),
(2, 17, 'Comedia'),
(3, 18, 'Acción'),
(4, 18, 'Comedia'),
(5, 19, 'Acción'),
(6, 19, 'Comedia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `iduser` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`iduser`, `name`, `email`, `password`) VALUES
(11, '', '', ''),
(12, '', '', ''),
(13, '', '', ''),
(14, '', '', ''),
(15, '', '', ''),
(16, '', '', ''),
(17, 'yxzon', 'lagarejo62@gmail.com', '12345'),
(18, 'yxzon', 'lagarejo62@gmail.com', '1'),
(19, 'yxzon', 'lagarejo62@gmail.com', '1');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `preferencia_usuario`
--
ALTER TABLE `preferencia_usuario`
  ADD PRIMARY KEY (`idpreferencia_usuario`),
  ADD KEY `fkuser_idx` (`id_user`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`iduser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `preferencia_usuario`
--
ALTER TABLE `preferencia_usuario`
  MODIFY `idpreferencia_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `preferencia_usuario`
--
ALTER TABLE `preferencia_usuario`
  ADD CONSTRAINT `fkuser` FOREIGN KEY (`id_user`) REFERENCES `user` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
