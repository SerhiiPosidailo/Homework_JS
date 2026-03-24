// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше

// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }

let deck = {
    cardSuit: ['spade', 'clubs', 'diamond', 'heart'],
    value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
    color: ['red', 'black']
}
let cardsAll = []
let initDeck = () => {
    for (const suit of deck.cardSuit) {
        for (const value of deck.value) {
            if (suit === 'spade' || suit === 'clubs') {
                let color = 'black'
                cardsAll.push({value: value, suit: suit, color: color})
            } else {
                let color = 'red'
                cardsAll.push({value: value, suit: suit, color: color})
            }

        }
    }
    return cardsAll
}

console.log(initDeck())

let aceOfSpades = cardsAll.filter(ace => ace.suit === 'spade' && ace.value === 'ace')
console.log(aceOfSpades)

let allSix = cardsAll.filter(six => six.value === '6')
console.log(allSix)

let allRed = cardsAll.filter(red => red.color === 'red')
console.log(allRed)

let allDiamond = cardsAll.filter(diamond => diamond.suit === 'diamond')
console.log(allDiamond)

let allClubsAboveNine = cardsAll.filter(club => club.value !== '6' && club.value !== '7' && club.value !== '8' && club.suit === 'clubs')
console.log(allClubsAboveNine)