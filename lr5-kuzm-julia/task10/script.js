// Task #10
// Создать скрипт, который удаляет свойство из объекта. 
// Удалить второй этаж из примера. Удалить крышу. 

var house = {
  roof: "<img src='./images/roof.jpg'/>",
  secondFloor: "<img src='./images/secondFloor.jpg'/>",
  firstFloor: "<img src='./images/firstFloor.jpg'/>",
  basement: "<img src='./images/basement.jpg'/>",
  address: "<p style='color:green'>UK. London. Muswell Hill. N10<hr/>"
}

// Удаление свойства secondFloor из объекта house.
if ("secondFloor" in house) {
  delete house.secondFloor;
}
// Удаление свойства roof из объекта house.
if ("roof" in house) {
  delete house.roof;
}

// Строительство дома.
for (element in house) {
  document.write(house[element]);
}
