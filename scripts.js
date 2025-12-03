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
let n1 = "";
let n2 = "";
let operator = "";
let result = "";

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

const borrarUltimoCaracter = (datos) => datos.slice(0, -1);
const operar = function () {};

const pulsarBoton = function (targetValue) {
  if (funciones.includes(targetValue)) {
    switch (targetValue) {
      case "CE":
        n1 = "";
        n2 = "";
        operator = "";
        result = "";
        break;
      case "C":
        n1 = "";
        operator = "";
        break;
      case "DEL":
        n1 = borrarUltimoCaracter(n1);
        break;
      case "=":
        operar();
        break;
    }
  }
  if (numbers.includes(targetValue)) {
    n1 += targetValue;
  }
  if (signos.includes(targetValue)) {
  }

  actualizarPantalla(n1, display);
  if (n2) {
    actualizarPantalla(n2, displayTop);
  }
};
const actualizarPantalla = function (datos, pantalla) {
  try {
    pantalla.textContent = datos;
  } catch (error) {
    console.log(error);
  }
};

teclado.appendChild(createHTMLButtons(buttons));

teclado.addEventListener("click", (event) => {
  let target = event.target;
  let targetValue = target.dataset.value;
  if (targetValue !== undefined) {
    pulsarBoton(targetValue);
  }
});
