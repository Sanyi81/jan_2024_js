// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та
// вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let form1 = document.forms.form;
// form1.onsubmit = function (e) {
//     e.preventDefault();
//
//     let block = document.createElement('div');
//     let name = document.createElement('div');
//     let surname = document.createElement('div');
//     let age = document.createElement('div');
//
//     block.append(name, surname, age);
//
//     name.innerText = `${this.name.value}`;
//     surname.innerText = `${this.surname.value}`;
//     age.innerText = `${this.age.value}`;
//     this.name.value = '';
//     this.surname.value = '';
//     this.age.value = '';
//
//     document.body.appendChild(block);
// };

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1

// let count = localStorage.getItem('count') || 0;
// let div = document.createElement('div');
// div.innerText = `${count}`;
// let newCount = +count + 1;
// div.innerText = newCount;
// localStorage.setItem('count', newCount);
// document.body.appendChild(div);

// ==========================
// Є сторінка index_form.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index_form.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні
// на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
