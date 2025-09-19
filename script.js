let currentNumber;
let operator;
let previousNumber;

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

let operate = function(previousNumber, operator, currentNumber){
  if (operator === '+') {
    return add(previousNumber, currentNumber);
  }
  if (operator === '-') {
    return subtract(previousNumber, currentNumber);
  }
  if (operator === '*') {
    return multiply(previousNumber, currentNumber);
  }
  if (operator === '/') {
    return divide(previousNumber, currentNumber);
  }
}


let display;
let numButtons = document.querySelectorAll(".calc-btn-num");
const operatorButtons = document.querySelectorAll(".calc-btn-func");
const input = document.querySelector("#display");
const sbtn = document.querySelector(".calc-btn-submit");
let total;
function displayDigit() {

  numButtons.forEach(item => {
    item.addEventListener('click', () => {
      input.value += Number(item.textContent);
      display = input.value;
      currentNumber = +display;
    })
  })

  operatorButtons.forEach(item => {
    item.addEventListener('click', () => {
      operator = item.textContent;
      input.value = "";
      previousNumber = +currentNumber;
    })
  })

  sbtn.addEventListener("click", () => {
    input.value = operate(previousNumber,operator,currentNumber);
  });

}
displayDigit();
