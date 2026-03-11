// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let newArray = [1, 2, 10]

let sum = (arr) => {
    let num = 0
    for (let item of arr) {
        num += item
    }
    return num
}

console.log(sum(newArray))