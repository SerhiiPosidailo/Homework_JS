// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ulLiCount = (liText, number) => {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${liText}</li>`)
    }
    document.write(`</ul>`)
}

ulLiCount('lorem ipsum', 5);