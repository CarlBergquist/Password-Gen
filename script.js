// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword() {
  var charPick = Number(prompt("How many characters would you like? (must be between: 8-128)"));
  if (charPick < 8 || charPick > 128) {
    alert("must be between: 8-128");
    return;
  }

  var charLower = confirm("Press OK for Lowercase");
  var charUpper = confirm("Press OK for for UpperCase");
  var charNumbers = confirm("Press OK for Numbers");
  var charSymbols = confirm("Press OK for Symbols");
  
  var randomGen = "";

  //returns all if all selected OK
  if (charLower && charUpper && charNumbers && charSymbols) {
    randomGen = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";
    
    // if 3 selected Ok
  } else if (charLower && charUpper && charNumbers) {
    randomGen = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  } else if (charLower && charUpper && charSymbols) {
    randomGen = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";
  } else if (charSymbols && charUpper && charNumbers) {
    randomGen = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";
  } else if (charLower && charSymbols && charNumbers) {
    randomGen = "abcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";
    
    // if 2 selected
  } else if (charLower && charUpper) {
    randomGen = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  } else if (charLower && charNumbers) {
    randomGen = "abcdefghijklmnopqrstuvwxyz0123456789";
  } else if (charLower && charSymbols) {
    randomGen = "abcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if (charNumbers && charUpper) {
    randomGen = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if (charUpper && charSymbols) {
    randomGen = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if (charSymbols && charNumbers) {
    randomGen = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";

    // if 1 selected
  } else if (charLower && !charUpper && !charNumbers && !charSymbols) {
    randomGen = "abcdefghijklmnopqrstuvwxyz";
  } else if (!charLower && charUpper && !charNumbers && !charSymbols) {
    randomGen = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (!charLower && !charUpper && charNumbers && !charSymbols) {
    randomGen = "0123456789";
  } else if (!charLower && !charUpper && !charNumbers && charSymbols) {
    randomGen = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  //displays alert to select a character if none are selected
  } else if (!charLower && !charUpper && !charNumbers && !charSymbols) {
    alert("must select atleast one character type!");
    return;
  }


  var answer = "";
  for (var i = 0; i < charPick; i++) {
    answer += randomGen.charAt(Math.floor(Math.random() * randomGen.length));
  }
  return answer;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
