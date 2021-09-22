 const upper = document.getElementById("upper");
 const lower = document.getElementById("lower");
 const symbol = document.getElementById("symbol");
 const num = document.getElementById("number");
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
 }

 function getSymbol() {
     return symbols[Math.floor(Math.random() * symbols.length)];
 }

function generatePassword() {
    const length = len.value;

    let password = "";

    if (upper.checked) {
        password += getUppercase();
    }

    if (lower.checked) {
        password += getLowercase();
    }

    if (num.checked) {
        password += getNumber();
    }

    if (symbol.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < length; i++) {
        const x = generateChar();
        password += x;
    }
    pw.innerText = password;
}

function generateChar() {
    const char = [];
    if (upper.checked) {
        char.push(getUppercase());
    }

    if (lower.checked) {
        char.push(getLowercase());
    }

    if (num.checked) {
        char.push(getNumber());
    }

    if (symbol.checked) {
        char.push(getSymbol());
    }

    if (char.length === 0){
        return "";
    }

    console.log(char[0]);
    console.log(char[1]);
    console.log(char[2]);
    return char[Math.floor(Math.random() * char.length)];
}

generate.addEventListener("click", generatePassword);

copy.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pw.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});
