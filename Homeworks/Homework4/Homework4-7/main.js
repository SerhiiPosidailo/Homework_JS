// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write



function ulLiTwo(text_li, number_li) {
    document.writeln(`<ul>`)
    for (let i = 0; i < number_li; i++) {
        document.write(`<li>${text_li}</li>`);
    }
    document.writeln(`</ul>`)
}

ulLiTwo('Hello World!', 5);