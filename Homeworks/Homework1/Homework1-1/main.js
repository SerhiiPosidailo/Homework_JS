// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//
//     Вивести кожну змінну за допомогою: console.log

let  one = 'hello';
console.log(one)

let two = 'owu';
console.log(two)

let three = 'com';
console.log(three)

let four = 'ua';
console.log(four)

let five = 1;
console.log(five)

let six = 10;
console.log(six)

let seven = -999;
console.log(seven)

let eight = 123;
console.log(eight)

let nine = 3.14;
console.log(nine)

let ten = 2.7;
console.log(ten)

let eleven = 16;
console.log(eleven)

let bool = true;
console.log(bool)

let bool2 = false;
console.log(bool2)

// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)

let firstName = 'Serhii';
let middleName = 'Serhiyovych';
let lastName = 'Posidailo';

let person = `${lastName} ${firstName} ${middleName}`;
console.log(person)

// – За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = ‘100’; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);


// ------------------------------------Додаткове для тих, хто цікавився prompt`oм
// – За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль

// let name = prompt('name')
// let lastNameUser = prompt('Last Name')
// let age = prompt('age')
// console.log(`Привіт ${name} ${lastNameUser} ${age}`);
