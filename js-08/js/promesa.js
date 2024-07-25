// const promesa = new Promise((resolve, reject) => { // Las promesas tardan un poco en resolverse, es asincrónica, no bloquea el resto del código sino que pasa a segundo plano y sigue procesando el resto de las cosas.
//     const resuelto = true;

//     if (resuelto) {
//         resolve("Cálculo finalizado.");
//     } else {
//         reject("Error de cálculo.");
//     };
// });

// // console.log(promesa);
// console.log(1);

// promesa.then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// });

// console.log(2);

// setTimeout(() => {
//     console.log("Pasaron algunos segundos.");
// }, 3000);

// ---

function multiplicar(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return Promise.reject("Los dos parámetros tienen que ser números.")
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                num1: num1,
                num2: num2,
                result: num1 * num2,
            });
        }, Math.floor(Math.random() * (3000 - 1 + 1) + 1));
    });
};

// Si no necesito que la promesa se ejecute en un orden específico, puedo hacerlo así.
// multiplicar(1, 2).then((res) => {
//     console.log(`${res.num1} x ${res.num2} = ${res.result}`);
// })
// // .catch((error) => console.log(error)); // Cada uno debe tener este renglón de error porque son independientes.
// multiplicar(2, 2).then((res) => {
//     console.log(`${res.num1} x ${res.num2} = ${res.result}`);
// })
// // .catch((error) => console.log(error));
// multiplicar(3, 2).then((res) => {
//     console.log(`${res.num1} x ${res.num2} = ${res.result}`);
// })
// // .catch((error) => console.log(error));

// Si necesito que la promesa se ejecute en un orden específico, debo hacerlo así.
multiplicar(1, 2) // Encadeno promesas, cumplo una, retorno otra.
    .then((res) => {
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);
        return multiplicar(2, 2);
    })
    .then((res) => {
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);
        return multiplicar(3, 2);
    })
    .then((res) => {
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);
        return multiplicar(4, 2);
    })
    .then((res) => {
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);
        return multiplicar(5, 2);
    })
    .then((res) => {
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);
        return multiplicar(6, 2);
    })
    .then((res) => {
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);
        return multiplicar(7, 2);
    })
    .then((res) => {
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);
        return multiplicar(8, 2);
    })
    .then((res) => {
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);
        return multiplicar(9, 2);
    })
    .then((res) => {
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);
        return multiplicar(10, 2);
    })
    .then((res) => {
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);
    })
    .catch((error) => console.log(error)); // Si hay un error, se frena toda la promesa hasta que se resuelva porque al encadenar promesas, tenemos un solo lugar de error.