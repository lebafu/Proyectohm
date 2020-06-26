-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-03-2020 a las 02:14:11
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tesis2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `area_tesis`
--

CREATE TABLE `area_tesis` (
  `id` bigint(20) NOT NULL,
  `area_tesis` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `area_tesis`
--

INSERT INTO `area_tesis` (`id`, `area_tesis`) VALUES
(2, 'IA'),
(3, 'Imagenes'),
(4, 'Ingenieria de Software'),
(1, 'Inteligencia de negocios'),
(5, 'Investigacion de operaciones'),
(7, 'Mineria de datos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacora`
--

CREATE TABLE `bitacora` (
  `id` int(20) UNSIGNED NOT NULL,
  `id_tesis` bigint(20) UNSIGNED NOT NULL,
  `comentario` text NOT NULL,
  `acuerdo` text NOT NULL,
  `actual` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `bitacora`
--

INSERT INTO `bitacora` (`id`, `id_tesis`, `comentario`, `acuerdo`, `actual`, `created_at`, `update_at`) VALUES
(1, 113, 'El alumno muestra su avance version 1 de aplicacion con documentacion correspondiente blablabbla', 'El alumno se compromete a desarrollar diagramas de casos de uso y matriz de trazabilidad. Para la proxima semana 19 dicuenvre', 0, '2019-12-10 03:00:00', NULL),
(2, 113, 'El alumno consigue terminar el diagrama de casos de uso, diagrama de clases, y el login de los usuarios.', 'El alumno se compromete a crear la base de datos y añadir 2 tablas nueva para la semana del 26 diciembre.', 0, '2019-12-11 06:12:09', '2019-12-11 06:12:09'),
(5, 113, 'Revision Roberto Ahumada', 'Avance abcde', 0, '2019-12-12 09:21:34', '2019-12-12 09:21:34'),
(6, 109, 'Los alumnos entregan documentacion del programa con informacion de codigo comentado, diagrama de casos dee uso, etc.', 'El alumno se compromete entregar la ultima version del sistema para el 17/12/2019', 0, '2019-12-11 06:00:00', '2019-12-16 00:20:33'),
(7, 63, 'El alumno se reune por primera vez con el profesor y definen los capitulos de la tesis.', 'El alumno se compromete a realizar el diagrama de casos de uso...para el 19/12/2019', 0, '2019-12-16 23:27:46', '2019-12-16 23:27:46'),
(8, 63, 'El alumno cumple con los diagramas , se reeunirá en semana de 23/12 con profesor', 'El alumno empezará a generar las primeras tablas de la bd.', 0, '2019-12-16 23:29:21', '2019-12-16 23:29:21'),
(9, 109, 'Comeentario2', 'Acuerdo2', 0, '2019-12-17 07:39:10', '2019-12-17 07:39:10'),
(15, 113, 'No hay comentarios', 'No hay acuerdos', 0, '2019-12-18 18:08:34', '2019-12-18 18:08:34'),
(18, 113, 'No hay comentarios', 'No hay acuerdos', 0, '2019-12-18 18:22:59', '2019-12-18 18:22:59'),
(64, 113, 'No hay comentarios', 'No hay acuerdos', 0, '2019-12-18 22:21:08', '2019-12-18 22:21:08'),
(68, 63, 'No hay comentarios', 'No hay acuerdos', 0, '2019-12-18 22:35:35', '2019-12-18 22:35:35'),
(69, 63, 'No hay comentarios', 'No hay acuerdos', 0, '2019-12-18 22:37:11', '2019-12-18 22:37:11'),
(70, 63, 'No hay comentarios', 'No hay acuerdos', 0, '2019-12-18 22:41:14', '2019-12-18 22:41:14'),
(71, 63, 'No hay comentarios', 'No hay acuerdos', 0, '2019-12-18 22:42:34', '2019-12-18 22:42:34'),
(73, 109, 'No hay comentarios', 'No hay acuerdos', 1, '2019-12-18 22:48:59', '2019-12-18 22:48:59'),
(78, 113, 'No hay comentarios', 'No hay acuerdos', 0, '2019-12-18 23:04:43', '2019-12-18 23:04:43'),
(93, 113, 'No hay comentarios', 'No hay acuerdos', 0, '2019-12-19 00:17:53', '2019-12-19 00:17:53'),
(99, 113, 'No hay comentarios', 'No hay acuerdos', 0, '2019-12-19 00:29:15', '2019-12-19 00:29:15'),
(100, 63, 'No hay comentarios', 'No hay acuerdos', 0, '2019-12-19 00:47:09', '2019-12-19 00:47:09'),
(101, 113, 'No hay comentarios', 'No hay acuerdos', 0, '2019-12-19 13:49:08', '2019-12-19 13:49:08'),
(102, 113, 'No hay comentarios', 'No hay acuerdos', 0, '2019-12-19 15:10:42', '2019-12-19 15:10:42'),
(104, 113, 'No hay comentarios', 'No hay acuerdos', 1, '2019-12-19 16:40:22', '2019-12-19 16:40:22'),
(105, 63, 'Escriba aqui el comentario', 'Escriba aqui el acuerdo', 1, '2020-01-13 01:29:36', '2020-01-13 01:29:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `capitulos`
--

CREATE TABLE `capitulos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cap1` text NOT NULL,
  `cap2` text NOT NULL,
  `cap3` text DEFAULT NULL,
  `cap4` text DEFAULT NULL,
  `cap5` text DEFAULT NULL,
  `cap6` text DEFAULT NULL,
  `avance_cap1` int(11) NOT NULL,
  `avance_cap2` int(11) NOT NULL,
  `avance_cap3` int(11) DEFAULT NULL,
  `avance_cap4` int(11) DEFAULT NULL,
  `avance_cap5` int(11) DEFAULT NULL,
  `avance_cap6` int(11) DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `capitulos`
--

INSERT INTO `capitulos` (`id`, `cap1`, `cap2`, `cap3`, `cap4`, `cap5`, `cap6`, `avance_cap1`, `avance_cap2`, `avance_cap3`, `avance_cap4`, `avance_cap5`, `avance_cap6`, `fecha`) VALUES
(63, 'Introduccion', 'Marco Teorico', 'Desarrollo', NULL, NULL, NULL, 10, 10, 5, 5, 5, NULL, '2019-12-17 04:37:21'),
(109, 'Diagrama de casos de usosss', 'Diagrama de modelamiento de procesos', 'Versión numero 1 del programa', NULL, NULL, NULL, 20, 20, 20, NULL, NULL, NULL, '2019-12-13 22:59:01'),
(118, 'Nombre Capitulo 1 Tesis', 'Nombre Capitulo 2 Tesis', NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, '2020-03-17 20:56:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comision`
--

CREATE TABLE `comision` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_profesor_guia` int(11) DEFAULT NULL,
  `nombre_alumno` varchar(255) NOT NULL,
  `profesor1_comision` varchar(255) DEFAULT NULL,
  `coguia` int(11) DEFAULT NULL,
  `profesor2_comision` varchar(255) DEFAULT NULL,
  `profesor3_comision` varchar(255) DEFAULT NULL,
  `profesor1_externo` varchar(255) DEFAULT NULL,
  `profesor1_grado_academico` varchar(255) DEFAULT NULL,
  `sexo1` varchar(20) DEFAULT NULL,
  `correo_profe1_externo` varchar(255) DEFAULT NULL,
  `institucion1` varchar(255) DEFAULT NULL,
  `codigo_postal1` int(7) DEFAULT NULL,
  `profe2_externo` varchar(255) DEFAULT NULL,
  `sexo2` varchar(15) DEFAULT NULL,
  `profe2_grado_academico` varchar(255) DEFAULT NULL,
  `correo_profe2_externo` varchar(255) DEFAULT NULL,
  `institucion2` varchar(255) DEFAULT NULL,
  `codigo_postal2` int(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comision`
--

INSERT INTO `comision` (`id`, `id_profesor_guia`, `nombre_alumno`, `profesor1_comision`, `coguia`, `profesor2_comision`, `profesor3_comision`, `profesor1_externo`, `profesor1_grado_academico`, `sexo1`, `correo_profe1_externo`, `institucion1`, `codigo_postal1`, `profe2_externo`, `sexo2`, `profe2_grado_academico`, `correo_profe2_externo`, `institucion2`, `codigo_postal2`) VALUES
(8, 11, 'Carlos Andres Cancino Duran', 'Xaviera Lopez', NULL, 'Paulo Gonzalez Gutierrez', 'Ninguno', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 17, 'Oscar Raul Perez Fernandez', 'Hugo Araya Carrasco', NULL, 'Paulo Gonzalez Gutierrez', 'Ninguno', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(16, 12, 'Rodrigo Chavez', 'Hugo Araya Carrasco', NULL, 'Marco Toranzo Cespedes', 'Ninguno', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(18, 17, 'Camilo Gonzalo Cavieres Perez', 'Paulo Gonzalez Gutierrez', NULL, 'Hugo Araya Carrasco', 'Ninguno', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(19, 17, 'Gonzalo Ignacio Paredes Valenzuela', 'Hugo Araya Carrasco', NULL, 'Paulo Gonzalez Gutierrez', 'Wladimir Soto', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(22, 21, 'Felipe Nicolas Tapia Nuñez', 'Sergio Hernandez', NULL, 'Paulo Gonzalez Gutierrez', 'Xaviera Lopez', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(23, 15, 'Rosa Karina Gonzalez Gutierrez', 'Paulo Gonzalez Gutierrez', NULL, 'Hugo Araya Carrasco', 'Ninguno', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(31, 13, 'Daniel Alarcon Chambles', 'Hugo Araya Carrasco', NULL, 'Marco Toranzo Cespedes', 'Paulo Gonzalez Gutierrez', 'Jose Torres', 'Mg.', 'Masculino', 'JoseT@gmail.com', 'Universidad de Talca', 3460000, 'Gabriel Perez', NULL, 'Dr.', 'GabrielP@gmail.com', 'Universidad Autonoma', 3460000),
(32, 17, 'Jhon Michael Faundez Miño', 'Hugo Araya Carrasco', 1, 'Paulo Gonzalez Gutierrez', 'Angelica Urrutia', NULL, 'Ing.', NULL, NULL, NULL, NULL, NULL, NULL, 'Ing.', NULL, NULL, NULL),
(38, 17, 'Pedro Lopez', 'Paulo Gonzalez Gutierrez', NULL, 'Hugo Araya Carrasco', 'Ricardo Barrientos', 'Jose Torres', 'Mg.', 'Masculino', 'JoseTorres@utal.com', 'Universidad de Talca', NULL, 'Gabriel Perez', 'Masculino', 'Dr.', 'GabrielP@gmail.com', 'Universidad Autonoma', 3460000),
(39, 20, 'Hugo Rodriguez', 'Hugo Araya Carrasco', NULL, 'Paulo Gonzalez Gutierrez', 'Sergio Hernandez', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(41, 13, 'Francisco De la Fuente', 'Hugo Araya Carrasco', NULL, 'Xaviera Lopez', 'Ricardo Barrientos', 'Jose Torres', 'Mg.', 'Masculino', 'JoseTorres@utal.com', 'Universidad de Talca', 3460000, NULL, NULL, NULL, NULL, NULL, NULL),
(42, 14, 'Rodrigo Ramirez', 'Sergio Hernandez', NULL, 'Angelica Urrutia', 'Ninguno', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(44, 7, 'Walter Gonzalo Casanova Hurtado', 'Paulo Gonzalez Gutierrez', NULL, 'Marco Toranzo Cespedes', 'Ninguno', 'Hugo Perez', 'Ing.', 'Masculino', 'HugoP@gmail.com', 'Universidad de Concepcion', 4030000, 'Gabriel Perez', 'Masculino', 'Dr.', 'GabrielP@gmail.com', 'Universidad Autonoma', 3460000),
(45, 15, 'Fernando Ignacio Olmos Duran', 'Xaviera Lopez', NULL, 'Marco Toranzo Cespedes', 'Xaviera Lopez', 'Jose Torres', 'Mg.', 'Masculino', 'JoseTorres@utal.com', 'Universidad de Talca', 3460000, 'Hugo Yañez', 'Masculino', 'Ing.', 'HugoY@utal.com', 'Universidad de Talca', 3460000),
(46, 13, 'Sebastian Garrido', 'Angelica Urrutia', NULL, 'Marco Toranzo Cespedes', 'Hugo Araya Carrasco', 'Jose Torres', 'Mg.', 'Masculino', 'JoseT@utal.com', 'Universidad de Talca', 3460000, 'Gabriel Perez', 'Masculino', 'Dr.', 'GabrielP@gmail.com', 'Universidad Autonoma', 3460000),
(47, 7, 'Miguel Ignacio Cancino Nuñez', 'Marco Toranzo Cespedes', 1, 'Angelica Urrutia', 'Ricardo Barrientos', 'Jose Torres', 'Mg.', 'Masculino', 'JoseT@gmail.com', 'Universidad de Talca', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(48, 17, 'Karina Patiño Albornoz', 'Paulo Gonzalez Gutierrez', NULL, 'Ricardo Barrientos', 'Angelica Urrutia', 'Jose Torres', 'Ing.', 'Masculino', 'JoseT@gmail.com', 'Universidad de Talca', 3460001, NULL, 'Femenino', 'Ing.', NULL, NULL, NULL),
(49, 11, 'Jose Miguel Valdes Salgado', 'Paulo Gonzalez Gutierrez', NULL, 'Hugo Araya Carrasco', 'Xaviera Lopez', 'Jose Torres', 'Mg.', 'Mascuino', 'JoseT@gmail.com', 'Universidad de Talca', 3460000, 'Gabriel Perez', 'Masculino', 'Ing.', 'GabrielP@gmail.com', 'Universidad Autonoma', 3460000),
(50, 14, 'Felipe Antonio Matamala Lopez', 'Sergio Hernandez', NULL, 'Angelica Urrutia', 'Hugo Araya Carrasco', 'Jose Torres', 'Mg.', 'Masculino', 'JoseT@gmail.com', 'Universidad de Talca', 3460000, 'Gabriel Perez', 'Masculino', 'Ing.', 'GabrielP@gmail.com', 'Universidad Autonoma', 3460000),
(51, 15, 'Hector Carrasco Faundez', 'Hugo Araya Carrasco', NULL, 'Paulo Gonzalez Gutierrez', 'Sergio Hernandez', 'Arturo Norambuena', 'Ing.', 'Masculino', 'ArturoN@gmail.com', 'Universidad de Talca', 3460000, NULL, NULL, 'Ing.', NULL, NULL, NULL),
(52, 17, 'Boris Salgado Lopez', 'Paulo Gonzalez Gutierrez', NULL, 'Wladimir Soto', 'Angelica Urrutia', NULL, 'Ing.', NULL, NULL, NULL, NULL, NULL, NULL, 'Ing.', NULL, NULL, NULL),
(53, 12, 'Diego Gaete Bernales', 'Marco Mora', NULL, 'Ricardo Barrientos', 'Sergio Hernandez', NULL, 'Ing.', NULL, NULL, NULL, NULL, NULL, NULL, 'Ing.', NULL, NULL, NULL),
(54, 12, 'Humberto Muñoz Norambuena', 'Hugo Araya Carrasco', NULL, 'Marco Toranzo Cespedes', 'Angelica Urrutia', NULL, 'Ing.', NULL, NULL, NULL, NULL, NULL, NULL, 'Ing.', NULL, NULL, NULL),
(56, 12, 'Ignacio Lillo', 'Hugo Araya Carrasco', NULL, 'Marco Toranzo Cespedes', 'Ricardo Barrientos', NULL, 'Ing.', NULL, NULL, NULL, NULL, NULL, NULL, 'Ing.', NULL, NULL, NULL),
(57, 7, 'Jose Lopez', 'Hugo Araya Carrasco', NULL, 'Paulo Gonzalez Gutierrez', 'Angelica Urrutia', 'Bernardo Lopez', 'Ing.', 'Masculino', 'BernardoL@utalca.cl', 'Universidad de Talca', 3460000, NULL, NULL, 'Ing.', NULL, NULL, NULL),
(58, 17, 'Boris Mora Garrido', 'Paulo Gonzalez Gutierrez', NULL, 'Hugo Araya Carrasco', 'Ninguno', NULL, 'Ing.', NULL, NULL, NULL, NULL, NULL, NULL, 'Ing.', NULL, NULL, NULL),
(61, 7, 'Hugo Gutierrez', 'Marco Toranzo Cespedes', 1, 'Paulo Gonzalez Gutierrez', 'Ninguno', NULL, 'Ing.', NULL, NULL, NULL, NULL, NULL, NULL, 'Ing.', NULL, NULL, NULL),
(63, 17, 'Adolfo Fuentes', 'Hugo Araya Carrasco', 0, 'Paulo Gonzalez Gutierrez', 'Angelica Urrutia', NULL, 'Ing.', NULL, NULL, NULL, NULL, NULL, NULL, 'Ing.', NULL, NULL, NULL),
(109, 17, 'Marco Felipe Castillo Gonzalez', 'Hugo Araya Carrasco', 1, 'Paulo Gonzalez Gutierrez', 'Angelica Urrutia', NULL, 'Ing.', 'Masculino', NULL, NULL, NULL, NULL, 'Masculino', 'Ing.', NULL, NULL, NULL),
(112, 17, 'Jhon Michael Faundez Miño', 'Hugo Araya Carrasco', 1, 'Paulo Gonzalez Gutierrez', 'Ninguno', 'Jose Torres', 'Ing.', 'Masculino', 'JoseT@gmail.com', 'Universidad de Talca', 3460001, 'Gabriela Perez', 'Femenino', 'Mg.', 'GabrielaP@gmail.com', 'Universidad Autonoma', 3460002),
(113, 17, 'Alfonso Bilocopetiuc Parra', 'Hugo Araya Carrasco', 1, 'Paulo Gonzalez Gutierrez', 'Ninguno', 'Jose Torres', 'Ing.', 'Masculino', 'JoseT@gmail.com', 'Universidad de Talca', 3460001, NULL, 'Masculino', 'Ing.', NULL, NULL, NULL),
(118, 7, 'Carlos Francisco Sanchez Perez', 'Paulo Gonzalez Gutierrez', 1, 'Angelica Urrutia', 'Marco Toranzo Cespedes', 'Jose Torres', 'Ing.', 'Masculino', 'JoseT@gmail.com', 'Universidad de Talca', 3460001, 'Javiera Gonzalez', 'Femenino', 'Ing.', 'JavieraGonzalez@gmail.com', 'Universidad Autonoma', 3460006);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comunidad`
--

CREATE TABLE `comunidad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comunidad`
--

INSERT INTO `comunidad` (`id`, `nombre`) VALUES
(1, 'Municipalidad de Talca'),
(2, 'Municipalidad de San Clemente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`id`, `nombre`) VALUES
(1, 'Tutelkan'),
(5, 'Empresa07'),
(15, 'Empresa03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fondo_concursable`
--

CREATE TABLE `fondo_concursable` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `fondo_concursable`
--

INSERT INTO `fondo_concursable` (`id`, `nombre`) VALUES
(1, 'Coniciiiit'),
(7, 'fondoconcursable2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grado_academico_profesor_planta`
--

CREATE TABLE `grado_academico_profesor_planta` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `estado` int(11) DEFAULT NULL,
  `grado_academico` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `grado_academico_profesor_planta`
--

INSERT INTO `grado_academico_profesor_planta` (`id`, `estado`, `grado_academico`) VALUES
(3, 1, 'Mg.'),
(7, 1, 'Mg.'),
(11, 1, 'Dr.'),
(12, 1, 'Dr.'),
(13, 1, 'Mg.'),
(14, 1, 'Ing.'),
(15, 1, 'Dr.'),
(17, 1, 'Dr.'),
(20, 1, 'Dr.'),
(21, 1, 'Mg.'),
(96, 1, 'Dra.'),
(99, 1, 'Mg.'),
(104, 1, 'Ing.'),
(111, 1, 'Mg.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `memorandum`
--

CREATE TABLE `memorandum` (
  `id` bigint(20) NOT NULL,
  `nombre_memorandum` varchar(30) NOT NULL,
  `escuela` varchar(50) NOT NULL,
  `texto0` text DEFAULT NULL,
  `texto1` text NOT NULL,
  `texto2` text NOT NULL,
  `texto3` text NOT NULL,
  `texto4` text DEFAULT NULL,
  `texto5` text DEFAULT NULL,
  `texto6` text DEFAULT NULL,
  `texto7` text DEFAULT NULL,
  `nombre_jefe_titulo` varchar(255) DEFAULT NULL,
  `sexo_jefe_titulos` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `memorandum`
--

INSERT INTO `memorandum` (`id`, `nombre_memorandum`, `escuela`, `texto0`, `texto1`, `texto2`, `texto3`, `texto4`, `texto5`, `texto6`, `texto7`, `nombre_jefe_titulo`, `sexo_jefe_titulos`) VALUES
(1, 'Revisión', 'Ingeniería Civil Informática', 'Estimado Docente', 'Junto con saludarle, y como integrante de la Comisión de Examen de Título', 'Una vez recepcionado el documento solicito a usted, en el plazo de 15 días habiles', ', entregar el informe de evaluación de este trabajo al Profesor Guía.', 'A la espera de una favorable recepción y respuesta, saluda atentamente a usted,', NULL, NULL, NULL, NULL, NULL),
(2, 'Titulación', 'Ingeniería Civil Informática', 'De mi consideración', 'Mediante el presente y para su tramitación correspondiente, adjunto envío a usted Acta de Titulación de fecha', 'de la carrera Ingeniería Civil Informática,', 'bajada intermedia', ',correspondiente', 'quien obtuvo como nota promedio final', 'Sin otro particular, saluda atentamente a usted', 'quienes obtuvieron como nota promedio final', 'Yolanda Medel González', 'Femenino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(3, '2014_10_12_000000_create_users_table', 1),
(4, '2014_10_12_100000_create_password_resets_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('leonardob94@hotmail.com', '$2y$10$OSpMQNf7sn2hY8c4pg84iOs8l.XUsIWIwKcC5plg6jCr1kQxJNtRy', '2019-10-12 22:53:56'),
('mtoranzo@gmail.com', '$2y$10$k.W7h6MvsspkQILyRJLqAe51Xk0vGWWsu1hS1hDSKprDPwy9y8t5K', '2019-10-16 00:41:28'),
('leonardob94@hotmail.com', '$2y$10$OSpMQNf7sn2hY8c4pg84iOs8l.XUsIWIwKcC5plg6jCr1kQxJNtRy', '2019-10-12 22:53:56'),
('mtoranzo@gmail.com', '$2y$10$k.W7h6MvsspkQILyRJLqAe51Xk0vGWWsu1hS1hDSKprDPwy9y8t5K', '2019-10-16 00:41:28'),
('leonardob94@hotmail.com', '$2y$10$OSpMQNf7sn2hY8c4pg84iOs8l.XUsIWIwKcC5plg6jCr1kQxJNtRy', '2019-10-12 22:53:56'),
('mtoranzo@gmail.com', '$2y$10$k.W7h6MvsspkQILyRJLqAe51Xk0vGWWsu1hS1hDSKprDPwy9y8t5K', '2019-10-16 00:41:28'),
('leonardob94@hotmail.com', '$2y$10$OSpMQNf7sn2hY8c4pg84iOs8l.XUsIWIwKcC5plg6jCr1kQxJNtRy', '2019-10-12 22:53:56'),
('mtoranzo@gmail.com', '$2y$10$k.W7h6MvsspkQILyRJLqAe51Xk0vGWWsu1hS1hDSKprDPwy9y8t5K', '2019-10-16 00:41:28'),
('bcastro@ucm.cl', '$2y$10$4YNNM/ws/bjmxapMBGbcbe2pdf1sfj0t8uRb4vTeIEOdJwGRPjTaK', '2020-03-08 22:55:14'),
('leonardo211294@gmail.com', '$2y$10$b33SLSlgnafi7YpNuHaoueWnXJZdhl0V2.RtUhX1/T66/1VBNKQWa', '2020-03-08 22:55:27'),
('Admin@admin.com', '$2y$10$rV70MJ2nVoH58pH9YC8EGOqW0y..NLk6RENLQ0T8xWT.bZsLse1nG', '2020-03-09 06:41:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id`, `nombre`) VALUES
(1, 'Proyecto10'),
(2, 'Proyecto20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recopilacion_inf_titulados`
--

CREATE TABLE `recopilacion_inf_titulados` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fecha_nac` date NOT NULL,
  `titulo` varchar(60) NOT NULL,
  `telefono_celular` varchar(12) NOT NULL,
  `telefono_fijo` varchar(10) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `direccion_actual` varchar(50) NOT NULL,
  `ano_egreso` date NOT NULL,
  `fecha_nac2` date DEFAULT NULL,
  `titulo2` varchar(20) DEFAULT NULL,
  `telefono_celular2` varchar(20) DEFAULT NULL,
  `telefono_fijo2` varchar(20) DEFAULT NULL,
  `subido_constancia` int(11) NOT NULL,
  `facebook2` varchar(20) DEFAULT NULL,
  `direccion_actual2` varchar(30) DEFAULT NULL,
  `ano_egreso2` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `recopilacion_inf_titulados`
--

INSERT INTO `recopilacion_inf_titulados` (`id`, `fecha_nac`, `titulo`, `telefono_celular`, `telefono_fijo`, `facebook`, `direccion_actual`, `ano_egreso`, `fecha_nac2`, `titulo2`, `telefono_celular2`, `telefono_fijo2`, `subido_constancia`, `facebook2`, `direccion_actual2`, `ano_egreso2`) VALUES
(19, '1991-12-02', 'Ingeniero', '71283921', '21346673', 'Gonzalo Paredes', 'Santiago Bellavista 1273', '2019-07-11', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL),
(22, '1994-10-10', 'Ingeniero', '78494810', '23530328', 'Felipe Tapia', 'Talca 26 sur', '2018-10-15', NULL, NULL, NULL, NULL, 1, NULL, '', NULL),
(32, '1994-07-21', 'Ingeniero', '75802274', '979504954', 'John Faundez', 'Constitucion 3509', '2018-07-10', '1993-12-09', 'Ingeniero', '76583402', '23546721', 1, 'Alfonso Bilocopetiuc', 'Constitucion 2152', '2018-07-10'),
(41, '1994-11-09', 'Ingeniero', '71283921', '26785432', 'Francisco De la Fuente', 'San javier 1238', '2019-07-11', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL),
(44, '1995-12-26', 'Ingeniero', '71283923', '28341124', 'Walter Casanova ', 'Talca 12 norte 672', '2019-06-20', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL),
(45, '1992-07-02', 'Ingeniero', '71283228', '32982376', 'Fernando Olmos', 'San javier 6723', '2019-06-12', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL),
(47, '1993-07-22', 'Ingeniero', '71283933', '26785411', 'Miguel Cancino', 'Talca 27 1/2 sur 155', '2019-07-20', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL),
(49, '1994-05-28', 'Ingeniero', '71283222', '78232345', 'Jose Valdes', 'San javier 7362', '2019-11-21', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL),
(113, '1993-02-08', 'Ingeniero', '75802274', '78237292', 'Alfonso Bilocopetiuc', 'Constitucion 3509', '2019-10-07', '1993-02-08', 'Ingeniero', '76583407', '245678', 1, 'John Faundez', 'Constitucion 2191', '2019-12-09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tesis`
--

CREATE TABLE `tesis` (
  `id_pk` bigint(20) UNSIGNED NOT NULL,
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre_completo` varchar(255) NOT NULL,
  `nombre_completo2` varchar(255) DEFAULT NULL,
  `rut` varchar(255) NOT NULL,
  `rut2` varchar(255) DEFAULT NULL,
  `telefono1` varchar(8) NOT NULL,
  `telefono2` varchar(8) DEFAULT NULL,
  `nombre_tesis` varchar(255) NOT NULL,
  `area_tesis` varchar(255) NOT NULL,
  `ano_ingreso` int(11) NOT NULL,
  `ano_ingreso2` int(11) DEFAULT NULL,
  `profesor_guia` varchar(255) NOT NULL,
  `carrera` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `contribucion` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `objetivos` varchar(255) NOT NULL,
  `tipo_vinculacion` varchar(255) NOT NULL,
  `nombre_vinculacion` varchar(255) NOT NULL,
  `observacion` varchar(255) DEFAULT NULL,
  `estado1` int(11) NOT NULL DEFAULT 1,
  `estado2` int(11) DEFAULT NULL,
  `estado3` int(11) DEFAULT NULL,
  `fecha_peticion` timestamp NOT NULL DEFAULT current_timestamp(),
  `nota_pendiente` date DEFAULT NULL,
  `estado4` int(11) DEFAULT NULL,
  `nota_prorroga` date DEFAULT NULL,
  `estado5` int(11) DEFAULT NULL,
  `estado6` int(1) DEFAULT NULL,
  `estado7` int(11) DEFAULT NULL,
  `fecha_inscripcion` date DEFAULT NULL,
  `constancia_ex` varchar(255) DEFAULT NULL,
  `abstract` text DEFAULT NULL,
  `publicar` int(11) DEFAULT NULL,
  `fecha_presentacion_tesis` datetime DEFAULT NULL,
  `acta_ex` varchar(255) DEFAULT NULL,
  `avance_general` int(11) DEFAULT NULL,
  `reunion` int(11) DEFAULT NULL,
  `nota_tesis` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tesis`
--

INSERT INTO `tesis` (`id_pk`, `id`, `nombre_completo`, `nombre_completo2`, `rut`, `rut2`, `telefono1`, `telefono2`, `nombre_tesis`, `area_tesis`, `ano_ingreso`, `ano_ingreso2`, `profesor_guia`, `carrera`, `tipo`, `contribucion`, `descripcion`, `objetivos`, `tipo_vinculacion`, `nombre_vinculacion`, `observacion`, `estado1`, `estado2`, `estado3`, `fecha_peticion`, `nota_pendiente`, `estado4`, `nota_prorroga`, `estado5`, `estado6`, `estado7`, `fecha_inscripcion`, `constancia_ex`, `abstract`, `publicar`, `fecha_presentacion_tesis`, `acta_ex`, `avance_general`, `reunion`, `nota_tesis`) VALUES
(8, 8, 'Carlos Andres Cancino Duran', NULL, '18.670.608-2', NULL, '12345678', NULL, 'Reconocimiento de patrones con redes neuronalesen imagenes', 'Ingenieria de Software', 2013, NULL, 'Sergio Hernandez', 'Ingenieria Civil Informatica', 'Tesis', 'Promover y potenciar el concepto de ciudades inteligentes', 'Descripcion1 Descripcion2 Descripcion3', 'Aplicación de IA, en camaras de seguridad', 'Proyecto', 'Ciudades inteligentes XX', 'Tesis interesante', 4, 1, NULL, '2019-07-16 04:02:26', '2019-07-01', NULL, '2019-07-18', NULL, NULL, NULL, '2019-07-18', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(10, 10, 'Oscar Raul Perez Fernandez', NULL, '16.788.324-5', NULL, '12345678', NULL, 'Sistema de control', 'Ingenieria de Software', 2013, NULL, 'Marco Toranzo Cespedes', 'Ingenieria Civil Informatica', 'Tesis', 'Automatizar y agilizar el proceso', 'Descripcion1 Descripcion2', 'Sistema de evidencias para la Universidad', 'Comunidad', 'Municiaplidad de San Clemente', NULL, 4, 1, NULL, '2019-07-16 04:12:04', NULL, NULL, NULL, NULL, NULL, NULL, '2019-07-18', '156538477419.pdf', 'Es cada vez más evidente que la informática (manejo de información) y los computadores (procesadores de información), están cambiando nuestro sistema de vida. Por ahora podemos decir que el computador nos ofrece las ventajas de una rapídez, seguridad y gran capacidad de trabajo de datos, por ejemplo: informática y estadísticas, y eso también nos alcanzará.', 1, '2019-10-09 19:00:00', NULL, 0, NULL, NULL),
(16, 16, 'Rodrigo Chavez', NULL, '18.063.911-8', NULL, '12345678', NULL, 'Aplicacion movil', 'Ingenieria de Software', 2014, NULL, 'Paulo Gonzalez Gutierrez', 'Ingenieria en Ejecucion e Informatica', 'Memoria', 'Contribucion1,Contribucion2', 'Descripcion1Descripcion2', 'Ayudar a la comunidad', 'Empresa', 'Tutelkan', NULL, 1, NULL, NULL, '2019-07-16 03:56:45', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(18, 18, 'Camilo Gonzalo Cavieres Perez', NULL, '18.738.562-9', NULL, '12345678', NULL, 'Aplicacion en Ionix para ed fisica', 'Ingenieria de Software', 2013, NULL, 'Marco Toranzo Cespedes', 'Ingenieria en Ejecucion e Informatica', 'Memoria', 'Se espera ser un apoyo para la carrera de de ed. fisica en la Universidad.', 'Descripcion1, Descripcion2', 'objetivo1 objetivo2', 'Empresa', 'Ed fisica.', 'Nombre incompleto', 4, 1, NULL, '2019-07-18 06:43:00', '2019-10-25', 1, '2019-10-27', 1, 1, NULL, '2019-07-21', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(19, 19, 'Gonzalo Ignacio Paredes Valenzuela', NULL, '17.345.456-3', NULL, '12345678', NULL, 'Sistema de inventario UCM', 'Ingenieria de Software', 2012, NULL, 'Marco Toranzo Cespedes', 'Ingenieria Civil Informatica', 'Tesis', 'Se espera apoyar la automatizacion de un sistema de la universidad, y agilizar procesos.', 'Descripcion1, Descripcion2', 'objetivo1 objetivo2', 'Proyecto', 'Departamento de informatica UCM', NULL, 4, 1, NULL, '2019-07-19 19:11:32', NULL, NULL, NULL, NULL, NULL, NULL, '2019-07-28', '6kJevUClPeZ06vTKSelIPZAvdNPBhgehShMazLeW.pdf', 'presenta en algunos pasajes de esta obra viene a demostrar, como han cambiado las relaciones humanas y jurídicas con el advenimiento de la informática y de las telecomunicaciones. Sin pretender sentar bases sólidas, esta investigación pretende despertar el...', 1, '2019-09-03 16:00:00', 'TdIvKakaANdcnRINpzvLETmCxlCkqQlm67qN12fe.pdf', 0, NULL, 6.5),
(22, 22, 'Felipe Nicolas Tapia Nuñez', NULL, '18.732.564-7', NULL, '12345678', NULL, 'Estudio de Patrones de venas de la mano', 'IA', 2013, NULL, 'Ricardo Barrientos', 'Ingenieria Civil Informatica', 'Tesis', 'Permitir ahorrar recursos en el reconocimiento unico de la poblacion, que actualmente se hace por huella dactilar.', 'El alumno deberá ayudar a generar en el reconocimiento de patrones de las venas de la mano.', 'Generar un modelo que permite el reconocimiento de las venas de la mano.', 'Fondo concursable', 'Coniciiiit', NULL, 4, 1, NULL, '2019-07-19 23:14:28', '2019-08-21', 1, '2019-12-19', 1, 1, 1, '2019-07-23', '1571110545d-separation (1).pdf', 'Copie aqui su abstract o resumen.', NULL, '2019-10-15 15:00:00', '157111431622.pdf', 0, NULL, 7),
(23, 23, 'Rosa Karina Gonzalez Gutierrez', NULL, '18.923.457-4', NULL, '12345678', NULL, 'Analisis de sentimientos aplicando una taxonomia de encuestas', 'Inteligencia de negocios', 2013, NULL, 'Angelica Urrutia', 'Ingenieria Civil Informatica', 'Tesis', 'Contribuir a...', 'Descripcion1 Descripcion2 Descripcion3', 'Objetivo1, Objetivo2', 'Comunidad', 'Jardin Infantil', 'Escribe aquí su observacion', 4, 1, 1, '2019-07-20 23:38:34', '2019-07-25', 1, '2019-09-20', 1, 1, 1, '2019-07-21', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(31, 31, 'Daniel Alarcon Chambles', NULL, '18.123.456-9', NULL, '12345678', NULL, 'Desarrollo modelo de optimización en java', 'Ingenieria de Software', 2013, NULL, 'Wladimir Soto', 'Ingenieria Civil Informatica', 'Tesis', 'Contribuir a...', 'Descripcion1 Descripcion2', 'objetivo1 objetivo2', 'Proyecto', 'UTALCA-UCM', 'Sin observacion', 4, 1, NULL, '2019-07-26 08:22:02', '2020-04-25', 1, NULL, NULL, 1, NULL, '2019-07-29', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(32, 32, 'Jhon Michael Faundez Miño', 'Alfonso Bilocopetiuc Parra', '18.574.262-8', '18.674.261-3', '12345678', '12345678', 'Tesis100', 'Ingenieria de Software', 2013, 2013, 'Marco Toranzo Cespedes', 'Ingenieria Civil Informatica', 'Memoria', 'Escriba aqui los objetivos', 'Descripcion1 Descripcion2, esta tesis espera ser un aporte para la carrera de pedagogia en educación fisica, tanto de sus profesores, como de sus alumnos.', 'Escriba aqui los objetivos', 'Empresa', 'Empresa07', 'Escribe aquí su observacion', 4, 1, NULL, '2019-09-19 01:30:10', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-01', '157567079549.pdf', 'Copie aqui su abstract o resumen.jksnkjdnaknsdaknaslkndasldnalkansalal', 1, '2019-10-16 20:00:00', '1575675438112.pdf', 0, NULL, 3),
(34, 34, 'Felipe Garrido Perez', NULL, '19.234.544-6', NULL, '12345678', NULL, 'Desarrollo de algoritmo de limpieza de imagenes', 'Imagenes', 2014, NULL, 'Paulo Gonzalez Gutierrez', 'Ingenieria Civil Informatica', 'Tesis', 'Contribuir a...', 'Descripcion1 Descripcion2 Descripcion3', 'Objetivo1, Objetivo2', 'Proyecto', 'Proyecto F2', NULL, 1, NULL, NULL, '2019-07-26 12:03:47', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(35, 35, 'Nelson Guerra', NULL, '12.345.678-8', NULL, '12345678', NULL, 'Desarrollo aplicacion', 'Imagenes', 2013, NULL, 'Ricardo Barrientos', 'Ingenieria Civil Informatica', 'Tesis', 'Contribuir a...', 'Descripcion1 Descripcion2', 'objetivo1 objetivo2', 'Fondo concusable', 'Conycit', NULL, 1, NULL, NULL, '2019-07-26 12:12:29', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(36, 36, 'Cesar Poblete', NULL, '12-356.789-4', NULL, '12345678', NULL, 'Aplicando BI sobre datos registro civil', 'Inteligencia de negocios', 2014, NULL, 'Angelica Urrutia', 'Ingenieria Civil Informatica', 'Tesis', 'Contribuir a...', 'Descripcion1 Descripcion2', 'objetivo1 objetivo2', 'Empresa', '3it', NULL, 1, NULL, NULL, '2019-07-26 12:14:48', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(37, 37, 'Arturo Fernandez', NULL, '18.889.456-4', NULL, '12345678', NULL, 'Desarrollo Aplicacion Movil', 'Ingenieria de Software', 2014, NULL, 'Hugo Araya Carrasco', 'Ingenieria Civil Informatica', 'Tesis', 'Contribuir a...', 'Descripcion1, Descripcion2', 'Objetivo1, Objetivo2', 'Empresa', 'Tutelkan', NULL, 1, NULL, NULL, '2019-07-26 12:18:18', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(38, 38, 'Pedro Lopez', NULL, '12.345.679-1', NULL, '12345678', NULL, 'Filtro de imagenes', 'Ingenieria de Software', 2013, NULL, 'Paulo Gonzalez Gutierrez', 'Ingenieria Civil Informatica', 'Tesis', 'Contribuir a...', 'Descripcion1 Descripcion2 Descripcion3', 'Objetivo1, Objetivo2', 'Proyecto', 'Desarrollo de aplicacion movil ed. fisica', 'Escribe aquí su observacion', 3, 1, NULL, '2019-07-26 12:23:28', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(39, 39, 'Hugo Rodriguez', NULL, '18.772.441-0', NULL, '12345678', NULL, 'Optimizacion de filtro de imagenes', 'Imagenes', 2013, NULL, 'Marco Mora', 'Ingenieria Civil Informatica', 'Tesis', 'Contribuir a...', 'Descripcion1 Descripcion2 Descripcion3', 'Objetivo1, Objetivo2', 'Fondo concursable', 'Coniciiiit', 'Tesis muy llamativa', 4, 1, NULL, '2019-07-26 12:26:07', NULL, NULL, NULL, NULL, NULL, NULL, '2019-07-30', '1565315421Autorizacion.pdf', 'Copie aqui su abstract o resumen.', 1, '2019-08-09 15:00:00', NULL, 0, NULL, NULL),
(41, 41, 'Francisco De la Fuente', NULL, '18.928.324-5', NULL, '12345678', NULL, 'Tesis2', 'Inteligencia de negocios', 2013, NULL, 'Wladimir Soto', 'Ingenieria Civil Informatica', 'Tesis', 'Contribuir a...', 'Descripcion1 Descripcion2 Descripcion3', 'objetivo1 objetivo2', 'Proyecto', 'Utalca', NULL, 4, 1, NULL, '2019-07-27 03:14:20', NULL, NULL, NULL, NULL, NULL, NULL, '2019-07-30', '156447033341.pdf', 'Utilizando valores de cierres semanales de los índices bursátiles estadounidenses Dow Jones(DJI), S&P500 (GSPC), Nasdaq (IXIC) y NYSE Composite (NYA), correspondientes al período comprendido entre el 4 de enero de 1980 al 31 de diciembre de 2005, se analiza la eficacia del Algoritmo Genético como técnica de optimización de estructuras de modelos GARCH para la predicción de retornos bursátiles. Los resultados obtenidos mediante Algoritmo Genético, considerando el Error Cuadrático Medio (ECM) como criterio de comparación, fueron contrastados con los de un modelo GARCH (1,1), un modelo GARCH especificado aleatoriamente y un modelo GARCH optimizado mediante Fuerza Bruta (probando todos los modelos posibles). Se efectuó un test de significancia estadística sobre la diferencia de ECM entre los modelos contrastados, además de realizar algunos test complementarios para medir el nivel de la aplicabilidad de los modelos (test LM de Engle, test Portmentau de bicorrelaciones de Hinich (test H) y test de correlaciones simples (testC)). Para todos los índices bajo análisis, los modelos GARCH optimizados por el Algoritmo Genético alcanzaron un ECM (para un conjunto extra muestral de 200 observaciones semanales) menor que el obtenido a través del modelo GARCH (1,1) y el modelo GARCH generado aleatoriamente. Sin embargo, y como era de esperar, el resultado en ECM fue mayor al del modelo obtenido por Fuerza Bruta. La diferencia entre el resultado del Algoritmo Genético y el de un modelo GARCH (1,1) resultó ser, en todos los casos, estadísticamente significativa a un 1% de significancia. Al comparar los resultados con el modelo GARCH especificado de manera aleatoria, sólo la diferencia entre ECM es significativa, a un 5% de nivel de significancia, para el caso del índice GSPC. Al analizar las diferencias de ECM entre los modelos obtenidos mediante Algoritmo Genético y Fuerza Bruta, éstas resultaron ser no significativas, salvo para el índice GSPC que fue significativa a un 10%. De esta manera, se puede concluir que un modelo GARCH optimizado mediante Algoritmo Genético podría obtener mejores resultados que una modelo GARCH (1,1) usado ampliamente en la literatura financiera. Además, el resultado obtenido mediante Algoritmo Genético no presenta desviaciones significativas con respecto de la mejor especificación posible. De este modo, se presenta evidencia a favor del Algoritmo Genético como técnica de optimización de estructuras de modelos GARCH.', 0, '2019-07-30 16:00:00', '156447057341.pdf', 0, NULL, 7),
(42, 42, 'Rodrigo Ramirez', NULL, '18.345.456-3', NULL, '12345678', NULL, 'Aplicar redes neuronales para la creación de modelo predictivo biologico', 'Ingenieria de Software', 2013, NULL, 'Xaviera Lopez', 'Ingenieria Civil Informatica', 'Tesis', 'La contribucion esperada es:', 'En esta tesis se espera que...', 'Objetivo 1 Objetivo2', 'Proyecto', 'UCM', 'El nombre del alumno esta incompleto', 5, NULL, NULL, '2019-07-27 18:56:26', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(44, 44, 'Walter Gonzalo Casanova Hurtado', NULL, '22.222.222-4', NULL, '12345678', NULL, 'Tesis03', 'Ingenieria de Software', 2014, NULL, 'Hugo Araya Carrasco', 'Ingenieria Civil Informatica', 'Tesis', 'Contribucion 1 2 3 4 5 6...', 'Descripcion0 Descripcion1 Descripcion2, Descripcion3', 'Objetivo1 Objetivo2 Objetivo3', 'Empresa', 'Empresa04', 'Tesis muy buena', 4, 1, NULL, '2019-07-31 14:17:18', NULL, NULL, NULL, NULL, NULL, NULL, '2019-07-31', '1564587080PDF DE TESIS RELACIONADAS A EMPRESAS.pdf', 'La especificación y el análisis de requisitos son actividades fundamentales en el desarrollo de proyectos de software, ya que en base a ellos se decidirá qué caminos tomar durante todo el proceso de implementación. Asímismo, la documentación es una parte importante de todas las etapas de la ingeniería de software; ésta debe ser completa, actualizada y de fácil acceso para todas las personas involucradas en el proyecto.\r\n \r\n Para la administración de requisitos se ha creado la herramienta ReqAdmin, un sistema web que permite el acceso de la información tanto a desarrolladores como a clientes. Esta herramienta actualmente es usada en el curso Ingeniería de Software que imparte el Departamento de Ciencias de la Computación de la Universidad de Chile. ReqAdmin permite administrar los requisitos de un proyecto, pero carece de medios para administrar documentación.\r\n \r\n Para remediar esta situación se realizó una actualización a dicha herramienta, permitiendo ingresar y administrar la documentación dentro de ReqAdmin. Para ello se usó un editor de texto enriquecido que permite insertar texto con formato e imágenes. Además, con el sistema se puede generar cierta documentación, en particular documento de requisito, diseño e histórico, en formato digital.\r\n \r\n Se espera que esta actualización agregue valor a los desarrollos de software administrados con la herramienta ReqAdmin, permitiendo una documentación completa, de fácil acceso y vigente.', 1, '2019-07-31 11:35:00', '1564587375ActaOscar.pdf', 0, NULL, 7),
(45, 45, 'Fernando Ignacio Olmos Duran', NULL, '11.111.111-2', NULL, '12345678', NULL, 'Realizando limpieza de datos sobre BI', 'Inteligencia de negocios', 2012, NULL, 'Angelica Urrutia', 'Ingenieria Civil Informatica', 'Tesis', 'Esto contribuirá a por ejemplo1, por ejemplo2, por ejemplo3, por ejemplo n', 'Se espera que el alumno descripcion1, descripcion2, descripcion3', 'Objetivo1,Objetivo2,Objetivo3', 'Proyecto', 'UCM', NULL, 4, 1, NULL, '2019-08-02 07:08:35', NULL, NULL, NULL, NULL, NULL, NULL, '2019-08-02', '156478693619.pdf', 'El siguiente es un proyecto realizado para Hewlett-Packard Chile, filial de HP Company, la cual vende productos de computación y ofrece servicios y soluciones tecnológicas. La empresa se divide funcionalmente en Imagen e Impresión, Sistemas Personales y Enterprise Business. El presente proyecto abordará las dos primeras áreas.\r\n \r\n La memoria cubre el campo de Aplicaciones de Inteligencia de Negocios y surge de la necesidad de la empresa de implementar herramientas de gestión para automatizar el control sobre los Puntos de Venta y la Fuerza de Venta a lo largo de Chile. Una herramienta capaz de entregar información útil en la toma de decisiones es fundamental para una empresa de la envergadura y tamaño de HP, la que cuenta con la mayor participación de mercado en el área de la tecnología.\r\n \r\n El trabajo se compone de un análisis de la situación actual, un levantamiento de los procesos relacionados con la entrega de reportes y un rediseño sobre éstos para que puedan ser implementados en un sistema de información. Los requerimientos y principales necesidades de la empresa son descritos, para posteriormente diseñar e implementar una solución rentable de Inteligencia de Negocios que automatice la creación de reportes, permitiendo visualizar Tableros o Dashboards dinámicos con acceso a información histórica.\r\n \r\n La propuesta elimina tareas duplicadas en ambas áreas que incluyen a más de 200 empleados, disminuyendo el costo en tiempo y recursos asociados a la creación de reportes, proporcionando una completa herramienta de gestión que incorpora siete Indicadores Clave de Desempeño definidos a partir de las necesidades de la empresa. Además se incluye un método de pronóstico de ventas para productos tecnológicos que genera importantes beneficios en comparación con la metodología actual.\r\n \r\n La herramienta es desarrollada a nivel de prototipo funcional, utilizando Visual Basic para Aplicaciones, Microsoft Access y PowerPivot para Excel. Esta memoria demuestra que una herramienta de Inteligencia de Negocios rentable y fácil de implementar puede ser sencillamente construida utilizando una base de datos, un proceso ETL y un sistema para la visualización de reportes.\r\n \r\n El trabajo puede ser extendido para incluir más fuentes de datos y cadenas de Retail, que permitirán incorporar nuevos indicadores de gestión. Además, modelos más complejos de pronóstico y agrupación pueden ser implementados, los que permitirán realizar mejores proyecciones de venta y quiebres de stock. A su vez, los tableros de gestión pueden ser visualizados en la nube utilizando Microsoft SharePoint 2010, facilitando así el acceso a éstos.', 1, '2019-08-02 19:30:00', '156478253045.pdf', 0, NULL, 7),
(46, 46, 'Sebastian Garrido', NULL, '18.333.333-7', NULL, '12345678', NULL, 'Desarrollo de BI sobre datos de investigación UTALCA', 'Ingenieria de Software', 2013, NULL, 'Wladimir Soto', 'Ingenieria Civil Informatica', 'Tesis', 'Se espera que pueda contribuir a contribucion1, contribucion2, contribucion3, contribucion4, contribucion5', 'En este trabajo se espera descripcion1, descripcion2, descripcion3, descripcion4, descripcion5, descripcion6, descripcion7', 'objetivo1,objetivo2,objetivo3,objetivo4, objetivo5', 'Empresa', 'UTALCA', NULL, 3, 1, NULL, '2019-08-03 00:25:55', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(47, 47, 'Miguel Ignacio Cancino Nuñez', NULL, '18.111.111-k', NULL, '12345678', NULL, 'Desarrollo aplicacion movil en Android', 'Ingenieria de Software', 2013, NULL, 'Hugo Araya Carrasco', 'Ingenieria Civil Informatica', 'Tesis', 'Contribucion1, contribucion2, contribucion3, contribucion4, contribucion5, contribucion6', 'Descripcion1, Descripcion2, Descripcion3,Descripcion4', 'Objetivo1, Objetivo2,Objetivo3,Objetivo4, Objetivo5', 'Empresa', 'Empresa1', 'Escribe aquí su observacion', 4, 1, NULL, '2019-08-04 03:32:43', NULL, NULL, NULL, NULL, NULL, NULL, '2019-08-04', '156498255810.pdf', 'El presente informe describe un Plan de Marketing para GuanaBook, aplicación móvil de la\r\n categoría viajes, que permite a sus usuarios gestionar reservas para sitios de camping\r\n administrados por CONAF dentro del Parque Nacional Torres del Paine. El Plan de Marketing\r\n está orientado al consumidor final usuario de la aplicación móvil GuanaBook en el marco del\r\n año 2019. El objetivo de este plan de marketing es lograr que el 30% de los visitantes al Parque\r\n Nacional Torres del Paine durante el año 2019 realicen sus reservas de sitios de camping\r\n mediante la aplicación GuanaBook y no a través del actual sistema de reservas en línea.\r\n Lo anterior se fundamenta en las oportunidades detectadas en el análisis situacional donde se\r\n destaca que existe un gran interés de turistas nacionales y extranjeros por los atractivos\r\n naturales de Chile, quienes preparan con anticipación sus viajes, y donde el acceso a servicios\r\n online de viajes se realiza cada vez con mayor frecuencia a través de aplicaciones móviles.\r\n Asimismo, el análisis del consumidor muestra que existe una creciente tendencia al uso de\r\n dispositivos móviles por sobre TIC tradicionales, dentro de lo que destaca el uso de\r\n aplicaciones y, particularmente, apps destinadas a acceder a servicios de turismo y booking.\r\n En ese contexto, otra oportunidad detectada responde al crecimiento y masificación de las\r\n aplicaciones móviles dentro del análisis de la industria.', NULL, '2019-08-05 01:22:00', '156498465947.pdf', 0, NULL, 7),
(48, 48, 'Karina Patiño Albornoz', NULL, '17.678.345-5', NULL, '12345678', NULL, 'Tesis 05', 'Ingenieria de Software', 2012, NULL, 'Marco Toranzo Cespedes', 'Ingenieria Civil Informatica', 'Tesis', 'Contribucion1, Contribucion2, Contribucion3, Contribucion4, Contribucion5.', 'Descripcion1, Descripcion2, descripcion3, descripcrion4, descripcion5', 'Objetivo1, Objetivo2,Objetivo3, Objetivo4, Objetivo5, Objetivo6', 'Empresa', 'Empresa04', 'Escribe aquí su observacion', 4, 1, NULL, '2019-08-05 06:26:46', NULL, NULL, NULL, NULL, NULL, NULL, '2020-03-17', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(49, 49, 'Jose Miguel Valdes Salgado', NULL, '18.678.987-3', NULL, '12345678', NULL, 'Aplicando redes neuronales a investigación de reconocimiento de imagenes y audio.', 'IA', 2013, NULL, 'Sergio Hernandez', 'Ingenieria Civil Informatica', 'Tesis', 'Contribucion1, Contribucion2, contribucion3, contribucion4, contribucion5, contribucion6, contribucion7, contribucion8, contribucion9, contribucion10', 'Descripcion1, Descripcion2, Descripcion3, Descripcion4, Descripcion5, Descripcion6, Descripcion7, Descripcion8, Descripcion9, Descripcion10', 'Objetivo1, Objetivo2, Objetivo3, Objetivo4, Objetivo5, Objetivo6, Objetivo7, Objetivo8, Objetivo9,Objetivo10', 'Fondo concursable', 'Coniciiiit', 'Tesis interesante', 4, 1, NULL, '2019-08-05 17:27:26', NULL, NULL, NULL, NULL, NULL, NULL, '2019-08-05', '1565029021Autorizacion.pdf', 'En esta tesis presentamos un Sistema Experto que permite reconocer los mangos\r\ncuyas formas cumplen con los estándares de calidad exigidos por clientes de Estados\r\nUnidos y Europa.\r\nEl software está basado en el proceso de imágenes digitales de mangos mediante\r\nredes neuronales artificiales.\r\nPrimeramente seleccionamos una muestra de mangos exportables; luego, utilizando\r\nel sistema, tomamos una imagen digital de cada mango, con dichas imágenes\r\nentrenamos una Red Neuronal para que reconozca acertadamente todos los\r\nelementos de la muestra. Luego, procedemos con las pruebas de reconocimiento con\r\notros mangos de calidad y con los que no presentan dichas características, y si el\r\nsoftware los reconoce acertadamente, diremos que hemos cumplido con nuestro\r\nobjetivo.\r\nPalabras Clave:\r\nRedes neuronales artificiales, entrenamiento de redes neuronales, reconocimiento de\r\npatrones, reconocimiento de calidad del mango', NULL, '2019-08-05 15:00:00', '156504601349.pdf', 0, NULL, 7),
(50, 50, 'Felipe Antonio Matamala Lopez', NULL, '18.345.678-3', NULL, '12345678', NULL, 'Implementación de tecnicas de machile learning para el estudio de patrones asociados a estados tempranos y tardios de la patologia del cancer oral', 'IA', 2013, NULL, 'Xaviera Lopez', 'Ingenieria Civil Informatica', 'Tesis', 'Contribucion1, Contribucion2, Contribucion3, Contribucion4, Contribución5, Contribución6, Contribución 7, Contribución8, Contribución 10 , Contribución11, Contribución 12, Contribución13, Contribución14, Contribución15, Contribución16', 'Descripcion1, Descripcion2, Descripcion3, Descripcion4, Descripcion5, Descripcion6, Descripcion7, Descripcion8', 'Objetivo1, Objetivo2, Objetivo3, Objetivo4, Objetivo5, Objetivo6, Objetivo7, Objetivo8, Objetivo9, Objetivo10', 'Fondo concursable', 'Coniciiiit', 'Escribe aquí su observacion', 4, 1, 1, '2019-08-05 23:42:47', NULL, NULL, NULL, NULL, NULL, NULL, '2019-08-05', '156505265245.pdf', 'La cantidad de datos biológicos y médicos que se produce hoy en día es enorme, y se podría decir que el campo de las ciencias de la vida forma parte ya del club del Big Data. Estos datos contienen información crucial que pueden ayudar a comprender mejor los mecanismos moleculares en los sistemas biológicos. Este conocimiento es fundamental para el progreso en el diagnóstico y en el tratamiento de las enfermedades. La Bioinformática, junto con la Biología Computacional, son disciplinas que se encargan de organizar, analizar e interpretar los datos procedentes de la Biología Molecular. De hecho, la complejidad y la heterogeneidad de los problemas biológicos requieren de un continuo diseño, implementación y aplicación de nuevos métodos y algoritmos. La minería de datos biológicos es una tarea complicada debido a la naturaleza heterogénea y compleja de dichos datos, siendo éstos muy dependientes de detalles específicos experimentales. Esta tesis se basa en el estudio de un problema biomédico complejo: la menor probabilidad de desarrollar algunos tipos de cáncer en pacientes con ciertos trastornos del sistema nervioso central (SNC) u otros trastornos neurológicos, y viceversa. Denominamos a esta condición como comorbilidad inversa. Desde el punto de vista médico, entender mejor las conexiones e interacciones entre cáncer y trastornos neurológicos podría mejorar la calidad de vida y el efecto de la asistencia médica de millones de personas en todo el mundo. Aunque la comorbilidad inversa ha sido estudiada a nivel médico, a través de estudios epidemiológicos, no se ha investigado en profundidad a nivel molecular...', NULL, '2019-08-05 20:55:00', NULL, 0, NULL, NULL),
(51, 51, 'Hector Carrasco Faundez', NULL, '18.456.965-4', NULL, '12345678', NULL, 'Aplicando mineria de datos luego de BI', 'Inteligencia de negocios', 2013, NULL, 'Angelica Urrutia', 'Ingenieria Civil Informatica', 'Tesis', 'Contribucion1, Contribucion2, Contribucion3, Contribucion4.', 'Descripcion1, Descripcion2, Descripcion3, Descripcion4', 'Objetivo1, Objetivo2, Objetivo3, Objetivo4.', 'Proyecto', 'UCM', NULL, 4, 1, NULL, '2019-08-06 05:35:39', NULL, NULL, NULL, NULL, NULL, NULL, '2019-08-06', '156507364545.pdf', 'El uso de la Inteligencia de Negocios está tomando cada vez más fuerza dentro de las\r\nentidades y/o empresas, ya sea para cambiar sus estrategias, explotar su información o generar\r\nconocimiento importante. Todo ello se ve simplificado para el usuario, gracias al uso de las\r\nherramientas “B.I.”\r\nEn este documento, se mostrará detalladamente todo lo relacionado con un proyecto o\r\nsolución de inteligencia de negocios, dando un marco conceptual de sus fortalezas, debilidades\r\ny requisitos para poder implementarse, en este caso, dentro de un negocio específico.\r\nLuego, se introducirá de una manera resumida el proceso minero en sus etapas\r\ngenerales, como también el control de producción mina o CPM, base de datos empresarial,\r\nque servirá de fuente de datos para trabajar con una herramienta BI, específicamente con la\r\naplicación de “Data Discovery” y el descubrimiento de la información a través de los datos.\r\nPosteriormente, se ahondará en el problema a solucionar con la aplicación práctica de\r\nuna herramienta de inteligencia de negocios, específicamente acotada en Data Discovery,\r\ncomo lo es “QlikView”, testeo de solución y entrega.\r\nPalabras Clave: Inteligencia de Negocios, Data Discovery, Gestión de la Información,\r\nReportería, Visualizadores, Extracción minera, Qlikview, Modelos de Gestión, Modelo\r\nAsociativo.', NULL, '2019-08-06 02:48:00', NULL, 0, NULL, NULL),
(52, 52, 'Boris Salgado Lopez', NULL, '14.784562-3', NULL, '12345678', NULL, 'Aplicando API REST a proyecto UCM', 'Ingenieria de Software', 2012, NULL, 'Marco Toranzo Cespedes', 'Ingenieria Civil Informatica', 'Tesis', 'Escriba aqui los objetivos', 'Descripcion1, Descripcion2, Descripcion3, Descripcion4', 'Escriba aqui los objetivos', 'Proyecto', 'UCM', NULL, 4, 1, NULL, '2019-08-06 06:43:31', NULL, NULL, NULL, NULL, NULL, NULL, '2019-08-06', '1565074081Evaluacion.pdf', 'Copie aqui su abstract o resumennn', NULL, '2019-08-06 00:00:00', NULL, 0, NULL, NULL),
(53, 53, 'Diego Gaete Bernales', NULL, '19.123.526-7', NULL, '12345678', NULL, 'Tesis05', 'Imagenes', 2014, NULL, 'Paulo Gonzalez Gutierrez', 'Ingenieria Civil Informatica', 'Tesis', 'Escriba aqui los objetivos', 'Descripcion', 'Escriba aqui los objetivos', 'Proyecto', 'UCM', NULL, 4, 1, NULL, '2019-08-06 07:01:29', '2019-12-14', 1, '2019-11-29', 1, 1, 1, '2019-08-06', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(54, 54, 'Humberto Muñoz Norambuena', NULL, '13.564.231-4', NULL, '12345678', NULL, 'Tesis10', 'Ingenieria de Software', 2012, NULL, 'Paulo Gonzalez Gutierrez', 'Ingenieria Civil Informatica', 'Tesis', 'Escriba aqui los objetivos', 'Descripcion', 'Escriba aqui los objetivos', 'Proyecto', 'UCM', NULL, 4, 1, NULL, '2019-08-06 07:43:24', NULL, NULL, NULL, NULL, NULL, NULL, '2019-08-06', '156507864249.pdf', 'Este proyecto explica el diseño e implementación de una aplicación.\r\npara dispositivos móviles para el estudio de un estilo de vida saludable. Para este propósito, el corazón\r\nSe debe obtener una estimación de la tasa y el estado de ánimo de un usuario. El corazón\r\nla detección de velocidad se obtiene a través de la señal del acelerómetro móvil, procesándola y\r\ncomparándolo con un umbral fijo para detectar los latidos del corazón. Mientras tanto,\r\nEl estado de ánimo se determina mediante un cuestionario realizado después de la medición de la frecuencia cardíaca, obteniendo los componentes de estrés, depresión, hostilidad, vigor y\r\nfatiga. Los datos obtenidos dentro del proceso de medición se envían a un\r\ncentro de análisis para poder realizar un estudio a largo plazo. La estimación de la frecuencia cardíaca fue realizada por el acelerómetro móvil y se comparó con\r\nseñal de electrocardiograma de referencia y con acelerómetro externo. los\r\nLos resultados muestran una gran aproximación y están fuertemente influenciados por la inestabilidad en la frecuencia de muestreo del acelerómetro móvil. Las diferencias\r\nentre las medidas del valor del ritmo cardíaco son menos de 2 latidos por minuto', 1, '2019-08-06 09:30:00', '156507878354.pdf', 0, NULL, NULL),
(56, 56, 'Ignacio Lillo', NULL, '18.666.444-2', NULL, '12345678', NULL, 'Visualizacion de UCM en 3D', 'Imagenes', 2013, NULL, 'Paulo Gonzalez Gutierrez', 'Ingenieria en Ejecucion e Informatica', 'Memoria', 'La contribucion esperada es, poder generaaar un plano 3D de la Universidadad...', 'Descripcion1, Descripcion2, Descripcion3, Descripcion4', 'Objetivo1, Objetivo2,Objetivo3', 'Proyecto', 'UCM', 'Escribe aquí su observacion', 5, NULL, 1, '2019-08-24 07:23:15', NULL, NULL, NULL, NULL, NULL, NULL, '2019-08-24', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(57, 57, 'Jose Lopez', NULL, '18.146.721-k', NULL, '12345678', NULL, 'Tesis 55', 'Inteligencia de negocios', 2012, NULL, 'Hugo Araya Carrasco', 'Ingenieria Civil Informatica', 'Tesis', 'Contribucion1, Contribucion2, Contribucion3', 'La tesis tratara sobre Tesis55', 'Objetivo1, Objetivovo2, Objetivo3, Objetivo4', 'Empresa', 'UCM', NULL, 4, 1, NULL, '2019-09-01 05:14:24', NULL, NULL, NULL, NULL, NULL, NULL, '2019-09-01', '1567381138Evaluacion.pdf', 'Se ha dicho que el Derecho no existe ni es imaginable al margen de su historia. Sin duda, la afirmación precedente, conlleva un reconocimiento del enorme contenido de información que se asocia al Derecho en cada uno de sus ámbitos. La información, en este sentido, significa descripción de algún objeto o suceso.\r\n Para que esta información fluya en forma adecuada y resulte útil, debe organizarse según algún método o sistema, de allí que se debe entender como sistema de información “todo conjunto de elementos diseñado para el soporte, administración y gestión de información” \r\n Información es ante todo un conocimiento y la posibilidad de entregar ese conocimiento a todos los probables usuarios, ella constituye la finalidad esencial de la Ciencia de la Información. Ésta comprende a su vez tres grandes disciplinas: La Documentación, la Informática y las Ciencias de la Comunicación, de las cuales, las dos primeras parecen ser más atingentes al tema abordado en la Separata del CEDI “Informática Jurídica Documental”, en torno a la cual se ha preparado el presente trabajo. La Documentación estudia el establecimiento, investigación, reunión y utilización de documentos, mientras que la Informática estudia el tratamiento automático de la información por medio de computadoras. \r\n Ambas disciplinas, Documentación e Informática abocadas a un objeto particular, la información jurídica, crean la Informática Jurídica Documental, la que como tal, no es una área, ni de la Ciencia de la Información, ni del ámbito de la Ciencia del Derecho. La Informática Jurídica Documental es un \"conjunto de técnicas\", significativas para las computadoras, aplicadas al tratamiento de la información jurídica. \r\n La revolución informática y sus proyecciones socio-económicas se vienen produciendo desde la década del 40, presentando una evolución caracterizada por un continuo crecimiento de su influencia e importancia, tanto en desarrollo tecnológico, mayor capacidad de manejo de datos y rapidez de respuestas, como en amplitud de su ámbito de influencia: se incluyen aquí, materias tan diversas que pueden ir desde la administración financiera hasta las tecnologías de la salud.\r\n Entendiendo la Informática como la ciencia del tratamiento lógico y automático de la información, y considerando que la información puede ir desde el dato científico más complejo hasta la más banal de las actividades, resulta que la Informática tiene un carácter multidisciplinario, ya que se ramifica en sus proyecciones a cualquier disciplina específica. El ámbito del Derecho no se excluye, por supuesto, de lo anterior.\r\n De ahí que al estudio de la concreta aplicación de la Informática al campo del Derecho se le ha denominado como Informática Jurídica.', 1, NULL, NULL, 0, NULL, NULL),
(58, 58, 'Boris Mora Garrido', NULL, '13.789.672-3', NULL, '12345678', NULL, 'Tesis 56', 'Ingenieria de Software', 2012, NULL, 'Marco Toranzo Cespedes', 'Ingenieria Civil Informatica', 'Tesis', 'Escriba aqui los objetivos', 'Descripcion', 'Escriba aqui los objetivos', 'Proyecto', 'ICI UCM', NULL, 4, 1, NULL, '2019-09-01 06:12:07', NULL, NULL, NULL, NULL, NULL, NULL, '2019-09-01', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(61, 61, 'Hugo Gutierrez', 'Hugo Fuentes', '18.321.741-1', NULL, '12345678', NULL, 'Tesis60', 'Ingenieria de Software', 2012, 2011, 'Hugo Araya Carrasco', 'Ingenieria en Ejecucion e Informatica', 'Tesis', 'Escriba aqui los objetivos', 'Descripcion', 'Escriba aqui los objetivos', 'Proyecto', 'Proyecto20', 'Escribe aquí su observacion', 4, 1, NULL, '2019-10-03 21:16:29', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-09', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(63, 63, 'Adolfo Fuentes', NULL, '18.369.470-6', NULL, '12345678', NULL, 'Tesis61', 'Inteligencia de negocios', 2012, NULL, 'Marco Toranzo Cespedes', 'Ingenieria Civil Informatica', 'Tesis', 'Contribución1', 'Descripcion1', 'Objetivos1', 'Empresa', 'Tutelkan', 'Escribe aquí su observacion', 4, 1, NULL, '2019-10-03 22:45:22', NULL, NULL, NULL, NULL, NULL, NULL, '2019-10-03', NULL, NULL, NULL, NULL, NULL, 15, 3, NULL),
(109, 109, 'Marco Felipe Castillo Gonzalez', 'Leonardo Ignacio Bascuñan Fuentealba', '19.023.679-2', '18.892.820-k', '12345678', '79504911', 'Tesis 101', 'Inteligencia de negocios', 2014, 2013, 'Marco Toranzo Cespedes', 'Ingenieria Civil Informatica', 'Tesis', 'Escriba aqui los objetivos', 'Descripcion', 'Objetivo1 Objetivo2 Objetivo3', 'Empresa', 'Tutelkan', 'Escribe aquí su observacion', 4, 1, NULL, '2019-12-01 01:05:12', '2020-02-29', 1, NULL, NULL, 1, NULL, '2019-11-12', NULL, NULL, NULL, NULL, NULL, 10, 3, NULL),
(112, 32, 'Jhon Michael Faundez Miño', 'Alfonso Bilocopetiuc Parra', '18.574.262-8', '18.674.261-3', '12345678', '12345678', 'Tesis 100', 'Ingenieria de Software', 2013, 2013, 'Marco Toranzo Cespedes', 'Ingenieria en Ejecucion e Informatica', 'Memoria', 'Escriba aqui los objetivos', 'Descripcion', 'Escriba aqui los objetivos', 'Empresa', 'Empresa07', 'Escribe aquí su observacion', 4, 1, NULL, '2019-12-04 00:28:57', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-04', '157567079549.pdf', 'Copie aqui su abstract o resumen.jksnkjdnaknsdaknaslkndasldnalkansalal', 1, '2019-12-06 20:00:00', '1575675438112.pdf', 0, NULL, 3.5),
(113, 59, 'Alfonso Bilocopetiuc Parra', 'Jhon Michael Faundez Miño', '18.674.261-3', '18.574.262-8', '12345678', '12345678', 'Tesis 100', 'Ingenieria de Software', 2013, 2013, 'Marco Toranzo Cespedes', 'Ingenieria Civil Informatica', 'Memoria', 'Escriba aqui los objetivos', 'Descripcion', 'Escriba aqui los objetivos', 'Empresa', 'Empresa07', 'Escribe aquí su observacion', 4, 1, NULL, '2019-12-09 04:25:07', '2019-12-23', 1, '2020-02-26', 1, 1, 1, '2019-12-09', '1575878219Bayesian_Reasoning_and.pdf', 'Copie aqui su abstract o resumen.', 1, '2019-12-09 15:00:00', '1575897206113.pdf', 0, 3, 5),
(118, 114, 'Carlos Francisco Sanchez Perez', 'Diego Paulo Palma Caceres', '19.023.675-5', '19.235.678-8', '82345679', '83420256', 'Tesis260', 'Ingenieria de Software', 2015, 2015, 'Hugo Araya Carrasco', 'Ingenieria Civil Informatica', 'Memoria', 'Escriba aqui los objetivos', 'Descripcion', 'Escriba aqui los objetivos', 'Empresa', 'Tutelkan', 'Escribe aquí su observacion', 2, NULL, 1, '2020-02-22 21:37:34', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sexo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo_usuario` int(11) NOT NULL DEFAULT 0,
  `director_escuela` int(11) DEFAULT 0,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `sexo`, `tipo_usuario`, `director_escuela`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'Admin@admin.com', NULL, '$2y$10$P7Por1l.Ep3mdBZyEvq5OOaTOCePQZw.T0S4Zkj9qF5LFJADxsrue', 'Masculino', 0, 0, NULL, NULL, NULL),
(3, 'Ivan Raul Merino Gonzalez', 'IvanMer@gmail.com', NULL, '$2y$10$gTj.qdoj79Ef/egiyT4yNuv.ROtmOiI59dIkzVLWnAlPRWGgylQ/G', 'Masculino', 3, 0, NULL, NULL, '2019-10-22 04:15:15'),
(4, 'Leonardo Ignacio Bascuñan Fuentealba', 'leonardo211294@gmail.com', NULL, '$2y$10$Y7cKXiDp40qQebsAZddN.O9xBDhspNwSMmcJN4XSRGp7NIxYuvczW', 'Masculino', 1, 0, 'WAdAPAqqUV7tkMcRfoovPR1uQVuzuEOoljFmWexiLBMNpmq7ZnjLcmWkdUfz', '2019-07-14 23:56:55', '2019-11-29 22:53:13'),
(7, 'Hugo Araya Carrasco', 'Haraya@gmail.com', NULL, '$2y$10$RXRtEEKqB2TR.qzMm9Fxo..RSyXb7FiYIHumhu2qKwy/IX0grY1/S', 'Masculino', 2, NULL, NULL, NULL, '2020-02-07 00:12:27'),
(8, 'Carlos Andres Cancino Duran', 'CarlosCancino@gmail.com', NULL, '$2y$10$FI0FmorGtaq2VMHczi3RMO9aQNqozX1FNIeDet09n6TMf2.n8cZSK', 'Masculino', 1, 0, NULL, '2019-07-16 04:16:21', '2019-07-16 04:16:21'),
(9, 'Rafael  Alexis Perez Torres', 'RafaelPerez@gmail.com', NULL, '$2y$10$raKHvuUg4HJKAh6UO2pwXuiVfwzu7F5VTyesjCOvZxNoi3C7tsgJW', 'Masculino', 1, 0, NULL, '2019-07-16 04:18:50', '2019-07-16 04:18:50'),
(10, 'Oscar Raul Perez Fernandez', 'OscarPerez@gmail.com', NULL, '$2y$10$UHCQuJdxJw8aJTFDi3dL1.zW7F4HcfX35y99g.8iMiZvbPDkUin1.', 'Masculino', 1, 0, NULL, '2019-07-16 04:20:43', '2019-07-16 04:20:43'),
(11, 'Sergio Hernandez', 'SergioH@gmail.com', NULL, '$2y$10$bGwldwqEeiVRDetxT2ZjNOONUPt/q1n/k86ad4aGkSpOdvMMtxd5q', 'Masculino', 2, 0, NULL, NULL, '2019-10-10 08:15:28'),
(12, 'Paulo Gonzalez Gutierrez', 'PauloGonzalez@gmail.com', NULL, '$2y$10$nQ71YsDK6MJgtnaus1ESNeVbdrt0DvkBGGdakcfnhOg8baizfI6Nu', 'Masculino', 2, 1, NULL, NULL, '2020-03-17 23:42:39'),
(13, 'Wladimir Soto', 'wsoto@gmail.com', NULL, '$2y$10$HJz7PXN14.qafcKQmEHXoumhvGzLXHK4kGz.YXeDbN6PmTGw1MPoG', 'Masculino', 2, 0, NULL, NULL, '2019-10-10 06:50:22'),
(14, 'Xaviera Lopez', 'XavieraL@gmail.com', NULL, '$2y$10$Iy8sRhRFOl8EjoHFgjjAKegJzr5RoRKk8ZzIO/I4Zu2s5F4i1z2pC', 'Femenino', 2, 0, NULL, NULL, '2019-10-10 06:50:50'),
(15, 'Angelica Urrutia', 'AngelicaU@gmail.com', NULL, '$2y$10$UHeuUhqSxgVUMzTRCKgj2ewR3oS8oRGWLK1xwnxm24LKcrAwKdnu.', 'Femenino', 2, 0, NULL, NULL, '2019-10-10 06:56:34'),
(16, 'Rodrigo Chavez', 'RodrigoC@gmail.com', NULL, '$2y$10$IIMkIRIefVWEIR6u5Saby.szXbs5GmJ6cdumfFnmtgVArUi81R1c6', 'Masculino', 1, 0, NULL, '2019-07-16 07:55:40', '2019-07-17 22:44:22'),
(17, 'Marco Toranzo Cespedes', 'marcotoranzo@gmail.com', NULL, '$2y$10$F1QBXpq44U7wahnq46xUOeNPD1N9E92pNhb5FKwbhj1BIqnf4QGL.', 'Masculino', 2, 0, 'VfF7JcZdUpGoarkTzqDdPwsQEME7dm0RWAxrRA7JR1Cou1vPG52ywuVDCl4h', NULL, '2019-12-05 00:07:19'),
(18, 'Camilo Gonzalo Cavieres Perez', 'CamiloC@gmail.com', NULL, '$2y$10$JUBYY3k28DmGk7b6Yh2blOKlkRuwqFMcL3BieCKGmC1Y3HxS0BU7K', 'Masculino', 1, 0, NULL, '2019-07-16 08:27:48', '2019-12-04 23:55:25'),
(19, 'Gonzalo Ignacio Paredes Valenzuela', 'GonzaloParedes@gmail.com', NULL, '$2y$10$cqV6yLeBy8YZUIj6i13mFuye2MWyDwAHwa1KnGHFiaATaWVy.EGsu', 'Masculino', 1, 0, NULL, '2019-07-19 23:08:31', '2019-07-19 23:08:31'),
(20, 'Marco Mora', 'MarcoM@gmail.com', NULL, '$2y$10$TqMJh2XVrNb/EkpZMpepaO0lI2BaTmNUTsx0eSRKBVaVfyBsnfT0.', 'Masculino', 2, 0, NULL, NULL, NULL),
(21, 'Ricardo Barrientos', 'RicardoB@gmail.com', NULL, '$2y$10$zlT4j9NW096tlHmalTxpCePrS2E5C3MJ3J478RVKUqPVDZxIzBBpe', 'Masculino', 2, 0, NULL, NULL, '2019-10-10 06:57:39'),
(22, 'Felipe Nicolas Tapia Nuñez', 'FelipeTapia@gmail.com', NULL, '$2y$10$5GLPqQqZX7NP8TpC02U1Seb1gv.oBvlWyz1ZYYiGpz8ZWlG8UwSPe', 'Masculino', 1, 0, NULL, '2019-07-20 03:11:25', '2019-07-20 03:11:25'),
(23, 'Rosa Karina Gonzalez Gutierrez', 'RosaGonzalez@gmail.com', NULL, '$2y$10$A706x5VrUJACCLTtvYc6FuVKhOuYzGTnRPcdVCRELNF2BzBgcvp1S', 'Femenino', 1, 0, NULL, '2019-07-21 03:32:43', '2019-07-21 03:59:35'),
(24, 'Jorge Gabriel Ramirez Perez', 'JorgeRamirez@gmail.com', NULL, '$2y$10$3gm/ql.92ksvlce2epChJuNL8LzkWreslcv9E70uiY5FRFSQXQfpu', 'Masculino', 1, 0, NULL, '2019-07-26 04:26:50', '2019-07-26 04:26:50'),
(31, 'Daniel Alarcon Chambles', 'DanielA@gmail.com', NULL, '$2y$10$EIN4vEKP8bMJiBsp0SkF/umiq8/f82YV4jyRAiVScO42S61ERKuu2', 'Masculino', 1, 0, NULL, '2019-07-26 11:49:01', '2019-07-26 12:39:55'),
(32, 'Jhon Michael Faundez Miño', 'JhonF@gmail.com', NULL, '$2y$10$ahzlv/f8/FnFZvQrdE1jqujo0R8uSY/05ZSJiieOoL.lvzAW4ecPq', 'Masculino', 1, 0, NULL, '2019-07-26 14:38:52', '2019-07-26 15:09:51'),
(33, 'Vicente Valdes', 'VicenteV@gmail.com', NULL, '$2y$10$0Xdv3Oc5h6fm9QA6BoUov.hy4mjlrH99VmFf22jBEiiTAsUjq4IHS', 'Masculino', 1, 0, NULL, '2019-07-26 15:26:23', '2019-07-26 15:26:23'),
(34, 'Felipe Garrido Perez', 'FelipeGarrido@gmail.com', NULL, '$2y$10$PGtMfMTMeu3UBOkiEddSXOUfcrmr.fdhpgjfi8DUWiGdUzCEsLQ3K', 'Masculino', 1, 0, NULL, '2019-07-26 16:02:24', '2019-07-26 16:02:24'),
(35, 'Nelson Guerra', 'NelsonG@gmail.com', NULL, '$2y$10$vCoKsvhC3DmnMSK71AMOjOdjmmQOwuChYL3seANSUYjq5Tg3VZ3Ti', 'Masculino', 1, 0, NULL, '2019-07-26 16:11:18', '2019-07-26 16:11:18'),
(36, 'Cesar Poblete', 'CesarP@gmail.com', NULL, '$2y$10$Q8Fcs.1uOa8YhOrPqCFggOFFYIyCIVsYS7Vb98BsLDP/4Sec9iFh.', 'Masculino', 1, 0, NULL, '2019-07-26 16:13:34', '2019-07-26 16:13:34'),
(37, 'Arturo Fernandez', 'ArturoF@gmail.com', NULL, '$2y$10$9Z2QuIyLfuWERzcbwqbrteOz0wP89iQjzPKngWZCfAlMiLEHeOIiy', 'Masculino', 1, 0, NULL, '2019-07-26 16:16:47', '2019-07-26 16:16:47'),
(38, 'Pedro Lopez', 'PedroL@gmail.com', NULL, '$2y$10$ULR0DSxxqclNwxt/QWPPMutmrHszkr2b.EbJ6YFWkv1c4S/HZnjI.', 'Masculino', 1, 0, NULL, '2019-07-26 16:22:33', '2019-07-26 16:22:33'),
(39, 'Hugo Rodriguez', 'HugoR@gmail.com', NULL, '$2y$10$KVy3K0V88xuFo2z9xWFOkudUbAbr3N/gQnxSVUnRMZzTEvMJN9O8.', 'Masculino', 1, 0, NULL, '2019-07-26 16:24:52', '2019-07-26 16:24:52'),
(40, 'Felipe Javier Barrios Lopez', 'FelipeBarrios@gmail.com', NULL, '$2y$10$5xHZ3RncZ2QPluTsCXjCMug0xq4jF2r2q2iGcYPH4W7OZZhtnXw3W', 'Masculino', 1, 0, NULL, '2019-07-26 19:19:20', '2019-07-26 19:19:20'),
(41, 'Francisco De la Fuente', 'FranciscoDF@gmail.com', NULL, '$2y$10$BTQil1FC8u4kt3f/YmrMr.WdUv4BFo4dx0AyQG5zpKnzcx0wgdoKG', 'Masculino', 1, 0, NULL, '2019-07-27 07:06:43', '2019-07-27 07:06:43'),
(42, 'Rodrigo Ramirez', 'RodrigoR@gmail.com', NULL, '$2y$10$d9HZLRSpc/etYaMewAClnOKRZdTIq0o49jYG8Vkz9PMk0dA2nQ06y', 'Masculino', 1, 0, NULL, '2019-07-27 22:54:21', '2019-07-27 22:54:21'),
(43, 'Barbara Sandra Castro Muñoz', 'bcastro@ucm.cl', NULL, '$2y$10$bQ2ai9f57L0x.btzIBgJ9e7xM48mJCfY/TDGULmcO97Cpfyqv39lG', 'Femenino', 4, 0, NULL, NULL, NULL),
(44, 'Walter Gonzalo Casanova Hurtado', 'WaterC@gmail.com', NULL, '$2y$10$zOb/mHTfVnhSmiyQN8KUS.ovDQauYKWCIocyh9wZ0yMccJg54SEG6', 'Masculino', 1, 0, NULL, '2019-07-31 18:14:50', '2019-07-31 18:14:50'),
(45, 'Fernando Ignacio Olmos Duran', 'FernandoOlmos@gmail.com', NULL, '$2y$10$Nvu1LcLeFHrDlIYG0Yy/9eqqPPKKNQ/ChxLFk4RJMgSgoJRZxIhAK', 'Masculino', 1, 0, NULL, '2019-08-02 11:05:35', '2019-08-02 11:05:35'),
(46, 'Sebastian Garrido', 'SebastianG@gmail.com', NULL, '$2y$10$GTku6pBK38kipS/vAjiy.uheUMFQlB0jjKfGy/YPpmK24EHB.MKFa', 'Masculino', 1, 0, NULL, '2019-08-03 00:16:28', '2019-08-03 00:16:28'),
(47, 'Miguel Ignacio Cancino Nuñez', 'MiguelCancino@gmail.com', NULL, '$2y$10$wJNMKinj8M3f9FVVc8UOxeDea2G9Uybl9cVJhcwNM4.yFogSCmsTm', 'Masculino', 1, 0, NULL, '2019-08-04 03:28:44', '2019-08-04 03:28:44'),
(48, 'Karina Patiño Albornoz', 'KarinaPA@gmail.com', NULL, '$2y$10$pW9lFbbkUs1pJcCN6jw1/OHlt7.avKI1XJmgbbECLIDi/sCC.wrVa', 'Femenino', 1, 0, NULL, '2019-08-05 06:12:09', '2019-08-05 06:12:09'),
(49, 'Jose Miguel Valdes Salgado', 'JoseValdes@gmail.com', NULL, '$2y$10$FPPhdYnm/7UwDghPIl1K8OCL0EMAXUMDGQGCmpOu8YXfXNhAYTZJm', 'Masculino', 1, 0, NULL, '2019-08-05 17:22:04', '2019-08-05 17:22:04'),
(50, 'Felipe Antonio Matamala Lopez', 'FelipeM@gmail.com', NULL, '$2y$10$I2cOwjlKUc7gWNbChsIm8OyFRAU5uinui43DptVoDsAq2dN2IAH.m', 'Masculino', 1, 0, NULL, '2019-08-05 23:31:38', '2019-08-06 00:38:02'),
(51, 'Hector Carrasco Faundez', 'HectorCarrasco@gmail.com', NULL, '$2y$10$8jw8pMMBbi/wh2icBgjoeOH3/M9KbMQvJ96dpdCffyLdjdVgPNpTq', 'Masculino', 1, 0, NULL, '2019-08-06 05:32:33', '2019-08-06 05:32:33'),
(52, 'Boris Salgado Lopez', 'BorisSalgado@gmail.com', NULL, '$2y$10$dFfBS7LRJCjuFVHANjiTNuzgn9KnD6hEiUQDQNhL1AkkUnk/VpTe2', 'Masculino', 1, 0, NULL, '2019-08-06 06:41:57', '2019-08-06 06:41:57'),
(53, 'Diego Gaete Bernales', 'DiegoGaete@gmail.com', NULL, '$2y$10$gCJpSgtKbaMRdFOQj/qBzOjaNopx5RykJObeGeHFSCxGc7VJBV9DS', 'Masculino', 1, 0, NULL, '2019-08-06 06:59:24', '2019-08-06 06:59:24'),
(54, 'Humberto Muñoz Norambuena', 'HumbertoM@gmail.com', NULL, '$2y$10$dbZHlhrVE8/IijIMVZHxuObaV8lkoM5jQyb4Iw7IcnTRFIGpOipne', 'Masculino', 1, 0, NULL, '2019-08-06 07:42:02', '2019-08-06 07:42:02'),
(55, 'Carlos Hernandez Gonzalez', 'CarlosHernandez@gmail.com', NULL, '$2y$10$rjMRjqebv8CIgsRMiq.H6eu8cpsnxIx1Xn4bDlIHvnM.7c/2IdE4e', 'Masculino', 1, 0, NULL, '2019-08-06 14:13:33', '2019-08-06 14:13:33'),
(56, 'Ignacio Lillo', 'IgnacioL@gmail.com', NULL, '$2y$10$nYTu46h4pWjmGQsPeNA72ui4wqKqcq3MocGKfNfILijiWaitZK/iq', 'Masculino', 1, 0, NULL, '2019-08-24 07:20:50', '2019-08-24 07:20:50'),
(57, 'Jose Lopez', 'Jl@gmail.com', NULL, '$2y$10$v960GkUnudmpxBGFonaOE.j9Mw5pluZYCm7755mid0WiLy3O7dbO.', 'Masculino', 1, 0, NULL, '2019-08-27 20:39:10', '2019-08-27 20:39:10'),
(58, 'Boris Mora Garrido', 'BorisMora@gmail.com', NULL, '$2y$10$wk.L5RhwYI0okK2xMd2OAeQUPsz1.jw9GkysqR6cILTT4Mvqq869S', 'Masculino', 1, 0, NULL, '2019-09-01 06:03:18', '2019-09-01 06:03:18'),
(59, 'Alfonso Bilocopetiuc Parra', 'AlfonsoB@gmail.com', NULL, '$2y$10$4K13XLIIl//D1SYcFYDNF.lr0yo1gxalUbBOiFvvhuE1zNpWUiHUq', 'Masculino', 1, 0, NULL, '2019-09-01 20:12:56', '2019-09-01 20:12:56'),
(60, 'Hugo Fuentes ', 'HugoF@gmail.com', NULL, '$2y$10$kFOp7oDiJm3w7PvdIY3SIOStnEXM8LRAIj0zZ.rDAdwlZjGV5VOUi', 'Masculino', 1, 0, NULL, '2019-10-03 16:02:49', '2019-10-03 16:02:49'),
(61, 'Hugo Gutierrez', 'HugoG@gmail.com', NULL, '$2y$10$m5a0LN31UgHZj/JAD5s6hOOHBJNq.vdUg2pAAXKV.pxTQ0OMQogQS', 'Masculino', 1, 0, NULL, '2019-10-03 16:03:53', '2019-10-03 16:03:53'),
(63, 'Adolfo Fuentes', 'AdolfoF@gmail.com', NULL, '$2y$10$Ss8/KBqPGEMnblkBAaKcq.YWzi80H3oeZcJzf8a3gzIbk8zK5Iqm2', 'Masculino', 1, 0, NULL, '2019-10-03 23:32:36', '2019-10-03 23:32:36'),
(96, 'Mary Carmen Jarur', 'Mjarur@gmail.com', NULL, '$2y$10$r35uyScKmDskm1R1uJy3POp.DDhiCo7tXuSbX1aYutoVBbDk/D7Du', 'Femenino', 2, 0, NULL, NULL, NULL),
(97, 'Juan Manuel Cabezas Contardo', 'JuanManuelC@gmail.com', NULL, '$2y$10$3JJSYYerAWZN.1z4DqnA2OjZDFTDvo4DibO6Pe5WEhyHN8CBQPT7u', 'Masculino', 1, 0, NULL, '2019-10-11 15:38:34', '2019-10-11 15:38:34'),
(98, 'Bastian Escalona', 'BastianEscalona@gmail.com', NULL, '$2y$10$2cBXcdLx16qfEwkGEdwHfe3rzAgW/F6OjXXe4ASq.LKYNuhnNzjTa', 'Masculino', 1, 0, NULL, '2019-10-11 15:40:07', '2019-10-11 15:40:07'),
(99, 'Javier Torrente', 'JavierTorrente@gmail.com', NULL, '$2y$10$Hs5AMm8JiYGJN0HC532s5OWMBx9OTGR/2B2tjTnUf6tcst77cGB46', 'Masculino', 2, 0, NULL, NULL, NULL),
(103, 'Paula  Gabriela Torres', 'PaulaT@gmail.com', NULL, '$2y$10$5hcbQjDbSeqxQrmZb3lnTOO8ijhEnl0G1DpouwyrUTYcfugRb9lJu', 'Femenino', 1, 0, NULL, '2019-10-13 23:50:04', '2019-10-13 23:50:04'),
(104, 'Carlos Perez Valenzuela', 'CarlosPV@gmail.com', NULL, '$2y$10$LMzy3UkuUsbhButV7BvApuJqVJAbBlWwPiLILrzhPg41/ce4IgVWy', 'Masculino', 2, 0, NULL, NULL, '2019-10-13 23:56:37'),
(109, 'Marco Felipe Castillo Gonzalez', 'MarcoCastillo@gmail.com', NULL, '$2y$10$5kQHBOTWMWw0JppaN/l3M.2XDCoy1rj1RZYrVGFj/fw3BSoqZ/XUO', 'Masculino', 1, 0, NULL, '2019-11-13 01:03:14', '2019-11-13 01:03:14'),
(111, 'Philip Vasquez', 'PhilipV@gmail.com', NULL, '$2y$10$0q.V7NC9w3s5R/g3u17Pu.wF/q012GiNeFgtqUk18KCKK0s2eIxJ.', 'Masculino', 2, 0, NULL, NULL, NULL),
(113, 'Diego Paulo Palma Caceres', 'DiegoPalma@gmail.com', NULL, '$2y$10$cR1rCpsZ09bJ/Y/ArzMD/.mIguF2LHB5Pe14Dk9QLkCtpnQYn7ySO', 'Masculino', 1, 0, NULL, '2020-02-22 16:57:40', '2020-02-22 16:57:40'),
(114, 'Carlos Francisco Sanchez Perez', 'CarlosSanchez@gmail.com', NULL, '$2y$10$XMYypf.TWl1ZasxrlWHq9uWSWvKCQWLljXRf1vTET56oifni50b.C', 'Masculino', 1, 0, NULL, '2020-02-22 20:39:32', '2020-02-22 20:39:32'),
(116, 'Felipe Gonzalo Ferrada Mardones', 'FelipeFerrada@gmail.com', NULL, '$2y$10$nmseLGHCaAf.jiM4ME.F5.T02nAXHeWIyUNQaK7k0XaKJkKfewhJe', 'Masculino', 1, 0, NULL, '2020-03-11 19:45:10', '2020-03-11 19:45:10'),
(117, 'Rodrigo Fernando Urrutia Cespedes', 'RodrigoUrrutia@gmail.com', NULL, '$2y$10$Ue/PzHZwvHhL4u/5AI.BL.tyxiJ8UPc6yg57oZBm9DnPWyBM47lWy', 'Masculino', 1, 0, NULL, '2020-03-16 23:37:34', '2020-03-16 23:38:53'),
(118, 'Claudio Pablo Iturra Gonzalez', 'ClaudioIturra@gmail.com', NULL, '$2y$10$YIcpUyn7THC6Ve20TpMdQeM3FEG.Uq0X4eS2IcbtZFvmixzPNj4oS', 'Masculino', 1, 0, NULL, '2020-03-16 23:42:48', '2020-03-16 23:42:48');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `area_tesis`
--
ALTER TABLE `area_tesis`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `area_tesis` (`area_tesis`),
  ADD UNIQUE KEY `area_tesis_2` (`area_tesis`);

--
-- Indices de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tesis` (`id_tesis`),
  ADD KEY `id_tesis_2` (`id_tesis`);

--
-- Indices de la tabla `capitulos`
--
ALTER TABLE `capitulos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `comision`
--
ALTER TABLE `comision`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comunidad`
--
ALTER TABLE `comunidad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `fondo_concursable`
--
ALTER TABLE `fondo_concursable`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grado_academico_profesor_planta`
--
ALTER TABLE `grado_academico_profesor_planta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `memorandum`
--
ALTER TABLE `memorandum`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `recopilacion_inf_titulados`
--
ALTER TABLE `recopilacion_inf_titulados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tesis`
--
ALTER TABLE `tesis`
  ADD PRIMARY KEY (`id_pk`),
  ADD KEY `tesis_ibfk_1` (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `area_tesis`
--
ALTER TABLE `area_tesis`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  MODIFY `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT de la tabla `comunidad`
--
ALTER TABLE `comunidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `fondo_concursable`
--
ALTER TABLE `fondo_concursable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `tesis`
--
ALTER TABLE `tesis`
  MODIFY `id_pk` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD CONSTRAINT `bitacora_ibfk_1` FOREIGN KEY (`id_tesis`) REFERENCES `tesis` (`id_pk`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `capitulos`
--
ALTER TABLE `capitulos`
  ADD CONSTRAINT `capitulos_ibfk_1` FOREIGN KEY (`id`) REFERENCES `tesis` (`id_pk`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `comision`
--
ALTER TABLE `comision`
  ADD CONSTRAINT `comision_ibfk_1` FOREIGN KEY (`id`) REFERENCES `tesis` (`id_pk`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `grado_academico_profesor_planta`
--
ALTER TABLE `grado_academico_profesor_planta`
  ADD CONSTRAINT `grado_academico_profesor_planta_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `recopilacion_inf_titulados`
--
ALTER TABLE `recopilacion_inf_titulados`
  ADD CONSTRAINT `recopilacion_inf_titulados_ibfk_1` FOREIGN KEY (`id`) REFERENCES `tesis` (`id_pk`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tesis`
--
ALTER TABLE `tesis`
  ADD CONSTRAINT `tesis_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
