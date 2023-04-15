let firstNumber = null;
let secondNumber = null;
let operator;
let strNumber = "";
const results = document.querySelector(".results");
function add(firstNumber,secondNumber) 
{
    return firstNumber + secondNumber;
}
function subtract(firstNumber,secondNumber) 
{
    return firstNumber - secondNumber;
}
function multiply(firstNumber,secondNumber)
{
    return firstNumber * secondNumber;
}
function divide(firstNumber,secondNumber)
{
    return firstNumber / secondNumber;
}
function operate(firstNumber, operator, secondNumber)
{
    if (operator = "+") return add(firstNumber, secondNumber);
    else if (operator = "-") return subtract(firstNumber, secondNumber);
    else if (operator = "*") return multiply(firstNumber, secondNumber);
    else if (operator = "/") return divide(firstNumber, secondNumber);
    else console.error("Invalid operator detected");
}
function clear()
{
    firstNumber = null;
    secondNumber = null;
    operator = null;
    results.textContent = "0";
    strNumber = "";
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', keyPress));
// add keyboard functionality later: window.addEventListener('keydown', keyPress);
const ops = document.querySelectorAll('.op');
ops.forEach(op => op.addEventListener('click', operatorPress));
// add keyboard functionality later: window.addEventListener('keydown', keyPress);

// add event listener for clear button
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clear);

function keyPress()
{
strNumber += this.textContent;
results.textContent = strNumber;
console.log(strNumber);
}

function operatorPress()
{
    if (firstNumber === null) {
        firstNumber = parseInt(strNumber);
        strNumber = "";
        console.log(strNumber);
        results.textContent = strNumber;
        operator = this.textContent;
        
    }
    else if (secondNumber === null) {secondNumber = parseInt(strNumber);
    results.textContent = operate(firstNumber, operator, secondNumber);
        operator = this.textContent;}
    else {
        operator = this.textContent;
        
        results.textContent = operate(firstNumber, operator, secondNumber);
        }
    //else console.error("Both numbers already assigned, something went wrong");
}
console.log(operate(5,"+",3));
