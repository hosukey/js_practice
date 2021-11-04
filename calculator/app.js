'use strict';

// Variables
const calcButtons = document.querySelectorAll('button');
const calcContainer = document.querySelector('#calculator_container');
const display = document.querySelector('.input');

let displayValue = 0;
let prevValue = 0;
let newValue = 0;

const userInput = function (e) {
  const inputValue = e.target.textContent;
  //displaying input numbers
  const inputDisplay = function () {
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
  inputDisplay();

  //pseudo code - calculating:
  if (e.target.classList.contains('sign')) {
    //saves the first value
    if (prevValue === 0) {
      prevValue = displayValue;
      console.log(`prevValue: ${prevValue}`);
    }

    if (e.target.classList.contains('plus')) {
      displayValue = 0;
      inputDisplay();
      //How do I save newValue (2nd value) - WORK HERE!
      newValue = displayValue;
      console.log(`newValue: ${newValue}`);
    }
  }
};

// Event Handler
calcContainer.addEventListener('click', userInput);
