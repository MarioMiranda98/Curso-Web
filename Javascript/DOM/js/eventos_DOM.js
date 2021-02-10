/*
Existen 3 modelos de eventos diferentes:
-Modelo básico de eventos.
    Caracteristicas limitadas.
    Pero funciona en todos los navegadores.

-Modelo de eventos estandar.
    Podemos hacer mas cosas con el.
    Todos los navegadores no lo soportan.

    Las versiones anteriores de Internet Explorer como IE7 no lo soportan.

-Modelo de Eventos de Internet Explorer
    Modelo creado por Microsoft exclusivamente para IE
*/

/*
Eventos mas utilizados
    click
    focus
    blur
    change
    onload
    mouseover
    mouseout
    resize
    submit
*/

// function saludo() {
//     alert('Hola');
// }

function crearCaja() {
    var contenedor = document.getElementById('contenedor');
    var caja = document.createElement('div');
    caja.className = 'caja';
    contenedor.appendChild(caja);
}

document.addEventListener('DOMContentLoaded', function(event) {
    // var btnSaludar = document.getElementById('btn-saludar');
    // btnSaludar.addEventListener('click', saludo);

    //btnSaludar.removeEventListener('click', saludo);
    var btnCaja = document.getElementById('crear-caja');
    btnCaja.addEventListener('click', crearCaja);
});
