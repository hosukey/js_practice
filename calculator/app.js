'use strict';

// Variables
const calcButtons = document.querySelectorAll('button');
const calcContainer = document.querySelector('#calculator_container');
const display = document.querySelector('.input');

let displayValue = 0;

const userInput = function (e) {
  const inputValue = e.target.textContent;
  //display numbers to the display box
  if (e.target.classList.contains('number')) {
    displayValue += inputValue;
    display.textContent = displayValue;
    //how do I get rid of the 0 at the beginning?
  }
};

// Event Handler
calcContainer.addEventListener('click', userInput);
