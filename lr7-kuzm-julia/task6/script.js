// Task #6
// Создать в html форму с предложением ввести личные данные пользователя. 
// Добавить в код скрипт который выводи в модальном окне информацию которую ввел пользователь. 

function complete() {
  var Elem="Фамилия: " + document.Sel1.Family.value + 
  "\nИмя: " + document.Sel1.Name.value +
  "\nВозвраст: " + document.Sel1.Age.value +
  "\nТелефон: " + document.Sel1.Phone.value;
  alert(Elem);
}

function checkAge(age) {
  if (age < 18) {
    return "18";
  } else {
    return age;
  }
}
