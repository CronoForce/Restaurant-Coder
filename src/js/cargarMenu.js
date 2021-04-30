
function traerMenuPlatillos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'src/js/menu.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let menu = JSON.parse(this.responseText);
            let muestra = document.querySelector('#menu-items');

            muestra.innerHTML = '';

            for (let item of menu){
                muestra.innerHTML += `
                <option value="${item.platillo}" id ="info-menu">${item.platillo}</option>
                `
            }
        }
    }

}

window.onload = traerMenuPlatillos;