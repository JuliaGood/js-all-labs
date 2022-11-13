// Task #7
// Создать в html форму с отправкой текстового сообщения в зависимости от ситуации. 
// Добавить в код скрипт который выводит в модальном окне информацию 
// которую ввел пользователь добавляя в нее текущую дату и время.   

var OK = "Тетя Мотя чувствует себя хорошо. \nВасилий";
var Problem = "Тетя Мотя заболела. \nВасилий";

function getDate() {
  var today = new Date();
  return today.toLocaleString() + "\n";
}

function CheckRadio(form, value) {
  if (value == "Good") {
    form.Letter.value = getDate() + OK;
  } else {
    form.Letter.value = getDate() + Problem;
  }
}
