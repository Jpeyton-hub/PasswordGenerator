var lowerCase = confirm("Include lowercase letters?");
var upperCase = confirm("Include uppercase letters?");
var nums = confirm("Include numbers?");
var symbols = confirm("Include symbols?");
var litLet = "abcdefghijklmnopqrstuvwxyz";
var bigLet = litLet.toUpperCase();
var possnums = "0123456789";
var posssymbs = `!'()$%&*+,-./:;<=>?@[]^_{|}~"`;
var passLength = parseInt(prompt("How many Characters?"));
var possChar = "";
var button = document.querySelector('#genbtn');

if (lowerCase) {
    possChar += litLet;
}
if (upperCase) {
    possChar += bigLet;
}
if (nums) {
    possChar += possnums;
}
if (symbols) {
    possChar += posssymbs;
}
if (lowerCase === false && upperCase === false && nums === false && symbols === false) {
    alert('Please refresh and enter at least one Character type');
}
if (passLength > 128 || passLength < 8) {
    alert('Please refresh and enter number of characters between 8 and 128')
}

function generate() {
    var result = "";
    for (var i = 0; i < passLength; i++) {
        result += possChar.charAt(Math.floor(Math.random() * possChar.length)) 
    };
    document.getElementById('cardmsg').textContent = result;
       
} 

button.addEventListener('click', (e) => {
    e.preventDefault();
    generate();
});
     
