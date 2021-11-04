'use strict';

// Variables
const calcButtons = document.querySelectorAll('button');
const calcContainer = document.querySelector('#calculator_container');
const display = document.querySelector('.input');

let displayValue = 0;

const userInput = function (e) {
  const inputValue = e.target.textContent;
  //displaying input numbers
  if (e.target.classList.contains('number')) {
    if (displayValue === 0) {
      displayValue = inputValue;
      display.textContent = displayValue;
    } else {
      displayValue += inputValue;
      display.textContent = displayValue;
    }
  }
};

// Event Handler
calcContainer.addEventListener('click', userInput);
