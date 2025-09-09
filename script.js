let firstNumber;
let operator;
let secondNumber;

function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
}

function operate(firstNumber,operator,secondNumber){
  if (operator === '+') {
    return add(firstNumber,secondNumber);
  }
  if (operator === '-') {
    return subtract(firstNumber, secondNumber);
  }
  if (operator === '*') {
    return multiply(firstNumber, secondNumber);
  }
  if (operator === '/') {
    return divide(firstNumber, secondNumber);
  }
}

const input = document.querySelector("#display");
const numButtons = document.querySelectorAll(".calc-btn-num");
let display;

function displayDigit() {
  numButtons.forEach(item => {
    item.addEventListener('click', () => {
      input.value = item.textContent;
      display = input.value;
    })
  })
}

displayDigit();
