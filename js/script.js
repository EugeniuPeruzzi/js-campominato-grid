'use strict';

let grid = document.querySelector('.grid-container');
let play = document.getElementById('play');
let box = document.querySelector('.grid-container');

function grdiCreator(numeri){
}
for(let i=1; i<=100; i++){
    console.log(i);
    box.innerHTML += `  
    <div class="box">
    ${i}
    </div>`
}