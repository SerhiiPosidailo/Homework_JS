// – створити функцію, яка повертає найменше число з масиву

newArray = [-1, 12, 23, 34, 0, 45, 56]

let minNumber = (arr) => {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let number = arr[i]
        if (number < min) {
            min = number
        }
    }
    return min
}

console.log(minNumber(newArray));