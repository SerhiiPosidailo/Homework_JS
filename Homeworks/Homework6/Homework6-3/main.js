// – Перевести до нижнього регістру наступні стрінгові значення
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

let firstWord = 'HELLO WORLD'
let secondWord = 'LOREM IPSUM'
let thirdWord = 'JAVASCRIPT IS COOL'

console.log(firstWord.toLowerCase())
console.log(secondWord.toLowerCase())
console.log(thirdWord.toLowerCase())


// --------------------------------------------------

let arrWords = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
arrWords.map(x => console.log(x.toLowerCase()))