// Task #7
// Создать скрипт который содержит объект  builder  состоящий из методов, 
// каждый метод должен выводить на экран часть картинки дома. 
// Отдельно выведите на экран дом без крыши, без подвала. 

var builder = new Object();
builder.createRoof = function () {
    document.write("<img src='./images/roof.jpg'/>");
};
builder.createSecondFloor = function () {
    document.write("<img src='./images/secondFloor.jpg'/>");
};
builder.createFirstFloor = function () {
    document.write("<img src='./images/firstFloor.jpg'/>");
};
builder.createBasement = function () {
    document.write("<img src='./images/basement.jpg'/>");
};
// Строительство дома.
builder.createRoof();
builder.createSecondFloor();
builder.createFirstFloor();
builder.createBasement();
