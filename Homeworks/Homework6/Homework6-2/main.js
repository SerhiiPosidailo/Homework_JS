// – Перевести до великого регістру наступні стрінгові значення
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’


let firstWord = 'hello world'
let secondWord = 'lorem ipsum'
let thirdWord = 'javascript is cool'

console.log(firstWord.toUpperCase())
console.log(secondWord.toUpperCase())
console.log(thirdWord.toUpperCase())

// ------------------------------------------------

let arrWords = ['hello world', 'lorem ipsum', 'javascript is cool']
arrWords.map(x => console.log(x.toUpperCase()))