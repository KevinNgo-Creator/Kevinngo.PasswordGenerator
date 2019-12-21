//Element
var passwordButton = document.querySelector("#password-button");
var copyClipboardButton = document.querySelector("#copy-clipboard-button");
var resultEL = document.getElementById('result');
var fullPassword = ""

passwordButton.addEventListener("click", generatePassword);

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

  var generatedPassword = [];
    if(specialCharacter === true){
      var returnSpecial = randomSpecialCharacter();
      generatedPassword.push(randomSpecialCharacter());
    } 
    if(numericCharacter === true){
      var returnNumber = randomNumberCharacter();
      generatedPassword.push(randomNumberCharacter());
    } 
    if(uppercaseCharacter === true){
      var returnUpper = randomUpperCharacter();
      generatedPassword.push(randomUpperCharacter());
    }
    if(lowercaseCharacter === true){
      var returnLower = randomLowerCharacter();
      generatedPassword.push(randomLowerCharacter());
    } 

  function randomSpecialCharacter() {
    var randomSymbols = '!@#$%^&*()_+<>'.split("");
    var randomSym = randomSymbols[Math.floor(Math.random()*randomSymbols.length)];
    console.log(randomSym);
    return randomSym;
  }
  function randomNumberCharacter() {
    var randomNumber = '1234567890'.split("");
    var randomNum = randomNumber[Math.floor(Math.random()*randomNumber.length)];
    console.log(randomNum);
    return randomNum;
  }
  function randomUpperCharacter() {
    var randomUpper = 'ABCDEFGHIJKLMNOPQRSTUVWZYZ'.split("");
    var randomUpp = randomUpper[Math.floor(Math.random()*randomUpper.length)];
    console.log(randomUpp);
    return randomUpp;
  }
  function randomLowerCharacter() {
    var randomLower = 'abcdefghijklmnopqrstuvwxyz'.split("");
    var  randomLow = randomLower[Math.floor(Math.random()*randomLower.length)];
    console.log(randomLow);
    return randomLow;
  }
  
  for(var i = 0; i < charactersCounts; i++){
    randomSpecialCharacter() 
    console.log(returnSpecial.concat(returnNumber, returnUpper, returnLower));
  }
}
