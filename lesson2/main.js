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

// let book_1 = {title: 'The wave', pageCount: 512, genre: 'sci-fi',
//     authors:[
//         {name: 'Rick Yansey', age: 61},
//         {name: 'Daniel Jackson', age: 44}
//     ]
// };
// let book_2 = {title: 'Sherlock Holmes. New stories', pageCount: 502, genre: 'detective',
//     authors: [
//         {name: 'Arthur Boyle', age: 28},
//         {name: 'Samantha McArthur', age: 26}
//     ]
// };
// let book_3 = {title: 'The lost', pageCount: 432, genre: 'journey',
//     authors: [
//         {name: 'James Per', age: 37},
//         {name: 'Michael Bea4', age: 42},
//         {name: 'Sofi Degual', age: 27},
//     ]
// };

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача

// let users = [
//     {name: 'Andy', username: 'candy', password: '11111111'},
//     {name: 'Boris', username: 'borisfen', password: '22222222'},
//     {name: 'Anton', username: 'antonio', password: '33333333'},
//     {name: 'Bob', username: 'bob333', password: '44444444'},
//     {name: 'Stas', username: 'atas', password: '55555555'},
//     {name: 'Milana', username: 'milana_fest', password: '66666666'},
//     {name: 'Anna', username: 'anna23', password: '77777777'},
//     {name: 'Helena', username: 'helen_hunter', password: '88888888'},
//     {name: 'Sam', username: 'samuel55', password: '99999999'},
//     {name: 'Tobi', username: 'wonderman', password: '12345678'},
// ]
// console.log(users);
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що
//     дорівнює 1, 0, -3

// let a;
// // a = 1;
// a = 0;
// // a = -3;
//
// if (a !== 0) {
//     console.log('Вірно')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('Enter minutes');
//
// if (time >= 0 && time <= 15) {
//     alert('It is a first quarter')
// } else if (time >= 16 && time <= 30) {
//     alert('It is a second quarter')
// } else if (time >= 31 && time <= 45) {
//     alert('It is a third quarter')
// } else if (time >= 46 && time <= 59) {
//     alert('It is a forth quarter')
// }
// else {
//     alert('You did a mistake!')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day = +prompt('Enter a day number from 1 to 31');
//
// if (day >= 1 && day <= 10) {
//     alert('It is a first decade')
// } else if (day >= 11 && day <= 20) {
//     alert('It is a second decade')
// } else if (day >= 21 && day <= 31) {
//     alert('It is a thirst decade')
// } else {
//     alert('You did a mistake!')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let dayName = +prompt('Enter a day number from 1 to 7');
// switch (dayName) {
//     case 1:
//         alert('Monday');
//         break;
//     case 2:
//         alert('Tuesday');
//         break;
//     case 3:
//         alert('Wednesday');
//         break;
//     case 4:
//         alert('Thursday');
//         break;
//     case 5:
//         alert('Friday');
//         break;
//     case 6:
//         alert('Saturday');
//         break;
//     case 7:
//         alert('Sunday');
//         break;
//     default:
//         alert('You did a mistake!');
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let num1 = +prompt('Enter the first number');
// let num2 = +prompt('Enter the second number');
//
// if (num1 - num2 > 0) {
//     alert(`Number ${num1} is bigger`)
// } else if (num1 - num2 < 0) {
//     alert(`Number ${num2} is bigger`)
// } else if (num1 - num2 === 0) {
//     alert('The numbers are equal')
// }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//     (хибноподібні, тобто приводиться до false)

// let value = 0 || 'default';
// console.log(value);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super');
}
