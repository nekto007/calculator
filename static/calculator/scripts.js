let currentInput = '';
let operation = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;
    firstOperand = parseFloat(currentInput);
    operation = op;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operation = null;
    firstOperand = null;
    document.getElementById('display').value = '';
}

function calculate() {
    if (currentInput === '' || operation === null || firstOperand === null) return;

    const secondOperand = parseFloat(currentInput);
    let result;

    switch (operation) {
        case 'add':
            result = firstOperand + secondOperand;
            break;
        case 'subtract':
            result = firstOperand - secondOperand;
            break;
        case 'multiply':
            result = firstOperand * secondOperand;
            break;
        case 'divide':
            if (secondOperand === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    document.getElementById('display').value = result;
    addHistory(`${firstOperand} ${getOperationSymbol(operation)} ${secondOperand} = ${result}`);
    currentInput = '';
    operation = null;
    firstOperand = null;
}

function getOperationSymbol(op) {
    switch (op) {
        case 'add':
            return '+';
        case 'subtract':
            return '-';
        case 'multiply':
            return '*';
        case 'divide':
            return '/';
        default:
            return '';
    }
}

function addHistory(operation) {
    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('li');
    historyItem.textContent = operation;
    historyList.appendChild(historyItem);
}
