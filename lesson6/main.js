// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
//
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str);
// for (const strElement of str) {
//     console.log(strElement);
// }
// console.log('=======================');
// let clearStr = str.trim();
// console.log(clearStr);
// console.log('=======================');
// for (const clearStrElement of clearStr) {
//     console.log(clearStrElement)
// }

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let str1 = 'яка перетворює рядок на масив слів'
//
// function stringToArray(str) {
//     let split = str.split(' ');
//
//     return [split]
// }
//
// console.log(stringToArray(str));
// console.log(stringToArray(str1));

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let numbersToString = numbers.map(number => {
//     return number.toString();
// });
// console.log(numbersToString);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11, 21, 3, 0, 77, -654];
//
// const sortNums = (arr, direction) => {
//     arr.sort((a, b) => {
//         switch(direction) {
//             case 'ascending':
//                 return a - b;
//             case 'descending':
//                 return b - a;
//         }
//     });
//     return arr;
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// ==========================
// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

// let sortDown = coursesAndDurationArray.sort(
//     (a, b) =>
//         b.monthDuration - a.monthDuration
// );
// console.log(sortDown);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let courseFilter = coursesAndDurationArray.filter(
//     (course) =>
//         course.monthDuration > 5);
// console.log(courseFilter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let mapCourse = coursesAndDurationArray.map(
//     (course, index) => ({
//         id: index + 1,
//         title: course.title,
//         monthDuration: course.monthDuration,
//     })
// );
// console.log(mapCourse);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let cards = [
//------------  spade
    {cardSuit: 'spade', value:'6', color: 'black'},
    {cardSuit: 'spade', value:'7', color: 'black'},
    {cardSuit: 'spade', value:'8', color: 'black'},
    {cardSuit: 'spade', value:'9', color: 'black'},
    {cardSuit: 'spade', value:'10', color: 'black'},
    {cardSuit: 'spade', value:'jack', color: 'black'},
    {cardSuit: 'spade', value:'queen', color: 'black'},
    {cardSuit: 'spade', value:'king', color: 'black'},
    {cardSuit: 'spade', value:'ace', color: 'black'},
//------------  clubs
    {cardSuit: 'clubs', value:'6', color: 'black'},
    {cardSuit: 'clubs', value:'7', color: 'black'},
    {cardSuit: 'clubs', value:'8', color: 'black'},
    {cardSuit: 'clubs', value:'9', color: 'black'},
    {cardSuit: 'clubs', value:'10', color: 'black'},
    {cardSuit: 'clubs', value:'jack', color: 'black'},
    {cardSuit: 'clubs', value:'queen', color: 'black'},
    {cardSuit: 'clubs', value:'king', color: 'black'},
    {cardSuit: 'clubs', value:'ace', color: 'black'},
//------------  diamond
    {cardSuit: 'diamond', value:'6', color: 'red'},
    {cardSuit: 'diamond', value:'7', color: 'red'},
    {cardSuit: 'diamond', value:'8', color: 'red'},
    {cardSuit: 'diamond', value:'9', color: 'red'},
    {cardSuit: 'diamond', value:'10', color: 'red'},
    {cardSuit: 'diamond', value:'jack', color: 'red'},
    {cardSuit: 'diamond', value:'queen', color: 'red'},
    {cardSuit: 'diamond', value:'king', color: 'red'},
    {cardSuit: 'diamond', value:'ace', color: 'red'},
//------------  heart
    {cardSuit: 'heart', value:'6', color: 'red'},
    {cardSuit: 'heart', value:'7', color: 'red'},
    {cardSuit: 'heart', value:'8', color: 'red'},
    {cardSuit: 'heart', value:'9', color: 'red'},
    {cardSuit: 'heart', value:'10', color: 'red'},
    {cardSuit: 'heart', value:'jack', color: 'red'},
    {cardSuit: 'heart', value:'queen', color: 'red'},
    {cardSuit: 'heart', value:'king', color: 'red'},
    {cardSuit: 'heart', value:'ace', color: 'red'},
];

// - знайти піковий туз

// let findSpadeAce = cards.find(
//     (card) =>
//         card.value === 'ace' &&  card.cardSuit === 'spade'
// )
// console.log(findSpadeAce);

// - всі шістки

// let findSixths = cards.filter(
//     (card) => card.value === '6'
// );
// console.log(findSixths);

// - всі червоні карти

// let findRed = cards.filter(
//     (card) => card.color === 'red'
// );
// console.log(findRed);

// - всі буби

// let findDiamond = cards.filter(
//     (card) => card.cardSuit === 'diamond'
// );
// console.log(findDiamond);

// - всі трефи від 9 та більше

// let findClubs  = cards.filter(
//     card =>
//         ['9', '10', 'ace','jack','queen','king', 'ace'].includes(card.value) && card.cardSuit === 'clubs'
// );
// console.log(findClubs);

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let reducer = cards.reduce(
//     (accumulator, card) => {
//         if (card.cardSuit === 'spade') {
//             accumulator[0].push(card);
//         } else if (card.cardSuit === 'diamond') {
//             accumulator[1].push(card)
//         } else if (card.cardSuit === 'heart') {
//             accumulator[2].push(card)
//         }else {
//             accumulator[3].push(card)
//         }
//         return accumulator
//     }, [[], [], [], []]
// );
// console.log(reducer);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

// let finder = (arr, dir) => {
//     return arr.filter(
//         (item) => item.modules.find(element => element === dir)
//     );
// };
// console.log(finder(coursesArray, 'sass'))
// console.log(finder(coursesArray, 'docker'))
