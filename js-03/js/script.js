// function saludar(nombre) {
//     console.log("Hola ", nombre);
// }

// saludar("Juan");
// saludar("Meli");
// saludar("Lu");

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} * 5 = ${i * 5}`)
// }

// ---

// function tablaDelCinco() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${i} * 5 = ${i * 5}`)
//     }
// }

// tablaDelCinco();

// Parámetros

// function sumar(num1, num2) {
//     console.log(num1 + num2);
// }

// sumar(5, 5)
// sumar(15, 40)

// ---

function tablaMultiplicar(multiplicador, limite = 10) {
    for (let i = 1; i <= limite; i++) {
        console.log(`${i} * ${multiplicador} = ${i * multiplicador}`)
    }
}

tablaMultiplicar(5);
// tablaMultiplicar(3, 20);
// tablaMultiplicar(8, 4);

// ---

// function saludar(nombre, apellido) {
//     console.log("Hola", nombre, apellido);
// }

// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");

// saludar(nombre, apellido);