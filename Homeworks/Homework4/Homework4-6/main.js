// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий


function ulLi(text_li) {
    document.write(`<ul>`);
    for (let i = 1; i < 4; i++) {
        document.write(`<li>${text_li}</li>`);
    }
    document.write(`</ul>`);
}

ulLi('Hello World!');


function ulLIOne(text_li) {
    document.write(`<ul>
                        <li>${text_li}</li>
                        <li>${text_li}</li>
                        <li>${text_li}</li>
                   </ul>`);
}

ulLIOne('Hello World!');