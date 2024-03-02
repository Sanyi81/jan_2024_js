// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// const sSqr = (a, b) => a * b;
//
// console.log(sSqr(2, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// const sRing = r => 2 * Math.PI * Math.pow(r, 2);
//
// console.log(sRing(2))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const sCyl = (h, r) => {
//     return 2 * Math.PI * r * (h + r);
// };
// console.log(sCyl(1, 1));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let printMass = function(mass) {
//     for (const element of mass) {
//         console.log(element);
//     }
// }
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
//     },
//     {
//         title: 'juice',
//         price: 27,
//     },
//     {
//         title: 'tomato',
//         price: 47,
//     },
//     {
//         title: 'tea',
//         price: 15,
//     },
// ];
// printMass(users)
// console.log('============================================')
// printMass(products)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// const printText = (text) => {
//     document.write(`
//   <p>${text}</p>
//   `)
// };
// printText('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// const list = (text) => {
//     document.write('<ul>')
//     document.write(`
//          <li>${text}</li>
//          <li>${text}</li>
//          <li>${text}</li>
//         `)
//     document.write('</ul>')
// };
// list('text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const textList = (text, list) => {
//     document.write('<ul>')
//     for (let i = 0; i < list; i++) {
//             document.write(`
//             <li>${text}</li>
//             `)
//     }
//     document.write('</ul>')
// };
// textList('Lorem ipsum dolor sit amet.', 3)
// textList('Lorem ipsum dolor.', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// const listOfItems = (arr) => {
//     for (const element of arr) {
//         console.log(element);
//     }
// };
// let mass = [111, 22, 'java', true, 12.4, 'Italy'];
//
// listOfItems(mass)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного
// об'єкту окремий блок.

// const massList = (mass) => {
//     // for (let i = 0; i < mass.length; i++) {
//     //     const elem = mass[i];
//
//     for (const elem of mass) {
//
//         document.write(`
//             <div>id:${elem.id} - name:${elem.name} - age:${elem.age}</div>
//         `)
//     }
// };
//
// let users = [
//     {id: 1,name: 'vasya', age: 31},
//     {id: 2,name: 'petya', age: 30},
//     {id: 3,name: 'kolya', age: 29},
//     {id: 4,name: 'olya', age: 28},
//     {id: 5,name: 'max', age: 30},
//     {id: 6,name: 'anya', age: 31},
//     {id: 7,name: 'oleg', age: 28},
//     {id: 8,name: 'andrey', age: 29},
//     {id: 9,name: 'masha', age: 30},
//     {id: 10,name: 'olya', age: 31},
//     {id: 11,name: 'max', age: 31}
// ];
//
// massList(users);

// - створити функцію яка повертає найменьше число з масиву

// const numFinder = (arr) => {
//     let minNum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < minNum) {
//             minNum = arr[i];
//         }
//     }
//     return minNum;
// };
// let nums = [1, 22, 27, 87, 0, -555];
// console.log(numFinder(nums));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад
// sum([1,2,10]) //->13

// const sum = (arr) => {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const number = arr[i];
//         res += number;
//     }
//     return res;
// };
// console.log(sum([1, 2, 10, 88]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// const swap = (arr, index1, index2) => {
//     let item1 = arr[index1];
//     let item2 = arr[index2];
//
//     arr[index1] = item2;
//     arr[index2] = item1;
//
//     return arr;
// };
// console.log(swap([11, 22, 33, 44], 3, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const element of currencyValues) {
        if (element.currency === exchangeCurrency) {
            return sumUAH / element.value;
        }
    }
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))
console.log(exchange(1000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))