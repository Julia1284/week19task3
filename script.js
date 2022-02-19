// function calcSum(){
// let digit1 = Number(document.getElementById('input1').value);
// let digit2 = Number(document.getElementById('input2').value);
// let result = digit1+digit2;
// document.getElementById ('resultsum').innerHTML=result;
// }

// function calcSubtract(){
//    let digit1 = Number(document.getElementById('input3').value);
//    let digit2 = Number(document.getElementById('input4').value);
//    let result = digit1-digit2;
//    document.getElementById ('resultsubtract').innerHTML=result;
// }
// function calcDiv(){
//    let digit1 = Number(document.getElementById('input5').value);
//    let digit2 = Number(document.getElementById('input6').value);
//    let result = digit1/digit2;
//    if (digit2 == 0) {
//       document.getElementById ('resultdivision').innerHTML = 'На ноль делить нельзя!';
//    }
//    else{
//       document.getElementById ('resultdivision').innerHTML=result;
//    }  
// }
// function calcMulty(){
//    let digit1 = Number(document.getElementById('input7').value);
//    let digit2 = Number(document.getElementById('input8').value);
//    let result = digit1*digit2;
//    document.getElementById ('resultmulty').innerHTML=result;
// }

class Calculator {
   static calcSum(a, b) {
      return a + b;
   }
   static calcSubtract(a, b) {
      return a - b;
   }
   static calcDiv(a, b) {
      return a / b;
   }
   static calcMulty(a, b) {
      return a * b;
   }
}
document.querySelector('.calcsum').onclick = function () {
   let digit1 = Number(document.getElementById('input1').value);
   let digit2 = Number(document.getElementById('input2').value);
   document.querySelector('#resultsum').innerHTML = Calculator.calcSum(digit1, digit2);
}
document.querySelector('.calcsubtract').onclick = function () {
   let digit1 = Number(document.getElementById('input3').value);
   let digit2 = Number(document.getElementById('input4').value);
   document.querySelector('#resultsubtract').innerHTML = Calculator.calcSubtract(digit1, digit2);
}
document.querySelector('.calcDiv').onclick = function () {
   let digit1 = Number(document.getElementById('input5').value);
   let digit2 = Number(document.getElementById('input6').value);
   document.querySelector('#resultdivision').innerHTML = Calculator.calcDiv(digit1, digit2);
}
document.querySelector('.calcmulty').onclick = function () {
   let digit1 = Number(document.getElementById('input7').value);
   let digit2 = Number(document.getElementById('input8').value);
   document.querySelector('#resultmulty').innerHTML = Calculator.calcMulty(digit1, digit2);
}