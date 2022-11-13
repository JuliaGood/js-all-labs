// Task #5
// Создать в html форму с кнопкой и выпадающим списком состоящим из ссылок на различные сайты. 
// Повесить на кнопку обработку события, определяющую переход на выбранный из списка сайт. 

for (i = 0; i < document.links.length; i++) {
  // Создание i-элемента списка и запись в него ссылки
  document.Sel.ListOfLinks.options[i] = new Option(
    document.links[i],
    i,
    false,
    false
  );
}
// Выделение первого элемента в списке
document.Sel.ListOfLinks.selectedIndex = 0;
