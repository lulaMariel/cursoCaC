// Callbacks -> () => {}

// const numeros = [1, 2, 3, 4, 5];

// function mostrar(item) {
//     console.log(item);
// }

// const mostrar = (item) => console.log(item);

// numeros.forEach(item => console.log(item));

// ---

// const fnLog = (texto) => document.write(texto);

// const mensajeLog = (texto) => console.log(texto);

// const mensajeAlert = (texto) => alert(texto);

// const mensajeWrite = (texto) => fnLog(texto);

// const mensaje = (texto, callback) => {
//     callback(texto)
// }

// mensajeLog("Hola");
// mensaje("Hola", console.log);
// mensajeAlert("Hola!");
// mensaje("Hola!", alert);
// mensajeWrite("¡Hola!");
// mensaje("¡Hola!", fnLog);

// Sincronía, debo respetar los pasos.

// console.log("Incio del proceso");

// let suma = 0;
// for (let i = 0; i < 1000000; i++) {
//     suma += i;
// };

// console.log("Suma completa: ", suma);
// console.log("Fin del proceso");

// Asincrónico, no se ejecuta en orden.

// setTimeout(() => { // Ejecuta algo en el futuro, dependiendo de la cantidad de milisegundos que le ponga.
//     console.log("Pasaron 2 segundos.");
// }, 2000);

// console.log("Primero: Este mensaje se muestra primero.");

// setTimeout(() => {
//     console.log("Tercero: Este mensaje se muestra después de 2 segundos.");
// }, 2000);

// console.log("Segundo: Este mensaje se muestra mientras esperamos el temporizador.");