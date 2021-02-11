document.addEventListener('DOMContentLoaded', function(event) {
    // var mario = {
    //     nombre: 'Mario',
    //     edad: 22,
    //     pais: 'Mexico',
    //     bio: function() { return this.nombre + ' tiene ' + this.edad + ' años'; }
    // };

    // document.write(mario.bio());

    function persona(nombre, edad, pais) {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }

    var persona = new persona('Mario', 26, 'Mexico');
    document.write(persona.nombre);
});