/*
    if(condicion) {
        codigo
    }
*/

// var edad = 18;
// if(edad >= 18) {
//     document.write('Eres mayor de edad');
// } else {
//     document.write('Eres menor de edad');
// }

// if(edad < 18) {
//     document.write('Eres menor de edad');
// }

// var pais = 'Argentina';

// if(pais === 'Mexico') {
//     document.write('Eres mexicano');
// } else if(pais === 'España') {
//     document.write('Eres español');
// } else {
//     document.write('No sabemos de donde eres');
// }

var pais = 'Mexico';
switch(pais) {
    case 'Mexico':
        document.write('Eres mexicano');
        break;
    case 'España':
        document.write('Eres español');
        break;
    case 'Colombia':
        document.write('Eres colombiano');
        break;
    default:
        document.write('No sabes de donde eres');
        break;
}