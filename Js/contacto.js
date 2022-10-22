"use strict";

document.addEventListener("DOMContentLoaded",
iniciarPagina);

function iniciarPagina(){

function generartextoaleatorio(largo) {
    let caracteres = ['a', 'b', 'c', 'd', '1', '2', '3', '4'];
    let cadena = '';
    for (let i = 0; i < largo; i++) {
        let posicion = Math.floor(Math.random() * (caracteres.length - 0) + 0);
        cadena = cadena + caracteres[posicion];
    }
    return cadena;
}
function cargarcaptcha() {
    let contenido = document.querySelector("#captcha");
    let texto = generartextoaleatorio(6);
    contenido.value = texto;
}
function comprobarcaptcha(evento) {
    evento.preventDefault();
    let ingreso = document.querySelector("#ingreso");
    let captcha = document.querySelector("#captcha");
    let mensaje = document.querySelector("#mensaje");
    if (captcha.value == ingreso.value) {
        mensaje.value = "el captcha es valido";
    }
    else {
        mensaje.value = "el captcha no es valido";
    }
}
window.addEventListener("load", cargarcaptcha);
let botonenviar = document.querySelector("#enviar");
botonenviar.addEventListener("click", comprobarcaptcha);
}