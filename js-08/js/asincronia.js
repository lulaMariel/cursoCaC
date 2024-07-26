// Asincronía.

// const numero = Math.floor(Math.random() * (2000 - 1 + 1) + 1);

// console.log(numero);

// setTimeout(() => {
//     console.log("Pasaron algunos segundos.");
// }, Math.floor(Math.random() * (3000 - 1 + 1) + 1));

// Sincronía.

function multiplicar(num1, num2, callback) {
    // return num1 * num2;
    setTimeout(() => {
        callback(num1, num2, num1 * num2);
    }, Math.floor(Math.random() * (3000 - 1 + 1) + 1));
};

// let resultado;

// resultado = multiplicar(1, 2);
// console.log(`1 x 2 = ${resultado}`);
// resultado = multiplicar(2, 2);
// console.log(`2 x 2 = ${resultado}`);
// resultado = multiplicar(3, 2);
// console.log(`3 x 2 = ${resultado}`);
// resultado = multiplicar(4, 2);
// console.log(`4 x 2 = ${resultado}`);
// resultado = multiplicar(5, 2);
// console.log(`5 x 2 = ${resultado}`);

multiplicar(1, 2, (numA, numB, result) => { // Un forma de controlar la asincronía, usando callbacks.
    console.log(`${numA} x ${numB} = ${result}`);
    multiplicar(2, 2, (numA, numB, result) => {
        console.log(`${numA} x ${numB} = ${result}`);
        multiplicar(3, 2, (numA, numB, result) => {
            console.log(`${numA} x ${numB} = ${result}`);
        });
    });
});
