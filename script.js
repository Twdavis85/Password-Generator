// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

   var passwordLength = prompt ("How many characters would you like your password to be?  Please choose a number between 8 and 128.");

   if (passwordLength <=7 || passwordLength >= 129) {
     alert("Your password must be between 8 and 128 characters.")
     return;
   }
   else {
     alert ("Your password will contain " + passwordLength + " characters.")
     alert ("Next, you will select your password criteria. At least two are required to generate a safe password.")
   }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {

   var lowerChoice = confirm ("Would you like your password to include lowercase letters?")
   var upperChoice = confirm ("Would you like your password to include uppercase letters?")
   var numberChoice = confirm ("Would you like your password to include numbers?")
   var specialChoice = confirm ("Would you like your password to include special characters?")

   var count = 0

   if(lowerChoice === true) {
    count++; 
   }
   if(upperChoice === true) {
    count++; 
   }
   if(numberChoice === true) {
    count++; 
   }
   if(specialChoice === true) {
    count++; 
   }

   if(count < 2) {
     alert ("At least two criteria required to generate a safe password.");
   }

  //  if (lowerChoice === true && upperChoice === false && numberChoice === false && specialChoice === false) {
  //   alert ("At least two criteria required to generate a safe password.");
  //   return;
  // }

  // if (upperChoice === true && numberChoice === false && specialChoice === false && lowerChoice === false) {
  //   alert ("At least two criteria required to generate a safe password.");
  //   return;
  // }

  // if (numberChoice === true && specialChoice === false && lowerChoice === false && upperChoice === false) {
  //   alert ("At least two criteria required to generate a safe password.");
  //   return;
  // }
  
  // if (specialChoice === true && lowerChoice === false && upperChoice === false && numberChoice === false) {
  //   alert ("At least two criteria required to generate a safe password.");
  //   return;
  // }  

  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "?", "<", ">"];

  var characters = [];

  if (lowerChoice === true) {
    characters = characters.concat(lower)
  }
  if (upperChoice === true) {
    characters = characters.concat(upper)
  }
  if (numberChoice === true) {
    characters = characters.concat(numbers)
  }
  if (specialChoice === true) {
    characters = characters.concat(special)
  }

console.log(characters)

// var random = "";

// for (var i = 0; i <= passwordLength; i++) {
//   var length = Math.floor(Math.random()*characters.length);

//   random = length.join();
  
// }
// return random;
      
  

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
