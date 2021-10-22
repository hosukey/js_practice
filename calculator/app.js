// Questions:
// calculator
// add, subtract, times, divide numbers
// clear all start from 0
// able to input decimal numbers

// Sub-problems:
// 1. input numbers by clicking on number pad (listen to calculator keys)
// 2. get numbers to add to one line
// 3. get signs to work (switch +,-,x,/ get parameters, first input & second input and calculate)
// 4. display answer to the screen
// 5. clear the calculator

// Research

// Pseudo-code

const input = document.querySelector('.input');
const calcKeys = document.querySelectorAll('#calculator_container');
const display = document.querySelector('.input');

calcKeys.forEach((e) => {
  e.addEventListener('click', function (e) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayNum = display.textContent;

    //operators
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'divide' ||
      action === 'multiply'
    ) {
      console.log('operators');
      if (action === 'add') {
      }
    }

    //decimal
    if (action === 'decimal') {
      if (display.textContent.includes('.')) {
        return;
      } else {
        display.textContent = displayNum + '.';
      }
    }

    //clear
    if (action === 'clear') {
      display.textContent = '0';
    }

    //equal key
    if (action === 'equal') console.log('equal');

    //display numbers
    if (!action) {
      if (displayNum === '0') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayNum + keyContent;
      }
    }
  });
});
