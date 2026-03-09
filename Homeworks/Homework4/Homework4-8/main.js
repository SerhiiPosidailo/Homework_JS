// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write


let newArray = ['Hello', 1, 3.14, true, false, 'lorem', 2, 543]


function arrUlLi (arr) {
    document.writeln(`<ul>`)
    for (let argument of arr) {
        document.writeln(`<li>${argument}</li>`)
    }
    document.writeln(`</ul>`)
}


arrUlLi(newArray)