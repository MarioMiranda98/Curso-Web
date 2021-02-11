document.addEventListener('DOMContentLoaded', function(event) {
    var video = document.getElementById('video'),
        botonPlay = document.getElementById('play'),
        botonPause = document.getElementById('pause'),
        volumen = document.getElementById('volumen');

    botonPlay.addEventListener('click', function(event) {
        video.play();
    });

    botonPause.addEventListener('click', function(event) {
        video.pause();
    });

    volumen.addEventListener('change', function(event) {
        video.volume = volumen.value;
    });

    /*
        Propiedades
        video.currentTime - regresa el tiempo actual en el que va el video
        video.duration - regresa la duracion del video  
        video.ended - regresa si el video ya termino

        Eventos
        pause
        play
    */
});