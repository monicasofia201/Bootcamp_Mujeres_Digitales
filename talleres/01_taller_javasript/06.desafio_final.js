/*
Desafío final: 
Escribe un programa que reciba un arreglo de números y retorne un nuevo arreglo con 
solo los números pares utilizando funciones.
*/

function r_par(arr) {
    const num_par = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            num_par.push(arr[i]);
        }
    }
    return num_par;
}
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const par = r_par(n); 
console.log( "Los números pares son: ", par); 

