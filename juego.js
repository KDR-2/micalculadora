// Quiero probras si puedo crear una cálculadora con funciones
const hola = document.getElementById("hola");

document.addEventListener("keydown", (event) => {
  console.log("hiciste click");
});

const calculadora = (n1, n2, operator) => {
  switch (operator) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
    case "%":
      return n1 % n2;
    default:
      return `El operador ingresado no es válido`;
  }
};
// Nuevo comentario

let n1 = prompt("Por favor ingresa un nro");
let operator = prompt(
  "Seleciona que la operación que deseas escojer +(Suman) -(Resta) /(División) *(Multiplicación) %(Módulo) "
);
let n2 = prompt("Por favor ingresa un nro");
console.log(calculadora(n1, n2, operator));
