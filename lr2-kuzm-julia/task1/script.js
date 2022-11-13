// Task #1
// Пользователь вводит в текстовое поле время в часах (например 18). 
// Если время больше 17, то выводится сообщение «Добрый вечер». 
// В любых других случаях — «Добрый день».

while(true) {
  let time = prompt("Please, enter your time: ");
  if (time > 17) {
    alert("Good Evening!")
  } else {
    alert("Good day!");
  }
}
