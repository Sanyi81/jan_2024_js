// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function sSqr(a, b) {
//     return a * b;
// }
// sSqr1 = sSqr(2, 4);
// sSqr2 = sSqr(10, 20)
//
// console.log(sSqr1);
// console.log(sSqr2);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function sRing(r) {
//     return 2 * Math.PI * Math.pow(r, 2);
// }
//
// sRing1 = sRing(1);
// sRing2 = sRing(3);
// console.log(sRing1);
// console.log(sRing2);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function sCyl(h, r) {
//     return 2 * Math.PI * r * (h + r);
// }
//
// sCyl1 = sCyl(1, 1);
// sCyl2 = sCyl(2, 5);
//
// console.log(sCyl1);
// console.log(sCyl2);

// - створити функцію яка приймає масив та виводить кожен його елемент

// function printArray(array) {
//     for (let argument of array) {
//         console.log(argument)
//     }
// }
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// printArray(users);
// printArray(products);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function printText(text) {
//     document.write(`
//         <p>${text}</p>
//     `)
// }
//
// printText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid id, ipsam ipsum laudantium maxime molestias nisi obcaecati odio perspiciatis repellat repudiandae saepe veniam! Dolores illum quam suscipit tempora veritatis!')
//
// printText('Ой у лузі червона калина...')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(text) {
//     document.write('<ul>')
//     document.write(`
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     `);
//     document.write('</ul>')
// }
// list('Lorem ipsum dolor sit amet.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(text, numOfText) {
//     document.write('<ul>')
//     for (let i = 0; i < numOfText; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write('</ul>')
// }
//
// list('Lorem ipsum dolor.', 3);
// list('Lorem ipsum dolor sit amet.', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function itemList(array) {
//     document.write('<ul>')
//     for (let arrayElement of array) {
//         document.write(`
//             <li>${arrayElement}</li>
//         `)
//     }
//     document.write('</ul>')
// }
//
// let mass = [111, 22, 'java', true, 12.4, 'Italy'];
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// itemList(mass);
// itemList(listOfItems);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного
// об'єкту окремий блок.

// function shortList(arr) {
//     for (const element of arr) {
//         document.write(`
//             <div>${element.name}, ${element.age}</div>
//         `)
//     }
// }
// let users = [
//     {name: 'vasya', age: 31},
//     {name: 'petya', age: 30},
//     {name: 'kolya', age: 29},
//     {name: 'olya', age: 28},
//     {name: 'max', age: 30},
//     {name: 'anya', age: 31},
//     {name: 'oleg', age: 28},
//     {name: 'andrey', age: 29},
//     {name: 'masha', age: 30},
//     {name: 'olya', age: 31},
//     {name: 'max', age: 31}
// ];
//
// shortList(users);

// - створити функцію яка повертає найменьше число з масиву

// let nums = [1, 22, 27, 87, 0];
//
// function numberFinder(arr) {
//     let minNum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (minNum > arr[i]) {
//             minNum = arr[i];
//         }
//     }
//     return minNum
// }
//
// let numbers = [22, 88, 19, -98, 0, 1];
// console.log(numberFinder(numbers))
// console.log(numberFinder(nums))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад
// sum([1,2,10]) //->13

// function sum(arr) {
//     let sumArr = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         sumArr += num;
//     }
//     return sumArr;
// }
//
// let numArray = [1, 2, 10];
// let numbers = [1, 1, 23, 45, 777];
//
// console.log(sum(numArray));
// console.log(sum(numbers));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//     let val1 = arr[index1];
//     let val2 = arr[index2];
//
//     arr[index1] = val2;
//     arr[index2] = val1;
//
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 0, 2));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const item of currencyValues) {

        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));

