// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.


let users = [
    {id: 1, name: 'Max', age: 22},
    {id: 2, name: 'Dima', age: 21},
    {id: 3, name: 'Vasia', age: 12}
]

let usersArray = (arr) => {
    for (let user of arr) {
        document.write(`<div>Id:${user.id}, Name: ${user.name}, Age: ${user.age}</div>`)
    }
}

usersArray(users)