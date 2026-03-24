// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’

let firstWord = 'hello world'
let secondWord = 'lorem ipsum'
let lastWord = 'javascript is cool'

console.log(firstWord.length)
console.log(secondWord.length)
console.log(lastWord.length)

// --------------------------------------------

let lengWord = ['hello world', 'lorem ipsum', 'javascript is cool']
lengWord.map(x => console.log(x.length))