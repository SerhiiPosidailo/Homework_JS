// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13



let arrNum = [1,2,10]

function sum(arr) {
    let sum = 0
    for (let arrElement of arr) {
        sum += arrElement
    }
    return sum
}

console.log(sum(arrNum));
