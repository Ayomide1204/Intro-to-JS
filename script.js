    let currentNumber = '';
    let previousNumber = '';
    let operator = '';

    function appendNumber(number) {
        currentNumber += number;
        document.getElementById('display').value = currentNumber;
    }

    function setOperator(op) {
        if (currentNumber === '') return;
        if (previousNumber !== '') {
            calculateResult();
        }
        operator = op;
        previousNumber = currentNumber;
        currentNumber = '';
    }

    function calculateResult() {
        let result;
        const prev = parseFloat(previousNumber);
        const current = parseFloat(currentNumber);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        currentNumber = result;
        operator = '';
        previousNumber = '';
        document.getElementById('display').value = result;
    }

    function clearDisplay() {
        currentNumber = '';
        previousNumber = '';
        operator = '';
        document.getElementById('display').value = '';
    }