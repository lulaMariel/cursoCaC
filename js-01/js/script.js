// console.log("Hola Mundo")

// var num;
// num = 10;
// num = 15;

// No usar var
// var num = 5; Usar var no es lo recomendable ya que si se declara 2 veces, está mal y no lo toma como mal.

let num;
num = 10
// console.log(num)

num = 15
// console.log(num)

// let num = 5; Avisa que está mal, es lo recomendado.

let nombre;
let Nombre;
let _nombre;
let $nombre;
let nombre2;
let nombreCompleto;

nombreCompleto = "Juan Perex"

// ---

const PI = 3.1416;

// const IVA = 21; Al ser constantes, no puedo aplicarle una variante a la misma variable. Para eso, uso let que permite variantes.
// IVA = 10.5;

let IVA = 21;
IVA = 10.5;

// ---

// let dato;
// console.log(dato)

// dato = 5.25;
// console.log(dato, Number.isNaN(dato), typeof dato)

// dato = new Number(12.12);
// console.log(dato, dato.toFixed(1), typeof dato)

// dato = "Juan";
// console.log(dato, isNaN(dato), typeof dato)

// dato = true;
// console.log(dato, typeof dato)

// ---

// let numero = 13.6;
// numero = parseInt(numero);
// console.log(numero, typeof numero);

// numero = "13.6a4";
// console.log(numero, typeof numero);

// // numero = Number(numero);
// // console.log(numero, typeof numero);

// numero = parseFloat(numero);
// console.log(numero, typeof numero);

// ---

let num1 = parseInt(prompt("Ingrese un numero")); // "10"
let num2; // undefined 
num2 = prompt ("Ingrese otro numero"); //"5"

console.log(typeof num1, typeof num2);

num2 = parseInt(num2);

let suma = num1 + num2;
console.log(suma);
document.write(suma)

// let multiplicacion = num1 * num2;
// console.log(multiplicacion);

// let modulo = 11 % 2;
// console.log(modulo)