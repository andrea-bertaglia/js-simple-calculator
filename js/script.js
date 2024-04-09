// test
console.log('Test link script.js');

// NUMERI
// prelevo i numeri
const btnListenerElems = document.querySelectorAll(".btn-number");
// associo event listener ai numeri
for(let i = 0; i < btnListenerElems.length; i++) {
    btnListenerElems[i].addEventListener("click", getNum)
}

// OPERATORI
// prelevo gli operatori
const btnListenerOp = document.querySelectorAll(".btn-op")
// associo event listener agli operatori
for(let i = 0; i < btnListenerOp.length; i++) {
    btnListenerOp[i].addEventListener("click", getOperation);
}

// DISPLAY
// prelevo l'elemento del display
const btnListenerDisplay = document.getElementById("display");


// TASTO TOTALE
// prelevo il tasto del totale
const btnListenerEquals = document.getElementById("equals")
// associo event listener al tasto del totale
btnListenerEquals.addEventListener("click", getTotal);

// TASTO CANC
// prelevo l'elemento "canc"
const btnListenerCancel = document.getElementById("cancel");
// associo event listener al tasto cancel
btnListenerCancel.addEventListener("click", cancelDisplay)



// DICHIARAZIONE DELLE VARIABILI
let NumDisplay = "";
let operationSign = "";
let firstNumber = 0;
let secondNumber = 0;
let result = 0;







