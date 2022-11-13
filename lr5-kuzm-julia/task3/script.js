// Task #3
// Модифицировать программу представленную ниже и 
// добавить в объект person новое свойство skill со значением JavaScript. 
// Вывести на экран это свойство.

var person = {
  firstName: "Jim",
  lastName: "Rainbow",
  age: 30,
  occupation: "Web Developer"
};

// обращения к свойствам объекта:
document.write("<p>" + person.firstName + " " + person.lastName);

// изменение значений свойств объекта:
person.age = 25;
document.write("<p>Age: " + person.age + " years old.");

person.skills = "JavaScript";
document.write("<p>He is a " + person.occupation + 
              ". He knows " + person.skills + ".");
