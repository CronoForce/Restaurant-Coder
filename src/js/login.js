document.getElementById('btn__registrarse').addEventListener("click", Registro);
document.getElementById('btn__iniciar-sesion').addEventListener("click", IniciarSesion);
document.getElementById('btn__entrar').addEventListener("click", Entrar);
document.getElementById('btn__registrar').addEventListener("click", Registrar);

window.addEventListener("resize", AnchoPagina);


//Declaracion de Variables

var contenedor__login_register = document.querySelector(".contenedor__login-register");
var formulario__login = document.querySelector(".formulario__login");
var formulario__registro = document.querySelector(".formulario__registro");
var caja__trasera_login = document.querySelector(".caja__trasera-login");
var caja__trasera_registro = document.querySelector(".caja__trasera-registro");


//Fin Var

function AnchoPagina(){
    if(window.innerWidth > 850){
        caja__trasera_login.style.display = "block";
        caja__trasera_registro.style.display = "block";
    }else{
        caja__trasera_registro.style.display = "block";
        caja__trasera_registro.style.opacity = "1";
        caja__trasera_login.style.display = "none";
        formulario__login.style.display = "block";
        formulario__registro.style.display = "none";
        contenedor__login_register.style.left = "0";
    }
}

function Registrar(){

    datos_registro = {
        nombre: document.getElementById('nombre').value,
        correo : document.getElementById('correo').value,
        nick_r : document.getElementById('nick_r').value,
        pass_r : document.getElementById('pass_r').value
    }

    localStorage.setItem("Datos", JSON.stringify(datos_registro));
    localStorage.setItem("Nick", datos_registro.nick_r);

    alert('Registrado Correctamente');
    IniciarSesion();

}


function Entrar(){
    nick__login = document.getElementById('nick__login').value;
    pass__login = document.getElementById('pass__login').value;

    if(nick__login == datos_registro.nick_r && pass__login == datos_registro.pass_r){
        alert('Bienvenido '+nick__login+ " :D");
        window.location.href = 'index.html';
    }else{
        alert('Nick o Contraseña INCORRECTA \n Intente de nuevo');
    }

}




AnchoPagina();

function IniciarSesion() {

    if (window.innerWidth > 850) {
        formulario__registro.style.display = "none";
        contenedor__login_register.style.left = "10px";
        formulario__login.style.display = "block";
        caja__trasera_registro.style.opacity = "1";
        caja__trasera_login.style.opacity = "0";
    } else {
        formulario__registro.style.display = "none";
        contenedor__login_register.style.left = "0";
        formulario__login.style.display = "block";
        caja__trasera_registro.style.display = "block";
        caja__trasera_login.style.display = "none";
    }


}

function Registro() {

    if (window.innerWidth > 850) {
        formulario__registro.style.display = "block";
        contenedor__login_register.style.left = "410px";
        formulario__login.style.display = "none";
        caja__trasera_registro.style.opacity = "0";
        caja__trasera_login.style.opacity = "1";
    }else{
        formulario__registro.style.display = "block";
        contenedor__login_register.style.left = "0";
        formulario__login.style.display = "none";
        caja__trasera_registro.style.display = "none";
        caja__trasera_login.style.display = "block";
        caja__trasera_login.style.opacity = "1";
    }


}