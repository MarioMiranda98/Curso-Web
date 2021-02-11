document.addEventListener('DOMContentLoaded', function(event) {
    //---------------- setTimeout() ----------------------//
    function saludo() {
        alert('Hola mundo');
    }

    // var tiempo = setTimeout(saludo, 3000);
    // clearTimeout(tiempo);

    // document.getElementById('btn-iniciar').addEventListener('click', function() {
    //     setTimeout(saludo, 3000);
    // });

    //--------------- setInterval -------------------------//
    // setInterval(() => {
    //     alert(3000);
    // }, 3000);

    // var intervalo = setInterval(saludo, 3000);
    // clearInterval(intervalo);

    var intervalo = setInterval(saludo, 3000);
    document.getElementById('btn-iniciar').addEventListener('click', function(event) {
        clearInterval(intervalo);
    });
});