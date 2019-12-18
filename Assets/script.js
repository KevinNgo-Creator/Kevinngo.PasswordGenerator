const passwordButton = document.querySelector("#password-button");
const copyClipboardButton = document.querySelector("#copy-clipboard-button");
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('characterCount');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numberEL = document.getElementById( 'number');
const specialEL = document.getElementById('special');

const randomfunc = {
  lower: randomLowerCharacter,
  upper: randomUpperCharacter,
  number: randomNumberCharacter,
  symbol: randomSpecialCharacter,
};

//Click listen
passwordButton.addEventListener("click" , (generatePassword) => {
  const length = +lengthEL.value;
  const trueLower = lowercaseEL;
  const trueUpper = uppercaseEL;
  const trueNumber = numberEL;
  const trueSpecial = specialEL;

  resultEL.innerText = generatePassword(
    trueLower, 
    trueUpper,  
    trueNumber, 
    trueSpecial,
    length
    );
});

//generate password
function generatePassword(lower, upper ,number, symbol, length){
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  console.log('typeCount: ', typesCount)
}

//generate prompts
function generatePassword() {
  var charactersCount = prompt("How many characters would you like?")
  var specialCharacter = confirm("Would you want special characters?")
  var numericCharacter = confirm("Would you want numeric characters?")
  var uppercaseCharacter = confirm("Would you want uppercase characters?")
  var lowercaseCharacter = confirm("Would you want lowercase characters?")
  var generatedPassword = ""
  while(generatedPassword.length < charactersCount){
    generatedPassword += randomCharacter()    
  }
}

//generate random character
  function randomSpecialCharacter() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  function randomNumberCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  function randomUpperCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  function randomLowerCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

