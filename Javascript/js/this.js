document.addEventListener('DOMContentLoaded', function(event) {
  var cajas = document.getElementsByClassName('caja');

  function color() {
    this.classList.toggle('negro');
  }

  for(var i = 0; i < cajas.length; i++)
    cajas.item(i).addEventListener('click', color);
});