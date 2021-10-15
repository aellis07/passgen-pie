// Assignment Code
// Finds selector and puts it in a variable
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// This is the function that returns the actual password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// GLOBAL VARIABLES

var lowerChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log(lowerChar);
var upperChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
console.log(upperChar);
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(number);
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
console.log(specialChar);

var lowercase;
console.log(lowercase);
var uppercase;
console.log(uppercase);
var number;
console.log(number);
var special;
console.log(special);
var length = "";

function generatePassword() {
  // Add event listener to generate button
  // Carries out the function when the button is clicked
  generateBtn.addEventListener("click", writePassword);
}
