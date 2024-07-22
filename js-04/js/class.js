class Auto {
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    info() {
        console.log(`Marca: ${this.marca}, Color: ${this.color}`);
    };
};

let auto1 = new Auto("Peugeot", 307, "Azul");
let auto2 = new Auto("Peugeot", 208, "Rojo");

console.log(auto1);
console.log(auto2);
auto2.puertas = 5;
auto2.info();