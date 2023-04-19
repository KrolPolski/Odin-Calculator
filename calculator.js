let firstNumber = null;
let secondNumber = null;
let operator;
let lastOperator;
let lastSecondNumber;
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
    if (operator === "+") return add(firstNumber, secondNumber);
    else if (operator === "-") return subtract(firstNumber, secondNumber);
    else if (operator === "*") 
    {
        console.log("executing multiplication")
        return multiply(firstNumber, secondNumber);
    }

    else if (operator === "/") return divide(firstNumber, secondNumber);

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

// add event listener for equals button
const equalsBtn = document.querySelector('#keyEquals');
equalsBtn.addEventListener('click', equalsPress);


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
        operator = this.textContent;
        console.log(operator);
        
    }
    else if (secondNumber === null) {
        secondNumber = parseInt(strNumber);
        let answer = operate(firstNumber, operator, secondNumber);
        results.textContent = answer;        
        strNumber = "";
        firstNumber = answer;
        secondNumber = null;
        operator = this.textContent;}
    else {
        operator = this.textContent;
        
        results.textContent = operate(firstNumber, operator, secondNumber);
        }
    //else console.error("Both numbers already assigned, something went wrong");
}
function equalsPress() 
{
    if (firstNumber === null) {
        firstNumber = parseInt(strNumber);
        strNumber = "";                
    }
    else if (secondNumber === null && operator != null) {
        secondNumber = parseInt(strNumber);
        let answer = operate(firstNumber, operator, secondNumber);
        results.textContent = answer;        
        strNumber = "";
        firstNumber = answer;
        lastOperator = operator;
        lastSecondNumber = secondNumber;
        secondNumber = null;
        operator = null;
    }
    else if (secondNumber === null && operator === null)
    {
        console.log("No operator defined so repeating last operation against existing total")
        let answer = operate(firstNumber, lastOperator, lastSecondNumber);
        results.textContent = answer;        
        strNumber = "";
        firstNumber = answer;
        secondNumber = null;
    }

    else {
        console.log("both numbers are defined already so something went wrong")    
       /* let answer = operate(firstNumber, lastOperator, lastSecondNumber);
        results.textContent = answer;        
        strNumber = "";
        firstNumber = answer;
        secondNumber = null;
        */
        }
}
console.log(operate(5,"+",3));
console.log(operate(2, "*", 3));
console.log(multiply(2,3));