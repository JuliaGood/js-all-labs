// Task #8
// Создать программу которая ищет максимальное число из любого набора данных. 
// Дать объяснение объекту  Number. И его свойству NEGATIVE_INFINITY. 
// Объяснить встроенную функцию arguments. Будет ли работать функция max(a, b, c) если в нее не передавать параметры. 

function max(a, b, c) {
  //функция показывает максимальное значение аргумента, которой передан при вызове
  console.log(arguments);
  var maxValue = Number.NEGATIVE_INFINITY; //присваеваем изначально
  //минус бесконечность
  document.write("<p>Number.NEGATIVE_INFINITY = " + maxValue + "<hr/>");
  //перебираем циклом аргументы
  for (
    var i = 0;
    i < arguments.length;
    i++ // arguments - свойство объекта max - который есть функцией
  )
    if (arguments[i] > maxValue) maxValue = arguments[i];

  return maxValue;
}
var res = max(-33, 33, 777, -666, -22, 888);
document.write("<p>Максимальное значение одного из аргументов функции = " + res);

// Number() - це метод переводить значення у число (converts a value to a number).
// якщо значення не може перетворитися (cannot be converted), то повертається NaN.

// свойство NEGATIVE_INFINITY - представляє від’ємне значення Infinity (it represents the negative Infinity value).

// arguments — це об’єкт, подібний до масиву, доступний у функціях, який містить значення аргументів, переданих цій функції.
// Якщо функція викликається з відсутніми аргументами (менше ніж задекларовано), то відсутні значення встановлюються як undefined.
// саме тому краще присвоювати параметру значення за замовчуванням (значение по умолчанию / value by default).
// If a function is called with missing arguments (less than declared), the missing values are set to undefined.
// it is better to assign a default value to the parameter.
