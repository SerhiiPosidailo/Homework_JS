// створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


let ulLi = (liText) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${liText}</li>`)
    }
    document.write(`</ul>`)
}

ulLi('lorem ipsum')