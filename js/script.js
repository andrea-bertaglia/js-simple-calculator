// test
console.log('Test link script.js');

// prelevo i numeri
const btnListenerZero = document.getElementById("0");
const btnListenerOne = document.getElementById("1");
const btnListenerTwo = document.getElementById("2");
const btnListenerThree = document.getElementById("3");
const btnListenerFour = document.getElementById("4");
const btnListenerFive = document.getElementById("5");
const btnListenerSix = document.getElementById("6");
const btnListenerSeven = document.getElementById("7");
const btnListenerEight = document.getElementById("8");
const btnListenerNine = document.getElementById("9");

// prelevo gli operatori
const btnListenerC = document.getElementById("c");
const btnListenerPlus = document.getElementById("plus");
const btnListenerMinus = document.getElementById("minus");
const btnListenerTimes = document.getElementById("times");
const btnListenerDivide = document.getElementById("divide");

// prelevo l'elemento del display
const btnListenerDisplay = document.getElementById("total");

// prelevo il tasto del totale
const btnListenerEquals = document.getElementById("equals")

// associo event listener ai numeri
btnListenerZero.addEventListener("click", getNum);
btnListenerOne.addEventListener("click", getNum);
btnListenerTwo.addEventListener("click", getNum);
btnListenerThree.addEventListener("click", getNum);
btnListenerFour.addEventListener("click", getNum);
btnListenerFive.addEventListener("click", getNum);
btnListenerSix.addEventListener("click", getNum);
btnListenerSeven.addEventListener("click", getNum);
btnListenerEight.addEventListener("click", getNum);
btnListenerNine.addEventListener("click", getNum);

// associo event listener agli operatori
btnListenerPlus.addEventListener("click", getOperation);
btnListenerMinus.addEventListener("click", getOperation);
btnListenerTimes.addEventListener("click", getOperation);
btnListenerDivide.addEventListener("click", getOperation);

// associo event listener al tasto del totale
btnListenerEquals.addEventListener("click", getTotal);

let NumDisplay = "";
let operationSign = "";
let firstNumber = 0;
let secondNumber = 0;
let result = 0;







