// Assignment code here
function generatePassword() {
  var passwordLength = window.prompt("Choose a password length between 8 & 128 characters.");
     if (passwordLength < 8) {
      alert ("Has to be min characters of 8");
     }
    else if (passwordLength > 128) {
      alert('Password must not exceed 128 characters');
    }
    //  console.log(passwordLength);
    
 }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


  
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
