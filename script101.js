// var color = ["red", "blue", "green", "yellow","chocolate","black","purple"];
var i = 0;
document.getElementById("count").textContent=i
// var box=document.getElementsByClassName("box")[0];
// var click=document.getElementById("clickMe");
var Cname = document.getElementById("count");
var btnI = document.getElementById("btnI")
var btnR = document.getElementById("btnR")
var btnD = document.getElementById("btnD")

btnI.addEventListener("click", function () {
    i++
    if (i > 0) {
        Cname.style.color = "green"
    }
    else if (i < 0) {
        Cname.style.color = "red"

    } else {
        Cname.style.color = "blue"
    }
    Cname.textContent = i



});
btnD.addEventListener("click", function () {


    i--
    if (i > 0) {
        Cname.style.color = "green"
    }
    else if (i < 0) {
        Cname.style.color = "red"

    } else {
        Cname.style.color = "blue"
    }
    Cname.textContent = i


});
btnR.addEventListener("click", function () {

    i = 0
    Cname.style.color = "blue"
    Cname.textContent = i


});

