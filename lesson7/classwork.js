// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxSpeed, volum) {
    this.model=model;
    this.producer=producer;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.volum=volum;

    this.drive=function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info=function () {
        console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volum}`)
    }
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed+=newSpeed;
    }
    this.changeYear=function (newValue) {
        this.year=newValue;
    }
    this.addDriver=function (driver) {
        this.driver=driver;
    }
}


//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass {
    constructor(model, producer, year, maxSpeed, volum) {
        this.model=model;
        this.producer=producer;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.volum=volum;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    info() {
        console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volum}`)
    }
    increaseMaxSpeed (newSpeed){
        this.maxSpeed+=newSpeed;
    }
    changeYear(newValue) {
        this.year=newValue;
    }
    addDriver(driver) {
        this.driver=driver;
    }

}


//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, size) {
        this.name=name;
        this.age=age;
        this.size=size;
    }
}
let cinderellas = [
    new cinderella ('Masha', 18 , 34),
    new cinderella ('Asha', 18 , 34),
    new cinderella ('Natasha', 18 , 34),
    new cinderella ('Maksima', 18 , 34),
    new cinderella ('Dasha', 18 , 34),
    new cinderella ('Vasha', 18 , 34),
    new cinderella ('Katia', 18 , 34),
    new cinderella ('Oly', 18 , 34),
    new cinderella ('Angelika', 18 , 34),
    new cinderella ('Anastasiya', 18 , 34),
]

class Prince {
    constructor(name,age,shoe) {
        this.name=name;
        this.age=age;
        this.shoe=shoe;
    }
}

let prince = newPrince('prince', 30, 37);

let cinderella = cinderellas.find (value => value.size===prince.shoe);



