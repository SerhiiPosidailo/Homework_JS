// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let newArray = ['Hello', 1, 3.14, true, false, 'lorem', 2, 543]

let arrItemUlLi = (arr) => {
    document.write(`<ul>`)
    for (let item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

arrItemUlLi(newArray)