// Task #3
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

const userName = prompt("Enter your name using Lowercase letters: ");

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst(userName)); 
// вася -> Вася
// john -> John
