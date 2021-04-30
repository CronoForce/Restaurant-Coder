//Extraccion de elementos del HTML
document.querySelector('#btn-mostrar-menu').addEventListener('click', traerDatos);
document.querySelector('#cerrar-menu').addEventListener('click', recargarPagina);
document.querySelector('#btn-facturar').addEventListener('click', efecturarFacturacion);
document.querySelector('#btn-confrimar').addEventListener('click', confirmarPago);

var Plato_Items = document.getElementById('menu-items');
Plato_Items.addEventListener('change', optenerPrecioPlato);



var seleccionarPlato;

var ValorPlato = 0;
var input_valor = document.querySelector('#valor_plato');

function confirmarPago(){

    alert("Su pedido ha sido tomado. \n Puede Recogerlo o Esperar su entrega en 30(minutos) \n Gracias Por su compra")

    localStorage.removeItem("Nombre");
    localStorage.removeItem("Celular");
    localStorage.removeItem("Domicilio");
    localStorage.removeItem("Plato");
    localStorage.removeItem("Valor");

    location.reload(true);
}


function optenerPrecioPlato() {
    seleccionarPlato = this.options[Plato_Items.selectedIndex];



    if (seleccionarPlato.text == "Huevos, Tostadas y Jugo Natural o Cafe con Leche") {
        ValorPlato = 15;
        input_valor.innerHTML = ValorPlato;
    }
    if (seleccionarPlato.text == "Tostadas, Tosino, Huevo y Jugo Natrual o Cafe con Leche") {
        ValorPlato = 20;
        input_valor.innerHTML = ValorPlato;
    }
    if (seleccionarPlato.text == "Ensalda de Frutas y Jugo Natural") {
        ValorPlato = 20;
        input_valor.innerHTML = ValorPlato;
    }
    if (seleccionarPlato.text == "Fruta picada (a eleccion) y Jugo (a eleccion)") {
        ValorPlato = 30;
        input_valor.innerHTML = ValorPlato;
    }
    if (seleccionarPlato.text == "Arroz, Carne parrillera, ensalada, maduro y Jugo de Cosecha") {
        ValorPlato = 40;
        input_valor.innerHTML = ValorPlato;
    }
    if (seleccionarPlato.text == "Espaguetis, Pollo, Ensalada, Papa, Jugo Natural") {
        ValorPlato = 40;
        input_valor.innerHTML = ValorPlato;
    }
    if (seleccionarPlato.text == "Carne a la parrilla, Papa Fosforito, ensalada, Bebida al gusto") {
        ValorPlato = 45;
        input_valor.innerHTML = ValorPlato;
    }
    if (seleccionarPlato.text == "Hamburguesa") {
        ValorPlato = 15;
        input_valor.innerHTML = ValorPlato;
    }
    if (seleccionarPlato.text == "Pizza (Porcion)") {
        ValorPlato = 10;
        input_valor.innerHTML = ValorPlato;
    }
    if (seleccionarPlato.text == "Pizza (Entera 8 Porciones)") {
        ValorPlato = 75;
        input_valor.innerHTML = ValorPlato;
    }
    if (seleccionarPlato.text == "HotDog") {
        ValorPlato = 15;
        input_valor.innerHTML = ValorPlato;
    }
    if (seleccionarPlato.text == "Jugo Natural") {
        ValorPlato = 8;
        input_valor.innerHTML = ValorPlato;
    }
    if (seleccionarPlato.text == "Bebida Gaseosa - Cerveza") {
        ValorPlato = 25;
        input_valor.innerHTML = ValorPlato;
    }
    if (seleccionarPlato.text == "Comida Rapida" || seleccionarPlato.text == "Almuerzos" || seleccionarPlato.text == "Desayunos") {
        ValorPlato = "--Selecciona un Plato--";
        input_valor.innerHTML = ValorPlato;
    }


}

function efecturarFacturacion(){
    let elemento = document.getElementById('facturacion-div');
    elemento.style.display = 'flex';

    let nom_cli = document.getElementById('nombre_cli').value;
    let celu_cli = document.getElementById('celular_cli').value;
    let domi = document.getElementById('domicilio').value;
    let plato = document.getElementById('menu-items').value;
    let subvalor_plato = document.getElementById('valor_plato').textContent;

    //Input Factura

    let nom_fac = document.getElementById('nombre_factura');
    let cel_fac = document.getElementById('celular_factura');
    let domi_fac = document.getElementById('domicilio_factura');
    let plato_fac = document.getElementById('plato_factura');
    let subvalor_fac = document.getElementById('subvalor_factura');

    localStorage.setItem("Nombre", nom_cli);
    localStorage.setItem("Celular", celu_cli);
    localStorage.setItem("Domicilio", domi);
    localStorage.setItem("Plato", plato);
    localStorage.setItem("Valor", subvalor_plato);

    nom_fac.value = localStorage.getItem("Nombre");
    cel_fac.value = localStorage.getItem("Celular");
    domi_fac.value = localStorage.getItem("Domicilio");
    plato_fac.value = localStorage.getItem("Plato");
    subvalor_fac.value = localStorage.getItem("Valor");


    let subvalor_iva = parseFloat(localStorage.getItem("Valor"));
    let iva = subvalor_iva*0.19;
    let total = subvalor_iva+iva;

    let iva_fac = document.getElementById('valor_iva');
    let total_fac = document.getElementById('valor_total');

    iva_fac.value = iva;
    total_fac.value = total;
}


function mostrarDireccion() {
    let elemento = document.getElementById('domicilio');
    let aceptado = document.getElementById('chb-si');
    if (aceptado.checked) {
        elemento.style.display = 'block';
    } else {
        elemento.style.display = 'none';
    }
}

function mostrarMetododepago() {
    let elemento = document.getElementById('metodo');
    let tarjeta = document.getElementById('tarjeta');
    let sv = document.getElementById('sv');
    if (tarjeta.checked) {
        elemento.style.display = 'block';
        sv.style.display = 'block';
    }
}
function ocultarMetodosobrante(){
    let elemento = document.getElementById('metodo');
    let efectivo = document.getElementById('efectivo');
    let consignacion = document.getElementById('consignacion');
    let sv = document.getElementById('sv');
    if (efectivo.checked) {
        elemento.style.display = 'none';
        sv.style.display = 'none';
    }
    if (consignacion.checked) {
        elemento.style.display = 'block';
        sv.style.display = 'none';
    }
}

function ocultarDireccion() {
    let elemento = document.getElementById('domicilio');
    let aceptado = document.getElementById('chb-no');
    if (aceptado.checked) {
        elemento.style.display = 'none';
    } else {
        elemento.style.display = 'block';
    }
}



function recargarPagina() {
    location.reload(true)
}



function traerDatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'src/js/menu.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            // console.log(this.responseText);
            let datosj = JSON.parse(this.responseText);
            // console.log(datosj);

            let res = document.querySelector('#datos');
            res.innerHTML = '';

            for (let item of datosj) {
                // console.log(item.artista);
                res.innerHTML += `
                <tr>
                    <td id="nombre-pedido">${item.platillo}</td>
                    <td><p class="valor-precio" id="valor-precio"disabled>$${item.precio}</p></td>
                </tr>
                
                `
            }

        }
    }
}


//Funciones de acciones adicionales

function hacerPedido() {
    let solicitar = document.getElementById('popup');

    solicitar.style.display = "block";

    let precio = document.getElementById('valor-precio');

    console.log(precio);
}


function cerrarPopup() {
    let ventana = document.getElementById('popup');

    ventana.style.display = "none";
}