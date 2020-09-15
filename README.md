Hello

//

const upperToLower = (code) =>
  (code > 64 && code < 91) ? code + 32: code

const lowerCase = (str = '') =>
  [...str]
    .map(char => char.charCodeAt(0))
    .map(upperToLower)
    .map(code => String.fromCharCode(code))
    .join('')

// Tests
console.log(lowerCase('Chopper'))
console.log(lowerCase('TONY TONY'))
