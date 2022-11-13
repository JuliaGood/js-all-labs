// Task #4
// Пользователь вводит 3 числа. Найти максимальное. Учесть вариант равенства чисел.

let number1 = prompt("Please, enter a first number: ");
let number2 = prompt("Please, enter a second number: ");
let number3 = prompt("Please, enter a third number: ");

if (number1 >= number2 && number1 >= number3 ) {
  alert(`The max number is ${number1}`);
} else if (number2 >= number1 && number2 >= number3 ) {
  alert(`The max number is ${number2}`);
} else {
  alert(`The max number is ${number3}`);
}

// or we can use Math.max() function for solving this task:

// const findMaxNumber = (n1, n2, n3) => {
//   let maxNumber = Math.max(n1, n2, n3);
//   alert(`The max number is ${maxNumber}` );
// } 
// findMaxNumber(number1, number2, number3);
