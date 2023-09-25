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

/* SONIDO PANTALLA DE INICIO */

let soundstart = new Audio('sounds/pokemonsong.mp3');

startboton.addEventListener('click', () => {

    soundstart.play();
});



/* POKEMON RUBY */

let ruby = document.getElementById("nintendoscreen");

document.addEventListener("click", (e) =>{

if (e.target.id === 'startboton') {

pantalla.style.background = "url('img/ruby.gif')";
encendido.style.backgroundColor = ('#FF0000');


}


});


 /* BATALLA */

let batalla = document.getElementById("nintendoscreen");

document.addEventListener("click", (e) =>{

if (e.target.id === 'botona') {

pantalla.style.background = "url('img/battle.gif')";
encendido.style.backgroundColor = ('#FF0000');

}

});


/* APAGAR */

let apagar = document.getElementById("nintendoscreen");

document.addEventListener("click", (e) =>{

if (e.target.id === 'selectboton') {

encendido.style.backgroundColor = ('rgba(143, 121, 121, 0.797)');
pantalla.style.background = ('#66664D');

}

});