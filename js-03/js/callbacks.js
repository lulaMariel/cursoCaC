const saludar = function(nombre, callback) {
    callback("Hola " + nombre);
}

// const saludarLogger = function(nombre) {
//     logger("Hola " + nombre);
// }

// const saludarAlert = function(nombre) {
//     alert("Hola " + nombre);
// }

saludar("Lula", console.log);
saludar("Meli", alert);