$(document).ready(function () {
    let titulo = $('#titulo');
    let info = $('#info');

    // console.log(titulo.width());

    //----------------Medidas del ancho------------------------//
    //Calcula el ancho del elemento
    info.append('Ancho: ' + titulo.width() + '<br />');

    //Calcula el ancho interno del elemento (ancho + padding)
    info.append('Ancho Interno: ' + titulo.innerWidth() + '<br />');

    //Calcula el ancho externo del elemento (ancho + padding + borde)
    info.append('Ancho Externo: ' + titulo.outerWidth() + '<br />');

    //Calcula el ancho externo total del elemento (ancho + padding + borde + margin)
    info.append('Ancho Externo Total: ' + titulo.outerWidth(true) + '<br />');

    //-------------------Medidas del alto-------------------------//
    //Calcula el alto del elemento
    info.append('Alto: ' + titulo.height() + '<br />');

    //Calcula el alto interno del elemento (alto + padding)
    info.append('Alto Intenro: ' + titulo.innerHeight() + '<br />');

    //Calcula el alto externo del elemento (alto + padding + border)
    info.append('Alto Externo: ' + titulo.outerHeight() + '<br />');

    //Calcula el alto externo total del elemento (alto + padding + border + margin)
    info.append('Alto Externo Total: ' + titulo.outerHeight(true) + '<br />');
});