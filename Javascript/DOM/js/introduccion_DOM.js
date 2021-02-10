document.addEventListener("DOMContentLoaded", function(event) { 
    var cajas = document.getElementsByTagName('div');
    // cajas.item(0).innerHTML = '<h1>Hola</h1>';
    var caja = document.getElementById('primera-caja');
    // caja.innerHTML = '<u>Hola</u>';

    //Creando nodos
    //Crear el elemento
    var cajaCreada = document.createElement('div');
    //Crear un nodo de texto
    var contenido = document.createTextNode('Hola mundo');
    //Añadir el nodo de texto al elemento
    cajaCreada.appendChild(contenido);
    //Agregar atributos a la caja
    // cajaCreada.setAttribute('class', 'caja naranja');
    
    //Agregar el elemento al documento
    var contenedor = document.getElementById('contenedor');
    contenedor.appendChild(cajaCreada);

    //Modificando la clase del id o un elemento
    cajaCreada.id = 'primera';
    cajaCreada.className = 'caja naranja';

    var padre = cajas.item(0).parentNode;
    // padre.insertBefore(cajaCreada, cajas[1]);
    padre.replaceChild(cajaCreada, cajas[2]);
    padre.removeChild(cajaCreada);
});