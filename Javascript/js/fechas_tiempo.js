document.addEventListener('DOMContentLoaded', function(event) {
    // var fecha = new Date();
    // document.write(fecha);

    // console.log(fecha.getHours());
    // console.log(fecha.getMinutes());
    // console.log(fecha.getSeconds());

    // console.log(fecha.getDay());
    // console.log(fecha.getMonth());
    // console.log(fecha.getFullYear());

    function mostrarFecha() {
        var fecha = new Date();
        var parrafo = document.getElementById('fecha');
        parrafo.innerHTML = fecha;
    }

    var intervalo = setInterval(mostrarFecha, 1000);
});