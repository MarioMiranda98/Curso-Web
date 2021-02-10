//Las variables pueden ser de dos tipos global y locales

//--------------------Variables locales-----------------------//
//Son las que han sido creadas dentro de una funcion o una funcion
//anidada    
// function saludo () {
//     var texto = 'Hola mundo';
//     console.log(texto);
// }

//---------------------Variable local con funciones anidadas--------------//
//El scope funciona por niveles, si no encuentra una variable en el mismo nivel subira de nivel hacia
//afuera y buscara. Si no lo encuentra subira a otro nivel y asi sucecivamente.

//Si tenemos otra funcion anidada (una funcion dentro de otra) podemos buscar variables desde dentro
//hacia afuera, pero desde una funcion no podemos buscar variables hacia dentro de otra funcion
// function saludo() {
//     var texto = 'Hola mundo';

//     function mensaje() {
//         console.log(texto);
//     }

//     mensaje();
// }

//-----------------------Variable global-------------------------------//
//Las variables globales pueden ser accedidas desde cualquier parte del codigo, incluyendo cualquier
//funcion,
// var texto = 'Hola mundo';

// function saludo() {
//     console.log(texto);

//     texto = 'Hola mundo modificado';
//     console.log(texto);
// }

// saludo();

//---------------------------IMPORTANTE---------------------------//
//Si una variable se declara fuera de una funcion es global. Pero las variables declaradas dentro
//de una funcion pueden ser globales tambien.
//Si dentro de la funcion declaramos una variable mediante la palabra "var" sera local. Pero si no
//le ponemos "var" será global
// function saludo() {
//     mensaje = 'Hola mundo';
// }

// saludo();
// console.log(mensaje);

//-----------------------------Proteccion de variables--------------------------//
// (function(){
//     alert('Hola');
//     var mensaje = 'Hola mundo';
// }());