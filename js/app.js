// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
  formulario.addEventListener("submit", agregarTweet);
}

function agregarTweet(e) {
  e.preventDefault();

  // Textarea donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;

  // Validación...
  if (tweet === "") {
    mostrarError("Un mensaje no puede ir vacio");
    return; //Evita que se ejecuten mas lineas de código
  }
}

// Mostrar mensaje de error
function mostrarError(error) {
  const mensajeError = document.createElement("P");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  //Insertarlos en el contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  //Elimina la alerta después de 2 segundos
  setTimeout(() => {
    mensajeError.remove();
  }, 2000);
}
