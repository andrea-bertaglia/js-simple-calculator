// test
console.log('Test link functions.js');

function getNum() {
    console.log(this.innerHTML);
    firstNum += this.innerHTML;
    btnListenerTotal.innerHTML = firstNum;
}