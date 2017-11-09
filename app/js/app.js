/* ...................DECLARACION DE OBJETOS Y VARIABLES................ */
var element = false;

/* ......................DECLARACION DE FUNCIONES....................... */
function addXO(event) {
  if (element) {
    event.target.textContent = 'O';
    event.target.style.backgroundColor = 'Aqua';
    element = false;
  } else {
    event.target.textContent = 'X';
    event.target.style.backgroundColor = 'magenta';
    element = !element;
  }
};

function reset(event) {
  window.location.reload();
}

/* .......................ASIGNACION DE EVENTOS......................... */
window.onload = function() {
  var board = document.querySelector('.board-js');
  board.addEventListener('click', addXO);
  var button = document.querySelector('.button');
  button.addEventListener('click', reset);
};
