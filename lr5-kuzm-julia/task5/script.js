// Task #5
// Создать вложенный объект с помощью конструктора Object()

var human = new Object();

  human.firstName = "Alex";
  human.secondName = "Jazun";
  human.age = 27;
  // Создание вложенного обьекта.
  human.occupation = new Object();
  human.occupation.company = "Microsoft";
  human.occupation.position = "Web Developer";

  document.write("<p>First name: " + human.firstName);
  document.write("<p>Second name: " + human.secondName);
  document.write("<p>Age: " + human.age + " years old");

  // Обращение к вложенному объекту.
  document.write("<p>Company: " + human.occupation.company);
  document.write("<p>Position: " + human.occupation.position);
