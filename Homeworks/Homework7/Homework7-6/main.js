// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car (model,product, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.product = product;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.driver = []

    this.drive = function () {
        console.log(`we drive at a speed of ${maxSpeed} km per hour`)
    };

    this.info = function () {
        console.log('--------------------------------')
        console.log('ALL INFORMATION ABOUT THE CAR')
        console.log('--------------------------------')
        console.log(`model - ${this.model}`)
        console.log(`producer - ${this.product}`)
        console.log(`year - ${this.year}`)
        console.log(`Max Speed - ${this.maxSpeed}`)
        console.log(`Engine Capacity - ${this.engineCapacity}`)
        console.log(`Drivers - ${JSON.stringify(this.driver)}`)
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed
    };

    this.changeYear = function (newValue) {
        this.year = newValue
    };

    this.addDriver = function (name, age, status) {
        this.driver.push(new Driver(name, age, status))
    }
}

function Driver(name, age, status) {
    this.name = name
    this.age = age
    this.status = status
}

let car_1 = new Car('Opel', 'GM', 2000, 160, '1,4')
car_1.drive()
car_1.increaseMaxSpeed(20)
car_1.changeYear(2003)
car_1.addDriver('Serhii', 32, true)
car_1.info()