// Task #3
// Создать в html форму с кнопкой и переключателем.
// Повесить на кнопку обработку события, определяющую нажатие на переключатель

function btnClick() {
  if (document.Test1.Sex[0].checked) {
    document.Test1.Sex[1].click();
  } else {
    document.Test1.Sex[0].click();
  }
}
