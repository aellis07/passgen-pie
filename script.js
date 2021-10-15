// Assignment Code
// Finds selector and puts it in a variable
var generateBtn = document.querySelector("#generate");

//GLOBAL VARIABLES/ARRAYS

// Declaring arrays
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
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

// declaring variables
var lowerCase;
var upperCase;
var numberC;
var specialC;
var passLength = "";

//Funtion to generate password
function generatePassword() {
  // User input: Length of the password
  var passLength = prompt(
    "Choose a password length at least 8 characters long"
  );
  console.log(passLength);
  // while loop that will continue to loop until a valid submission is submitted
  while (passLength <= 8 || passLength >= 128) {
    alert("Password length must be between 8-50 characters Try again");
    var passLength = prompt(
      "How many characters would you like your password to contain?"
    );
  }

  alert(`Your password will have ${passLength} characters`);

  //User input: conditions of the password
  var lowercase = confirm("Click OK if you want lower case");
  var uppercase = confirm("Click OK if you want upper case");
  var number = confirm("Click OK if you want numbers");
  var special = confirm("Click OK if you want special characters ");

  //
  while (
    lowercase === false &&
    upperase === false &&
    number === false &&
    special === false
  ) {
    // if users decline all options they will get a message saying they need to choose at least one parameter
    alert("You must choose at least one parameter");

    // User input after they decline
    var lowercase = confirm(
      "Click OK if you want to include lowercase characters"
    );
    var uppercase = confirm(
      "Click OK if you want to include uppercase characters"
    );
    var number = confirm("Click OK if you want to include numeric characters");
    var special = confirm("Click OK if you want to include special characters");
  }

  var passChar = [];

  // conditionals based on user input
  if (lowercase) {
    passChar = passChar.concat(lowerChar);
  }
  if (uppercase) {
    passChar = passChar.concat(upperChar);
  }
  if (number) {
    passChar = passChar.concat(numberChar);
  }
  if (special) {
    passChar = passChar.concat(specialChar);
  }
  console.log(passChar);

  var randomPassword = "";

  //Generates random password by concating each random character it chooses
  //Check console
  for (var i = 0; i < passLength; i++) {
    randomPassword =
      randomPassword + passChar[Math.floor(Math.random() * passChar.length)];
    console.log(randomPassword);
  }
  return randomPassword;
}

// Add event listener to generate button
// Carries out the function when the button is clicked
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
