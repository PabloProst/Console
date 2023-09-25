/*ENCENDIDA DE PANTALLA*/

let pantalla = document.getElementById("nintendoscreen");


document.addEventListener("click", (e) => {


    if (e.target.id === 'powerboton') {


        pantalla.style.backgroundImage = "url('img/intro.gif')";

    }



});

/* SONIDO DE ENCENDIDO */

let sound = new Audio('sounds/on.mp3');

powerboton.addEventListener('click', () => {

    sound.play();
});


let encendido = document.getElementById("ledoff");

powerboton.addEventListener('click', () => {

    encendido.style.backgroundColor = ('#FF0000');

});


/* POKEMON RUBY */

let ruby = document.getElementById("nintendoscreen");

document.addEventListener("click", (e) =>{

if (e.target.id === 'startboton') {

pantalla.style.background = "url('img/ruby.gif')";


}


});