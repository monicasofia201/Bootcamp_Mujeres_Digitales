/*
Actividades:
Primera Actividad: 
Datos y Variables (Definir y manipular variables, mostrar resultados por consola).
Consigna:
Define las siguientes variables: un nombre ("Pepe"), una edad (25), un precio ($99.90), una lista con tus series favoritas 
("Dark", "Mr Robot", "Castlevania"), y una estructura para tus películas favoritas (nombre, año de estreno, protagonistas).
Muestra los datos por consola, incrementa la edad en 1 y vuelve a mostrarla.
Agrega una nueva serie a la lista y muéstrala nuevamente. 
*/

// Definir variables
let nombreUsuario = "Pepe";
let años = 25;
let costo = 99.90;
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];
let peliculasFavoritas = [
  {
    titulo: "El Caballero de la Noche",
    lanzamiento: 2008,
    elenco: ["Bruce Wayne", "Joker"],
  },
  {
    titulo: "Inception",
    lanzamiento: 2010,
    elenco: ["Cobb", "Arthur"],
  },
  {
    titulo: "Avengers: Endgame",
    lanzamiento: 2019,
    elenco: ["Iron Man", "Capitan America"],
  },
];

// Mostrar todos esos valores por consola
console.log("Nombre del Usuario:", nombreUsuario);
console.log("Años:", años);
console.log("Costo:", costo);
console.log("Series Favoritas:", seriesFavoritas);
console.log("Películas Favoritas:", peliculasFavoritas);

// Incrementar la edad en 1 y volver a mostrarla
años += 1;
console.log("Nueva Edad:", años);

// Agregar una serie a la lista de series favoritas y volver a mostrarla
seriesFavoritas.push("The Mandalorian");
console.log("Nueva lista de series favoritas:", seriesFavoritas);

