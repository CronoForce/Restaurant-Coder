document.getElementById('btn-megusta-1').addEventListener("click", likeuno);
document.getElementById('btn-megusta-2').addEventListener("click", likedos);
document.getElementById('btn-megusta-3').addEventListener("click", liketres);
document.getElementById('ocultar').addEventListener("click", ventana_interna);
document.getElementById('ranking').addEventListener("click", mostrar_ranking);




// Variables

var like_uno = document.querySelector(".like-item1");
var like_dos = document.querySelector(".like-item2");
var like_tres = document.querySelector(".like-item3");
var numero_likeuno = 0;
var numero_likedos = 0;
var numero_liketres = 0;
var ventana = document.querySelector(".ventana__interna");
var caja = document.querySelector(".caja__trasera-contacto");
var $btn_contacto = $('#btn__form__contacto');
var $from_contacto = $('#form__contacto');
var $back = $('#back__arrow');
var $enviar = $('#btn__enviar');
var $aceptar = $('#popup__general');
var $btn_aceptar = $('#btn-aceptar');
var $name__input = $('#in__name');
var $ape__input = $('#in__ape');
var $asun__input = $('#in__asun');
var $correo__input = $('#in__correo');
var $descrip = $('#textarea_descripcion');

function MostrarDatosEnvio(){
    
}


$name__input.on('keyup', Fondo);
$ape__input.on('keyup', Fondo);
$name__input.on('keyup', Fondo);
$asun__input.on('keyup', Fondo);
$correo__input.on('keyup', Fondo);



function Fondo() {
    $(this).css('background-color','#2ecc71');
    $(this).css('color','white');
}

$btn_aceptar.on('click', function(){
    $aceptar.toggleClass('show');
    $from_contacto.toggleClass('show');
});

$enviar.on('click', function(){
    $aceptar.toggleClass('show');
});

$back.on('click', function(){
    $from_contacto.toggleClass('show');
});

$btn_contacto.on('click', function(){
    $from_contacto.toggleClass('show');
});






function likeuno(){

    numero_likeuno = numero_likeuno+1;

    console.log(numero_likeuno);

    like_uno.innerHTML = (numero_likeuno+" Like's");
}
function likedos(){

    numero_likedos = numero_likedos+1;

    console.log(numero_likedos);

    like_dos.innerHTML = (numero_likedos+" Like's");
}
function liketres(){

    numero_liketres = numero_liketres+1;

    console.log(numero_liketres);

    like_tres.innerHTML = (numero_liketres+" Like's");
}

function mostrar_ranking(){
    ventana.style.display = "block";
    caja.style.display = "none"
}


function ventana_interna(){
    ventana.style.display = "none";
    caja.style.display = "block"
}