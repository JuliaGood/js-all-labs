// Task #1
// Написать функцию которая выводит информацию "Hello from MyFirstFunction!" в html документ;
// Найти в интернете значение тегов <p>,  <br>.

//создание функции с помощью FunctionDeclaration(Именованые)
function MyFirstFunction() {
  document.write("<p>Hello from MyFirstFunction!");
  document.write("<p>How are you?");
  document.write("<p>Goodbye!");
}

function MySecondFunction() {
  document.write("<p>Hello from MySecondFunction!</p>");
}
// Вызов функций.
MyFirstFunction();
document.write("<hr/>");

// Вызов функций.
MySecondFunction();
document.write("<hr/>");

// за допомогою методу .write() можна написати текст або HTML елементи безпосередньо у вивід HTML (у сам HTML документ).
// АЛЕ: якщо використовувати цей метод після того як документ загрузився - то всі існуючі HTML елементи (весь HTML) видалиться!!!

// <p> - цей тег визначає текстовий абзац. Тег <p> є блоковим елементом, завжди починається з нового рядка, 
// абзаци тексту, що йдуть один за одним, розділяються між собою "відбивкою". Величиною "відбивки" можна керувати за допомогою стилів. 
// Якщо закриваючого тега </p> немає, то вважається, що кінець абзацу збігається з початком наступного блокового елемента.

// <br> - цей тег встановлює  перевод рядка у тому місці, де цей тег знаходиться. 
// На відміну від тега абзацу <p>, використання тега <br> не додає порожній відступ перед рядком. 
// Якщо текст, в якому використовується <br>, обтікає плаваючий елемент, то за допомогою атрибута clear тега <br> можна зробити так, щоб наступний рядок починався нижче елемента.

// тобто вищенаписаний код можна відрефакторити наступним чином:
// function MyFirstFunction() {
//   document.write("<p>Hello from MyFirstFunction!<br> How are you?<br> Goodbye!</p>");
// }