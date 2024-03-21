// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1

let count = localStorage.getItem('count') || 0;
let div = document.createElement('div');
div.innerText = `${count}`;
let newCount = +count + 1;
div.innerText = 'Count:' + newCount;
localStorage.setItem('count', newCount);
document.body.appendChild(div);

// ==========================

