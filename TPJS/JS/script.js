//1) ¿Cuándo se cree una etiqueta en js, se mueva todo el html?
//2) ¿Cuándo no se cargue información en los input de un formulario, el botón se tiene que mover?.
capa = document.getElementById("datos");
const texto = document.getElementById('texto');
const sonic = document.getElementById('btn');
const html = document.querySelector('html');
const gameover = new Audio ('./music/gameover.mp3');
const marble = document.querySelector('audio');
sonic.classList.add('animation');
marble.play();

function addElemento(texto) {
    capa = document.getElementById('datos');
    h1 = document.createElement('h1');
    h1.innerHTML = texto;
    capa.appendChild(h1);
}

sonic.addEventListener('click' ,()=>{
    gameover.play();
    marble.pause();
    html.classList.add('mover')
    sonic.classList.add('morir')
})

texto.addEventListener('keyup', ()=>{
    textoo = texto.value.length
    if((textoo > 0 && textoo <=30)){
        sonic.classList.replace('animation' , 'esperando');
    }else{
        sonic.classList.replace('esperando' , 'animation');
    }

});