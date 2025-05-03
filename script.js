// Este script es opcional, por ejemplo, para una validación básica en el formulario de contacto
document.querySelector('form').addEventListener('submit', function(e) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !mensaje) {
        e.preventDefault();
        alert("Por favor, completa todos los campos.");
    }
});
