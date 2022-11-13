// Task #9
// Создать скрипт, который проверяет наличие свойства в объекте. 

var house = {
  roof: "<img src='./images/roof.jpg'/>",
  // thirdFloor: отсутсвует.
  secondFloor: "<img src='./images/secondFloor.jpg'/>",
  firstFloor: "<img src='./images/firstFloor.jpg'/>",
  basement: "<img src='./images/basement.jpg'/>",
  address: "<p style='color:green'>UK. London. Muswell Hill. N10<hr/>"
};

// Строительство дома
document.write(house.roof);

// ЕСЛИ: в объекте house имеется планировка третьего этажа - thirdFloor,
if ("thirdFloor" in house) { // ТО: строим 3й этаж с планировкой - thirdFloor.
  document.write(house["thirdFloor"]);
} else { // Иначе: строим 3й этаж с планировкой - secondFloor.
  document.write(house["secondFloor"]);
}
document.write(house.secondFloor);
document.write(house.firstFloor);
document.write(house.basement);
document.write(house.address);
