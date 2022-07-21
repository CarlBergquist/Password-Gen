// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



//generate password
function generatePassword() {
  var charPick = Number(prompt("How many characters would you like? (must be between: 8-128)"));
  var charType = confirm("Press OK for Lowercase");
  var charType1 = confirm("Press OK for for UpperCase");
  var charType2 = confirm("Press OK for Numbers");
  var charType3 = confirm("Press OK for Symbols");
  var charSet = "";
  if (charType === true) {
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";
    console.log(charSet)
  } else if (charType1 && charType2 && charType3 === true) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";
  } else if (charType2 && charType3 === true) {
    charSet = "0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if (charType3 === true) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
 
  var answer = "";
  for (var i = 0; i < charPick; i++) {
    answer = charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return answer;
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
