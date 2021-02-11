document.addEventListener('DOMContentLoaded', function(event) {
    (function(){
        var fomulario = document.getElementById('formulario'),
            nombre = fomulario.nombre,
            correo = fomulario.correo,
            sexo = formulario.sexo,
            terminos = formulario.terminos,
            error = document.getElementById('error');

            function validarNombre(e) {
                if(nombre.value === '' || nombre.value === null) {
                    console.log('Rellena el nombre porfavor');
                    error.style.display = 'block';
                    error.innerHTML += '<li>Por favor completa el nombre</li>'

                    e.preventDefault();
                } else error.style.display = 'none';
            }

            function validarCorreo(e) {
                if(correo.value === '' || correo.value === null) {
                    console.log('Rellena el correo por favor');
                    error.style.display = 'block';
                    error.innerHTML += '<li>Por favor completa el correo</li>'

                    e.preventDefault();
                } else error.style.display = 'none';
            }

            function validarSexo(e) {
                if(sexo.value === '' || sexo.value === null) {
                    console.log('Rellena el sexo por favor');
                    error.style.display = 'block';
                    error.innerHTML += '<li>Por favor completa el sexo</li>'

                    e.preventDefault();
                } else error.style.display = 'none';
            }
            
            function validarTerminos(e) {
                if(!terminos.checked) {
                    console.log('Rellena el terminos y condiciones por favor');
                    error.style.display = 'block';
                    error.innerHTML += '<li>Por favor selecciona los terminos y condiciones</li>'

                    e.preventDefault();
                } else error.style.display = 'none';
            }
            
            function validarFormulario(e) {
                error.innerHTML = '';
                
                validarNombre(e);
                validarCorreo(e);
                validarSexo(e);
                validarTerminos(e);
            }

        formulario.addEventListener('submit', validarFormulario);
    }());
});