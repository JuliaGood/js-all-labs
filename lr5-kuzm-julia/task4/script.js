// Task #4
// Создать скрипт в котором есть объект с вложенным объектом occupation. 
// Добавить к этому объекту еще один вложенный объект occupation1. 
// Вывести на экран все вложенные объекты. 
// occupation1: {
//  company: "Microsoft",
//  position: "Web Developer"
// }

var human = {
  firstName: "Alex",
  secondName: "Jazun",
  age: 27,
  // Вложенный обьект.
  occupation: {
    company: "ZIEIT",
    position: "Teacher"
  }
};
document.write("<p>First name: " + human.firstName);
document.write("<p>Second name: " + human.secondName);
document.write("<p>Age: " + human.age + " years old");
// Обращение к вложенному объекту.
document.write("<p>Company: " + human.occupation.company);
document.write("<p>Position: " + human.occupation.position);

// Добавление к объекту human еще один вложенный объект occupation1.
human.occupation1 = {
  company: "Microsoft",
  position: "Web Developer"
};
document.write("<p>Company1: " + human.occupation1.company);
document.write("<p>Position1: " + human.occupation1.position);
