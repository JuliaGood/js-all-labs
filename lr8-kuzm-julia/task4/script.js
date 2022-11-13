// Task #4
// Из заданного массива вывести список имен на экран пользователей проживающих в городе McKenziehaven.

let result = arr.filter((elem) => elem.address.city === "McKenziehaven");
result.forEach((element) => {
    alert("В городе McKenziehaven проживает: " + element.name);
    console.log(element);
});

//Самостоятельно вывести все элементы массива в виде таблицы в окне браузера. 
console.table(arr);

const table = document.getElementById("myTable");
function appendTd(tr, value) {
    const td = document.createElement("td");
    td.innerText = value;
    tr.appendChild(td);
}
arr.forEach((element) => {
    const tr = document.createElement("tr");
    appendTd(tr, element.id);
    appendTd(tr, element.name);
    appendTd(tr, element.username);
    appendTd(tr, element.email);
    appendTd(tr, element.address.city);
    appendTd(tr, element.phone);
    appendTd(tr, element.website);
    appendTd(tr, element.company.name);
    table.appendChild(tr);
});
