// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Function that provides password criteria
function askforoptions() {
  var passwordLength = prompt("How many characters would you like your password to be?  Please choose a number between 8 and 128.");

  if (passwordLength <= 7 || passwordLength >= 129) {
    alert("Your password must be between 8 and 128 characters.")
    return askforoptions();
  } else {
    alert("Your password will contain " + passwordLength + " characters.")
  }
  var lowerChoice = confirm("Would you like your password to include lowercase letters?")
  var upperChoice = confirm("Would you like your password to include uppercase letters?")
  var numberChoice = confirm("Would you like your password to include numbers?")
  var specialChoice = confirm("Would you like your password to include special characters?")

  var count = 0

  if (lowerChoice === false) {
    count++;
  }
  if (upperChoice === false) {
    count++;
  }
  if (numberChoice === false) {
    count++;
  }
  if (specialChoice === false) {
    count++;
  }

  if (count > 2) {
    alert('At least two criteria required to generate a safe password. \nPlease click "Generate Password" to start over.');
    return (askforoptions);
  }

  var options = {
    passwordLength,
    lowerChoice,
    upperChoice,
    numberChoice,
    specialChoice
  }
  console.log(options)
  return options
}
// Function that creates the array for random character selection
function generatePassword() {
  var passoptions = askforoptions()
  console.log(passoptions)


  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "?", "<", ">"];

  var characters = [];

  if (passoptions.lowerChoice === true) {
    characters = characters.concat(lower)
  }
  if (passoptions.upperChoice === true) {
    characters = characters.concat(upper)
  }
  if (passoptions.numberChoice === true) {
    characters = characters.concat(numbers)
  }
  if (passoptions.specialChoice === true) {
    characters = characters.concat(special)
  }

  // console.log(characters)
  var results = []
  for (i = 0; i < passoptions.passwordLength; i++) {
    var digit = Math.floor(Math.random() * characters.length)
    var passChar = characters[digit]
    results.push(passChar)
  }

  return results.join("")
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);