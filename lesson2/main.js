// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let randomArr = [111, 'number', false, 'Italy', 'firstname', -999, 3.14, 'window', 'Marty',
//     {id: 1, name: 'Bull', status: 'secret'}
// ];
// console.log(randomArr);
// console.log(randomArr[0]);
// console.log(randomArr[1]);
// console.log(randomArr[2]);
// console.log(randomArr[3]);
// console.log(randomArr[4]);
// console.log(randomArr[5]);
// console.log(randomArr[6]);
// console.log(randomArr[7]);
// console.log(randomArr[8]);
// console.log(randomArr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 = {title: 'The 5th wave', pageCount: 512, genre: 'sci-fi'};
// let book2 = {title: 'Sherlock Holmes', pageCount: 502, genre: 'detective'};
// let book3 = {title: 'The last of the Mohicans', pageCount: 432, genre: 'journey'};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.

let book_1 = {title: 'The wave', pageCount: 512, genre: 'sci-fi',
    authors:[
        {name: 'Rick Yansey', age: 61},
        {name: 'Daniel Jackson', age: 44}
    ]
};
let book_2 = {title: 'Sherlock Holmes. New stories', pageCount: 502, genre: 'detective',
    author: [
        {name: 'Arthur Boyle', age: 28},
        {name: 'Samantha McArthur', age: 26}
    ]
};
let book_3 = {title: 'The lost', pageCount: 432, genre: 'journey',
    author: [
        {name: 'James Per', age: 37},
        {name: 'Michael Bea4', age: 42},
        {name: 'Sofi Degual', age: 27},
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача

let users = [
    {name: 'Andy', username: 'candy', password: '11111111'},
    {name: 'Boris', username: 'borisfen', password: '22222222'},
    {name: 'Anton', username: 'antonio', password: '33333333'},
    {name: 'Bob', username: 'bob333', password: '44444444'},
    {name: 'Stas', username: 'atas', password: '55555555'},
    {name: 'Milana', username: 'milana_fest', password: '66666666'},
    {name: 'Anna', username: 'anna23', password: '77777777'},
    {name: 'Helena', username: 'helen_hunter', password: '88888888'},
    {name: 'Sam', username: 'samuel55', password: '99999999'},
    {name: 'Tobi', username: 'wonderman', password: '12345678'},
]
console.log(users);
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);