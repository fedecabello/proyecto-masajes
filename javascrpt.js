document.getElementById('formulario-turnos').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const fecha = document.getElementById('fecha').value;
  const mensaje = document.getElementById('mensaje').value;

  // Validar campos obligatorios antes de guardar los datos.
  if (!nombre || !email || !telefono || !fecha) {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
  }

 