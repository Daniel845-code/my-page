var open_menu = document.getElementById('menu_open');
var menu = document.getElementById('menu')
var title = document.getElementById('title')
var itens = document.getElementsByClassName('menu')
var n = 0
open_menu.addEventListener('click', function() {
  if (n == 0){
    menu.style.height = '500px';
    title.style.position = 'absolute';
    title.style.opacity = '0.5';
    open_menu.innerHTML = 'Fechar Menu';
    open_menu.style.color = 'black';
    for (var i = 0; i < 3; i++) {
      itens[i].style.display = 'block';
      itens[i].style.color = 'white';
    }
    n = 1;
  } else {
    menu.style.height = '100px';
    title.style.opacity = '1';
    title.style.position = 'inline-block';
    open_menu.innerHTML='Abrir Menu';
    open_menu.style.color = 'white';
    for (var i = 0; i < 3; i++) {
      itens[i].style.display = 'none';
    }
    n = 0;
  }
})
