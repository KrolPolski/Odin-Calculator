let firstNumber;
let secondNumber;
let operator;
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

}
console.log(operate(5,"+",3));
