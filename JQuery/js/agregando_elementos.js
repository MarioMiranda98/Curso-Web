$(document).ready(function() {
    let contenedor = $('#contenedor');
    let contador = 1;

    $('#agregar').on('click', function() {
        let caja = $('<div></div>').attr({
            'class': 'caja'
        }).text(contador);

        contador += 1;

        // contenedor.append(caja); Al inicio y despues 
        // contenedor.prepend(caja); Al inicio y antes
        // contenedor.before(caja); Antes del elemento padre
        contenedor.after(caja); //Despues del elemento padre
    });
});