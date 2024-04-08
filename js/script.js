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
const btnListenerTotal = document.getElementById("total")

// prelevo gli operatori
const btnListenerC = document.getElementById("c");
const btnListenerEquals = document.getElementById("equals");
const btnListenerPlus = document.getElementById("plus");
const btnListenerMinus = document.getElementById("minus");
const btnListenerTimes = document.getElementById("times");
const btnListenerDivide = document.getElementById("divide");

// associo event listener ai numeri
btnListenerZero.addEventListener("click", getFirstNum);
btnListenerOne.addEventListener("click", getFirstNum);
btnListenerTwo.addEventListener("click", getFirstNum);
btnListenerThree.addEventListener("click", getFirstNum);
btnListenerFour.addEventListener("click", getFirstNum);
btnListenerFive.addEventListener("click", getFirstNum);
btnListenerSix.addEventListener("click", getFirstNum);
btnListenerSeven.addEventListener("click", getFirstNum);
btnListenerEight.addEventListener("click", getFirstNum);
btnListenerNine.addEventListener("click", getFirstNum);

// associo event listener agli operatori
btnListenerC.addEventListener("click", getOperation);
btnListenerEquals.addEventListener("click", getOperation);
btnListenerPlus.addEventListener("click", getOperation);
btnListenerMinus.addEventListener("click", getOperation);
btnListenerTimes.addEventListener("click", getOperation);
btnListenerDivide.addEventListener("click", getOperation);


let firstNumDisplay = "";
let secondNumDisplay = "";
let operationSign = "";
let firstNumber = 0;







