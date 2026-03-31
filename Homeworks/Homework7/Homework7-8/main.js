// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends Person {
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize
    }
}

class Prince extends Person {
    constructor(name,age, boot) {
        super(name, age);
        this.boot = boot;
    }

    findCinderellas(arr) {
        return arr.sort((a, b) => a.age - b.age).find((princesa) => princesa.footSize === this.boot)
    }

    findCinderellas_1(arr) {
        for (let cinderella of arr) {
            if (cinderella.footSize === this.boot)
                return cinderella
        }
    }
}

let allCinderella = [
    new Cinderella('Nika', 23, 35),
    new Cinderella('Vika', 22, 33),
    new Cinderella('Mira', 30, 38),
    new Cinderella('Liza', 18, 32),
    new Cinderella('lisa', 20, 35),
    new Cinderella('Lola', 38, 40),
    new Cinderella('Valya', 29, 36),
    new Cinderella('Marg', 33, 34),
    new Cinderella('Mono', 17, 31),
    new Cinderella('Olya', 19, 32),
];
let prince_1 = new Prince('Artur', 19, 35)
console.log(prince_1.findCinderellas_1(allCinderella));

let prince_2 = new Prince('Loki', 30, 33)
console.log(prince_2.findCinderellas(allCinderella))