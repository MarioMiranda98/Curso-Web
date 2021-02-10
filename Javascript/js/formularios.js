document.addEventListener('DOMContentLoaded', function(event) {
    // document.getElementsByName('formulario')[0];
    var formulario = document.getElementById('formulario');
    var nombre = formulario.nombre;
    var sexo = formulario.sexo;
    var terminos = formulario.terminos;

    function validar(event) {        
        if(nombre.value.length > 18) 
            alert('Máximo 18 caracteres');
        else if(nombre.value.length === 0) 
            alert('El nombre no puede estar vacio');
    
        if(!sexo[0].checked && !sexo[1].checked) {
            alert('Por favor selecciona un sexo');
        }

        if(!terminos.checked) {
            alert('Acepta los terminos y condiciones por favor');
        }

        event.preventDefault();
    }

    formulario.addEventListener('submit', validar);
}); 