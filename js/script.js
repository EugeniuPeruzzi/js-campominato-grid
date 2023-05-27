'use strict';

let grid = document.querySelector('.grid-container');
let play = document.getElementById('play');
let boxGrid = document.querySelector('.grid-container');

function gridCreator(numeri) {
    for (let i = 1; i <= numeri; i++) {

      let box = document.createElement('div');
      box.classList.add('box');
      box.innerHTML = `<a href="#">${i}</a>`;
      box.addEventListener('click', function() {
        box.classList.toggle('box-color');
        console.log(i)
      });
      
      boxGrid.appendChild(box);
    }
}

gridCreator(100)