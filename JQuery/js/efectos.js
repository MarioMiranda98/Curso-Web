$(document).ready(function() {
    $('button').click(function() {
        //efectos
        // $(selector).efecto(velocidad, callback);
        // $('.caja').hide(3000, function() {
        //     alert('Oculto');
        // });

        // $('.caja').show(3000, function() {
        //     alert('Visible');
        // });

        // $('.caja').toggle(3000);

        // $('.caja').fadeIn(3000);
        // $('.caja').fadeOut(3000);
        // $('.caja').fadeToggle(3000);
        // $('.caja').slideDown(1000);
        // $('.caja').slideUp(1000);
        $('.caja').slideToggle(1000);
    });
});