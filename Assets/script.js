// // Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

// function copyToClipboard() {
//   // BONUS 
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // BONUS EVENT LISTENER

//GENERATE RANDOM PASSWORD  
function generate(){
  let  complexity = document.getElementById("10").nodeValue;
  //password value
  let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
  
  let password = "";

  //loop for password
  for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1 )));
  }
  //add password
  document.getElementById("Your Secure Password").value = password;

}