//1) ¿Cuándo se cree una etiqueta en js, se mueva todo el html?
//2) ¿Cuándo no se cargue información en los input de un formulario, el botón se tiene que mover?.
capa = document.getElementById("datos");
const texto = document.getElementById('texto');
const sonic = document.getElementById('btn');
const html = document.querySelector('html');
const gameover = new Audio ('./audio/gameover.mp3')
sonic.classList.add('animation');;

function addElemento(texto) {
    capa = document.getElementById('datos');
    h1 = document.createElement('h1');
    h1.innerHTML = texto;
    capa.appendChild(h1);
}

sonic.addEventListener('click' ,()=>{
    html.classList.add('mover')
    sonic.classList.toggle('morir')
    gameover.play();
})

texto.addEventListener('keyup', ()=>{
    textoo = texto.value.length
    if((textoo > 0 && textoo <=30)){
        sonic.classList.remove('animation');
        sonic.classList.add('esperando')
    }else{
        sonic.classList.add('animation');
        sonic.classList.remove('esperando');
    }

});