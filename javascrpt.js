document.getElementById("formulario-turnos").addEventListener("submit", validarFormulario);

function validarFormulario(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  var fecha = document.getElementById("fecha").value;
  var mensaje = document.getElementById("mensaje").value;

  if (!nombre || !email || !telefono || !fecha) {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  }

  // Guardar los datos en un console.log
  console.log("Nombre:", nombre);
  console.log("Email:", email);
  console.log("Teléfono:", telefono);
  console.log("Fecha:", fecha);
  console.log("Mensaje Adicional:", mensaje);

  // Mostrar el mensaje de éxito
  document.getElementById("mensaje-exito").style.display = "block";

  // Ocultar el formulario después de enviarlo 
  document.getElementById("formulario-turnos").style.display = "none";

  document.getElementById("volver").style.display = "block";
//para volver

}

document.getElementById("volver").addEventListener("click", function () {
  // Mostrar el formulario nuevamente
  document.getElementById("formulario-turnos").style.display = "block";

  // Ocultar el mensaje de éxito y el botón "Volver"
  document.getElementById("mensaje-exito").style.display = "none";
  document.getElementById("volver").style.display = "none";
  document.getElementById("formulario-turnos").reset();
});

document.getElementById("modoOscuroBtn").addEventListener("click", function () {
  document.body.classList.toggle("modo-oscuro");
});

 