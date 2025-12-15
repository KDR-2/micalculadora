const buttons = [
  "=",
  "0",
  ".",
  "+",
  "3",
  "2",
  "1",
  "-",
  "6",
  "5",
  "4",
  "*",
  "9",
  "8",
  "7",
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
const signo = document.getElementById("operator");

let temporal = "";
let temporal2 = "";
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

const borrarUltimoCaracter = function (datos) {
  return datos.slice(0, -1);
};

const operar = function (temporal = 0, n1 = 0, op) {
  return eval(`${Number(n1)}${op}${Number(temporal)}`).toString();
};

const actualizarPantalla = function (datos, datos2, op) {
  display.textContent = datos;
  displayTop.textContent = datos2;
  signo.textContent = op;
};
const pulsarBoton = function (targetValue) {
  if (funciones.includes(targetValue)) {
    if (targetValue === "CE") {
      temporal = "";
      temporal2 = "";
      op = "";
    }
    if (targetValue === "C") {
      temporal = "";
    }
    if (targetValue === "DEL") {
      temporal !== "" ? (temporal = borrarUltimoCaracter(temporal)) : null;
    }
    if (targetValue === "=") {
      temporal2 = operar(temporal, temporal2, op);
      temporal = "";
      op = "";
    }
  }
  if (numbers.includes(targetValue) && !(temporal2 !== "" && op === "")) {
    temporal += targetValue;
  }
  if (signos.includes(targetValue)) {
    if (temporal !== "" && temporal2 !== "") {
      temporal2 = operar(temporal, temporal2, op);
      op = targetValue;
      temporal = "";
    } else {
      op = targetValue;
      if (temporal2 === "") {
        temporal2 = temporal;
      }
      temporal = "";
    }
  }
  actualizarPantalla(temporal, temporal2, op);
};
teclado.appendChild(createHTMLButtons(buttons));
teclado.addEventListener("click", (event) => {
  let target = event.target;
  let targetValue = target.dataset.value;
  if (targetValue !== undefined) {
    pulsarBoton(targetValue);
  }
});

```
Branch testing
<p>

lorem10Cosas locas Mas nada

</p>
```;
