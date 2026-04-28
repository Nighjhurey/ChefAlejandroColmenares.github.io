// Interceptamos el envío del formulario para la demostración
document
  .getElementById("miFormulario")
  .addEventListener("submit", function (evento) {
    // Evitamos que la página se recargue
    evento.preventDefault();

    // Mostramos el mensaje de éxito
    const mensaje = document.getElementById("mensaje-exito");
    mensaje.style.display = "block";

    // Opcional: devolver el foco al principio o al mensaje para accesibilidad con lectores de pantalla
    mensaje.focus();

    // Limpiamos el formulario
    this.reset();

    // Ocultamos el mensaje después de 4 segundos
    setTimeout(() => {
      mensaje.style.display = "none";
      // Devolvemos el foco al primer campo para que el usuario pueda empezar de nuevo
      document.getElementById("nombre").focus();
    }, 4000);
  });
