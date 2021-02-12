$(document).ready(function() {
    let boton = $('#boton');

    // boton.click(function() {
    //     alert('Hola');
    // });

    // function saludo() {
    //     alert('Saludos');
    // }

    // boton.click(saludo);

    // boton.on('mouseenter', function() {
    //     document.body.style.background = '#000000';
    // });

    // boton.on('mouseleave', function() {
    //     document.body.style.background = "#FFFFFF"; 
    // });

    // boton.on('click', function() {
    //     alert('Saludos');
    //     console.log('Saludos');
    // });

    // $('#desactivar').on('click', function() {
    //     boton.off('click');
    // });

    $('a').on('click', function(event) {
        event.preventDefault();
    });
});