// Task #4
// Создать в html форму с кнопкой и списком. 
// Повесить на кнопку обработку события, определяющую что выбрал пользователь из списка. 

function btnClick2() {
  var sI = document.Test2.Item.selectedIndex;
  var Txt = "";
  Txt = "Предложено " + document.Test2.Item.length + " напитков" +
    "\nВыбран " + document.Test2.Item.options[sI].text +
    " (value= " + document.Test2.Item.options[sI].value +
    ", index= " + document.Test2.Item.options[sI].index + ")";
  if (document.Test2.Item.options[sI].defaultSelected) { Txt += "\nЭтот напиток выбирается по умолчанию"; }
  alert(Txt);
}
