/*
>> Usa var: en casos muy específicos, pero su uso está en desuso por los problemas de alcance y hoisting.
>> Usa let: cuando necesitas que la variable sea mutable (pueda cambiar) y deseas un comportamiento más controlado dentro del bloque.
>> Usa const: cuando quieres asegurarte de que una variable no cambie después de ser inicializada, especialmente para valores que deben permanecer constantes o estructuras como arreglos y objetos.
*/


/* CONCEPTO: ARREGLOS:
Es una colección de elementos que se almacenan en una sola variable
Los indices de los arreglos se inicializan en 0 por lo tanto 0 = posición 1 */

console.log(" --- ARREGLO DE FRUTAS ---");
let frutas_original = ["Manzana", "Banana", "Naranja"];
console.log("Arreglo original de Frutas: ", frutas_original);

//EJEMPLO 1. Se selecciona solo un elemento, pueden cambiar su valor a lo largo del tiempo o dentro de un bloque de código específico. 
let frutas1 = ["Manzana", "Banana", "Naranja"];
console.log("Se elije el elemento 1 del arreglo frutas: " + frutas1[1]);

//¿Cómo agregar cadenas de texto? "xxx" + frutas ; `xxx${frutas}` ; "xxx", frutas

// EJEMPLO 2. MODIFICACIONES COMUNES DE LOS ARREGLOS 
// Se declara una variable 'frutas' que es un arreglo con tres elementos: "Manzana", "Banana" y "Naranja".
let frutas = ["Manzana", "Banana", "Naranja"];
// Se reemplaza el valor del segundo elemento del arreglo (índice 1, que es "Banana") por "Pera".
frutas[1] = "Pera";
// Se imprime en la consola el contenido del arreglo 'frutas', que ahora es ["Manzana", "Pera", "Naranja"].
console.log("Remplaza elemento (banana):", frutas);

// EJEMPLO 3. MÉTODOS COMUNES DE LOS ARREGLOS: Nos permite agregar, eliminar y contar elementos 

//>>El método'push()': Se añade un nuevo elemento "Mango" al final del arreglo 'frutas' usando el método 'push'.
frutas.push("Mango");
// Se imprime en la consola el contenido actualizado del arreglo 'frutas'.
console.log(`Método push (+Mango): ${frutas}`);

//>>El método 'pop()': elimina el ÚLTIMO elemento del arreglo, no recibe argumentos.
// Así que en este caso se eliminará "Mango" del arreglo 'frutas'.
frutas.pop();
// Se imprime en la consola el contenido actualizado del arreglo 'frutas'.
console.log(`Método pop (-Mango / último elemento): ${frutas}`);

//>>El método 'shift()' elimina el primer elemento del arreglo 'frutas'.
frutas.shift();
// Se imprime en la consola el contenido actualizado del arreglo 'frutas'.
console.log(`Método shift (-Manzana / primer elemento): ${frutas}`);

//>>El método 'unshift()' Se agrega un nuevo elemento "frutas" al principio del arreglo usando el método 'unshift'.
frutas.unshift("fresa");
// Se imprime en la consola un mensaje con el contenido actualizado del arreglo 'frutas' después de usar 'unshift'.
console.log(`Método unshift (+fresa / como primer elemento): ${frutas}`);

// Cuenta cuantos elementos hay en el array, retornando un número
console.log(`La longitud del arreglo 'frutas' es: ${frutas.length}`);


console.log("  EJERCICIOS ");
/* 
Ejercicio 1: 
Crear un arreglo llamado colores con al menos 4 colores
Imprime en la consola el primer y el último color del arreglo
*/
console.log(" --- ARREGLO DE COLORES ---");
let colores = [" rojo", " negro", " blanco", " azul"];
console.log(`Arreglo orginal: ${colores}`);

console.log(` El primer elemento es: ${colores[0]} y el último elemento es: ${colores[3]}`);

/* 
Ejercicio 2: 
Agregar otro color al arreglo
Eliminar el primer color
Muestra cuántos colores hay en el arreglo
*/
colores.push("verde");
console.log(` Se agrega nuevo elemento: ${colores}`);

colores.shift();
console.log(` Se elimina el primer elemento: ${colores}`);

console.log(` Número de elementos del Array: ${colores.length}`);