// – створити функцію, яка приймає масив та виводить кожен його елемент

let newArray = [1,2,54,3.14, true, 'hello', false]

let array = (arr) => {
    for (let item of arr) {
        console.log(item)
    }
}

array(newArray)