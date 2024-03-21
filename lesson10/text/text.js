// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні
// на кнопку зникав елемент з id="text".

let div = document.createElement('div');
div.innerText = 'Ця кнопка стирає текст';
let text = document.getElementById('text');
text.innerText = "Something doesn't important";
let button = document.createElement('button');
button.innerText = 'clear';

const clearText = () => {
    text.innerText = '';
}

button.addEventListener('click', () => clearText());

document.body.append(div, button);