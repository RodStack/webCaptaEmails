const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

//Toggle Navigation

toggle.addEventListener('click', () => 
document.body.classList.toggle('show-nav')
);

//Mostrar modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

//Esconder Modal con la x
close.addEventListener('click', () => modal.classList.remove('show-modal'));

//Esconder con click afuera del modal

window.addEventListener('click', (e) => 
                        e.target == modal ? modal.classList.remove('show-modal') : false );




