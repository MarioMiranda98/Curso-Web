$(document).ready(function() {
//Elementos padre
    // $('#tercera').parent().css({
    //     background: '#1B3D82'
    // });
//Elementos Padres
    // $('#tercera').parents();

//Elementos hijo
    // $('#padre').children().fadeOut(500);
    // $('#padre').children('#tercera').fadeOut(500);

//Find
    // $('#contenedor').find('div.caja').slideUp();

//Siblings
    // $('#tercera').siblings().fadeOut();

// Next and Prev
    // $('#tercera').prev().css({
    //     background: '#000'
    // });

    // $('#tercera').next().css({
    //     background: '#000'
    // });

    $('#tercera').prevAll().css({
        background: '#000000'
    });

    $('#tercera').nextAll().css({
        background: '#FF55FF'
    });
});