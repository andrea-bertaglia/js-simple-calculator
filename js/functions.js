// test
console.log('Test link functions.js');

function getFirstNum() {
    console.log(this.innerHTML);
    firstNumDisplay += this.innerHTML;
    btnListenerTotal.innerHTML = firstNumDisplay;
}

function getOperation() {
    firstNumber = parseInt(firstNumDisplay);
    console.log(firstNumber);
    operationSign = this.innerHTML;
    console.log(operationSign);
    btnListenerTotal.innerHTML = "";
}