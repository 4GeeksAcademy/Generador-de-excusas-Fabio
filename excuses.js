let who = ['Un perro ', 'Mi hermana ', 'La cocina ', 'El cielo ', 'La abuela de mi prima '];
let action = ['se comió ', 'se leyó ', 'se pintó ', 'rompió ', 'se tatuó '];
let what = ['mis deberes ', 'mis mensajes del whatsapp ', 'tus zapatos ', 'las nubes grises ', 'la fecha del cumpleaños de lana del rey '];
let when = ['ayer', 'esta mañana', 'antes de llegar aquí', 'durante la comida', 'cuando comías pan'];

let allWords = [who,action,what,when];

function randomNumberGenerator(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function excusesGenerator(){
    let text = '';
    for(let i=0; i<4;i++){
        text+=allWords[i][randomNumberGenerator(0,4)];
    }
    return text;
}

function showExcuses(){
    const p = document.getElementById("excuse");
    p.innerHTML = excusesGenerator(); 
}
