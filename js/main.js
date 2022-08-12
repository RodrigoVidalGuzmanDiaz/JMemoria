

let root = document.querySelector("#root");
let frutas = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];

//FUNCION AGREGAR AL DOM

function agregar_al_DOM(){

    frutas.forEach(function (elemento){

        let divContenedor = document.createElement("div");

        divContenedor.innerHTML = 
            '<div class="fruta">' + 
                elemento + 
            '</div>';


    root.appendChild(divContenedor); 
        
        });

    //ford
  
}

frutas.sort(function(){return 0.5  - Math.random()});

agregar_al_DOM();






//FUNCION ACTIVAR LAS LETRAS

let tarjetasFrutas = document.querySelectorAll(".fruta");

function activar(){
    this.classList.add("activarIMG");

    

}

tarjetasFrutas.forEach(function(elemento){
    
    elemento.addEventListener('click', activar )
});


let iniciarJuego = document.getElementById('iniciar')


iniciarJuego.innerHTML = '<div>'+'<a id="bt_niciar">'+'Iniciar Juego'+'</a>'+'</div>';

function activarJuego(){
    iniciarJuego.classList.add('quitar')
    root.classList.add('agregar')
}
iniciarJuego.addEventListener('click', activarJuego)
