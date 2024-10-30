/* CONCEPTO: FUNCIONES:
Un bloque de Cdigo reutilizable que realiza una tarea específica. */

console.log(" --- FUNCIONES ---");

//1. FUNCIONES DECLARATIVAS: Más común - serie de pasos de una receta
function saludar(nombre) { //Define
    return "Hola, " + nombre + "!"; //Concatena
}
console.log("El saludo generado es (F.Declarativa): " + saludar("Mon")); //Imprime

//2. FUNCIONES DE EXPRESIÓN: Se pueden asignar a una variable para poder usarlas - se guarda en un cajoncito para después usarlas

const sumar = function(a,b) { // Se crea una función que suma dos números
    return a + b;
};
console.log("El resultado de la suma es (F.Expresión): "+ sumar(3,4)); //Se usa la función

//2. PARÁMETROS Y RETORNO: 
// Parametros: Son variables que se especifican en la definición de una función y que sirven para recibir valores cuando la función es llamada. - ingredientes necesarios para que funcione
function multiplicar(a, b){
    return a * b;
}
console.log("El resultado de la multiplicación (Parametros): " + multiplicar(2,5));
// Retorno: Una función es el valor que la función devuelve al código que la llamó. - es como el plato terminado
function resta(a, b){
    return a - b;
}
console.log("El resultado de la resta (Retorno): " + resta(10,4));

//3. FUNCIONES ANÓNIMAS Y ARROW FUNCTION: 
// Funciones anónimas: No tienen nombre y se pueden asignar a una variable (guardar)
const suma = function(a, b){ // la función como tal no tiene nombre, a quien se le esta asignando un nombre es a la variable
    return a + b;
} 
console.log("El resultado de la suma (F. Anónimas): " +suma(2, 3));

// Arrow Functions (Funciones Flecha): Son una forma más rápida y moderma de escribir funciones
const sumarFlecha = (a, b) => {
    return a + b;
};
console.log("El resultado de la suma (Función Flecha): " +sumarFlecha(4, 6));

console.log("  EJERCICIOS ");
/* 
Ejercicio 1: 
Crea una función llamada darBienvenida que tome un nombre y devuelva un mensaje de bienvenida
Ejemplo: darBienvenida("Ana") debería devolver "¡Bienvenida, Ana!"
*/
console.log(" --- FUNCIÓN SALUDO ---");
function darBienvenida(nombre){
    return "¡Bienvenida, " + nombre + "!";
};
console.log(darBienvenida("Ana"));

/* 
Ejercicio 2: 
Crea una función llamada sumarTresNumeros que tome tres números y devuelva su suma
Ejemplo: sumarTresNumeros (2, 3, 4) debería devolver 9
*/

console.log(" --- FUNCIÓN SUMA ---");
function sumarTresNumeros(a, b, c){
    return (a + b + c);
};
console.log("El resultado de la suma de los tres números es: " + sumarTresNumeros(2, 3, 4)); // OJO: Sin comillas pq sino va a tomar los valores como cadena de texto
