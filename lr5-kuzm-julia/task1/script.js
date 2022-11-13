// Task #1
// Написать скрипт,  который выводит информацию из объекта на экран. 
// Изменить значения свойств объекта и снова вывести их на экран.  

// Создание объекта через блок инициализации.
var instance = { propertyA: 222, propertyB: 444 };
     
// Вывод значений свойств.
document.write("<p>instance.propertyA = " + instance.propertyA);
document.write("<p>instance.propertyB = " + instance.propertyB);
document.write("<hr/>");
// Присвоение новых значений свойствам.
instance.propertyA = 333;       // 1 способ.
instance["propertyB"] = 555;    // 2 способ.

// Вывод значений свойств.
document.write("<p>instance.propertyA = " + instance.propertyA);
document.write("<p>instance.propertyB = " + instance.propertyB);
document.write("<hr/>");
document.write("<p>instance = " + instance);
