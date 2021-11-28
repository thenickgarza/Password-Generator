// Assignment code here
function generatePassword() {
//  var password = "";
//  var chars = "123456789abcdegh";
//   const passwordLength = window.prompt("Choose a password length between 8 & 128 characters.");
//      if (passwordLength < 8) {
//       alert ("Has to be min characters of 8");
//      }
//     else if (passwordLength > 128) {
//       alert('Password must not exceed 128 characters');
//     }
//     if (!passwordLength || !passwordLength) {
//         alert("You need to input a amount!")
//     }
//     for (var i=0; i<chars.length; i++) {
//       var rnum = Math.floor(Math.random() * chars.length);
//       randomstring += chars.substring(rnum,rnum+1);
//   }
//     console.log(passwordLength);    
//       // return passwordLength;
var length = window.prompt("Choose a password length between 8 & 128 characters.");
  if (length < 8) {
    alert ("Has to be a min characters of 8");
  }
  else if (length > 128) {
    alert ("Passwprd must no exceed 128 characters");
  }
charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
passWord = "";
for (var i = 0, n = charset.length; i < length; ++i) {
passWord += charset.charAt(Math.floor(Math.random() * n));
}
return passWord;
};




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
