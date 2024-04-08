// test
console.log('Test link functions.js');

function getNum() {
    console.log(this.innerHTML);
    NumDisplay += this.innerHTML;
    btnListenerDisplay.innerHTML = NumDisplay;
}

function getOperation() {
    firstNumber = parseInt(NumDisplay);
    operationSign = this.innerHTML;
    console.log(operationSign);
    NumDisplay = "";
    console.log(firstNumber);
}

function getTotal() {
    secondNumber = parseInt(NumDisplay)

    console.log("al click di = il primo numero è: ", firstNumber);
    console.log("al click di = l'operatore è: ", operationSign);
    console.log("al click di = il secondo numero è: ", secondNumber);

    if (operationSign === "+") {
        result = firstNumber + secondNumber;
    } else if (operationSign === "−") {
        result = firstNumber - secondNumber;
    } else if (operationSign === "×") {
        result = firstNumber * secondNumber;
    } else if (operationSign === "÷") {
        result = firstNumber / secondNumber;
    }

    console.log("il risultato è: ", result);

    btnListenerDisplay.innerHTML = result;
}

function cancelDisplay() {
    NumDisplay = "0";
    btnListenerDisplay.innerHTML = NumDisplay;
    console.log(NumDisplay);
    console.log(btnListenerDisplay.innerHTML);
    NumDisplay = "";
}