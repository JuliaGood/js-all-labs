// Task #8
// Создать скрипт для перебора свойств объекта  house. 
// Создать массив arr со значениями и сделать перебор всех значений в цикле. 

var house = {
  roof: "<img src='./images/roof.jpg'/>",
  secondFloor: "<img src='./images/secondFloor.jpg'/>",
  firstFloor: "<img src='./images/firstFloor.jpg'/>",
  basement: "<img src='./images/basement.jpg'/>",
  address: "<p style='color:green'>UK. London. Muswell Hill. N10<hr/>"
};

// Перебор значений свойств в обьекте - house
for (var element in house) {
  // создание той переменной, которая будет перебирать свойства в объекте house
  document.write(house[element]); //выводим на екран переменную которая перебирала свойство
}
//цикл for/in не проходит по всем элементам массива(свойствам объекта), а перебирает перечисленные
var arr = [];
var _index = 0;
arr[0] = true;
arr[4] = 1;
arr[122] = "people";
for (_index in arr) {
  arr[3] = false; // созданный элемент массива в цикле for/in не всегда отобразиться самим циклом
  console.log(_index);
}
console.log(arr);
