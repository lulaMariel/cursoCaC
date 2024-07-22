// let name = "Usuario 1";
// let password = "holamundo";
// let email = "x@x.com";
// let admin = true;

// const user = new Object();

// user.name = "Usuario 1";
// user.password = "holamundo";
// user.email = "x@x.com"
// user.admin = true;

let algo = "Un dato";

const user = {
    id: 1,
    name: "Usuario 1",
    password: "holamundo",
    email: "x@x.com",
    admin: true,
    algo: algo,
    address: {
        calle: "Falsa",
        numero: 123,
    },
    inforamcion: function () {
        console.log(`Nombre: ${this.name}, Correo: ${this.email}`);
    }
    // inforamcion:() { tambien puedo hacerlo así, sin la palabra "function"
    //     console.log(`Nombre: ${this.name}, Correo: ${this.email}`);
    // }
};

console.log(user.name, user.address.calle);

// console.log(user["email"], user.address["numero"]);

user.inforamcion();

console.log(user)