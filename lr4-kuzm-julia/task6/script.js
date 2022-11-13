// Task #6
// Создать функцию которая суммирует два значения и передает их с помощью ключевого слова return. 
// Функция должна храниться в переменной  res. 
// Аналогичным образом сделайте функцию по возведению в степень. 

function Sum(a, b) {        
  return a + b;
}
var res = Sum(2, 3);

// функция по возведению в степень
function PowerTo(base, exponent) {        
  var result = 1;
	if(exponent == undefined)
		exponent = 2;
	for(var i = 1; i <= exponent; i++) {
		result = result * base;
	}
	return result;
}

var res2 = PowerTo(2, 3);
document.write("<p>Result of Sum is: " + res + "</br>Result of PowerTo is: " + res2 + "</p>");
