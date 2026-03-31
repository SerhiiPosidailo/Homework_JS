// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(7, 'Serhii', 'Wakame', 'Serhii@gmail.com', '+380630000000'),
    new User(5, 'Serj', 'Patrol', 'Serj@gmail.com', '+380630000000'),
    new User(10, 'Vlad', 'Oil', 'Vlad@gmail.com', '+380630000000'),
    new User(4, 'Den', 'Juk', 'DenDen@gmail.com', '+380630000000'),
    new User(2, 'Max', 'Marshal', 'Max@gmail.com', '+380630000000'),
    new User(8, 'Will', 'Wilson', 'Will@gmail.com', '+380630000000'),
    new User(1, 'Kevin', 'McCalister', 'Serj@gmail.com', '+380630000000'),
    new User(6, 'Raf', 'Milk', 'Kevin@gmail.com', '+380630000000'),
    new User(9, 'David', 'Alfa', 'David@gmail.com', '+380630000000'),
    new User(3, 'Vika', 'Wakame', 'Vika@gmail.com', '+380630000000'),
]

let userSort = users.sort((user1, user2) => user1.id - user2.id)
console.log(userSort)