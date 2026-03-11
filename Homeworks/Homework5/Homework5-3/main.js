// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r


let areaCylinder = (h, r) => 2 * 3.14 * r * (r + h)

console.log(areaCylinder(3, 5))


let areaCylinder1 = (h, r) => {
    return 2 * 3.14 * r * (r + h)
}

console.log(areaCylinder1(3, 5))