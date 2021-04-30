var login_pag = document.getElementById('login_nav');
var user_label = document.getElementById('user');

var cerrar_sesion = document.querySelector('#cerrar-sesion').addEventListener('click', cerrarSesion);


function asignarUsuario() {
    let usuario = localStorage.getItem("Nick");

    if (usuario != null) {
        login_pag.style.display = "none";
        user_label.style.display = "block";

        user_label.innerHTML = 'Bienvenido: '+usuario;

    }
}

function cerrarSesion() {
    localStorage.removeItem("Datos");
    localStorage.removeItem("Nick");

    location.reload(true);
}

asignarUsuario();

