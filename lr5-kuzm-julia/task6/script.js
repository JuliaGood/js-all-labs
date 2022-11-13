// Task #6
// Создать скрипт который содержит два метода, 
// метод show()  для вывода информации содержащейся в объекте, 
// а changeWork() для изменения места работы объекта. 

var human = {
  firstName: "Alex",
  secondName: "Jazun",
  age: 27,
  occupation: "<img src='Images_LR7/Microsoft.jpg' width='152' height='38' />",
  show: function() {
    document.write("<p>First name: " + this.firstName);
    document.write("<p>Second name: " + this.secondName);
    document.write("<p>Age: " + this.age + " years old </p>");
    document.write(this.occupation + "<hr/>");
  },
  // создаем метод changeWork() в блоке инициализации объекта
  changeWork: function(occupation) {
    this.occupation = occupation;
  }
};

// Вызов методов
human.show();
human.changeWork("<img src='Images_LR7/Cyberbionic Systematics.jpg' />");
human.show();
