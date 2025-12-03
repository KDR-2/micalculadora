const buttons = [
  "=",
  0,
  ".",
  "+",
  3,
  2,
  1,
  "-",
  6,
  5,
  4,
  "*",
  9,
  8,
  7,
  "/",
  "DEL",
  "C",
  "CE",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const signos = [".", "+", "-", "*", "/"];
const funciones = ["DEL", "C", "CE", "="];
const botones = [...numbers, ...signos, ...funciones];

const calculadora = document.getElementById("calculador");
const display = document.getElementById("input");
const displayTop = document.getElementById("sup-input");
const teclado = document.getElementById("teclado");

let temporal = "";
let n1 = "";
let op = "";

const createHTMLButtons = function (buttons) {
  buttons.reverse();
  const contenedor = document.createElement("div");
  contenedor.id = "buttons";
  contenedor.classList.add("keyboard");
  for (let i = 0; i < buttons.length; i++) {
    let elemento = document.createElement("div");
    elemento.textContent = buttons[i];
    elemento.classList.add("calculatorButton");
    elemento.dataset.value = buttons[i];
    contenedor.appendChild(elemento);
  }
  return contenedor;
};
// const transpasardatos = function () {
//   n1 = n;
//   n = "";
// };
const borrarUltimoCaracter = (datos) => datos.slice(0, -1);
const stage = function (targetValue) {
  n1 = temporal;
  temporal = "";
  op = targetValue;
  return op;
};
const operar = function (temporal, n1, op) {
  temporal = eval(`${Number(n1)}${op}${Number(temporal)}`);
  return temporal;
};
const pulsarBoton = function (targetValue) {
  if (funciones.includes(targetValue)) {
    switch (targetValue) {
      case "CE":
        temporal = "";
        n1 = "";
        break;
      case "C":
        temporal = "";
        break;
      case "DEL":
        temporal = borrarUltimoCaracter(temporal);
        break;
      case "=":
        temporal = operar(temporal, n1, op);
        n1 = "";
        break;
    }
  }
  if (numbers.includes(targetValue)) {
    temporal += targetValue;
  }
  if (signos.includes(targetValue)) {
    op = stage(targetValue);
  }
  actualizarPantalla(temporal, n1);
};
const actualizarPantalla = function (datos, datos2 = "") {
  display.textContent = datos;
  displayTop.textContent = datos2;
};

teclado.appendChild(createHTMLButtons(buttons));

teclado.addEventListener("click", (event) => {
  let target = event.target;
  let targetValue = target.dataset.value;
  if (targetValue !== undefined) {
    pulsarBoton(targetValue);
  }
});
