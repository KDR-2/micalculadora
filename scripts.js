const buttons = [
  "=",
  0,
  ".",
  "+",

  1,
  2,
  3,

  4,
  5,
  6,
  "-",
  7,
  8,
  9,
  "*",
  "/",
  "C",
  "DEL",
];

const calculadora = document.getElementById("calculador");
const display = document.getElementById("input");
const teclado = document.getElementById("teclado");

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
// Serie de evaluaciones para poder escribir el contenido de un boton en la pantalla de la calculadora:
// Un número será seraparado de otro siempre que haya un signo - cada número permite un . para separar decimales - * y / no puede colocarse con la pantalla vacia, no se puede cerrar un parentesis sin
const verifyButton = function (botonPulsado) {
  const signos = [".", "+", "-", "*", "/", "(", ")"];

  let lastCharOfScreen = display.value[display.value.length - 1];

  if (
    lastCharOfScreen === botonPulsado.dataset.value &&
    signos.includes(lastCharOfScreen)
  )
    return true;
  if (botonPulsado.dataset.value === undefined) return true;

  return false;
};

const escribirPantalla = function (x) {
  if (verifyButton(x)) return;
  display.value += x.dataset.value;
};
const borrarPantalla = function () {
  display.value = "";
};
const borrarUltimoCaracter = function () {
  display.value = display.value.slice(0, -1);
};
const operar = function () {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};

teclado.addEventListener("click", (e) => {
  let selector = e.target.dataset.value;

  switch (selector) {
    case "DEL":
      borrarUltimoCaracter();
      break;
    case "C":
      borrarPantalla();
      break;
    case "=":
      if (display.value !== "") operar(display.value);
      break;
    default:
      escribirPantalla(e.target);
  }
});

teclado.appendChild(createHTMLButtons(buttons));
