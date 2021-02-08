// for(inicio; condicion; actualizacion) {
//     //Codigo
// }

for(var i = 0; i <= 10; i++) {
    document.write(i + '<br />');
}


for(var i = 10; i >= 1; i--) {
    document.write(i + '<br />');
}

var meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

for(mes in meses) {
    document.write(meses[mes] + '<br />');
}