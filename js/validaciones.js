document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formContacto");

    if (formulario) {
        formulario.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("¡Gracias por tu mensaje! Hemos recibido tu solicitud de reserva.");
            formulario.reset();
        });
    }
});