function multiplicar(num1, num2) {
    return new Promise((resolve, reject) => {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return reject("Los dos parámetros tienen que ser números.")
    }
        setTimeout(() => {
            resolve({
                num1: num1,
                num2: num2,
                result: num1 * num2,
            });
        }, Math.floor(Math.random() * (3000 - 1 + 1) + 1));
    });
};

// multiplicar(1, 2)
//     .then((res) => {
//         console.log(`${res.num1} x ${res.num2} = ${res.result}`);
//     })
//     .catch((error) => console.log(error));

const tablaDel2 = async () => {
    try {
        let res = await multiplicar(1, 2);
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);

        res = await multiplicar(2, 2);
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);

        res = await multiplicar(3, 2);
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);

        res = await multiplicar(4, 2);
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);

        res = await multiplicar(5, 2);
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);

        res = await multiplicar(6, 2);
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);

        res = await multiplicar(7, 2);
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);

        res = await multiplicar(8, 2);
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);

        res = await multiplicar(9, 2);
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);

        res = await multiplicar(10, 2);
        console.log(`${res.num1} x ${res.num2} = ${res.result}`);

    } catch (error) {
        console.log(error);
    }

};

tablaDel2();