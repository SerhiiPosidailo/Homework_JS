// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }


let deckTwo = {
    cardSuit: ['spade', 'clubs', 'diamond', 'heart'],
    value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
    color: ['red', 'black']
}
let cardsAll = []
let initDeck = () => {
    for (const suit of deckTwo.cardSuit) {
        for (const value of deckTwo.value) {
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

let newReduse = cardsAll.reduce(function (accumulator, card) {
    if (card.suit === 'spade') {
        accumulator.spade.push(card)
    } else if (card.suit === 'clubs') {
        accumulator.clubs.push(card)
    } else if (card.suit === 'diamond') {
        accumulator.diamond.push(card)
    } else if (card.suit === 'heart'){
        accumulator.heart.push(card)
    }
    return accumulator
}, {spade: [], clubs: [], diamond: [], heart: []})

console.log(newReduse)