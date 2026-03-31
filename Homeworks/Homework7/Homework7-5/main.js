// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)


function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}


let clients = [
    new Client(1, 'Vasy','Postere', 'Vasy@gmail.com', '+380630000000', ['potato', 'cucumber', 'salt','bread','milk','butter']),
    new Client(2, 'Serhii', 'Wakame', 'Serhii@gmail.com', '+380630000000',['potato', 'cucumber', 'salt','bread','milk']),
    new Client(3, 'Vlad', 'Oil', 'Vlad@gmail.com', '+380630000000',['cucumber', 'salt','bread','milk','butter']),
    new Client(4, 'Den', 'Juk', 'DenDen@gmail.com', '+380630000000',['potato', 'cucumber', 'salt','bread','butter']),
    new Client(5, 'Max', 'Marshal', 'Max@gmail.com', '+380630000000',['potato','milk','butter']),
    new Client(6, 'Will', 'Wilson', 'Will@gmail.com', '+380630000000',['potato']),
    new Client(7, 'Kevin', 'McCalister', 'Serj@gmail.com', '+380630000000',['salt','bread','milk']),
    new Client(8, 'Raf', 'Milk', 'Kevin@gmail.com', '+380630000000',['bread','butter']),
    new Client(9, 'David', 'Alfa', 'David@gmail.com', '+380630000000',['potato', 'bread','milk','butter']),
    new Client(10, 'Vika', 'Wakame', 'Vika@gmail.com', '+380630000000',['potato', 'cucumber', 'salt','butter']),
]


let clientSort = clients.sort((clientOne, clientTwo) => clientOne.order.length - clientTwo.order.length)
console.log(clientSort)