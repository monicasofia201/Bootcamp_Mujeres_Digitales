/*
CONTADOR DEL 1 AL 10
Crear un programa que imprima los números del 1 al 10 en una sola línea, separados por comas.
Luego, indique cuántos de esos números son mayores que 5.
Se debe mostrar el conteo de los números mayores que 5.
*/

console.log(" --- Contador del 1 al 10 ---")

let c = 0; 
let n = ""; 

for (let i = 1; i <= 10; i++) { 
    if (n !== "") { // Verifica si la cadena n no está vacía
        n += ", "; 
    }
    n += i; // Añade el número actual (i) a la cadena n
    if (i > 5) { // Verifica si el número actual es mayor que 5
        c++; // Si es mayor que 5, incrementa el contador c
    }
}

console.log(`Números del 1 al 10: ${n}`); 
console.log(`Hay: ${c} números mayores que 5`); 
