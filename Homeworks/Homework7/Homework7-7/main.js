// – (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car


class CarClass {
    constructor(model, product, year, maxSpeed, engineCapacity) {
        this.model = model
        this.product = product
        this.year = year
        this.maxSpeed = maxSpeed
        this.engineCapacity = engineCapacity
        this.driver = []
    }

    drive() {
        console.log(`we drive at a speed of ${this.maxSpeed} km per hour`)
    }

    info() {
        console.log('--------------------------------')
        console.log('ALL INFORMATION ABOUT THE CAR')
        console.log('--------------------------------')
        console.log(`model - ${this.model}`)
        console.log(`product - ${this.product}`)
        console.log(`year - ${this.year}`)
        console.log(`Max Speed - ${this.maxSpeed}`)
        console.log(`Engine Capacity - ${this.engineCapacity}`)
        console.log(`Driver - ${JSON.stringify(this.driver)}`)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed
    }

    changeYear(newValue) {
        this.year = newValue
    }

    addDriver = function (driver) {
        if (driver) this.driver = driver;
    };
}


let car = new CarClass('Opel', 'GM', 2000, 160, '1.4')
car.drive()
car.info()
car.changeYear(2023)
car.info()
car.increaseMaxSpeed(200)
car.info()
car.addDriver('Serhii')
car.info()