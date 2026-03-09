// – створити функцію яка повертає найменьше число з масиву

function minNum(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let number = arr[i]
        if (number < min) {
            min = number
        }
    }
    return min
}


console.log(minNum([12, 23, 34, 0, 45, 56]));