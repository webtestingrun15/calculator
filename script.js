let currentNumber = "";
let operator = "";
let previousNumber = "";

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
const clear = document.querySelector(".calc-btn-clear");
const decimal = document.querySelector(".calc-btn-decimal")
let oldOperator = "";
let total = "";
let press = 0;
let symbol = [];
let symbolNumber;

function displayDigit() {

  numButtons.forEach(item => {
    item.addEventListener('click', () => {
      if(total !== ""){
        clearValues();
      }
      if(oldOperator !== "" && +input.value === previousNumber || press > 0){
        input.value = "";
      }
      input.value += item.textContent;
      display = input.value;
      currentNumber = display;
      symbol.push(currentNumber);
    })
  });

  operatorButtons.forEach(item => {
    item.addEventListener('click', () => {
          operator = item.textContent;
          input.value = "";
          symbol.push(item.textContent);
          symbolNumber = symbol.filter(x => x === operator).length;
          if (previousNumber !== "" && currentNumber !== "") {
            if(!(symbolNumber > 1)){
              previousNumber = operate(+previousNumber, oldOperator, +currentNumber);
              input.value = previousNumber;
              symbol = [];
              previousNumber = previousNumber;
              symbol.push(previousNumber);
          }
          } else {
            oldOperator = operator;
            previousNumber = currentNumber;
        }
    })
  });

  sbtn.addEventListener("click", () => {
    if (+previousNumber === 0 && operator === '/'){
      input.value = "ROFL no!";
      total = input.value;
    } else {
    input.value = operate(+previousNumber,operator,+currentNumber);
    total = input.value;
    }
  });

  clear.addEventListener("click", () => {
    clearValues();
  });

}
displayDigit();

function clearValues() {
  input.value = "";
  previousNumber = "";
  currentNumber = "";
  operator = "";
  oldOperator = "";
  total = "";
  press = 0;
  symbol = [];
}
