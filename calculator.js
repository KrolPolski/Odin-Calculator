let firstNumber;
let secondNumber;
let operator;
let strNumber = "";
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
    let firstNumber = null;
    let secondNumber = null;
    let operator = null;
    const results = document.querySelector(".results");
    results.textContent = null;
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', keyPress));
// add keyboard functionality later: window.addEventListener('keydown', keyPress);
const ops = document.querySelectorAll('.op');
ops.forEach(op => op.addEventListener('click', operatorPress));
// add keyboard functionality later: window.addEventListener('keydown', keyPress);
function keyPress()
{
strNumber += this.textContent;
console.log(strNumber);
}

function operatorPress()
{
    if (firstNumber = null) firstNumber = parseInt(strNumber);
    else if (secondNumber = null) secondNumber = parseInt(strNumber);
    else console.error("Both numbers already assigned, something went wrong")
}
console.log(operate(5,"+",3));
