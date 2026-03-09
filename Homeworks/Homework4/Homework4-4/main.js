// – створити функцію, яка приймає масив та виводить кожен його елемент

let newArray = [1,2,54,3.14, true, 'hello', false]

function arr(arr) {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}

arr(newArray);