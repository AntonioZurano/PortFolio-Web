// alert.js

function mostrarAlerta() {
    console.log("Antes de la alerta")
    alert("Mensaje enviado correctamente");
    console.log("Despues de la alerta")
}

document.querySelector('.contact__form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera predeterminada

    // Obtén los valores de los campos del formulario
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var subject = document.querySelector('input[name="subject"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    // Valida los campos
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    // Valida el formato del email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('El email no es válido');
        return;
    }

    // Si todo está bien, puedes enviar el formulario manualmente
    event.target.submit();

    // Espera 5 segundos antes de cambiar la URL del navegador a la nueva página web
    setTimeout(() => {
        window.location.assign('https://dev.antoniozurano.com/gracias.html');
    }, 5000);


});
