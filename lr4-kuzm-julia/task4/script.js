// Task #4
// Создать функции для суммирования двух чисел. 
// Одна функция должна принимать два значения, другая не должна содержать параметров, 
// но обе должны производить вычисление суммы. 
// Запустить функцию передавая ей различные параметры. 

var a = 10;
var b = 15;
var c = 20;
var d = 21;

var x1;
var x2;

function sum1() {
  var result = a + b;
  document.write(`<p> sum1 result: ${result}`);
}

function sum2(x1, x2) {
  var result = x1 + x2; // x1, x2 = undefined => undefined + undefined = NaN
  document.write(`<p> sum2 result: ${result}`);
}

sum1();
sum2(); // не передаем параметры при вызове
sum2(c, d);
