let precio = 400000;
let cantidad = 0;

document.querySelector(".precio-inicial").innerHTML = precio;

function sumar() {
  cantidad++;
  document.querySelector(".cantidad").innerHTML = cantidad;
  document.querySelector(".valor-total").innerHTML = cantidad * precio;
}

function restar() {
  if (cantidad > 0) {
    cantidad--;
    document.querySelector(".cantidad").innerHTML = cantidad;
    document.querySelector(".valor-total").innerHTML = cantidad * precio;
  }
}