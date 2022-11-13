// Task #2
// Пользователь вводит в текстовое поле имя. 
// Если введенное имя Jonh — то выводится сообщение «Привет Jonh». 
// В противном случае — сообщение «Я вас не знаю».

while(true) {
  let userName = prompt("Please, enter your name: ");
  if (userName == "John") {
    alert("Hi John!")
  } else {
    alert("Sorry, I do not know You!");
  }
}
