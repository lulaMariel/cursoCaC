let apellido = "Perez";
// var nombre = "Luciana" // No usar var, siempre let o const.

function mensaje() {
    let nombre = "Lula";
    // fnTexto = "Hola" Una variable no declarada no deberíamos utilizarla, siempre poner let o const, etc.
    return `Hola ${nombre} ${apellido}`
}

let texto = mensaje();
console.log(texto)

console.log(apellido);
// console.log(fnTexto);
console.log(nombre); // La varibale no es global, por ende genera un error.