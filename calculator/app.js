'use strict';

// Variables
const calcButtons = document.querySelectorAll('button');
const calcContainer = document.querySelector('#calculator_container');
const display = document.querySelector('.input');
const acBtn = document.querySelector('.ac');

let displayValue = 0;
let prevValue = 0;
let newValue = 0;

// functions

// Set display back to 0
const resetDisplay = function () {
  displayValue = 0;
  display.textContent = displayValue;
};

// User input
const userInput = function (e) {
  const inputValue = e.target.textContent;
  //display input
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

  //calculating using signs **** WORK HERE!
  if (e.target.classList.contains('sign')) {
    //saves the first value
    if (prevValue === 0) {
      prevValue = displayValue;
      console.log(`prevValue: ${prevValue}`);
    }

    if (e.target.classList.contains('plus')) {
      //set displayValue back to 0
      displayValue = 0;
      //let input show on display
      inputDisplay();
      //if there is prevValue save it to new value
      if (prevValue) newValue = displayValue;
      console.log(`newValue: ${newValue}`);
    }
  }

  // Clear (AC)
  if (e.target.classList.contains('ac')) {
    resetDisplay();
  }

  // Add decimal
  //check if decimal exists, if not add it
  if (e.target.classList.contains('dot')) {
    const addingDecimal = function () {
      displayValue += '.';
      display.textContent = displayValue;
    };
    if (displayValue === 0) {
      addingDecimal();
    }
    if (displayValue !== 0) {
      if (!displayValue.includes('.')) addingDecimal();
    }
  }
};

// Event Handler
calcContainer.addEventListener('click', userInput);
