'use strict';

let grid = document.querySelector('.grid-container');
let play = document.getElementById('play');
let boxGrid = document.querySelector('.grid-container');

function gridCreator(numeri) {
    for (let i = 1; i <= numeri*numeri; i++) {

      let box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `calc(100% / ${numeri + 2})`
      box.innerHTML = `<a href="#">${i}</a>`;
      
      box.addEventListener('click', function() {
        box.classList.toggle('box-color');
        console.log(i)
      });
      
      boxGrid.appendChild(box);
    }
}

gridCreator(10)