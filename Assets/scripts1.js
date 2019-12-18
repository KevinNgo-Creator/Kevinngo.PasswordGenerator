function randomCharacters() {
    var character
  
    // specialCharacter
    // numericCharacter
    // uppercaseCharacter
    // lowercaseCharacter
  
    // pick from types are available
  
    pickCharacter = Math.floor(Math.random() * Math.floor(48))
  
    // select which type
  
  
    // get randomof that type
  
  
  
    character = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"[pickCharacter]
  
    switch (character) {
      case /[A-Z]/:
        return uppercaseCharacter ? character : randomCharacters()
      case /[a-z]/:
        return lowercaseCharacter ? character : randomCharacters()
  
      default:
        return "potato"
    }
  
  
    return character
  }
  console.log(randomCharacters());
  