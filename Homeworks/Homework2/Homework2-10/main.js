// – Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.


let firstNum = +prompt('First number ')
let secondNum = +prompt('Second number ')

if (firstNum > secondNum) {
    console.log(firstNum)
} else if (secondNum > firstNum ) {
    console.log(secondNum)
} else if (firstNum === secondNum ) {
    console.log('the numbers are equal')
}else{
    console.log('need write number')
}
