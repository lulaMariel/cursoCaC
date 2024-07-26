let parrafos = document.querySelectorAll("p");
// console.log(parrafos);

// parrafos.forEach((parrafo, index) => {
//     // parrafo.textContent += "!!!" + index;

//     parrafo.innerHTML = `<strong>Línea ${index + 1}: </strong> ${parrafo.textContent}`;
// });

parrafos = document.querySelectorAll("article p.segundo-parrafo");
// console.log(parrafos);

// let input = document.querySelector("input#nombre");
// let input = document.querySelector("[name=nombre]");
// console.log(input);

let label = document.querySelector("[for=nombre]");
console.log(label)