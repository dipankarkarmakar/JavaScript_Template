function myidfunction() {
    document.getElementById("demo").innerHTML= Date();
}

function myclassfunction() {
    document.getElementsByClassName("para")[1].innerHTML="Paragraph Changed.";
}

function mytagFunction() {
    var list = document.getElementsByTagName("UL")[0];
    list.getElementsByTagName("LI")[0].innerHTML = "Milk";
}