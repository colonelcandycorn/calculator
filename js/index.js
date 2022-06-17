let mode = 'empty';
let firstNumberString = '';
let secondNumberString = '';
let operator = '';
let result = 0;

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

// function updateNumberString(text) {
//     if (operated) {
//         if (/\d/.test(text)) {
//             secondNumberString += text;
//             numberString.textContent += text;
//         }
//     } else {
//         if (/\d/.test(text)) {
//             firstNumberString += text;
//             numberString.textContent += text;
//         } else if (/[\+\/\*]/.test(text) || text == '-') {
//             operated = true;
//             operator = text;
//             numberString.textContent += ` ${text} `
//         }
//     }
//     console.log(operator, firstNumberString, secondNumberString)
// }

function updateNumberString(text) {
    switch (mode) {
        case 'empty':
            if (/[1-9]/.test(text)) {
                firstNumberString += text;
                numberString.textContent = text;
                mode = 'number1';
            } else if (/[\+\/\*]/.test(text) || text =='-' && numberString.textContent) {
                firstNumberString = numberString.textContent;
                numberString.textContent += text;
                operator = text;
                mode = 'operator'
            }
            break
        case 'number1':
            if (/\d/.test(text)) {
                firstNumberString += text;
                numberString.textContent += text;
            } else if (/[\+\/\*]/.test(text) || text =='-') {
                operator = text;
                numberString.textContent += text;
                mode = 'operator';
            }
            break
        case 'operator':
            if (/[1-9]/.test(text)) {
                secondNumberString += text;
                numberString.textContent += text;
                mode = 'number2'
                result = operate(operator, +firstNumberString, +secondNumberString);
                evaluation.textContent = result
            } else if (/[\+\/\*]/.test(text) || text =='-') {
                operator = text;
                numberString.textContent = numberString.textContent.slice(0,-1);
                numberString.textContent += text;
            }
            break
        case 'number2':
            if (/\d/.test(text)) {
                secondNumberString += text;
                numberString.textContent += text;
                result = operate(operator, +firstNumberString, +secondNumberString);
                evaluation.textContent = result;
            } else if (/[\+\/\*]/.test(text) || text =='-') {
                operator = text;
                numberString.textContent += text;
                firstNumberString = String(result);
                secondNumberString = '';
                mode = 'operator';
            } else if (text == '=') {
                numberString.textContent = String(result);
                firstNumberString = '';
                secondNumberString = '';
                evaluation.textContent = '';
                mode = 'empty'

            }
    }
    console.log(firstNumberString, operator, secondNumberString, result)
}

const buttonContainer = document.querySelector('.buttonContainer');

const evaluation = document.querySelector('.evaluation');

const operatorString = document.querySelector('.operatorString');

let numberString = document.querySelector('.numString');

const buttonList = ['C', '()', '%', '/',
                 '7', '8', '9', '*',
                 '4', '5', '6', '-',
                 '1', '2', '3', '+',
                 '+/-', '0', '.', '=']

for (let x in buttonList) {
    const button = document.createElement('button');
    button.textContent = `${buttonList[x]}`;
    button.classList.add(`${buttonList[x]}`);
    button.classList.add('button');
    buttonContainer.append(button);
}

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener('click', (e) => updateNumberString(e.target.textContent)));
