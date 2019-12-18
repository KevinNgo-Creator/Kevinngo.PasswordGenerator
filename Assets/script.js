//Element
const passwordButton = document.querySelector("#password-button");
const copyClipboardButton = document.querySelector("#copy-clipboard-button");
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('characterCount');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numberEL = document.getElementById( 'number');
const specialEL = document.getElementById('special');

//Click listen
passwordButton.addEventListener("click" , generatePassword);

//generate prompts
function generatePassword() {
  var charactersCount = prompt("How many characters would you like?")
  var specialCharacter = confirm("Would you want special characters?")
  var numericCharacter = confirm("Would you want numeric characters?")
  var uppercaseCharacter = confirm("Would you want uppercase characters?")
  var lowercaseCharacter = confirm("Would you want lowercase characters?")
  var generatedPassword = ""
  while(generatedPassword.length < charactersCount){
    generatedPassword += randomSpecialCharacter()  

    var thePrompt = specialCharacter 
    console.log(specialCharacter)
  }
}


//generate random character
  function randomSpecialCharacter() {
    const symbols = '!@#$%^&*()_+<>';
    return symbols[Math.floor(Math.random() * symbols.length)];
    console.log(randomSpecialCharacter);
  }

  function randomNumberCharacter() {
    const symbols = '1234567890';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  function randomUpperCharacter() {
    const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWZYZ';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  function randomLowerCharacter() {
    const symbols = 'abcdefghijklmnopqrstuvwxyz';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }


//copy to clipboard
