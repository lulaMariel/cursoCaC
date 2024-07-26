// const unArray = new Array("a", "b", "c");
// console.log(newArray);

// const letras = ["a", "b", "c"];
// console.log(letras);

// console.log(letras[0]); // "a"
// console.log(letras[5]);

// console.log(letras.length);
// console.log(letras [letras.length - 1]);

// Ciclos

// const dias = ["Martes", "Miércoles", "Friday", "Sábado"];

// for(let i = 0; i < dias.length; i++) {
//     console.log(dias[i]);
// }

// dias[4] = "Domingo";
// dias[dias.length] = "Domingo";
// dias.push("Domingo");

// let dia 
// dia = dias.pop();

// dias.unshift("Lunes");
// dia = dias.shift();

// console.log(dias);

// ---

// const frutas = ["Manzana", "Banana", "Naranja"];

// for(let i = 0; i < 3; i++) {
//     console.log(frutas[i]);
// }

// for (let i of frutas) { // Me devuelve el elemento.
//     console.log(i, frutas[i]) // No es válido porque ya me da el elemento.
// }

// for (let i in frutas) { // Me devuelve el indice.
//     console.log(i, frutas[i]); // Es válido porque primero me da el indice y después el elemento.
// }

// const masFrutas = frutas.concat(["Sandia", "Pera"]);
// console.log(masFrutas);

// console.log(frutas.indexOf("Banana"));

// Otros métodos.

// const dias = ["Martes", "Miércoles", "Friday", "Sábado"];

// console.log(dias.slice(1));

// dias.splice(0, 0, "Lunes");
// dias.splice(3, 1, "Jueves", "Viernes");
// dias.splice(dias.length, 0, "Domingo");
// console.log(dias, dias.sort());

// const numeros = [5, 1, 10, 6, 30, 20, 100, 3];

// function compareFn(a, b) {
//     if (a < b) { // Si a < b, devuelve a.
//         return -1;
//     } else if (a > b) { // Si a > b, devuelve b.
//         return 1;
//     } else { // Si a === b, deja igual.
//         return 0;
//     }
// }

// console.log(numeros.sort()); // Ordena los números alfabéticamente, no numéricamente.
// console.log(numeros.sort(compareFn)); // Ordena de forma numérica ascendente.
// console.log(numeros.sort((a, b) => a - b)); // Para no hacer la function compareFn.

// Métodos para recorrer.

// const numeros = [1, 2, 3, 4, 5, 6];

// function mostrar(item) {
//     console.log(item);
// }

// const mostrar = function(item) {
//     console.log(item);
// }

// const mostrar = item => console.log(item);

// numeros.forEach(item => console.log(item));

// const multiplos = numeros.map(item => item * 3);
// console.log(numeros, multiplos);

// Filtro.

// function fnFiltro(numero) {
//     if(numero % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function fnFiltro(numero) {
//     if(numero % 2 == 0) {
//         return true;
//     }
    
//     return false;
// }

// function fnFiltro(numero) {
//     return numero % 2 == 0;
// }

// Opción complicada.
// function fnFiltro(numero) {
//     return !(numero % 2); // No recomendado negar.
// }

// function fnFiltro(numero) {
//     return numero % 2 == 0;
// }

// const fnFiltro = function (numero) {
//     return numero % 2 == 0;
// };

// const fnFiltro = numero => numero % 2 == 0;

// const pares = numeros.filter(numero => numero % 2 == 0);
// console.log(numeros, pares);

// ---
// const letras = ["a", "b", "c"];
// console.log(letras, letras.find((letra) => letra == "b"));
// console.log(letras, letras.findIndex((letra) => letra == "b"));

// For in.

// const user = {
//     Nombre: "Juan",
//     Apellido: "Perez",
//     Dni: 112233445,
// }

// for (let key in user) {
//     console.log(key, user[key]);
// }

// for (let key in user) {
//     console.log(key + ": " + user[key]);
// }