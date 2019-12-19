//Element
const passwordButton = document.querySelector("#password-button");
const copyClipboardButton = document.querySelector("#copy-clipboard-button");
const resultEL = document.getElementById('result');
var fullPassword = ""

//Click listen
passwordButton.addEventListener("click" , generatePassword);

//generate prompts
function generatePassword() {
  var charactersCount = prompt("How many characters would you like?");
    console.log(charactersCount)
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
      // console.log(returnSpecial);
    } else{}
    if(numericCharacter === true){
      var returnNumber = randomNumberCharacter
      generatedPassword.push(randomNumberCharacter());
    } else{}
    if(uppercaseCharacter === true){
      var returnUpper = randomUpperCharacter
      generatedPassword.push(randomUpperCharacter());
    } else{}
    if(lowercaseCharacter === true){
      var returnLower = randomLowerCharacter
      generatedPassword.push(randomLowerCharacter());
    } else{}

          for(var i = 0; i < charactersCount; i++){
            const rnd = Math.floor(Math.random() + charactersCount.length)
            console.log(generatedPassword.join(''))
          }
  }
 
  function randomSpecialCharacter() {
    const randomSymbols = '!@#$%^&*()_+<>'.split("");
    var randomSym = Math.floor(Math.random() * randomSymbols.length);
    console.log(randomSymbols[randomSym]);
    return randomSymbols[randomSym];
  }
  function randomNumberCharacter() {
    const randomNumber = '1234567890'.split("");
    var randomNum = Math.floor(Math.random() * randomNumber.length);
    console.log(randomNumber[randomNum]);
    return randomNumber[randomNum];
  }
  function randomUpperCharacter() {
    const randomUpper = 'ABCDEFGHIJKLMNOPQRSTUVWZYZ'.split("");
    var  randomUpp = Math.floor(Math.random() * randomUpper.length);
    console.log(randomUpper[randomUpp]);
    return randomUpper[randomUpp];
  }
  function randomLowerCharacter() {
    const randomLower = 'abcdefghijklmnopqrstuvwxyz'.split("");
    var  randomLow = Math.floor(Math.random() * randomLower.length);
    console.log(randomLower[randomLow]);
    return randomLower[randomLow];
  }



//copy to clipboard
const copyClipboard = str => {
  const el = document.createElement("result");
  el.value = str;
  document.body.appendChild(el);
  el.selector();
  document.execCommand('copy');
  document.body.removeChild(el);
}