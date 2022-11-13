// Task #3
// Пользователь вводит в текстовое поле имя, а во второе текстовое поле — пароль. 
// Если пользователь ввел:
// ivan -> 333
// ssss-> 666
// gibs ->0000
// То вывести — «Доброе пожаловать», в противном случае: «Пользователь не найден».


let userName = prompt("Please, enter your name: ");
let userPassword = prompt("Please, enter your password: ");

if (userName == "ivan" && userPassword == 333 || 
    userName == "ssss" && userPassword == 666 || 
    userName == "gibs" && userPassword == 0000 ) {
  alert("Welcome!")
} else {
  alert("User not found!");
}
