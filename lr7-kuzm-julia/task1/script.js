// Task #1
// Создать в html форму с кнопкой и сделать перехват события по нажатию на кнопку с выводом текстового сообщения. 

function btnClick() {
    let Txt1 = "";
    let Txt2 = "";
    Txt1 = document.Test.btn.value;
    Txt2 = document.Test.btn.name;
    document.getElementById('ex1').innerHTML="<HR>"+
        "Вы нажали кнопку: " + Txt1.bold() +
        " с именем: "  + Txt2.bold() +"<HR>";
}
