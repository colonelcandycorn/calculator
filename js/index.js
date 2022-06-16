function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '/':
            return divide(num1, num2);
        case '*':
            return multiply(num1, num2);
    }
}

const buttonContainer = document.querySelector('.buttonContainer')


const buttons = ['C', '()', '%', '/',
                 '7', '8', '9', '*',
                 '4', '5', '6', '-',
                 '1', '2', '3', '+',
                 '+/-', '0', '.', '=']

for (let x in buttons) {
    const button = document.createElement('button');
    button.textContent = `${buttons[x]}`;
    button.classList.add(`${buttons[x]}`);
    button.classList.add('button');
    buttonContainer.append(button);
}