//Variables//
var checkBox = document.getElementById("check-brisa-rosada");
const element = document.querySelector('.prod');
//Fin Varialbes//

//Funciones//
function buscar() {
    var checkBox = document.getElementById("check-brisa-rosada");
    const element = document.querySelector('.prod');
  

    
    if (checkBox.checked == true){
      element.classList.add('producto-buscado')
      element.classList.remove('prod')
    }
  }