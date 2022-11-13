function plus() {
  var num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1);

  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);

  result = num1 + num2;
  document.getElementById('out').innerHTML = result;
}

function minus() {
  var num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1);

  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);

  result = num1 - num2;
  document.getElementById('out').innerHTML = result;
}

//Выяснить для чего используют встроенные функции и методы getElementById, parseInt, innerHTML.

// getElementById - це метод, за допомогою якого ми можемо знайти конкретний елемент в DOM по його id. (щоб маніпулювати цим елементом у нашому JS файлі)
// getElementById() метод повертає елемент із його значенням (value), або NULL якщо елементу не існує.
// Якщо існує декілька елементів із одним і тим же id, то метод поверне лише перший елемент.

// parseInt - цей метод перетворює строку в ціле число і повертає це число (string into integer).
// Якщо більш детальніше, то сама parseInt() функція може приймає 2 параметри: 
// 1й аргумент - строка яку треба перетворити у ціле число,  
// 2й аргумент - ціле число в діапазоні між 2 і 36, що є основою системи числення числової строки string.
// Тому точніше сказати, що parseInt - це метод який приймає строку (string) і повертає ціле число (integer) відповідно до зазначеної основи системи числення (radix).
// Якщо перший символ строки не може бути перетворений на число, parseInt повертає значення NaN (тобто що строка не є числом).

// innerHTML - ця властивість (свойство, property) дає простий спосіб повністю замінити вміст HTML елемента.
// тобто innerHTML встановлює або повертає вміст HTML (внутрішній HTML) елемента.
// важливо розумінити, що використовуючи свойство innerHTML - ми замінюємо ввесь вміст елементу.
// саме тому у нашому випадку (у коді який ми написали вище) - слово "результат" знакає і замінюється на саме значення, яке ми отримуємо під час запуску функції 'minus' чи 'plus'.
