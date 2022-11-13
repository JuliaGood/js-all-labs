// Task #7
// Создать программу которая спрашивает у пользователя два числа и знак арифметической операции.
// Под каждую арифметическую операцию создать функцию для подсчета результата. 
// Сделать проверку валидности результата и если есть результат вывести его на страницу html. 
// Модифицировать код и добавить в него функцию для возведения в степень и корень числа.  

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
// функция возведения в степень 
function powerTo (base, exponent) {
  var result = 1;
  if(exponent == undefined)
    exponent = 2;
  for(var i = 1; i <= exponent; i++) {
    result = result * base;
  }
  return result;
}

var operand1 = prompt("Введите первое число: ");
var sign = prompt("Введите знак арифметической операции: + - * / ** ");
var operand2 = prompt("Введите второе число: ");
var result = undefined;

operand1 = parseInt(operand1);//глобальный метод parseInt
operand2 = parseInt(operand2);//глобальный метод parseInt
switch (sign) {
  case "+":
      result = add(operand1, operand2);
      break;
  case "-":
      result = sub(operand1, operand2);
      break;
  case "*":
      result = mul(operand1, operand2);
      break;
  case "/":
      result = div(operand1, operand2);
      break;
  case "**":
      result = powerTo(operand1, operand2);
      break;  
  default:
      document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.");
}

if (result != undefined)
  document.write("<p>" + operand1 + " " + sign + " " + operand2 + " = " + result);

