// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'Serhii', 'Wakame', 'Serhii@gmail.com', '+380630000000'),
    new User(2, 'Serj', 'Patrol', 'Serj@gmail.com', '+380630000000'),
    new User(3, 'Vlad', 'Oil', 'Vlad@gmail.com', '+380630000000'),
    new User(4, 'Den', 'Juk', 'DenDen@gmail.com', '+380630000000'),
    new User(5, 'Max', 'Marshal', 'Max@gmail.com', '+380630000000'),
    new User(6, 'Will', 'Wilson', 'Will@gmail.com', '+380630000000'),
    new User(7, 'Kevin', 'McCalister', 'Serj@gmail.com', '+380630000000'),
    new User(8, 'Raf', 'Milk', 'Kevin@gmail.com', '+380630000000'),
    new User(9, 'David', 'Alfa', 'David@gmail.com', '+380630000000'),
    new User(10, 'Vika', 'Wakame', 'Vika@gmail.com', '+380630000000'),
]


let userFilter = users.filter(user => user.id % 2 === 0)
console.log(userFilter)