const translations = {
    en: {
        title: "Simple Math Operations",
        operationLabel: "Choose an operation:",
        calculateButton: "Calculate",
        resultLabel: "Result:",
        messageContent: "The result is:",
        closeButton: "Close",
        operations: {
            add: "Addition (+)",
            subtract: "Subtraction (-)",
            multiply: "Multiplication (*)",
            divide: "Division (/)"
        }
    },
    de: {
        title: "Einfache mathematische Operationen",
        operationLabel: "Wählen Sie eine Operation:",
        calculateButton: "Berechnen",
        resultLabel: "Ergebnis:",
        messageContent: "Das Ergebnis ist:",
        closeButton: "Schließen",
        operations: {
            add: "Addition (+)",
            subtract: "Subtraktion (-)",
            multiply: "Multiplikation (*)",
            divide: "Division (/)"
        }
    },
    ar: {
        title: "عمليات رياضية بسيطة",
        operationLabel: "اختر عملية:",
        calculateButton: "احسب",
        resultLabel: "النتيجة:",
        messageContent: "النتيجة هي:",
        closeButton: "إغلاق",
        operations: {
            add: "الجمع (+)",
            subtract: "الطرح (-)",
            multiply: "الضرب (*)",
            divide: "القسمة (/)"
        }
    },
    fr: {
        title: "Opérations mathématiques simples",
        operationLabel: "Choisissez une opération:",
        calculateButton: "Calculer",
        resultLabel: "Résultat:",
        messageContent: "Le résultat est:",
        closeButton: "Fermer",
        operations: {
            add: "Addition (+)",
            subtract: "Soustraction (-)",
            multiply: "Multiplication (*)",
            divide: "Division (/)"
        }
    }
};

function changeLanguage() {
    const language = document.getElementById("language").value;
    const translation = translations[language];

    document.getElementById("title").textContent = translation.title;
    document.getElementById("operationLabel").textContent = translation.operationLabel;
    document.getElementById("calculateButton").textContent = translation.calculateButton;
    document.getElementById("resultLabel").textContent = translation.resultLabel;
    document.getElementById("closeButton").textContent = translation.closeButton;

    const operationSelect = document.getElementById("operation");
    const options = operationSelect.options;
    options[0].textContent = translation.operations.add;
    options[1].textContent = translation.operations.subtract;
    options[2].textContent = translation.operations.multiply;
    options[3].textContent = translation.operations.divide;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function performCalculation() {
    const operation = document.getElementById('operation').value;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert('Division by zero is not allowed.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Invalid operation selected.');
            return;
    }

    document.getElementById('result').textContent = result;
    showMessageBox(`The result is: <strong>${result}</strong>`);
}

function showMessageBox(message) {
    const messageBox = document.getElementById('messageBox');
    const messageContent = document.getElementById('messageContent');
    messageContent.innerHTML = message;
    messageBox.style.display = 'block';
}

function closeMessageBox() {
    const messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultDisplay = document.getElementById("result");

    document.getElementById("add").addEventListener("click", () => {
        const result = add(Number(num1Input.value), Number(num2Input.value));
        resultDisplay.textContent = `Result: ${result}`;
    });

    document.getElementById("subtract").addEventListener("click", () => {
        const result = subtract(Number(num1Input.value), Number(num2Input.value));
        resultDisplay.textContent = `Result: ${result}`;
    });

    document.getElementById("multiply").addEventListener("click", () => {
        const result = multiply(Number(num1Input.value), Number(num2Input.value));
        resultDisplay.textContent = `Result: ${result}`;
    });

    document.getElementById("divide").addEventListener("click", () => {
        try {
            const result = divide(Number(num1Input.value), Number(num2Input.value));
            resultDisplay.textContent = `Result: ${result}`;
        } catch (error) {
            resultDisplay.textContent = error.message;
        }
    });
});

<script src="app.js"></script>