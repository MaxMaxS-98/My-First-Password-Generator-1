// Assignment code here
var passwordLength = 128;
var array = []
// this is an array of numbers and symbols and uppercase and lower case letters 
var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var symbolArray = ["+", "(", ")", "*", "&", "^", "%", "$", "#", "@", "!", "~", "?", "|"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z"];
// window.prompt("How long would you liKe you password to be ?")
function promtS() {
  passwordLength = parseInt(window.prompt("How long would you liKe you password to be ?"))
  array = [];
  //if it is not a number it will say NaN
  if (isNaN(passwordLength)) {
    window.alert("this is NaN");
    return false;
// this will tell you that it is a valid number 
  }else{
    window.alert("This is a valid number")
  }
  // this is a window alert that tells user that the password must be from 8 to 128 characters long 
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("The password must be between 8-128 characters long!")
    return false;
  }
  // this window cofirms if user wants lowercase letters 
  if (window.confirm("Would you like to use lowercase letters ?")) {
    array = array.concat(lowerCaseArray);
  }
  // this window cofirms if user wants uppercase letters
  if (window.confirm("Would you like to use uppercase letters ?")) {
    array = array.concat(UpperCaseArray);
  }
  // this window cofirms if user wants symbols 
  if (window.confirm("Would you like to use symbols ?")) {
    array = array.concat(symbolArray);
  }
  // this window cofirms if user wants numbers 
  if (window.confirm("Would you like to use numbers ?")) {
    array = array.concat(numArray);
  }
  return true;
}



// a function generate password 
function generatePassword() {
  var pswrd = "";

  //this for loop will generate random password
  for (var index = 0; index < passwordLength; index++) {
    var random = Math.floor(Math.random() * array.length);
    pswrd = pswrd + array[random];
  }
  return pswrd;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var getPromt = promtS();

  //if password meets the criteria then is generates password
  if (getPromt) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
