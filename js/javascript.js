function sayOuch() {
    alert("Ouch, that hurt! Don't Poke Me")
}
function sayThanks() {
    alert("Thanks a lot, hoss !!")
}

var myImage1 = document.querySelector('#profile1');
var myImage2 = document.querySelector('#profile2');
var myImage3 = document.querySelector('#profile3');
var myImage4 = document.querySelector('#profile4');
var clickme = document.querySelector('#button');


myImage1.onclick = function() {
    sayOuch();
}
myImage2.onclick = function() {
    sayOuch();
}
myImage3.onclick = function() {
    sayOuch();
}
myImage4.onclick = function() {
    sayOuch();
}
clickme.onclick = function() {
    sayThanks();
}
