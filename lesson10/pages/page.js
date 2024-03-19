//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let array = [];

for (let i = 0; i < 100; i++) {
    let div = document.createElement('div');
    div.innerText = i+1 + '. ' + 'some text' + ', ' + 'some data';

    document.body.appendChild(div);
}

let prev = document.createElement('prev');
let next = document.createElement('next');

let page = 1;

function handler(page, limit) {
    let wrapper = document.createElement('wrapper');

    let startIndex = (page - 1) * limit;
    let endIndex = page * limit;

    if (endIndex > array.length) {
        endIndex = array.length;
    }
}