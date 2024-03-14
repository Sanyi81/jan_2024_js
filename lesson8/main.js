// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     new User(111, 'sasha', 'skyhar', 'sash@gm.com', 111111),
//     new User(2765, 'anna', 'buba', 'anna@gm.com', 222222),
//     new User(3736, 'stas', 'baclan', 'stash@gm.com', 333333),
//     new User(45, 'bob', 'synclar', 'bobs@gm.com', 444444),
//     new User(586, 'mana', 'eclear', 'mana@gm.com', 555555),
//     new User(6763, 'frenk', 'sinatra', 'fs@gm.com', 666666),
//     new User(7986, 'lili', 'doll', 'ld@gm.com', 777777),
//     new User(823, 'masha', 'dushka', 'md@gm.com', 888888),
//     new User(93, 'vasyl', 'vyrastuk', 'vv@gm.com', 999999),
//     new User(1024, 'olha', 'maliar', 'om@gm.com', 123456),
// ];
// console.log(users);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filteredUsers = users.filter(
//     user => user.id % 2 === 0
// );
// console.log(filteredUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = (arr, dir) => {
//     arr.sort((a, b) => {
//         switch (dir) {
//             case 'asceding':
//                 return a.id - b.id;
//             case 'desceding':
//                 return b.id - a.id;
//         }
//         }
//     );
//     return arr;
// };
// console.log(sort(users, 'asceding'));
// console.log(sort(users, 'desceding'));

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clients = [
//     new Client(111, 'sasha', 'skyhar', 'sash@gm.com', 111111, ['cucumber', 'banana']),
//     new Client(2765, 'anna', 'buba', 'anna@gm.com', 222222, ['tomato', 'apple', 'milk']),
//     new Client(3736, 'stas', 'baclan', 'stash@gm.com', 333333, ['tomato', 'potato', 'cheese']),
//     new Client(45, 'bob', 'synclar', 'bobs@gm.com', 444444, ['bread', 'sausages', 'tee']),
//     new Client(586, 'mana', 'eclear', 'mana@gm.com', 555555, ['bread', 'butter', 'sausages', 'cola']),
//     new Client(6763, 'frenk', 'sinatra', 'fs@gm.com', 666666, ['coconut', 'banana', 'orange']),
//     new Client(7986, 'lili', 'doll', 'ld@gm.com', 777777, ['coffee', 'juice']),
//     new Client(823, 'masha', 'dushka', 'md@gm.com', 888888, ['cheese', 'bread']),
//     new Client(93, 'vasyl', 'vyrastuk', 'vv@gm.com', 999999, ['onion', 'carrot', 'potato']),
//     new Client(1024, 'olha', 'maliar', 'om@gm.com', 123456, ['chocolate', 'milk', 'tee']),
// ];
//
// let sortingClients = clients.sort((a, b) => a.order.length - b.order.length);
//
// console.log(sortingClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, producer, year, maxSpeed, vehicle) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.vehicle = vehicle;
//     this.drive = () => {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     };
//     this.info = () => {
//         console.log(model)
//         console.log(producer)
//         console.log(year)
//         console.log(vehicle)
//         console.log(maxSpeed)
//     };
//     this.increaseMaxSpeed = (newSpeed) => {
//         this.maxSpeed += newSpeed
//     };
//     this.changeYear = (newValue) => {
//         this.year = newValue
//     };
//     this.addDriver = (driver) => {
//         this.driver = driver
//     }
// }
//
// let car = new Car('Corolla', 'Toyota', 2018, 220, '1,6');
// car.drive();
// car.info();
// console.log(car);
//
// car.increaseMaxSpeed(25);
// car.changeYear(2022);
// car.addDriver({name: 'Sasha', age: 42, driverLicense: true})
// console.log(car);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//     constructor(model, producer, year, maxSpeed, vehicle) {
//
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.vehicle = vehicle;
//     this.drive = () => {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     };
//     this.info = () => {
//         console.log(model)
//         console.log(producer)
//         console.log(year)
//         console.log(vehicle)
//         console.log(maxSpeed)
//     };
//     this.increaseMaxSpeed = (newSpeed) => {
//         this.maxSpeed += newSpeed
//     };
//     this.changeYear = (newValue) => {
//         this.year = newValue
//     };
//     this.addDriver = (driver) => {
//         this.driver = driver
//     }
//     }
// }
//
// let car = new Car('Corolla', 'Toyota', 2018, 220, '1,6');
// car.drive();
// car.info();
// console.log(car);
//
// car.increaseMaxSpeed(25);
// car.changeYear(2022);
// car.addDriver({name: 'Sasha', age: 42, driverLicense: true})
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, feetSize) {
    this.name = name;
    this.age = age;
    this.feetSize = feetSize;
}

let cinderellas = [
    new Cinderella('Anna', 19, 36),
    new Cinderella('Ilona', 22, 37),
    new Cinderella('Ivett', 21, 38),
    new Cinderella('Sarah', 22, 36),
    new Cinderella('Kate', 25, 37),
    new Cinderella('Maria', 18, 39),
    new Cinderella('Oksana', 23, 36),
    new Cinderella('Olena', 24, 37),
    new Cinderella('Eva', 26, 38),
    new Cinderella('Adriana', 17, 35),
];

let prince = {
    name: 'Arthur',
    age: 35,
    bootSize: 35,

};

for (const lovely of cinderellas) {
    if (lovely.feetSize === prince.bootSize) {
        console.log(`${prince.name} found his love - it's ${lovely.name}`)
    }
}

let lovelyCinderella = cinderellas.find(({feetSize}) => feetSize === prince.bootSize);
console.log(lovelyCinderella);