//Element
var passwordButton = document.querySelector("#password-button");
var copyClipboardButton = document.querySelector("#copy-clipboard-button");
var resultEL = document.getElementById('result');
var fullPassword = "";

passwordButton.addEventListener("click", () => {
  generatePassword ()
});

//generate prompts
function generatePassword() {
    var charactersCounts = prompt("How many characters would you like?");
      console.log(charactersCounts)
    var specialCharacter = confirm("Would you want special characters?");
      console.log(specialCharacter)  
    var numericCharacter = confirm("Would you want numeric characters?");
      console.log(numericCharacter)
    var uppercaseCharacter = confirm("Would you want uppercase characters?");
      console.log(uppercaseCharacter)    
    var lowercaseCharacter = confirm("Would you want lowercase characters?");
      console.log(lowercaseCharacter)
    
    var specialPassword = [];
    var numberPassword = [];
    var upperPassword = [];
    var lowerPassword = [];
    if(specialCharacter === true){
      var specCharacter = prompt("How many special characters would you like?")
      console.log(specCharacter)
      for(i=0;i<specCharacter;i++){
      specialPassword.push(randomSpecialCharacter());
    }}
    if(numericCharacter === true){
      var numCharacter = prompt("How many numeric characters would you like?")
      console.log(numCharacter)
      for(i=0;i<numCharacter;i++){
      numberPassword.push(randomNumberCharacter());
    }}
    if(uppercaseCharacter === true){
      var uppCharacter = prompt("How many Uppercase characters would you like?")
      console.log(uppCharacter)
      for(i=0;i<uppCharacter;i++){
      upperPassword.push(randomUpperCharacter());
    }}
    if(lowercaseCharacter === true){
      var lowCharacter = prompt("How many Lowercase characters would you like?")
      console.log(lowCharacter)
      for(i=0;i<lowCharacter;i++){
      lowerPassword.push(randomLowerCharacter());
    }}
    const fullPassword = lowerPassword.concat(specialPassword, numberPassword, lowerPassword);
      console.log(fullPassword)

    function randomSpecialCharacter() {
      var randomSymbols = '!@#$%^&*()_+<>'.split("");
      return randomSymbols = randomSymbols[Math.floor(Math.random()*randomSymbols.length)];
    }
    function randomNumberCharacter() {
      var randomNumber = '1234567890'.split("");
      return randomNumSymbols = randomNumber[Math.floor(Math.random()*randomNumber.length)];
    }
    function randomUpperCharacter() {
      var randomUpper = 'ABCDEFGHIJKLMNOPQRSTUVWZYZ'.split("");
      return randomUpper = randomUpper[Math.floor(Math.random()*randomUpper.length)];
    }
    function randomLowerCharacter() {
      var randomLower = 'abcdefghijklmnopqrstuvwxyz'.split("");
      return  randomLower = randomLower[Math.floor(Math.random()*randomLower.length)];
    }
      resultEL.innerText = fullPassword.join("");
    }