 const upper = document.getElementById("upper");
 const lower = document.getElementById("lower");
 const symbol = document.getElementById("symbol");
 const num = document.getElementById("num");
 const len = document.getElementById("len");
 const pw = document.getElementById("pw");
 const copy = document.getElementById("copy");
 const generate = document.getElementById("generate");

 const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
 const numbers = "0123456789";
 const symbols = "!@#$%^&*()_+=";

 function getLowercase() {
     return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
 }

 function getUppercase() {
     return upperLetters[Math.floor(Math.random() * upperLetters.length)];
 }

 function getNumber() {
     return numbers[Math.floor(Math.random() * numbers.length)];
 }z

 function getSymbol() {
     return symbols[Math.floor(Math.random() * symbols.length)];
 }

 function generatePassword() {
    let length = len.value;
    let password = "";

    for(let i = ; i<){
        j+=1;
    }
    let random = Math.floor(Math.random() * j);

 }
